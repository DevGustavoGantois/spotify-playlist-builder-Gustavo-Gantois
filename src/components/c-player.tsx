import { PlayerProps } from '@/interface/sidebar';
import styles from '@/styles/player.module.css';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import Image from 'next/image';
import { Track } from '@/interface/playlist-user';

export function Player({
  playSongId,
  setPlaySongId,
  trackUserPlayingMusic,
  setTrackUserPlayingMusic,
}: PlayerProps) {
  const { data: session } = useSession();
  const [songInfo, setSongInfo] = useState<Track | null>(null);


  useEffect(() => {
    async function fetchTrackInfo(trackId: string) {
      if (trackId && session?.accessToken) {
        try {
          const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          });

          if (!response.ok) {
            console.error("Erro ao buscar a música:", response.status);
            return;
          }

          const data = await response.json();
          setSongInfo(data);
        } catch (error) {
          console.error("Erro ao buscar a música:", error);
        }
      }
    }

    if (playSongId) {
      fetchTrackInfo(playSongId);
    }
  }, [playSongId, session]);


  async function getPlayingUserMusic() {
    if (!session?.accessToken) return;

    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    });

    if (response.status === 204) {
      console.log("204: Nenhuma música tocando agora");
      return null;
    }

    const data = await response.json();
    return data;
  }

  // Controle de play/pause
  async function handlePlayPause() {
    if (!session?.accessToken) return;

    const data = await getPlayingUserMusic();
    if (!data) return;

    if (data.is_playing) {
      await fetch("https://api.spotify.com/v1/me/player/pause", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      });
      setTrackUserPlayingMusic(null);
    } else {
      await fetch("https://api.spotify.com/v1/me/player/play", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      });
      setTrackUserPlayingMusic(data.item.id);
    }
  }

  useEffect(() => {
    async function fetchUserTrack() {
      if (!trackUserPlayingMusic && session?.accessToken) {
        const data = await getPlayingUserMusic();
        if (data?.item?.id) {
          setTrackUserPlayingMusic(data.item.id);
          setSongInfo(data.item);
        }
      }
    }

    fetchUserTrack();
  }, [trackUserPlayingMusic, session]);

  return (
    <section className={styles.playerSection}>
      <div className={styles.playerDiv}>
        {songInfo?.album.images[0]?.url && (
          <Image
            className={styles.img}
            src={songInfo.album.images[0].url}
            width={64}
            height={64}
            alt={`Capa do álbum ${songInfo.name}`}
          />
        )}
        <div>
          <p className={styles.name}>{songInfo?.name}</p>
          <p className={styles.artist}>{songInfo?.artists[0]?.name}</p>
        </div>
      </div>

      <div className={styles.divIcon} onClick={handlePlayPause}>
        <FaPlayCircle className={styles.icon} />
      </div>
    </section>
  );
}

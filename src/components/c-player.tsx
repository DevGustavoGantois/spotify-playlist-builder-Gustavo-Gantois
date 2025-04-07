import { PlayerProps } from '@/interface/sidebar';
import styles from '@/styles/player.module.css';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import Image from 'next/image';
import { Track } from '@/interface/playlist-user';

export function Player({ playSongId }: PlayerProps) {
  const { data: session } = useSession();
  const [songInfo, setSongInfo] = useState<Track | null>(null);

  useEffect(() => {
    async function fetchTrackInfo(trackId: string) {
      if (!session?.accessToken || !trackId) return;
  
      const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      });
  
      const data = await response.json();
      setSongInfo(data);
    }
  
    if (playSongId) {
      fetchTrackInfo(playSongId);
    }
  }, [playSongId, session]);

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

      <div className={styles.divIcon}>
        <FaPlayCircle className={styles.icon} />
      </div>
    </section>
  );
}

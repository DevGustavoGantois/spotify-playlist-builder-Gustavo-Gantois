import { FeatPlaylistsProps, SongProps } from "@/interface/playlist-user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styles from "@/styles/feat-playlist.module.css"; 
import { FaPlay } from "react-icons/fa";
import { PlaylistProps } from "@/interface/sidebar";

export function FeatPlaylists({ setView, setGlobalIsTrackPlaying }: FeatPlaylistsProps) {
  const { data: session } = useSession();
  const [playlistMusic, setPlaylistMusic] = useState<PlaylistProps[]>([]);

  function selectMusicPlaylist(playlist: PlaylistProps) {
    setView("playlist");
    setView(playlist.id)
    setGlobalIsTrackPlaying(true);
  }

  useEffect(() => {
    async function functionality() {
      try {
        if (session && session.accessToken) {
          const response = await fetch(
            "https://api.spotify.com/v1/browse/featured-playlists?" +
              new URLSearchParams({ country: "US" }),
            {
              headers: {
                Authorization: `Bearer ${session.accessToken}`,
              },
            }
          );
          const data = await response.json();
          console.log("Resposta da API Spotify:", data);
  
          if (data.playlists && data.playlists.items) {
            setPlaylistMusic(data.playlists.items);
          } else {
            console.error("Estrutura de dados inesperada:", data);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar playlists:", error);
      }
    }
  
    functionality();
  }, [session]);    

  return (
    <section className={styles.featPlaylistSection}>
      <h2 className={styles.h2}>Playlists</h2>
      <div className={styles.divOutsidePlaylist}>
        {playlistMusic.map((playlist) => (
          <div
            key={playlist.id}
            onClick={() => selectMusicPlaylist(playlist)}
            className={styles.divInsidePlaylist}
          >
            <div className={styles.playIconContainer}>
              <FaPlay className={styles.icon} />
            </div>
            <img
              className={styles.image}
              src={playlist.images[0].url}
              alt={playlist.name}
            />
            <p className={styles.playlistTitle}>{playlist.name}</p>
            <p className={styles.playlistOwner}>
              By {playlist.owner.display_name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { PlaylistTrackItem, PlaylistViewProps } from "@/interface/sidebar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styles from "@/styles/playlistView.module.css";
import Image from "next/image";
import { FaDoorClosed } from "react-icons/fa";

export function PlaylistView({ playlistUserId }: PlaylistViewProps) {
  const [playlistUserData, setPlaylistUserData] = useState<any>(null);
  const { data: session } = useSession();

  useEffect(() => {
    async function fetchPlaylist() {
      if (session?.accessToken && playlistUserId) {
        try {
          const response = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistUserId}`,
            {
              headers: {
                Authorization: `Bearer ${session.accessToken}`,
              },
            }
          );

          if (!response.ok) {
            console.error("Erro na requisição da playlist:", response.status);
            return;
          }

          const data = await response.json();
          setPlaylistUserData(data);
          console.log("Imagem da playlist:", data?.images?.[0]?.url);
        } catch (error) {
          console.error("Erro ao buscar playlist:", error);
        }
      }
    }

    fetchPlaylist();
  }, [session, playlistUserId]);

  const playlistImage = playlistUserData?.images?.[0]?.url;
  const userImage = session?.user?.image;

  return (
    <section className={styles.containerPlaylistView}>
      {/* Cabeçalho com o nome da playlist */}
      <header className={styles.header}>
        {playlistUserData?.name || "Carregando..."}
      </header>

      {/* Usuário e botão de logout */}
      <div className={styles.body}>
        {userImage ? (
          <Image
            className={styles.image}
            src={userImage}
            alt="Foto do usuário"
            width={50}
            height={50}
            priority
          />
        ) : (
          <div className={styles.imageFallback}>?</div>
        )}
        <p className={styles.logoutText}>Sair</p>
        <FaDoorClosed size={20} />
      </div>

      <div className={styles.div}>
        <section className={styles.section}>
          {playlistImage && (
            <Image
              src={playlistImage}
              alt={playlistUserData?.name}
              width={300}
              height={300}
              className={styles.imagePlaylist}
            />
          )}
          <div>
            <p className={styles.paragraph}>Playlist</p>
            <p className={styles.playlistName}>{playlistUserData?.name}</p>
          </div>
        </section>

        <div className={styles.playlistColumn}>
          {playlistUserData?.tracks?.items?.map(
            (item: PlaylistTrackItem, index: number) => {
              const track = item.track;
              return (
                <div key={track.id} className={styles.trackItem}>
                  <p>
                    {index + 1}. {track.name} - {track.artists[0]?.name}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

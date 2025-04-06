"use client";
import { PlaylistViewProps } from "@/interface/sidebar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styles from '@/styles/playlistView.module.css';
import Image from "next/image";
import { FaDoorClosed } from "react-icons/fa";

export function PlaylistView({ playlistUserId }: PlaylistViewProps) {
    const [playlistUserData, setPlaylistUserData] = useState<any>(null);
    const { data: session } = useSession();

    useEffect(() => {
        async function fetchPlaylist() {
            if (session?.accessToken && playlistUserId) {
                try {
                    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistUserId}`, {
                        headers: {
                            Authorization: `Bearer ${session.accessToken}`,
                        },
                    });

                    if (!response.ok) {
                        console.error("Erro na requisição da playlist:", response.status);
                        return;
                    }

                    const data = await response.json();
                    setPlaylistUserData(data);
                } catch (error) {
                    console.error("Erro ao buscar playlist:", error);
                }
            }
        }

        fetchPlaylist();
    }, [session, playlistUserId]);

    const playlistImage = playlistUserData?.images?.[0]?.url;

    return (
        <section className={styles.containerPlaylistView}>
            <header className={styles.header}>
                {playlistUserData?.name || "Carregando..."}
            </header>

            <div className={styles.body}>
                {session?.user?.image && (
                    <Image
                        className={styles.image}
                        src={session.user.image}
                        alt="Foto do usuário"
                        width={50}
                        height={50}
                        priority
                    />
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
                    <p>Playlist</p>
                    <p className={styles.playlistName}>{playlistUserData?.name}</p>
                </section>
            </div>
        </section>
    );
}

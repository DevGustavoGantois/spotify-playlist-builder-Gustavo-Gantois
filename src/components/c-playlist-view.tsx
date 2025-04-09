"use client";
import { PlaylistViewProps } from "@/interface/sidebar";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import styles from '@/styles/playlistView.module.css';
import Image from "next/image";
import { FaDoorClosed } from "react-icons/fa";
import { Song } from "./c-song";

export function PlaylistView({ playlistUserId, setPlaySongId }: PlaylistViewProps) {
    const [playlistUserData, setPlaylistUserData] = useState<any>(null);
    const { data: session } = useSession();
    const [globalIsTrackPlaying, setGlobalIsTrackPlaying] = useState(false);
    const [view, setView] = useState("playlist");
    const [globalArtistId, setGlobalArtistId] = useState<string | null>(null);

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

            <div className={styles.body} onClick={() => signOut()}>
            <FaDoorClosed size={20} />
            <p className={styles.logoutText}></p>
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
                    {playlistUserData?.tracks.items.map((item: any, index: number) => {
                        const track = item.track;
                        return (
                            <div key={index}>
                                <Song
                                searchView={view}
                                name={track.name}
                                owner={track.owner}
                                uri={track.uri}
                                id={track.id}
                                key={track.key}
                                sno={index}
                                track={track}
                                setGlobalCurrentSongId={setPlaySongId}
                                setGlobalIsTrackPlaying={setGlobalIsTrackPlaying}
                                setView={setView}
                                setGlobalArtistId={setGlobalArtistId}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

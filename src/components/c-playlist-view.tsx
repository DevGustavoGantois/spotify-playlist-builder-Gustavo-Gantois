"use client";
import { PlaylistViewProps } from "@/interface/sidebar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styles from '@/styles/playlistView.module.css';

export function PlaylistView({ playlistUserId }: PlaylistViewProps) {
    const [playlistUserData, setPlaylistUserData] = useState<any>(null);
    const { data: session } = useSession();

    useEffect(() => {
        async function funcionality() {
            if (session && session.accessToken && playlistUserId) {
                const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistUserId}`, {
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                    },
                });
                const data = await response.json();
                setPlaylistUserData(data);
            }
        }

        funcionality();
    }, [session, playlistUserId]);

    return (
        <section className={styles.containerPlaylistView}>
            <header className={styles.header}>
                <div>
                    {playlistUserData && playlistUserData.name}
                </div>
            </header>
            <div className={styles.body}>
                
            </div>
        </section>
    );
}

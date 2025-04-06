"use client";
import { PlaylistProps } from "@/interface";
import styles from "@/styles/sidebar.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaBook, FaHeart, FaHome, FaMusic, FaSearch } from "react-icons/fa";

interface SidebarProps {
    view: string;
    setView: Dispatch<SetStateAction<string>>;
    setPlaylistUserId: Dispatch<SetStateAction<string | null>>
}

export function Sidebar({view, setView, setPlaylistUserId}: SidebarProps) {

    const { data: session } = useSession();
    const [x, setX] = useState("");
    const [userPlaylists, setUserPlaylists] = useState<PlaylistProps[]>([]);

    useEffect(() => {
        async function funcionality() {
            if (session && session.accessToken) {
              setX(session.accessToken)
              const response = await fetch("https://api.spotify.com/v1/me/playlists", {
                headers: {
                  Authorization: `Bearer ${session.accessToken}`
                }
              })
              const data = await response.json()
              setUserPlaylists(data.items)
            }
          }
      
          funcionality()
        }, [session])      

    return (
        <aside className={styles.sidebar}>
            <Image src="/SpotifyLogo.png" width={50} height={50} priority alt="" />
            <div className={styles.container}>
            <div className={styles.containerButton}>
                <button className={styles.button}>
                    <FaHome className={styles.icon} />
                    Home
                </button>
                <button onClick={() => setView("search")} className={styles.button}>
                    <FaSearch className={styles.icon} />
                    Pesquisar
                </button>
                <button onClick={() => setView("library")} className={styles.button}>
                    <FaBook className={styles.icon} />
                    Sua biblioteca
                </button>
            </div>
            <div className={styles.containerButton}>
            <button className={styles.button}>
                    <FaMusic className={styles.icon} />
                    Crie sua Playlist
            </button>
            <button className={styles.button}>
                    <FaHeart className={styles.icon} />
                    Músicas curtidas
            </button>
            </div>
            </div>
            <div className={styles.containerPlaylists}>
                {userPlaylists.map((playlist) => {
                    return (
                        <p onClick={() => {
                            setView("playlist")
                            setPlaylistUserId(playlist.id)
                        }} 
                        className={styles.chooseMusic} key={playlist.id}>{playlist.name.length > 25 ? playlist.name.slice(0, 25) + "..." : playlist.name}</p>
                    )
                })}
            </div>
        </aside>
    )
}
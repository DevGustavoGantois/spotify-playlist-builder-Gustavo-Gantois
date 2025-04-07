import styles from "@/styles/library.module.css";
import { FaChevronCircleDown, FaPlayCircle } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { LibraryProps } from "@/interface/library";
import { useEffect } from "react";

export function Library({ playlists, selectPlaylist }: LibraryProps) {
    const { data: session } = useSession();
    return (
      <div className={styles.libraryContainer}>
        <header className={styles.header}></header>
  
        {session?.user?.image && (
          <div onClick={() => signOut()} className={styles.logoutBtn}>
            <img
              className={styles.profileImg}
              src={session.user.image ?? "/default-profile.png"}
              alt="profile pic"
            />
            <p className="text-sm">Sair</p>
            <FaChevronCircleDown className="h-5 w-5" />
          </div>
        )}
  
        <div className={styles.content}>
          <h2 className={styles.title}>Playlists</h2>
          <div className={styles.playlistGrid}>
            {playlists.map((playlist: any) => (
              <div
                onClick={() => selectPlaylist(playlist)}
                key={playlist.id}
                className={styles.playlistCard}
              >
                <div className={styles.playIconWrapper}>
                  <FaPlayCircle className="h-6 w-6 text-black" />
                </div>
                <img
                  className={styles.playlistImage}
                  src={playlist.images[0].url}
                  alt={playlist.name}
                />
                <p className={styles.playlistName}>{playlist.name}</p>
                <p className={styles.playlistOwner}>
                  By {playlist.owner.display_name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

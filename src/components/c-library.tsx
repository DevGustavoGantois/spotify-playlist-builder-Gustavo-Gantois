import { useState } from "react";
import styles from "@/styles/library.module.css";
import {
  FaChevronCircleDown,
  FaPlayCircle,
  FaTrash,
  FaPlus,
} from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { LibraryProps } from "@/interface/library";
import Image from "next/image";

export function Library({ playlists, selectPlaylist }: LibraryProps) {
  const { data: session } = useSession();

  const [selectedPlaylists, setSelectedPlaylists] = useState<any[]>([]);

  // Adicionar uma playlist
  function addingCardMusicPlaylist(playlist: any) {
    const alreadyAdded = selectedPlaylists.some((p) => p.id === playlist.id);
    if (!alreadyAdded) {
      setSelectedPlaylists((prevState) => [...prevState, playlist]);
    }
  }

  // Remover playlist
  function removeCardMusicPlaylist(id: string) {
    setSelectedPlaylists((prevState) => prevState.filter((p) => p.id !== id));
  }

  return (
    <div className={styles.libraryContainer}>
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
          {playlists.map((playlist: any) => {
            const isSelected = selectedPlaylists.some(
              (p) => p.id === playlist.id
            );
            return (
              <div
                key={playlist.id}
                className={styles.playlistCard}
                onClick={() => selectPlaylist(playlist)}
              >
                <div className={styles.playIconWrapper}>
                  <FaPlayCircle className="h-6 w-6 text-black" />
                </div>

                <Image
                  width={200}
                  height={200}
                  className={styles.playlistImage}
                  src={playlist.images[0].url}
                  alt={playlist.name}
                />

                <p className={styles.playlistName}>{playlist.name}</p>
                <p className={styles.playlistOwner}>
                  By {playlist.owner.display_name}
                </p>

                <button
                  className={`${styles.actionButton} ${
                    isSelected ? styles.removeButton : styles.addButton
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    isSelected
                      ? removeCardMusicPlaylist(playlist.id)
                      : addingCardMusicPlaylist(playlist);
                  }}
                >
                  {isSelected ? (
                    <>
                      <FaTrash className="inline mr-1" /> Remover
                    </>
                  ) : (
                    <>
                      <FaPlus className="inline mr-1" /> Adicionar
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
        {selectedPlaylists.length > 0 && (
          <div className="mt-6">
            <h3 className="text-white text-xl font-bold mb-3">Playlists selecionadas</h3>
            <div className={styles.playlistGrid}>
              {selectedPlaylists.map((playlist: any) => (
                <div key={playlist.id} className={styles.playlistCard}>
                  <img
                    className={styles.playlistImage}
                    src={playlist.images[0].url}
                    alt={playlist.name}
                  />
                  <p className={styles.playlistName}>{playlist.name}</p>
                  <p className={styles.playlistOwner}>
                    By {playlist.owner.display_name}
                  </p>
                  <button
                    className={`${styles.actionButton} ${styles.removeButton}`}
                    onClick={() => removeCardMusicPlaylist(playlist.id)}
                  >
                    <FaTrash className="inline mr-1" /> Remover
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

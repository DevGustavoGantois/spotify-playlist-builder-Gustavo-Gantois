// src/components/SearchResults.tsx
import {
  Artist,
  Playlist,
  SearchResultsProps,
} from "@/interface/playlist-user";
import styles from "@/styles/search-results.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export function SearchResults({
  searchMusicData,
  playlists,
  setView,
  setGlobalCurrentSongId,
  setGlobalIsTrackPlaying,
  setGlobalArtistId,
}: SearchResultsProps) {
  const { data: session } = useSession();

  async function handlePlayTrack(track: any) {
    if (!track || !track.uri || !session?.accessToken) return;

    setGlobalCurrentSongId(track.id);
    setGlobalIsTrackPlaying(true);

    try {
      await fetch("https://api.spotify.com/v1/me/player/play", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify({
          uris: [track.uri],
        }),
      });
    } catch (err) {
      console.error("Erro ao reproduzir faixa:", err);
    }
  }

  function handleSelectPlaylist(playlist: Playlist) {
    setView("playlist");
    setGlobalCurrentSongId(playlist.id);
  }

  function handleSelectArtist(artist: Artist) {
    setView("artist");
    setGlobalArtistId(artist.id);
  }

  const firstTrack = playlists[0]?.tracks?.items?.[0]?.track;

  return (
    <section className={styles.searchResultContainer}>
      <div className={styles.searchDiv}>
        <main className={styles.searchMain}>
          <h2 className={styles.searchH2}>Melhores resultados</h2>

          <div className={styles.containerDiv}>
            {playlists && (
              <article
                className={styles.searchArticle}
                onClick={() => handleSelectPlaylist(playlists[0])}
              >
                {firstTrack && (
                  <div
                    className={styles.playIconContainer}
                    onClick={() => handlePlayTrack(firstTrack)}
                  >
                    <FaPlay className={styles.icon} />
                  </div>
                )}
                <Image
                  width={200}
                  height={200}
                  src={playlists[0].images[0].url}
                  alt={playlists[0].name}
                  className={styles.img}
                />
                <p style={{ color: "#fff", fontWeight: 600 }}>
                  {playlists[0].name}
                </p>
              </article>
            )}
          </div>
        </main>

        <figure></figure>
      </div>
    </section>
  );
}

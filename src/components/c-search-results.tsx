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
  musicSongs,
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

  function millisToMinutesAndSeconds(millis: number): string {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  const firstTrack = playlists[0]?.tracks?.items?.[0]?.track;
  const imageSong = playlists[0]?.images[0]?.url;

  return (
    <section className={styles.searchResultContainer}>
      <div className={styles.searchDiv}>
        <main className={styles.searchMain}>
          <h2 className={styles.searchH2}>Melhores resultados</h2>

          <div className={styles.containerDiv}>
            {playlists && (
              <article className={styles.searchArticle}>
                {firstTrack && (
                  <div
                    className={styles.playIconContainer}
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayTrack(firstTrack);
                    }}
                  >
                    <FaPlay className={styles.icon} />
                  </div>
                )}
                {imageSong && (
                  <Image
                    width={200}
                    height={200}
                    src={playlists[0].images[0].url}
                    alt={playlists[0].name}
                    className={styles.img}
                  />
                )}
                <p style={{ color: "#fff", fontWeight: 600 }}>
                  {playlists[0]?.name}
                </p>
                <p
                  style={{
                    color: "#D9D9D9",
                    fontWeight: 300,
                    fontSize: "0.75rem",
                  }}
                >
                  By: {playlists[0]?.name || "Desconhecido"}
                </p>
              </article>
            )}
          </div>
        </main>
        <figure className={styles.figure}>
          <h2 className={styles.searchH2}>Melhores Músicas</h2>
          <div className={styles.divSongs}>
            {musicSongs.map((song, index) => {
              return (
                <div key={song.id} className={styles.divMapSongs}>
                  <Image
                    width={100}
                    height={100}
                    alt={song?.name}
                    src={song?.album?.images[0]?.url}
                    className={styles.divImageMapSongs}
                  />
                  <div>
                    <p style={{ color: "#fff", fontWeight: 600 }}>
                      {song?.name}
                    </p>
                    <p style={{ fontSize: 14, color: "GrayText" }}>
                      {song?.artists[0]?.name}
                    </p>
                  </div>
                  <figure className={styles.figureMapSongs}>
                    <p style={{ fontSize: 14, color: "GrayText" }}>
                      {millisToMinutesAndSeconds(song?.duration_ms)}
                    </p>
                  </figure>
                </div>
              );
            })}
          </div>
        </figure>
      </div>
    </section>
  );
}

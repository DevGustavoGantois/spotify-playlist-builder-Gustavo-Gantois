// src/components/Song.tsx
import React from "react";
import styles from '@/styles/song.module.css';
import { Artist, SongProps, Track } from "@/interface/playlist-user";

export function Song({
  sno,
  track,
  setGlobalCurrentSongId,
  setGlobalIsTrackPlaying,
  setView,
  setGlobalArtistId,
}: SongProps) {
  function playSong(track: Track) {
    setGlobalCurrentSongId(track.id);
    setGlobalIsTrackPlaying(true);
  }

  function millisToMinutesAndSeconds(millis: number): string {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  function selectArtist(artist: Artist) {
    setGlobalArtistId(artist.id);
    setView("artist");
  }

  return (
    <div
      className={styles.songContainer}
      onClick={() => playSong(track)}
    >
      <div className={styles.left}>
        <p>{sno + 1}</p>
        <img
          className={styles.albumImage}
          src={track.album.images[0].url}
          alt={`Capa do álbum ${track.album.name}`}
        />
        <div>
          <p className={styles.trackName}>{track.name}</p>
          <p className={styles.artists}>
            {track.artists.map((artist: Artist, i: number) => (
              <React.Fragment key={artist.id}>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    selectArtist(artist);
                  }}
                  className={styles.artistName}
                >
                  {artist.name}
                </span>
                <span>{i !== track.artists.length - 1 ? ", " : null}</span>
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <p className={styles.albumName}>
          {track.album.name.length > 15
            ? track.album.name.slice(0, 15) + "..."
            : track.album.name}
        </p>
        <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
      </div>
    </div>
  );
}

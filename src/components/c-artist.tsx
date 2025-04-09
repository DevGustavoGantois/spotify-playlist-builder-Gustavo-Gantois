"use client";

import styles from '@/styles/artist.module.css';
import { PlayIcon } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import { Song } from './c-song';
import type { ArtistProps, Track } from '@/interface/playlist-user';

export function Artist({
  globalArtistId,
  setView,
  setGlobalArtistId,
  setGlobalCurrentSongId,
  setGlobalIsTrackPlaying,
}: ArtistProps) {
  const { data: session } = useSession();
  const [view] = useState("playlist");
  const [artistData, setArtistData] = useState<ArtistProps | null>(null);
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [relatedArtists, setRelatedArtists] = useState<ArtistProps[]>([]);

  async function getArtistData() {
    const response = await fetch(`https://api.spotify.com/v1/artists/${globalArtistId}`, {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });
    return await response.json();
  }

  async function getTopTracks() {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${globalArtistId}/top-tracks?market=US`,
      {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }
    );
    const data = await response.json();
    return data.tracks;
  }

  async function getRelatedArtists() {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${globalArtistId}/related-artists`,
      {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }
    );
    const data = await response.json();
    return data.artists;
  }

  useEffect(() => {
    async function fetchData() {
      if (session?.accessToken) {
        setArtistData(await getArtistData());
        setTopTracks(await getTopTracks());
        setRelatedArtists(await getRelatedArtists());
      }
    }

    fetchData();
  }, [session, globalArtistId]);

  return (
    <section className={styles.artistContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          {artistData && (
            <img
              className={styles.artistImageSmall}
              src={artistData?.images?.[0]?.url ?? ''}
              alt={artistData.name}
            />
          )}
          <p>{artistData?.name}</p>
        </div>
      </header>

      <div onClick={() => signOut()} className={styles.logout}>
        <img
          className={styles.profilePic}
          src={session?.user?.image ?? ''}
          alt="profile pic"
        />
        <p style={{ fontSize: 14 }}>Sair</p>
        <FaChevronDown style={{width: 5, height: 5}} />
      </div>

      <div className={styles.scrollArea}>
        <section className={styles.artistHero}>
          {artistData && (
            <Image
              alt={artistData.name}
              width={200}
              height={200}
              className={styles.artistImageLarge}
              src={artistData?.images?.[0]?.url ?? ''}
            />
          )}
          <div className={styles.artistMeta}>
            <p className={styles.artistLabel}>Artista</p>
            <h1 className={styles.artistName}>{artistData?.name}</h1>
          </div>
        </section>

        <div className={styles.sectionWrapper}>
          <h2 className={styles.sectionTitle}>Top Hits</h2>
          <div className={styles.trackList}>
            {topTracks.slice(0, 5).map((track, i) => (
              <Song
                searchView={view}
                key={track.id}
                track={track}
                sno={i}
                setView={setView}
                setGlobalArtistId={(id: any) => setGlobalArtistId(id)} 
                setGlobalIsTrackPlaying={setGlobalIsTrackPlaying}
                setGlobalCurrentSongId={setGlobalCurrentSongId}
                id={track.id}
                uri={track.uri}
                name={track.name}
                owner={track.artists?.[0]?.name ?? 'Desconhecido'}
              />
            ))}
          </div>
        </div>

        <div className={styles.sectionWrapper}>
          <h2 className={styles.sectionTitle}>Artistas relacionados</h2>
          <div className={styles.relatedArtists}>
            {relatedArtists.slice(0, 4).map((artist) => (
              <div
                onClick={() => setGlobalArtistId(artist.id)}
                key={artist.id}
                className={styles.relatedCard}
              >
                <div className={styles.cardHoverPlay}>
                  <PlayIcon style={{height: 6, width: 6, color: "#000000"}} />
                </div>
                <img
                  className={styles.relatedCardImage}
                  src={artist?.images?.[0]?.url ?? ''}
                  alt={artist.name}
                />
                <p className={styles.cardText}>{artist?.name}</p>
                <p className={styles.cardSubText}>Artistas</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

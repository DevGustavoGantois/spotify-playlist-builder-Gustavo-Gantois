"use client";
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import styles from '@/styles/index.module.css';
import { Sidebar } from '@/components/c-sidebar';
import { PlaylistView } from '@/components/c-playlist-view';
import { Search } from '@/components/c-search';
import { Library } from '@/components/c-library';
import { Player } from '@/components/c-player';
import { Artist } from '@/components/c-artist';

const inter = Inter({ subsets: ['latin'] });

export default function Page() {
  const [searchView, setSearchView] = useState("search");
  const [playlistUserId, setPlaylistUserId] = useState<string | null>(null);
  const [artistIds, setArtistIds] = useState<any | string[]>([]);
  const [playSongId, setPlaySongId] = useState<string | null>(null);
  const [trackUserPlayingMusic, setTrackUserPlayingMusic] = useState<string | null>(null);
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [isTrackPlaying, setIsTrackPlaying] = useState(false);

  const { data: session } = useSession();

  function selectPlaylist(playlist: any) {
    setPlaylistUserId(playlist.id);
    setSearchView("playlist");
  }

  useEffect(() => {
    const fetchPlaylists = async () => {
      if (!session?.accessToken) return;

      try {
        const response = await fetch("https://api.spotify.com/v1/me/playlists", {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });

        const data = await response.json(); 
        setPlaylists(data.items);
      } catch (error) {
        console.error("Erro ao buscar playlists:", error);
      }
    };

    fetchPlaylists();
  }, [session]);

  return (
    <main className={inter.className}>
      <div className={styles.div}>
        <div className={styles.sidebarContainer}>
          <Sidebar
            view={searchView}
            setView={setSearchView}
            setPlaylistUserId={setPlaylistUserId}
            setTrackUserPlayingMusic={setTrackUserPlayingMusic}
          />
        </div>

        <div className={styles.mainContent}>
          {searchView === "playlist" && (
            <PlaylistView
              playlistUserId={playlistUserId}
              setPlaySongId={setPlaySongId}
            />
          )}
          {searchView === "search" && <Search />}
          {searchView === "library" && (
            <Library playlists={playlists} selectPlaylist={selectPlaylist} />
          )}
          {searchView === "artist" && (
            <Artist
              setView={setSearchView}
              globalArtistId={artistIds}
              setGlobalArtistId={setArtistIds}
              setGlobalCurrentSongId={setPlaySongId}
              setGlobalIsTrackPlaying={setIsTrackPlaying} id={undefined} name={''} images={[]}            />
          )}
        </div>
      </div>

      <figure className={styles.figure}>
        <Player
          setTrackUserPlayingMusic={setTrackUserPlayingMusic}
          trackUserPlayingMusic={trackUserPlayingMusic}
          setPlaySongId={setPlaySongId}
          playSongId={playSongId}
        />
      </figure>
    </main>
  );
}

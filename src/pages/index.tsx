"use client";
import { Inter } from 'next/font/google'
import { useState } from 'react'
import styles from '@/styles/index.module.css'
import { Sidebar } from '@/components/c-sidebar';
import { PlaylistView } from '@/components/c-playlist-view';
import { Search } from '@/components/c-search';
import { Library } from '@/components/c-library';
import { Artist } from '@/components/c-artist';
import { Player } from '@/components/c-player';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [searchView, setSearchView] = useState("search")
  const [playlistUserId, setPlaylistUserId] = useState<string | null>(null);
  const [ArtistsUserId, setArtistsUserId] = useState<string | null>(null);
  const [playSongId, setPlaySongId] = useState<string | null>(null);
  const [TrackUserPlayingMusic, setTrackUserPlayingMusic] = useState<string | null>(null);



  return (
          <main className={`${inter.className}`}>
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
              <PlaylistView playlistUserId={playlistUserId} setPlaySongId={setPlaySongId} />
            )}
            {searchView === "search" && <Search />}
            {searchView === "library" && <Library />}
            {searchView === "artist" && <Artist />}
          </div>
        </div>

        <figure className={styles.figure}>
          <Player setPlaySongId={setPlaySongId} playSongId={playSongId} />
        </figure>
      </main>
  )
}

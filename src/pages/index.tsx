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


  return (
    <main className={`${inter.className}`}>
      <div className={styles.div}>
        <div className={styles.sidebarContainer}>
          <Sidebar
           view={searchView}
           setView={setSearchView}
           setPlaylistUserId={setPlaylistUserId}
          />
        </div>
        <div>
          {searchView === "playlist" && <PlaylistView 
          playlistUserId={playlistUserId}
          />}
          {searchView === "search" && <Search />}
          {searchView === "library" && <Library />}
          {searchView === "artist" && <Artist />}
        </div>
        <div>

        </div>
      </div>
      <figure className={styles.figure}>
        <Player />
      </figure>
    </main>
  )
}

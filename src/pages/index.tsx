"use client";
import { PlaylistProps } from '@/interface';
import { useSession } from 'next-auth/react'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import styles from '@/styles/index.module.css'
import { Sidebar } from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [searchView, setSearchView] = useState("search")
  const [playlistUserId, setPlaylistUserId] = useState<string | null>(null);
  const [ArtistsUserId, setArtistsUserId] = useState(null);


  return (
    <main className={`${inter.className}`}>
      <div className={styles.div}>
        <div>
          <Sidebar
           view={searchView}
           setView={setSearchView}
           setPlaylistUserId={setPlaylistUserId}
          />
        </div>
        <div>
          Main
        </div>
        <div>

        </div>
      </div>
      <figure className={styles.figure}>
        aaaaaaa
      </figure>
    </main>
  )
}

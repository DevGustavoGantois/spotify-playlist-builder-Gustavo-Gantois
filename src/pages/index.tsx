"use client";
import { PlaylistProps } from '@/interface';
import { useSession } from 'next-auth/react'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import styles from '@/styles/index.module.css'
import { Sidebar } from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  const [x, setX] = useState("")
  const [userPlaylists, setUserPlaylists] = useState<PlaylistProps[]>([])

  useEffect(() => {
    async function funcionality() {
      if (session && session.accessToken) {
        setX(session.accessToken)
        const response = await fetch("https://api.spotify.com/v1/me/playlists", {
          headers: {
            Authorization: `Bearer ${session.accessToken}`
          }
        })
        const data = await response.json()
        setUserPlaylists(data.items)
      }
    }

    funcionality()
  }, [session])

  return (
    <main className={`${inter.className}`}>
      <div className={styles.div}>
        <div>
          <Sidebar />
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

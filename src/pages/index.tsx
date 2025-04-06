"use client";
import { PlaylistProps } from '@/interface';
import { useSession } from 'next-auth/react'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

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
      <div>
        {userPlaylists.map((playlist) => (
          <div key={playlist.id}>{playlist.name}</div>
        ))}
      </div>
    </main>
  )
}

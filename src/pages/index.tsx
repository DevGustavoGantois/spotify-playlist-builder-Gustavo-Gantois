import { useSession } from 'next-auth/react'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data: session} = useSession()
  const [x, setX] = useState("")

  useEffect(() => {
    if (session && session.accessToken) {
      setX(session.accessToken)
    }
  }, [session])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white ">
     
    </main>
  )
}

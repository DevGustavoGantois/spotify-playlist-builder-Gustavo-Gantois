import { useSession } from 'next-auth/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data: session} = useSession()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}

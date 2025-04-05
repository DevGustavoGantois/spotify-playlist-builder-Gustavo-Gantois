'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"
import { FaSpotify } from "react-icons/fa"

export default function LoginPage() {
  return (
    <section className="relative min-h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-2 h-full">
        <div className="hidden xl:block relative w-full h-screen">
          <Image
            src="/BgImageLogin.svg"
            alt="Imagem de fundo do login"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-xl bg-white/5 p-8 rounded-xl shadow-lg backdrop-blur-md">
            <header className="text-center mb-6">
              <h1 className="text-4xl font-bold mb-2">Login</h1>
              <p className="text-gray-300">
                Faça login com sua conta do Spotify para acessar a plataforma.
              </p>
            </header>

            <button
              className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-200"
              onClick={() => signIn("spotify", { callbackUrl: "/" })}
            >
              <FaSpotify size={24} />
              Entrar com Spotify
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

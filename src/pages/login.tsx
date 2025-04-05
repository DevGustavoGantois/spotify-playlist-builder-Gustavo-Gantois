import { signIn } from "next-auth/react";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";

export default function Login() {
    return (
    <section className="relative h-screen">
    <div className="absolute top-4 right-12">
    </div>
    <div className="h-screen grid grid-cols-1 lg:col-span-3 sm:p-8 md:p-0 lg:p-0 gap-12 xl:grid-cols-2 overflow-hidden">
    <div className="hidden xl:block relative w-full h-full">
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/BgImageLogin.svg"
        width={800}
        height={600}
        alt="Imagem de fundo do login"
      />
    </div>
    <div className="flex items-center justify-center">
      <div className="w-full max-w-2xl p-4 lg:p-12 shadow-lg">
        <header>
          <h1 className="text-4xl text-center mt-4">Login</h1>
          <p className="text-center">
            Preencha os campos abaixo para entrar na nossa plataforma...
          </p>
        </header>
        <figure>
          <button
        className="cursor-pointer flex items-center justify-center gap-2 w-full mt-6"
        onClick={() => signIn("spotify", {callbackUrl: "/home"})}
        >
          <FaSpotify size={32} className="text-green-500" />
          Entrar com Spotify
        </button>
        </figure>
      </div>
    </div>
  </div>
  </section>

    )
}
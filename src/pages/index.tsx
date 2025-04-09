import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { FaSpotify } from 'react-icons/fa'
import styles from '@/styles/login.module.css'

export default function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.bgImage}
            src="/BgImageLogin.svg"
            width={800}
            height={600}
            alt="Imagem de fundo do login"
          />
        </div>

        <div className={styles.center}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h1 className={styles.title}>Login</h1>
              <p className={styles.description}>
                Acesse nossa plataforma clicando no botão abaixo.
              </p>
            </div>

            <div className={styles.cardContent}>
              <button
                className={styles.spotifyButton}
                onClick={() => signIn('spotify', { callbackUrl: '/home' })}
              >
                <FaSpotify size={32} className={styles.spotifyIcon} />
                Entrar com Spotify
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

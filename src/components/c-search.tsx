// src/components/Search.tsx
import styles from '@/styles/search.module.css';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaChevronCircleDown, FaSearch } from 'react-icons/fa';

export function Search() {
  const { data: session } = useSession();

  const [searchMusicData, setSearchMusicData] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputSearchValueData, setInputSearchValueData] = useState<string>("");

  async function updateSearchResultsData(query: string) {
    if (!query.trim()) return;

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?` +
          new URLSearchParams({
            q: query,
            type: 'artist,playlist,track',
          }),
        {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        }
      );

      const data = await response.json();
      setSearchMusicData(data);
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles.searchContainer}>
      <header className={styles.searchHeader}>
        <FaSearch className={styles.iconSearch} />
        <input
          value={inputSearchValueData}
          onChange={(e) => {
            const value = e.target.value;
            setInputSearchValueData(value);
            updateSearchResultsData(value);
          }}
          ref={inputRef}
          type="search"
          placeholder="Pesquise sua música aqui..."
          className={styles.searchInput}
        />
      </header>

      <div className={styles.searchDiv}>
        {session?.user?.image && (
          <Image
            src={session.user.image}
            alt="Foto de perfil"
            className={styles.img}
            width={48}
            height={48}
          />
        )}
        <p className={styles.paragraph}>Sair</p>
        <FaChevronCircleDown className={styles.icon} />
      </div>
      <div>
        {searchMusicData ? (
          <pre style={{ color: "#fff" }}>
            {JSON.stringify(searchMusicData, null, 2)}
          </pre>
        ) : (
          <p className={styles.paragraph}>Nenhuma música encontrada.</p>
        )}
      </div>
    </div>
  );
}

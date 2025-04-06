import styles from "@/styles/sidebar.module.css";
import { FaBook, FaHome, FaSearch } from "react-icons/fa";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div>SPOTIFY</div>
            <div className={styles.containerButton}>
                <button className={styles.button}>
                    <FaHome className={styles.icon} />
                    Home
                </button>
                <button className={styles.button}>
                    <FaSearch className={styles.icon} />
                    Pesquisar
                </button>
                <button className={styles.button}>
                    <FaBook className={styles.icon} />
                    Sua biblioteca
                </button>
            </div>
        </aside>
    )
}
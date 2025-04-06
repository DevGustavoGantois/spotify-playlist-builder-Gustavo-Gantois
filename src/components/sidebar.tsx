import styles from "@/styles/sidebar.module.css";
import { FaHome } from "react-icons/fa";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div>SPOTIFY</div>
            <div>
                <button className={styles.button}>
                    <FaHome className={styles.icon} />
                    Home
                </button>
            </div>
        </aside>
    )
}
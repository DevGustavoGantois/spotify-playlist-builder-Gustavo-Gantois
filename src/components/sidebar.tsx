import styles from "@/styles/sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div>SPOTIFY</div>
            <div>
                <button>Home</button>
            </div>
        </aside>
    )
}
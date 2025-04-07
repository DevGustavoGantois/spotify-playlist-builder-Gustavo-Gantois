import styles from '@/styles/player.module.css';
import { FaPlayCircle } from 'react-icons/fa';

export function Player() {
    return (
        <section className={styles.playerSection}>
            <div className={styles.playerDiv}>

            </div>
            <div className={styles.divIcon}>
            <FaPlayCircle className={styles.icon} />
            </div>
            <div>
                
            </div>
        </section>
    )
}
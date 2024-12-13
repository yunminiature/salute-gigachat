import { useState, useEffect } from 'react';
import styles from './styles.module.css';

function Achievement({ icon, text }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    if (!isVisible) return null;

    console.log(icon)

    return(
        <div className={styles.achievement}>
            <div className={styles.achievementIconContainer}>
                <img src={icon} alt="achievement" className={styles.achievementIcon} />
            </div>
            <p className={styles.achievementText}>
                <span className={styles.accentWord}>Получено достижение: </span>{text}!
            </p>
        </div>
    );
};

export default Achievement;

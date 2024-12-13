import styles from './styles.module.css';

function Main({ showModal }) {
    return(
        <div className={styles.main}>
            <div className={styles.intro}>
                <h1 className={styles.title}>
                    Салют, <span className={styles.accentWord}>Playground</span>!
                </h1>
                <p className={`${styles.text} ${styles.rightSideText}`}>
                    Добро пожаловать в команду участников
                    <span className={styles.accentWord}> Салют, GigaChat</span>! 
                    —&nbsp;конференции команды разработки GigaChat про технологии искусственного интеллекта<br/> 
                </p>
                <p className={`${styles.text} ${styles.leftSideText}`}>
                    Подготовься к конференции, используя
                    <span className={styles.accentWord}> Playground</span>
                </p>
            </div>
            <button className={styles.button} onClick={showModal}>
                Старт!
            </button>
            <div className={`${styles.cloud} ${styles.firstCloud}`}>
                <img src="/images/cloud.png" alt="cloud"/>
            </div>
            <div className={`${styles.cloud} ${styles.secondCloud}`}>
                <img src="/images/cloud.png" alt="cloud"/>
            </div>
        </div>
    )
}

export default Main;

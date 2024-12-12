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
                    <span className={styles.accentWord}> Твоя задача </span>
                    —&nbsp;помочь с подготовкой, используя инструмент Playground
                </p>
            </div>
            <button className={styles.button} onClick={showModal}>
                Старт!
            </button>
        </div>
    )
}

export default Main;

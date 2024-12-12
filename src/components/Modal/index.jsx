import styles from './styles.module.css';

function Modal({ hideModal, activeTaskNum, task, setActiveTaskNum, getAchievements }) {
    const handleModalClick = (e) => {
        e.stopPropagation();
    };
    const progress = ((activeTaskNum + 1) / 4) * 100;

    const handlePrevClick = () => {
        setActiveTaskNum(activeTaskNum - 1);
    }

    const handleNextClick = () => {
        getAchievements(activeTaskNum);
        setActiveTaskNum(activeTaskNum + 1);
    }

    return (
        <div className={styles.modalBackground} onClick={hideModal}>
            <div className={styles.modalContainer} onClick={handleModalClick}>
                <h2 className={styles.modalTitle}>{task.title}</h2>
                <p className={styles.modalDescription}>{task.description}</p>
                <p className={styles.modalDescription}><span className={styles.accentWord}>Задание: </span>{task.task}</p>
                <div className={styles.modalButtons}>
                    {activeTaskNum > 0 && (
                        <button className={styles.modalButton} onClick={handlePrevClick}>
                            Назад
                        </button>
                    )}
                    {activeTaskNum < 3 && (
                        <button className={`${styles.modalButton} ${styles.modalSubmitButton}`} onClick={handleNextClick}>
                            Далее
                        </button>
                    )}
                </div>
                <div className={styles.modalProgressBar}>
                    <div
                        className={styles.modalProgress}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;

import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Modal from './components/Modal';
import Achievement from './components/Achievement';
import { TASKS, ACHIEVEMENTS } from './consts';

function App() {
    const [isShowModal, setIsShowModal] = useState(false);
    const [activeTaskNum, setActiveTaskNum] = useState(0);
    const [achievements, setAchievements] = useState([]);

    return (
        <>
            <Main showModal={() => setIsShowModal(true)}/>
            {isShowModal && (
                <Modal
                    hideModal={() => setIsShowModal(false)}
                    activeTaskNum={activeTaskNum}
                    task={TASKS[activeTaskNum]}
                    setActiveTaskNum={setActiveTaskNum}
                    getAchievements={(index) => setAchievements((currentAchievements) => [...currentAchievements, ACHIEVEMENTS[index]])}
                />
            )}
            {achievements.map((achievement, index) => (
                <Achievement
                    key={index}
                    icon={achievement.icon}
                    text={achievement.text}
                />
            ))}
        </>
    );
}

export default App;

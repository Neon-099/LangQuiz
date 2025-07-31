import { useScoreStore } from '../stores/scoreStore.js';

export const ScoreDisplay = () => {
    const {currentScore, highScore } = useScoreStore();

    return (
        <>
        <div className='text-center mb-4'>
            <p>Current Score: {currentScore}</p>
            <p>High Score: {highScore}</p>
        </div>
        </>
        
    )
}

export default ScoreDisplay;
import {useMemo} from "react";
import {shuffleArray} from '../utils/shuffleArray.js';

export const useShuffleQuiz = (data) => {
    return useMemo(() => {
        return shuffleArray(data).map((q) => {
            // Store the correct answer text before shuffling
            const correctAnswerText = q.options[q.answer];
            
            // Shuffle the options
            const shuffledOptions = shuffleArray(q.options);
            
            // Find the new index of the correct answer after shuffling
            const newAnswerIndex = shuffledOptions.findIndex(option => option === correctAnswerText);
            
            return {
                ...q,
                options: shuffledOptions,
                answer: newAnswerIndex
            };
        });
    }, [data]);
};
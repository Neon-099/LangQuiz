import {create } from 'zustand';
import {persist} from 'zustand/middleware';

export const useScoreStore = create (
    persist(
        (set) => ({
            currentScore: 0,
            highScore: 0,
            setScore: (score) => set({currentStore: score}),
            increaseScoreBy: (points)=> 
                set((state) => ({ currentScore: state.currentScore + points})),
            resetScore: () => set({ currentScore: 0 }),
            updateHighScore: () => set((state) => ({
                highScore: 
                    state.currentScore > state.highScore 
                    ? state.currentScore : state.highScore
            })),
        }),
        {
            name: 'quiz-score-storage', //key in local storage (name)
        }
    )
)
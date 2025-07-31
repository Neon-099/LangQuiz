


/**
 * Returns score value based on difficulty
 * @param {string} difficulty - 'easy' | 'medium' | 'hard'
 * @returns {number}
 */

export const calculateScoring = (difficulty) => {
    switch(difficulty) {
        case 'easy':
            return 5
        case 'medium':
            return 10
        case 'hard':
            return 15
        default:
            return 0
    }
}

export default calculateScoring;
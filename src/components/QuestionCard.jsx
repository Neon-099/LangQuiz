import React from 'react';

export const QuestionCards = ( {question, OnAnswer} ) => {

    
    return (
        <div className='mt-8'>
            
            <h1 className='text-xl font-semibold'>{question.question}</h1>
            <ul className='mt-4 space-y-2'>
                {question.options.map((option) => (
                    <li key={option}>
                        <button 
                         className='w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded'
                         onClick={() => OnAnswer(option)}>
                            {option}
                         </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export const Result = ({score, total, onRestart}) => {
    return (
        <div className="text-center mt-10">
            <h2 className="text-2xl font-bold">Results</h2>
            <p className="mt-4 text-lg">You scored:{score} out of {total}</p>
            <button 
             onClick={onRestart}
             className="mt-6 bg-gray-500 text-white px-4 py-4 rounded">
                Restart
            </button>
        </div>
    )
}


export default QuestionCards;
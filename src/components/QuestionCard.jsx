import { Link } from "react-router-dom"

export const QuestionCards = ( {question, OnAnswer, onQuit, total} ) => {

    
    return (
        <div className='mt-8 border-none bg-white shadow-md rounded-lg p-10 '>
            <div className="flex justify-between items-center mb-4">
                 <p>Question: {question.id + 1}/{total} </p>
                 <button 
                  onClick={onQuit}
                  className="text-red-500 hover:text-red-400">Quit</button>
            </div>

            <h1 className='text-xl font-semibold py-3 text'>{question.question}</h1>
            <ul className='mt-4 space-y-2'>
                {question.options.map((option, index) => (
                    <li key={option}>
                        <button 
                         className='w-full bg-gray-200 hover:bg-gray-300 px-4 py-3 my-3 rounded shadow-md '
                         onClick={() => OnAnswer(index)}>
                            {option}
                         </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export const Result = ({score, total, onRestart, onReview}) => {
    return (
        <>
        
        <div className="text-center mt-10">
            <h2 className="text-2xl font-bold">Results</h2>
            <p className="mt-4 text-lg">You scored:{score} out of {total}</p>
               
            <button 
                onClick={onRestart}
                className="mt-6 bg-gray-500 text-white px-6 py-3 rounded">
                Restart
            </button> <br />

            <Link to="/quiz/home">
                <button
                    className="py-3 bg-gray-500 text-white px-6 mt-4 rounded">
                    Back to home
                </button> 
            </Link>
                    <br />
            <button
                className="py-3 bg-gray-500 text-white px-6 mt-4 rounded " 
                onClick={onReview}>
                Review Mode
            </button>
        </div> 
        </>
    )
}


export default QuestionCards;
export const ReviewQuiz = ( {answers, onReset} ) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Review Mode</h2>
            {answers.map((a, i) => (
                <div 
                  key={i}
                  className="p-4 border mb-2 rounded bg-white shadow-sm"
                  >
                    <p className="font-semibold">{i + 1}. {a.question}</p>
                    <p>
                        Your Answer: {""}
                        <span className={a.isCorrect ? "text-green-600" : "text-red-600"}>
                            {a.selected}
                        </span>
                    </p>
                    {/*THERES A TEMP VAR THERE(isCorrect, correctAnswer)*/}
                    {!a.isCorrect && (
                        <p className="text-blue-600">
                            Correct answer: {a.correctAnswer}
                        </p>
                    )}
                </div>
            ))}
            <button className="mt-4 bg-blue-400 text-white px-4 py-2 rounded" onClick={onReset}>
                Restart
            </button>
        </div>
    )
}

export default ReviewQuiz;
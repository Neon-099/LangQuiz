export const ReviewQuiz = ( {answers} ) => {
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
                            {a.choices}
                        </span>
                    </p>
                    {/*THERES A TEMP VAR THERE(isCorrect, correctAnswer)*/}
                    {!a.isCorrect && (
                        <p className="text-blue-600">
                            Correct answer: {a.choices}
                        </p>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ReviewQuiz;
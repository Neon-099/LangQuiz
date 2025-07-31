import '../App.css'
import { useQuiz } from '../hooks/useQuiz.js';
import {pythonQuestion} from '../data/PythonData.js';
import Header from '../components/layout/Header.jsx'
import {QuestionCards, Result} from '../components/QuestionCard.jsx' 
import {ReviewQuiz} from '../components/ReviewQuiz.jsx';
import {ScoreDisplay} from '../components/ScoreDisplay.jsx'

export const PythonQuiz = () => {

  const {
    //STATE
    index,
    currentScore,
    start,
    finished,
    timeCount,
    shuffledQuestions,
    answers,
    seeReview,

    //ACTIONS
    handleNextQuestion,
    handleRestart,
    handleQuit,
    handleReviewQuestion,

    //COMPUTATION OF VALUES
    currentQuestion,
    totalQuestions,
    showTimer,
    showProgress
  } = useQuiz(pythonQuestion)

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header 
        title="Python Quiz"
        showTimer={showTimer}
        timeCount={timeCount}
        currentQuestion={index}
        totalQuestions={totalQuestions}
        onQuit={handleQuit}
        showProgress={showProgress} 
      />

      <div className='flex flex-col justify-center items-center min-h-screen py-8'>
        {start && !finished && (
          <QuestionCards 
           question={currentQuestion}
           OnAnswer={handleNextQuestion}
           onQuit={handleQuit}
           total={totalQuestions}/>
        )}
        {finished && (
          <Result 
            score={currentScore}
            total={totalQuestions}
            onRestart={handleRestart}
            onReview={handleReviewQuestion}
             />
        )}
        {finished && (
          <ScoreDisplay />
        )}

        {seeReview && (
          <ReviewQuiz 
            answers={answers} />
        )}
      </div>
    </div>
  )
}

export default PythonQuiz;

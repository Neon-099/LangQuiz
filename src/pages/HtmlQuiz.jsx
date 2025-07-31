import '../App.css'
import { useQuiz } from '../hooks/useQuiz.js'
import questions from '../utils/HtmlData.js'
import Header from '../components/layout/Header.jsx'
import {QuestionCards, Result} from '../components/QuestionCard.jsx' 
import {ReviewQuiz} from '../components/ReviewQuiz.jsx';

export const HtmlQuiz = () => {

  const {
    //STATE
    index,
    score,
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
  } = useQuiz(questions)


  return (
    <div className='min-h-screen bg-gray-50'>
      <Header 
        title="HTML Quiz"
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
            score={score}
            total={totalQuestions}
            onRestart={handleRestart}
            onReview={handleReviewQuestion}
             />
        )}
        {seeReview && (
          <ReviewQuiz 
            answers={answers} 
            onReset={handleRestart}/>
        )}

      </div>
    </div>
  )
}

export default HtmlQuiz;

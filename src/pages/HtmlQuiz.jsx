import '../App.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import questions from '../data/HtmlData.js'
import {QuestionCards, Result} from '../components/QuestionCard.jsx' 

export const HtmlQuiz = () => {

const [timeCount, setTimeCount] = useState(10);

const [index, setIndex] = useState(0);
const [score, setScore] = useState(0);
const [start, setStart] = useState(false);
const [finished, setFinished] = useState(false);

const handleStart = () => {
  setStart(true);
}

const handleNextQuestion = (choice) => {
  const correct = questions[index].answer;
  if(choice === correct) {
    setScore(score + 1); //increase (1.1)
  }
  
  const nextIndex = index + 1; //increase (1.2)
  if(nextIndex < questions.length) {
    setIndex(nextIndex);
    setTimeCount(10)
  } else {
    setFinished(true);
    setTimeCount(0)
  }

}

const handleRestart = () => {
    setIndex(0);
    setScore(0);
    setStart(false);
    setFinished(false);
    setTimeCount(10);
  }

  //TO AUTO START WHEN THE PAGE RELOADS
  useEffect(() => {  
      handleStart();
  })

  //TO START THE TIMER
  useEffect(() => {
    if(timeCount === 0) {
      //TIMES UP: handle next question
      handleTimesUp();
      return;
    }

    const timer =  setInterval(() => {
      setTimeCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);//to clean up after executing
  }, [timeCount]); //to call it every page reloads

  //HANDLE if it is last question
  const isLastQuestion = setIndex === questions.length - 1;

  const handleTimesUp = () => {

    if(isLastQuestion) {
      setFinished(true);
      return;
    }
    else {
      handleNextQuestion();
    }
  }

  const goBackHome = () => {
    <Link to="/quiz/home"></Link>
  }

  return (
    <div className='flex flex-col justify-center items-center h-200 '>
      <header className="text-center mt-10">
        <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
      </header>
      <div>
        Timer {timeCount}s
      </div>
        {start && !finished && (
          <QuestionCards 
           question={questions[index]}
           OnAnswer={handleNextQuestion}
           onQuit={() => setFinished(true)}
           total={questions.length}/>
        )}
        {finished && (
          <Result 
            score={score}
            total={questions.length}
            onRestart={handleRestart}
            onHomeBack={handleRestart}
             />
        )}

    </div>
  )
}

export default HtmlQuiz;

import '../App.css'
import { useEffect, useState } from 'react'
import questions from '../data/HtmlData.js'
import {QuestionCards, Result} from '../components/QuestionCard.jsx' 

export const HtmlQuiz = () => {


const [index, setIndex] = useState(0);
const [score, setScore] = useState(0);
const [start, setStart] = useState(false);
const [finished, setFinished] = useState(false);

const handleStart = () => {
  setStart(true);
}

const handleAnswer = (choice) => {
  const correct = questions[index].answer;
  if(choice === correct) {
    setScore(score + 1); //increase (1.1)
  }
  
  const nextIndex = index + 1; //increase (1.2)
  if(nextIndex < questions.length) {
    setIndex(nextIndex);
  } else {
    setFinished(true);
  }
}

const handleRestart = () => {
    setIndex(0);
    setScore(0);
    setStart(false);
    setFinished(false);
  }

  //TO AUTO START WHEN THE PAGE RELOADS
  useEffect(() => {  
      handleStart();
  })

  return (
    <div className='flex flex-col justify-center items-center h-200 '>
      <header className="text-center mt-10">
        <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
      </header>
        {start && !finished && (
          <QuestionCards 
           question={questions[index]}
           OnAnswer={handleAnswer}
           onQuit={() => setFinished(true)}
           total={questions.length}/>
        )}
        {finished && (
          <Result 
            score={score}
            total={questions.length}
            onRestart={handleRestart}
             />
        )}

    </div>
  )
}

export default HtmlQuiz;

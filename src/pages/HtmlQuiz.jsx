import './App.css'
import { useState } from 'react'
import HtmlData from './data/HtmlData.js'
import {QuestionCards, Result} from './components/questionCard.jsx' 

function App() {


const [index, setIndex] = useState(0);
const [score, setScore] = useState(0);
const [start, setStart] = useState(false);
const [finished, setFinished] = useState(false);

const handleStart = () => {
  setStart(true);
}

const handleAnswer = (choice) => {
  const correct = HtmlData[index].answer;
  if(choice === correct) {
    setScore(score + 1); //increase (1.1)
  }
  
  const nextIndex = index + 1; //increase (1.2)
  if(nextIndex < HtmlData.length) {
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
  return (
    <div className='max-w-xl mx-auto p-4'>
        <header className="text-center mt-10">
                <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
                {!start && (
                <button 
                 onClick={handleStart}>
                    Start Quiz
                </button>
                )}
            </header>
        {start && !finished && (
          <QuestionCards 
           question={HtmlData[index]} OnAnswer={handleAnswer}/>
        )}
        {finished && (
          <Result score={score} total={HtmlData.length} onRestart={handleRestart} />
        )}

    </div>
  )
}

export default App

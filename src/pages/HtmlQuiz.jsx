import '../App.css'
import { useEffect, useState } from 'react'
import questions from '../data/HtmlData.js'
import {QuestionCards, Result} from '../components/QuestionCard.jsx' 
import DifficultyCard from '../components/ui/Difficulty.jsx'


export const HtmlQuiz = () => {

const [timeCount, setTimeCount] = useState(10);
const [question, setQuestion] = useState([]); //store here the quiz sections

const [index, setIndex] = useState(0);
const [score, setScore] = useState(0);
const [start, setStart] = useState(false);
const [finished, setFinished] = useState(false);

const baseTime = {
  easy: 15, 
  medium: 10,
  hard: 5,
};

//AUTO START WHEN PAGE LOAD (only run once(w/o deps))
useEffect(() => {
  const firstQuestion = questions[0];
  const time = baseTime[firstQuestion.difficulty] || 10;  

  setQuestion(questions);
  setStart(true);
  setTimeCount(time); 
}, []); 

//TIMER COUNTDOWN
useEffect(() => {
  if(!start || finished || timeCount === 0) return;

  const timer = setInterval(() => {
    setTimeCount((prev) => prev - 1)
  }, 1000);

  return () => clearInterval(timer); //TO CLEANup the timer
}, [timeCount, start, finished])


//HANDLE WHEN TIME IS UP 
useEffect(() => {
  if(timeCount === 0 && start && !finished) {
    handleTimesUp();
  }
}, [timeCount]); //to updates the time count every call


//HANDLE NEXT QUESTION
const handleNextQuestion = (choice) => {
  const correct = question[index].answer;
  if(choice === correct) {
    setScore((prev) => prev + 1); //state usage when want to increase (1.1)
  }
  
  const nextIndex = index + 1; //increment the index each call so that it will be the basis if which question current in
  if(nextIndex < question.length) {
    setIndex(nextIndex);

    const nextQuestion = question[nextIndex]; //GET THE QUESTION BASED ON THE INDEX 
    const newTime = baseTime[nextQuestion.difficulty] || 10; //like act (COMPARISON TO KNOW WHAT KIND OF TIME TO USE THAT WILL BASED ON DIFFICULTY) 
    setTimeCount(newTime); //UPDATE THE TIMER BASED ON THE DIFFICULTY
  } else {
    setFinished(true);
    setTimeCount(0)
  }
}

//HANDLE WHEN TIME IS UP
const handleTimesUp = () => {
  setFinished(true);
}

  const handleRestart = () => {
    const firstQuestion = question[0]; //reset the index count
    const time = baseTime[firstQuestion.difficulty] || 10; //the resetted index count is 0

    setIndex(0);
    setScore(0);
    setFinished(false);
    setStart(true);
    setTimeCount(time); //more likely this will be in reset / 0
  };



  return (
    <div className='flex flex-col justify-center items-center h-200 '>
      <header className="text-center mt-10">
        <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
      </header>

        {start && !finished && <div>Timer: {timeCount}</div>}

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
             />
        )}

    </div>
  )
}

export default HtmlQuiz;

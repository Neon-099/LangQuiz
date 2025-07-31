import {useState, useEffect} from 'react';
import { useShuffleQuiz } from './useShuffledQuiz';
import {useScoreStore } from '../stores/scoreStore.js';
import {calculateScoring} from '../utils/calculateScoring.js'
export const useQuiz = ( questions ) => {
    
  //DESTRUCTURING COMP
    const {
      currentScore,
      increaseScoreBy,
      updateHighScore,
      resetScore
    } = useScoreStore();

    const [timeCount, setTimeCount] = useState(10);
    const [index, setIndex] = useState(0);
    const [start, setStart] = useState(false);
    const [finished, setFinished] = useState(false);
    const [question, setQuestion] = useState([]); //store here the quiz sections
    const [answers, setAnswers] = useState([]);
    const [seeReview, setSeeReview] = useState(false);

    //SHUFFLE LOGIC (sequencing is must)
    const shuffledQuestions = useShuffleQuiz(question) 
    
    const baseTime = {
      easy: 15, 
      medium: 10,
      hard: 5,
    };

    //AUTO START WHEN PAGE LOAD (only run once(w/o deps))
    useEffect(() => {
      setQuestion(questions);
      setStart(true);
      currentScore;
    }, []); //declare deps to run only once without breaking the effect behavior (need run only once)
    
    //INITIALIZE TIMER WHEN QUESTIONS ARE SHUFFLED
    useEffect(() => {
      if (start && !finished && shuffledQuestions.length > 0 && timeCount === 10) {
        const firstQuestion = shuffledQuestions[0];
        const time = baseTime[firstQuestion.difficulty] || 10;
        setTimeCount(time);
      }
    }, [start, finished, shuffledQuestions]);
    
    //TIMER COUNTDOWN
    useEffect(() => {
      if(!start || finished || timeCount === 0) return;
    
      const timer = setInterval(() => {
        setTimeCount((prev) => prev - 1)
      }, 1000);
    
      return () => clearInterval(timer); //TO CLEANup the timer
    }, [ start, finished])
    
    
    //HANDLE WHEN TIME IS UP 
    useEffect(() => {
      if(timeCount === 0 && start && !finished) {
        handleTimesUp();
        updateHighScore()
      }
    }, [timeCount]); //to updates the time count every call
    
    
    //HANDLE NEXT QUESTION              
    const handleNextQuestion = (choice) => {
    
      const current = shuffledQuestions[index]; //get current index (instead of this well pass it in a PARAMS)
      const correctIndex = current.answer; 
      const isCorrect = choice === correctIndex ? true : false;
      
      const selectedText = current.options[choice]; //get selected STR
      const correctText = current.options[correctIndex]   //get correct STR

      //SET ANSWERS HERE (REVIEW MODE)
      setAnswers((prev) => [
          ...prev,
          {   
            question: shuffledQuestions[index].question, 
            choices: selectedText,
            CorrectAnswer: correctText,
            isCorrect,
          }
      ]);
   const difficulty = current.difficulty;
      //SCORING LOGIC
      const correct = shuffledQuestions[index].answer; //1.1 use shuffle and find index also the answer
      if(choice === correct && difficulty) { //if true the score will increase to 1
        
        //DIFFICULTY BASED POINTS
     
        const points = calculateScoring(difficulty);
        increaseScoreBy(points)
      }

      const nextIndex = index + 1; //increment the index each call so that it will be the basis if which question current in
      if(nextIndex < question.length) {
          setIndex(nextIndex);

          const nextQuestion = shuffledQuestions[nextIndex]; //GET THE QUESTION BASED ON THE INDEX 
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
      updateHighScore();
    }
    
    const handleRestart = () => {
    const firstQuestion = shuffledQuestions[0]; //reset the index count
    const time = baseTime[firstQuestion.difficulty] || 10; //the resetted index count is 0

    setIndex(0);
    setFinished(false);
    setStart(true);
    setTimeCount(time); //more likely this will be in reset / 0
    setAnswers([]);
    setSeeReview(false);
    resetScore();
    };

    const handleQuit = () => {
    setFinished(true);
    setStart(false);
    updateHighScore()
    };

    const handleReviewQuestion = () => {
    setSeeReview(true);
    }

    return {
        //RETURN THE STATE SO THAT WE CAN USE THEM 
        index,
        currentScore,
        start,
        finished,
        timeCount,
        shuffledQuestions,
        answers,
        seeReview,

        //ACTION STATE
        handleNextQuestion,
        handleRestart,
        handleQuit,
        handleReviewQuestion,

        //COMPUTED VALUES
        currentQuestion: shuffledQuestions[index],
        totalQuestions: questions.length,
        showTimer: start && !finished,
        showProgress: start && !finished 
    };
};
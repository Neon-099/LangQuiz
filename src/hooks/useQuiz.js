import {useState, useEffect} from 'react';
import { useShuffleQuiz } from './useShuffledQuiz';

export const useQuiz = ( questions ) => {
    const [timeCount, setTimeCount] = useState(10);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
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
      }
    }, [timeCount]); //to updates the time count every call
    
    
    //HANDLE NEXT QUESTION
    const handleNextQuestion = (choice) => {
      //SCORING LOGIC
      const correct = shuffledQuestions[index].answer; //1.1 use shuffle and find index also the answer
    if(choice === correct) { //if true the score will increase to 1
        setScore((prev) => prev + 1); //state usage when want to increase (1.2)
        
        setAnswers((prev) => [
            ...prev,
            {
                question: shuffledQuestions[index].question,
                choice: false,
                CorrectAnswer: shuffledQuestions[index].answer,
                isCorrect: true,
            }
        ]);
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
    }
    
    const handleRestart = () => {
    const firstQuestion = shuffledQuestions[0]; //reset the index count
    const time = baseTime[firstQuestion.difficulty] || 10; //the resetted index count is 0

    setIndex(0);
    setScore(0);
    setFinished(false);
    setStart(true);
    setTimeCount(time); //more likely this will be in reset / 0
    setAnswers([]);
    };

    const handleQuit = () => {
    setFinished(true);
    setStart(false);
    };

    const handleReviewQuestion = () => {
    setSeeReview(true);
    }

    return {
        //RETURN THE STATE SO THAT WE CAN USE THEM 
        index,
        score,
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
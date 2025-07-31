import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/LandingPage.jsx';
import Home from './pages/Home.jsx';
import HtmlQuiz from './pages/HtmlQuiz.jsx';
import JavascriptQuiz from './pages/JavascriptQuiz.jsx';
import ReactQuiz from './pages/ReactQuiz.jsx';
import CsharpQuiz from './pages/CsharpQuiz.jsx';
import PythonQuiz from './pages/PythonQuiz.jsx';


function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz/home" element={<Home />} /> {/*(/) to declare that this is the start point*/}
        <Route path='/quiz/html' element={<HtmlQuiz />} />
        <Route path='/quiz/javascript' element={<JavascriptQuiz />} />
        <Route path='/quiz/react' element={<ReactQuiz />} />
        <Route path='/quiz/csharp' element={<CsharpQuiz />} />
        <Route path='/quiz/python' element={<PythonQuiz />} />
      </Routes>
    </Router>
  )
}

export default App;

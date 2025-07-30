import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/LandingPage.jsx';
import Home from './pages/Home.jsx';
import HtmlQuiz from './pages/HtmlQuiz.jsx';


function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz/home" element={<Home />} /> {/*(/) to declare that this is the start point*/}
        <Route path='/quiz/html' element={<HtmlQuiz />} />
      </Routes>
    </Router>
  )
}

export default App

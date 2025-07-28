import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import HtmlQuiz from './pages/HtmlQuiz.jsx';


function App() {


  return (

    <Router>
      <div className="max-w-xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} /> {/*(/) to declare that this is the start point*/}
          <Route path='/quiz/html' element={<HtmlQuiz />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

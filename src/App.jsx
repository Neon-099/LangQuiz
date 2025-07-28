import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';


function App() {


  return (

    <Router>
      <div className="max-w-xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} /> {/*(/) to declare that this is the start point*/}
        </Routes>
      </div>
    </Router>
  )
}

export default App

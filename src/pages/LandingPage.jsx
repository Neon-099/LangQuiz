import logs from '../assets/logs.png'
import {Link } from 'react-router-dom'
import '../styles/LandingPage.css'

export const Landing = () => {
  
  return (
    <>
    {/* Full-width header with centered content inside */}
      <header className="header">
        <div className="header-container">
          {/* Left: Logo + Title */}
          <div className="logo">
            <img src={logs} alt="Logo" className="h-6 w-6" />
            <h2>Lang Quiz</h2>
          </div>

          {/* Right: Navigation */}
          <nav className="main-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="#about">About</a></li>
               <button className='bg-gray-300 hover:bg-gray-500 rounded-4xl'>Sign Up</button>
               <button className='blue bg-blue-400 hover:bg-blue-500 rounded-4xl text-white'>Login </button>
            </ul>
              
          </nav>
        </div>
      </header>

      <main >
        <div className="landing-main">
          <div className="hero-content">
          <h1>Build a professional resume in minutes</h1>
          <p>
            Create, customize, and download a stunning resume that showcases your skills and experience.
            No design experience needed.
          </p>
          <Link className='text-center' to="/quiz/home">
            <button className='bg-blue-400 hover:bg-blue-500 rounded-4xl text-white'>Get Started for Free</button>
          </Link>
        </div>
        <div className="hero-image">
          {/* Replace with your own image or illustration */}
          <img src="https://media.istockphoto.com/id/1457290530/photo/asian-teenager-students-doing-robot-arm-and-robotic-cars-homework-project-in-house-using.jpg?s=612x612&w=0&k=20&c=UqJtQbOTZBu6Yw-JB9jHOxpgOCoB5in1W02JuxYlibY=" alt="Resume Illustration" />
        </div>
        </div>
        

        {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2>About Lang Quiz</h2>
          <p>
            Lang Quiz is an interactive platform designed to help you master programming languages through engaging quizzes and challenges.
            Whether you're a beginner or an experienced developer, our quizzes are tailored to enhance your learning experience and test your knowledge in a fun way.
          </p>
          <ul>
            <li>Wide range of language quizzes (HTML, JavaScript, Python, and more)</li>
            <li>Instant feedback and explanations</li>
            <li>Track your progress and improve over time</li>
            <li>Completely free to use!</li>
          </ul>
        </div>
      </section>
    </main>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <span>&copy; {new Date().getFullYear()} Lang Quiz. All rights reserved.</span>
          <nav>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </footer>
      
  </>
  )
}


export default Landing;
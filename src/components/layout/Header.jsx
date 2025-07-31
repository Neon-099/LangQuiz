import { Link } from 'react-router-dom'
import logs from '../../assets/logs.png'

export const Header = ({ 
  //PROPS  
  title = "Quiz", 
  showTimer = false, 
  timeCount = 0, 
  currentQuestion = 0, 
  totalQuestions = 0,
  onQuit = null,
  showProgress = false,
  
})   => {

  return (
    <header className={`bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo and Title */}
          <div className="flex items-center space-x-4">
            <Link to="/quiz/home" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src={logs} alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-800">Lang Quiz</span>
            </Link>
            {title && (
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-gray-400">/</span>
                <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
              </div>
            )}
          </div>

          {/* Center: Progress and Timer */}
          <div className="flex items-center space-x-6">
            {showProgress && (
              <div className="hidden sm:flex items-center space-x-3">
                <span className="text-sm text-gray-600">
                  Question {currentQuestion + 1} of {totalQuestions}
                </span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            {showTimer && (
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={`text-lg font-mono font-semibold ${timeCount <= 5 ? 'text-red-500' : 'text-gray-700'}`}>
                  {timeCount}s
                </span>
              </div>
            )}
          </div>

          {/* Right: Navigation and Actions */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/quiz/home" 
              className="text-gray-600 hover:text-gray-800 transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            {onQuit && (
              <button
                onClick={onQuit}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Quit Quiz
              </button>
            )}
          </div>
        </div>

        {/* Mobile Progress Bar */}
        {showProgress && (
          <div className="sm:hidden mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {totalQuestions}
              </span>
              {showTimer && (
                <span className={`text-sm font-mono font-semibold ${timeCount <= 5 ? 'text-red-500' : 'text-gray-700'}`}>
                  {timeCount}s
                </span>
              )}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header;
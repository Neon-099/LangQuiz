import cSharp from '../assets/cSharp.png'
import html from '../assets/html.png'
import python from '../assets/python.png'
import js from '../assets/js.png'
import jsReact from '../assets/jsReact.png'

export const CategorySection = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <h2 className='text-gray-800 text-4xl font-bold mb-4'>Categories</h2>
            <p className='text-gray-600 text-lg mb-12 max-w-2xl text-center'>
                Choose from our wide range of programming language quizzes
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-4xl'>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                        <img
                        className='w-16 h-16 mb-4' 
                        src={html} alt="html" />
                    <span className='text-sm font-medium text-gray-700'>HTML</span>
                    
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <img
                        className='w-16 h-16 mb-4' 
                        src={js} alt="javascript" />
                    <span className='text-sm font-medium text-gray-700'>JavaScript</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <img
                        className='w-16 h-16 mb-4' 
                        src={jsReact} alt="react" />
                    <span className='text-sm font-medium text-gray-700'>React</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <img
                        className='w-16 h-16 mb-4' 
                        src={cSharp} alt="c-sharp" />
                    <span className='text-sm font-medium text-gray-700'>C#</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <img
                        className='w-16 h-16 mb-4' 
                        src={python} alt="python" />
                    <span className='text-sm font-medium text-gray-700'>Python</span>
                </div>
            </div>  
        </div>
    )
} 

export default CategorySection;
import cSharp from '../assets/cSharp.png'
import html from '../assets/html.png'
import python from '../assets/python.png'
import js from '../assets/js.png'
import jsReact from '../assets/jsReact.png'
import '../App.css'
import { useState } from 'react'
import Search from '../components/SearchBar.jsx'


export const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <div className='flex flex-col justify-center items-center m-h-screen p-4'>
            <header className='flex flex-col justify-center items-center w-full max-w-5xl'>

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <h2 className=' text-black text-3xl my-8'>Categories</h2>
                
                <div className='grid grid-cols-5 gap-40 '>
                    <div className=" flex justify-center items-center custom-bg border-none rounded-2xl h-20 w-30">
                        <img
                            className=' w-16 h-16 ' 
                            src={html} alt="html" />
                        <link rel="stylesheet" href="#" />
                    </div>
                    <div className="flex justify-center items-center custom-bg border-none rounded-2xl h-20 w-30">
                        <img
                            className='w-16 h-16 ' 
                            src={js} alt="javascript" />
                        <link rel="stylesheet" href="#" />
                    </div>
                    <div className="flex justify-center items-center custom-bg border-none rounded-2xl h-20 w-30">
                        <img
                            className='w-16 h-16 ' 
                            src={jsReact} alt="react" />
                        <link rel="stylesheet" href="#" />
                    </div>
                    <div className="flex justify-center items-center custom-bg border-none rounded-2xl h-20 w-30">
                        <img
                            className='w-16 h-16 ' 
                            src={cSharp} alt="c-sharp" />
                        <link rel="stylesheet" href="#" />
                    </div>
                    <div className="flex justify-center items-center custom-bg border-none rounded-2xl h-20 w-30">
                        <img
                            className='w-16 h-16 ' 
                            src={python} alt="python" />
                        <link rel="stylesheet" href="#" />
                    </div>
                </div>  
            </header>
        </div>
    )
} 

export default Home;

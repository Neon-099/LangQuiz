import cSharp from '../assets/cSharp.png'
import html from '../assets/html.png'
import python from '../assets/python.png'
import js from '../assets/js.png'
import jsReact from '../assets/jsReact.png'
import '../App.css'
import { useState } from 'react'
import Search from '../components/SearchBar.jsx'
import SearchCard from '../components/SearchCard.jsx';
import { cards  } from '../data/CardData.js' 


export const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    

    const filteredCards = cards.filter(card => 
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='m-h-screen p-4'>
            <header className='flex flex-col justify-center items-center w-full max-w-5xl'>

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <h2 className='pr-125 text-black text-3xl my-8'>Categories</h2>
               
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
        
            <main>
                <h3 className='pr-40 text-2xl py-12 '>Recent Activity</h3>
                {filteredCards.length > 0 ? (
                    filteredCards.map((card) => (
                        <SearchCard 
                         key={card.id}
                         title={card.title}
                         image={card.image}
                         link={card.link}
                        />
                    ))
                ): (
                    <p className='text-xl text-red-300 span-full'> No cards found!</p>
                )}
            </main>
        </div>
    )
} 

export default Home;

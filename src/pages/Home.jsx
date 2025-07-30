import '../App.css'
import { use, useEffect, useState } from 'react'
import Search from '../components/SearchBar.jsx'
import SearchCard from '../components/SearchCard.jsx';
import  {cards}   from '../data/CardData.js' 
import CategorySection from '../components/Categories.jsx'

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");

   
    const filteredCards = cards.filter(card => 
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  
    return (
        <div className='flex flex-col justify-center items-center border min-h-screen'>
            <div className='flex justify-center items-center'>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
             </div>    
             {!searchTerm  &&(
                    <CategorySection />
                )}
                
           
        
            <main className='flex flex-col space-y-12'>
                <h3 className='text-start text-2xl py-12 '>Recent Activity</h3>
                {filteredCards.length > 0 ? (
                    filteredCards.map((card) => (
                       
                        <SearchCard 
                         key={card.id}
                         title={card.title}
                         image={card.image}
                         link={card.link}
                         total={card.items}
                        />
                    ))
                ) : (
                    <p className='text-xl text-red-300 span-full'> No cards found!</p>
                )}
            </main>
        </div>
    )
} 

export default Home;

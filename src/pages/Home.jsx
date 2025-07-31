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
        <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50'>
            {/* Hero Section */}
            <div className='bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16'>
                <div className='max-w-6xl mx-auto px-6'>
                    <div className='text-center mb-12'>
                        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                            Master Programming Languages
                        </h1>
                        <p className='text-xl text-blue-100 max-w-2xl mx-auto'>
                            Test your knowledge with interactive quizzes and track your progress
                        </p>
                    </div>
                </div>
            </div>

            {/* Search Bar - Separated with more space */}
            <div className='flex justify-center mt-8 mb-16'>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            {/* Categories Section */}
            {!searchTerm && (
                <div className='py-16 bg-white'>
                    <div className='max-w-6xl mx-auto px-6'>
                        <CategorySection />
                    </div>
                </div>
            )}
            
            {/* Recent Activity Section */}
            <div className='py-16 bg-gray-50'>
                <div className='max-w-4xl mx-auto px-6'>
                    <div className='mb-12'>
                        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Recent Activity</h2>
                        <p className='text-gray-600'>Continue where you left off or explore new topics</p>
                    </div>
                    
                    <div className='space-y-6'>
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
                            <div className='text-center py-12'>
                                <div className='bg-white rounded-lg shadow-sm p-8'>
                                    <p className='text-xl text-red-500'>No cards found!</p>
                                    <p className='text-gray-400 mt-2'>Try adjusting your search terms</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Home;

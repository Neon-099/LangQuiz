import { Link } from 'react-router-dom';


export const SearchCard = ( {link, title, image, total} ) => {
    return (
        <Link to={link} >
            <div className="flex items-center bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 my-6 group">
                <div className='flex-shrink-0 mr-6'>
                    <img
                     className='w-20 h-20 rounded-lg object-cover bg-gradient-to-br from-blue-50 to-indigo-100 p-3 group-hover:scale-105 transition-transform duration-300' 
                     src={image} alt={title} />
                </div>
                <div className='flex-1'>
                    <h2 className='text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300'>{title}</h2>
                    <p className='text-sm text-gray-500 flex items-center'>
                        <span className='inline-block w-2 h-2 bg-blue-400 rounded-full mr-2'></span>
                        {total} Questions
                    </p>
                </div>
                <div className='flex-shrink-0'>
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    )
}

export default SearchCard;
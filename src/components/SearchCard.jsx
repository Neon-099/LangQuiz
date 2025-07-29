import { Link } from 'react-router-dom';


export const SearchCard = ( {link, title, image, total} ) => {
    return (
        <Link to={link} >
            <div className="flex  items-start  my-3 bg-white shadow-md rounded p-4 hover:shadow-lg transition">
                <img
                 className='border-none bg-gray-300 rounded-md object-cover px-6 py-3 w-24  ' 
                 src={image} alt={title} />
                 <div className='flex flex-col items-baseline '>
                    <h2 className='text-xl font-semibold m-2 text-start'>{title}</h2>
                    <h4 className='text-sm'>{total} Questions</h4>
                 </div>
                
            </div>
        </Link>
    )
}

export default SearchCard;
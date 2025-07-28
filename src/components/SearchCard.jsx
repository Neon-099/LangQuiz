import { Link } from 'react-router-dom';


export const SearchCard = ( {link, title, image } ) => {
    return (
        <Link to={link} >
            <div className="my-3 bg-white shadow-md rounded p4 hover:shadow-lg transition">
                <img src={image} alt="" />
                <h2 className='text-xl font-bold mg-2'>{title}</h2>
            </div>
        </Link>
    )
}

export default SearchCard;
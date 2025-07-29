import vector from '../assets/vector.png'
export const Search = ( {searchTerm, setSearchTerm} ) => {
    
    return (
        <div>
            <input 
             className="w-full bg-white text-black border border-gray-300 pl-10 pr-24 py-2 mt-12 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
             type="text"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             placeholder="Search..."/>
            <img 
             className="absolute top-30 ml-3  h-6 w-6 "
             src={vector} alt="" />
        </div>
        
    )
}

export default Search;
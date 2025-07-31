import vector from '../assets/vector.png'
export const Search = ( {searchTerm, setSearchTerm} ) => {
    
    return (
        <div className="relative flex justify-center w-full max-w-lg">
            <input
                className="w-full bg-white text-gray-800 border-0 pl-12 pr-12 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-lg text-lg placeholder-gray-400"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for programming languages..."
            />
            <img
                src={vector}
                alt=""
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none opacity-60"
            />
        </div>
    )
}

export default Search;
import vector from '../assets/vector.png'
export const Search = ( {searchTerm, setSearchTerm} ) => {
    
    return (
        <div className="relative flex justify-center w-full max-w-md mt-12">
            <input
                className="w-full bg-white text-black border border-gray-300 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
            />
            <img
                src={vector}
                alt=""
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 pointer-events-none"
            />
        </div>
    )
}

export default Search;
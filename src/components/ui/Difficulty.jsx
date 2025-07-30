export const DifficultyCard  = ({ onSelect} ) => {
    return (
        <div className="flex gap-4 mb-6">
            {["easy", "medium", "hard"].map((level) => (
                <button
                    className="px-4 py-2 rounded bg-blue-500 text-white"
                    key={level}
                    onClick={() => onSelect(level)}>    
                    {level.toUpperCase()}
                </button>
            ))}
        </div>
    )
}

export default DifficultyCard ; 
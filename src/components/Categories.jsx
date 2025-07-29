import cSharp from '../assets/cSharp.png'
import html from '../assets/html.png'
import python from '../assets/python.png'
import js from '../assets/js.png'
import jsReact from '../assets/jsReact.png'


export const CategorySection = () => {
    return (
        <>
            <h2 className='pr-125 text-black text-3xl my-8'>Categories</h2>
            
            <div className='grid grid-cols-5 gap-40 '>
                <div className=" flex justify-center items-center custom-bg border-none rounded-2xl h-20 w-30">
                    <img
                        className=' w-16 h-16 ' 
                        src={html} alt="html" />
                </div>
                <div className="flex justify-center items-center custom-bg border-none rounded-2xl h-20 w-30">
                        <img
                            className='w-16 h-16 ' 
                            src={js} alt="javascript" />
                </div>
                <div className="flex justify-center items-center custom-bg border-none rounded-2xl h-20 w-30">
                    <img
                        className='w-16 h-16 ' 
                        src={jsReact} alt="react" />
                </div>
                <div className="flex justify-center items-center custom-bg border-none rounded-2xl h-20 w-30">
                    <img
                        className='w-16 h-16 ' 
                        src={cSharp} alt="c-sharp" />
                </div>
                <div className="flex justify-center items-center custom-bg border-none rounded-2xl h-20 w-30">
                    <img
                        className='w-16 h-16 ' 
                        src={python} alt="python" />
                </div>
            </div>  
        </>
    )
} 

export default CategorySection;
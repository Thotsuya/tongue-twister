function DocumentProcess({ stepNumber, title, description, isHovered, setIsHovered, svgIcon }) {
    return (
        <div className=" group cursor-pointer  flex mt-2 md:mt-0 w-[40%] sm:w-[25%] h-[300px] overflow-hidden transition-all duration-700 ease-in-out hover:w-[60%] hover:md:w-[40%] "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="rounded-2xl flex flex-col justify-around items-center bg-primary text-white transition transform ease-linear duration-300 px-3 group-hover:bg-[#FFF] group-hover:text-[#262626] group-hover:shadow-none group-hover:border-2">
                <div>
                    <h1>{stepNumber}</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className="text-xs flex justify-center w-[67px] font-semibold text-center">
                        {title}
                    </h1>
                    <span>
                        {isHovered ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='rotate-180' width="38" height="38" color="#262626" fill="none">
                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="#ffffff" fill="none">
                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                    </span>
                </div>
            </div>
            <div className="transition-all duration-500 opacity-0 overflow-hidden group-hover:opacity-100 flex flex-col justify-around ">
                <div className='flex justify-center '>{svgIcon}</div>
                <div className="text-sm text-start font-semibold">
                    <h1 className='text-[#262626] '>{description} </h1>
                </div> 
            </div> 
        </div> 
    )
}

export default DocumentProcess; 
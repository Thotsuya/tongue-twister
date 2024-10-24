import { useState } from 'react';


function ServiceCard({ title, description, icon, imgSrc }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='flex rounded-xl bg-primary h-[400px] sm:h-[420px] md:h-[490px] lg:h-[330px] shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] w-[90%]  sm:mx-auto sm:w-[45%] md:w-[30%] cursor-pointer '
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className='flex-grow w-[50%] text-[#FFF] flex flex-col justify-around items-center '>
                <div>
                    {icon} 
                </div>
                <div>
                    <h1 className='sm:text-xl font-bold text-center'>{title}</h1>
                    <p className='text-clip text-xs text-center'>{description}</p>
                </div>
                <div>
                    {isHovered ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='rotate-180' width="38" height="38" color="#ffff" fill="none">
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="#ffffff" fill="none">
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </div>
            </div>
            <div className={` overflow transition-all duration-500 ease-in-out ${isHovered ? 'w-[50%]' : 'w-0'}`}>
                <img
                    src={imgSrc}
                    className='w-full rounded-r-xl h-full object-cover object-center'
                    alt={title}
                />
            </div>
        </div>
    );
}

export default ServiceCard;
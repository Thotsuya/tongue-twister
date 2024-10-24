import React from 'react';

const TestimonialCard = ({ image, name, role, company, rating, text }) => {
    return (
        <div className='cursor-pointer  mx-3 w-[80%] sm:w-[40%] flex-shrink-0 flex flex-col items-center gap-8 rounded-lg bg-white text-black p-4 transition transform ease-in-out sm:hover:scale-105 duration-300 '>


            <div className=''>
                <p className='text-sm sm:text-base'>
                    {text}
                </p>
            </div>
            <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                    index + 1 <= rating ? (
                        <svg
                            key={`filled-${index}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="#FFD700"
                        >
                            <polygon
                                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                                stroke="#FFD700"
                                strokeWidth="1"
                            />
                        </svg>
                    ) : (
                        <svg
                            key={`empty-${index}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="none"
                        >
                            <polygon
                                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                                stroke="#FFD700"
                                strokeWidth="1"
                            />
                        </svg>
                    )
                ))}
            </div>
            <div className="clientImg flex flex-col justify-start items-center">
                <div>
                    <svg className='maleSvg' fill="#000000" viewBox="0 0 32 32" width={60} height={60} xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                id="_inner-path_"
                                d="M8.0071,24.93A4.9958,4.9958,0,0,1,13,20h6a4.9959,4.9959,0,0,1,4.9929,4.93,11.94,11.94,0,0,1-15.9858,0Z"
                                fill="none"
                            />
                            <path
                                d="M26.7489,24.93A13.9893,13.9893,0,1,0,2,16a13.899,13.899,0,0,0,3.2511,8.93l-.02.0166c.07.0845.15.1567.2222.2392.09.1036.1864.2.28.3008.28.3033.5674.5952.87.87.0915.0831.1864.1612.28.2417.32.2759.6484.5372.99.7813.0441.0312.0832.0693.1276.1006v-.0127a13.9011,13.9011,0,0,0,16,0V27.48c.0444-.0313.0835-.0694.1276-.1006.3412-.2441.67-.5054.99-.7813.0936-.08.1885-.1586.28-.2417.3025-.2749.59-.5668.87-.87.0933-.1006.1894-.1972.28-.3008.0719-.0825.1522-.1547.2222-.2392ZM16,8a4.5,4.5,0,1,1-4.5,4.5A4.5,4.5,0,0,1,16,8ZM8.0071,24.93A4.9957,4.9957,0,0,1,13,20h6a4.9958,4.9958,0,0,1,4.9929,4.93,11.94,11.94,0,0,1-15.9858,0Z"
                            />
                        </g>
                    </svg>


                </div>
                <div className='flex flex-col justify-start items-center'>
                    <span className='font-semibold text-primary'>{name}</span>  {role} at {company}
                </div>
            </div>

        </div>
    );
};

export default TestimonialCard;
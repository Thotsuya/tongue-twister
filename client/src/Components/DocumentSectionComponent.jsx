

export default function DocumentSectionComponent({ title, icon, description, isOpen, onToggle }) {
    return (
        <div className={`p-4 ${isOpen ? 'border-1 shadow-xl rounded-md' : ''}`}>
            <div role="button" onClick={onToggle} className={`border-1 p-2 flex cursor-pointer items-center justify-between ${isOpen ? "" : "shadow rounded-md"}`} aria-expanded={isOpen}>
                <div className='flex items-center gap-2 '>
                    <div className={`rounded-full bg=red-900 text-primary  `}>
                        {icon}
                    </div>

                    <div className=''>
                        <h1 className="text-5xl flex items-center gap-2 text-primary font-semibold">
                            {title}
                        </h1>
                    </div>
                </div> 
                <button className="text-[40px] text-primary" aria-label={`Toggle ${title}`}>
                    {isOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="#01185B" fill="none">
                            <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-180" viewBox="0 0 24 24" width="38" height="38" color="#01185B" fill="none">
                            <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    }
                </button>
            </div>
            <div className={`transition-all duration-500 ease-in-out mt-2 overflow-hidden ${isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
                <p>{description}</p>
            </div>
        </div>
    );
};


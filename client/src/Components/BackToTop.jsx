import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () =>
             window.removeEventListener('scroll', handleScroll);

    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {isVisible && ( 
                <button
                    onClick={scrollToTop}
                    aria-label='Back to top'
                    className='fixed bottom-[0px] right-[0px] 
                            shadow-2xl  border-2 border-white
                            py-[5px] px-[15px] text-[1.2rem] rounded-t-lg bg-primary text-white'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                        <path d="M12 4L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.9998 8.99996C16.9998 8.99996 13.3174 4.00001 11.9998 4C10.6822 3.99999 6.99982 9 6.99982 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            )}
        </div>
    );
};
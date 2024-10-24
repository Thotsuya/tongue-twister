import './Navbar.css';
import logo from '../assets/images/logo.webp'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [navItems, setNavItems] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    function toogleNavbar() {
        setNavItems(!navItems)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100.99999999999999) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav
            className={`navbar z-20 flex  items-center justify-around ${isScrolled ? 'p-[3px]' : 'px-4 py-5'}`}>
            <div className="logo  className='bg-red-500 px-2">

                <Link to="/">
                    <img src={logo} alt="logo-will-appear-here" width={"145px"} height={"65px"} />
                </Link>
                <button className="navbar-toggler" onClick={toogleNavbar} aria-label={navItems ? "Close menu" : "Open menu"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" transform="matrix(-1, 0, 0, -1, 0, 0)">
                        {navItems ? (
                            <>
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_02"> <path id="Vector" d="M11 17H19M5 12H19M11 7H19" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g>
                            </>
                        ) : (
                            <>
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                            </>
                        )}
                    </svg>
                </button>
            </div>
            <div className={`nav-items ${navItems ? "close" : "open"} ${isScrolled ? 'top-[84px] lg:top-0' : 'top-[110px]  lg:top-0'} cursor-pointer `} >
                <div className="nav-links">
                    <div className="hover:text-secondary  ">
                        <div className='childLink'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#00175A" fill="none">
                                    <path d="M9.37866 3.83307L9.21729 2.88021C9.14611 2.45991 9.11052 2.24976 8.95858 2.12488C8.80664 2 8.58655 2 8.14636 2H7.85617C7.41598 2 7.19589 2 7.04395 2.12488C6.89202 2.24976 6.85643 2.45991 6.78525 2.88021L6.62387 3.83307C6.28266 3.96639 5.96616 4.14778 5.68298 4.36874L4.7826 4.03678C4.3673 3.88367 4.15966 3.80712 3.97059 3.87291C3.78152 3.93869 3.67182 4.12567 3.45243 4.49963L3.29194 4.77319C3.07837 5.13722 2.97159 5.31924 3.00653 5.50636C3.04146 5.69349 3.20731 5.82785 3.53901 6.09658L4.30581 6.7178C4.28019 6.89156 4.26694 7.06926 4.26694 7.25C4.26694 7.4314 4.28029 7.60974 4.30609 7.7841L3.5411 8.40386C3.2094 8.67259 3.04355 8.80695 3.00861 8.99408C2.97367 9.1812 3.08046 9.36322 3.29402 9.72725L3.45451 10.0008C3.6739 10.3748 3.7836 10.5617 3.97267 10.6275C4.16174 10.6933 4.36939 10.6168 4.78468 10.4637L5.68403 10.1321C5.96694 10.3527 6.28308 10.5338 6.62387 10.6669L6.78524 11.6198C6.85643 12.0401 6.89202 12.2502 7.04395 12.3751C7.19589 12.5 7.41598 12.5 7.85617 12.5H8.14636C8.58655 12.5 8.80664 12.5 8.95858 12.3751C9.11051 12.2502 9.14611 12.0401 9.21729 11.6198L9.37866 10.6669C9.71912 10.5339 10.035 10.353 10.3177 10.1327L11.2153 10.4637C11.6306 10.6168 11.8383 10.6933 12.0273 10.6275C12.2164 10.5617 12.3261 10.3748 12.5455 10.0008L12.706 9.72725C12.9195 9.36322 13.0263 9.1812 12.9914 8.99408C12.9565 8.80695 12.7906 8.67259 12.4589 8.40386L11.6962 7.78593C11.7221 7.61099 11.7356 7.43204 11.7356 7.25C11.7356 7.06862 11.7222 6.89031 11.6965 6.71597L12.461 6.09658C12.7927 5.82785 12.9585 5.69349 12.9935 5.50636C13.0284 5.31924 12.9216 5.13722 12.7081 4.77319L12.5476 4.49963C12.3282 4.12567 12.2185 3.93869 12.0294 3.87291C11.8403 3.80712 11.6327 3.88367 11.2174 4.03678L10.3187 4.3681C10.0358 4.14743 9.71954 3.96626 9.37866 3.83307Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M17.3787 13.3331L17.2173 12.3802C17.1461 11.9599 17.1105 11.7498 16.9586 11.6249C16.8066 11.5 16.5866 11.5 16.1464 11.5H15.8562C15.416 11.5 15.1959 11.5 15.044 11.6249C14.892 11.7498 14.8564 11.9599 14.7852 12.3802L14.6239 13.3331C14.2827 13.4664 13.9662 13.6478 13.683 13.8687L12.7826 13.5368C12.3673 13.3837 12.1597 13.3071 11.9706 13.3729C11.7815 13.4387 11.6718 13.6257 11.4524 13.9996L11.2919 14.2732C11.0784 14.6372 10.9716 14.8192 11.0065 15.0064C11.0415 15.1935 11.2073 15.3279 11.539 15.5966L12.3058 16.2178C12.2802 16.3916 12.2669 16.5693 12.2669 16.75C12.2669 16.9314 12.2803 17.1097 12.3061 17.2841L11.5411 17.9039C11.2094 18.1726 11.0435 18.307 11.0086 18.4941C10.9737 18.6812 11.0805 18.8632 11.294 19.2272L11.4545 19.5008C11.6739 19.8748 11.7836 20.0617 11.9727 20.1275C12.1617 20.1933 12.3694 20.1168 12.7847 19.9637L13.684 19.6321C13.9669 19.8527 14.2831 20.0338 14.6239 20.1669L14.7852 21.1198C14.8564 21.5401 14.892 21.7502 15.044 21.8751C15.1959 22 15.416 22 15.8562 22H16.1464C16.5866 22 16.8066 22 16.9586 21.8751C17.1105 21.7502 17.1461 21.5401 17.2173 21.1198L17.3787 20.1669C17.7191 20.0339 18.035 19.853 18.3177 19.6327L19.2153 19.9637C19.6306 20.1168 19.8383 20.1933 20.0273 20.1275C20.2164 20.0617 20.3261 19.8748 20.5455 19.5008L20.706 19.2272C20.9195 18.8632 21.0263 18.6812 20.9914 18.4941C20.9565 18.307 20.7906 18.1726 20.4589 17.9039L19.6962 17.2859C19.7221 17.111 19.7356 16.932 19.7356 16.75C19.7356 16.5686 19.7222 16.3903 19.6965 16.216L20.461 15.5966C20.7927 15.3279 20.9585 15.1935 20.9935 15.0064C21.0284 14.8192 20.9216 14.6372 20.7081 14.2732L20.5476 13.9996C20.3282 13.6257 20.2185 13.4387 20.0294 13.3729C19.8403 13.3071 19.6327 13.3837 19.2174 13.5368L18.3187 13.8681C18.0358 13.6474 17.7195 13.4663 17.3787 13.3331Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M8.75 7.25C8.75 7.66421 8.41421 8 8 8C7.58579 8 7.25 7.66421 7.25 7.25C7.25 6.83579 7.58579 6.5 8 6.5C8.41421 6.5 8.75 6.83579 8.75 7.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M16.75 16.75C16.75 17.1642 16.4142 17.5 16 17.5C15.5858 17.5 15.25 17.1642 15.25 16.75C15.25 16.3358 15.5858 16 16 16C16.4142 16 16.75 16.3358 16.75 16.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <h1 className='text-primary text-lg'>
                                    Services
                                </h1>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#00175A" fill="none">
                                    <path d="M6 9 L12 15 L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="dropDownMenu text-">
                        <ul>
                            <Link className="servicesLink font-semibold text-1xl hover:text-secondary " to="/services-document-localization">
                                Document Localization
                            </Link>
                            <Link className="servicesLink hover:text-secondary  font-semibold" to="services-audio-video-localization">
                                Audiovisual Localization
                            </Link>
                        </ul>
                    </div>
                </div>
                <Link to="/expertise" className="nav-links hover:text-secondary ">
                    <span className="childLink  font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#00175A" fill="none">
                            <path d="M6.08938 14.9992C5.71097 14.1486 5.5 13.2023 5.5 12.2051C5.5 8.50154 8.41015 5.49921 12 5.49921C15.5899 5.49921 18.5 8.50154 18.5 12.2051C18.5 13.2023 18.289 14.1486 17.9106 14.9992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M12 1.99921V2.99921" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 11.9992H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 11.9992H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.0704 4.92792L18.3633 5.63503" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.6368 5.636L4.92969 4.92889" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.517 19.3056C15.5274 18.9788 15.9326 18.054 16.0466 17.1238C16.0806 16.8459 15.852 16.6154 15.572 16.6154L8.47685 16.6156C8.18725 16.6156 7.95467 16.8614 7.98925 17.1489C8.1009 18.0773 8.3827 18.7555 9.45345 19.3056M14.517 19.3056C14.517 19.3056 9.62971 19.3056 9.45345 19.3056M14.517 19.3056C14.3955 21.2506 13.8338 22.0209 12.0068 21.9993C10.0526 22.0354 9.60303 21.0833 9.45345 19.3056" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h1 className='text-primary text-lg'>
                            Expertise
                        </h1>
                    </span>
                </Link>
                <Link to="/languages" className="nav-links hover:text-secondary ">
                    <span className="childLink font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#00175A" fill="none">
                            <path d="M5 5.96552H8.15M12 5.96552H10.25M8.15 5.96552H10.25M8.15 5.96552V5M10.25 5.96552C9.88076 7.28593 9.10754 8.53411 8.225 9.63103M5.975 12C6.68843 11.344 7.4942 10.5394 8.225 9.63103M8.225 9.63103C7.775 9.10345 7.145 8.24984 6.965 7.86364M8.225 9.63103L9.575 11.0345" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.02231 16.9777C7.07674 18.6978 7.26397 19.7529 7.90796 20.5376C8.07418 20.7401 8.25989 20.9258 8.46243 21.092C9.56878 22 11.2125 22 14.5 22C17.7875 22 19.4312 22 20.5376 21.092C20.7401 20.9258 20.9258 20.7401 21.092 20.5376C22 19.4312 22 17.7875 22 14.5C22 11.2125 22 9.56878 21.092 8.46243C20.9258 8.25989 20.7401 8.07418 20.5376 7.90796C19.7563 7.26676 18.707 7.07837 17 7.02303M7.02231 16.9777C5.30217 16.9233 4.24713 16.736 3.46243 16.092C3.25989 15.9258 3.07418 15.7401 2.90796 15.5376C2 14.4312 2 12.7875 2 9.5C2 6.21252 2 4.56878 2.90796 3.46243C3.07418 3.25989 3.25989 3.07418 3.46243 2.90796C4.56878 2 6.21252 2 9.5 2C12.7875 2 14.4312 2 15.5376 2.90796C15.7401 3.07418 15.9258 3.25989 16.092 3.46243C16.736 4.24713 16.9233 5.30217 16.9777 7.02231C16.9777 7.02231 16.9777 7.02231 17 7.02303M7.02231 16.9777L17 7.02303" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M13 19L13.8333 17M18 19L17.1667 17M13.8333 17L15.5 13L17.1667 17M13.8333 17H17.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h1 className='text-primary text-lg'>
                            Languages
                        </h1>
                    </span>
                </Link>

                <Link to="/about-us" className="nav-links hover:text-secondary">
                    <span className="childLink font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#00175A" fill="none">
                            <path d="M17 15.8462C17 14.8266 17.8954 14 19 14C20.1046 14 21 14.8266 21 15.8462C21 16.2137 20.8837 16.5561 20.6831 16.8438C20.0854 17.7012 19 18.5189 19 19.5385V20M18.9902 22H18.9992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C8.12805 13.9629 11.2057 13.6118 14 14.4281" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>

                        <h1 className='text-primary text-lg'>
                            About
                        </h1>
                    </span>
                </Link>

                <Link to="/contact" className="flex mt-4 sm:mt-0 text-end relative items-center contactButton drop-shadow-xl text-white rounded-md transform transition duration-300 ease-in-out sm:hover:scale-105">
                    <div className=" absolute left-[0px] lg:left-[-32px] bg-white p-4  border-[3px] border-primary text-primary rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#01185B" fill="none">
                            <path d="M11.9955 12H12.0045M8 12H8.00897" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C12.6849 2 13.3538 2.0659 14 2.19142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.8386 2.47645L21.5309 3.16882C22.1167 3.7546 22.1167 4.70435 21.5309 5.29013L17.9035 8.9858C17.6182 9.27115 17.2532 9.46351 16.8565 9.53759L14.6084 10.0256C14.2534 10.1027 13.9373 9.78753 14.0134 9.43236L14.4919 7.19703C14.566 6.80035 14.7583 6.43535 15.0437 6.15L18.7173 2.47645C19.303 1.89066 20.2528 1.89066 20.8386 2.47645Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="px-2 py-3 ml-4 font-semibold rounded-xl w-[152px] md:w-[160px] lg:w-[130px] bg-primary">
                        <h1>Contact us</h1>
                    </div>
                </Link>
            </div>

            <div className={`w-[85%] absolute border-b  ${isScrolled ? 'bottom-0' : 'bottom-1'}`}>
            </div>
        </nav>
    );
}
export default Navbar;
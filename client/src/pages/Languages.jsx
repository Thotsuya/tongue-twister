import { useEffect, useRef, useState } from 'react';
import useOnScreen from './useOnScreen.jsx';

//images
import HeroIMG from '../assets/images/LanguagesPageImage.webp'
import AI1 from '../assets/images/AI/langaugePage/ai1.webp'
import AI2 from '../assets/images/AI/langaugePage/ai2.webp'
import { Link } from 'react-router-dom';

const ReadMoreText = ({ text, limit }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => setIsReadMore(!isReadMore);

    const textToShow = isReadMore ? text.split(" ").slice(0, limit).join(" ") + "..." : text;

    return (
        <p className='text-primary'>
            {textToShow}
            <br />
            {text.split(" ").length > limit && (
                <button type='button' onClick={toggleReadMore} className="text-white  border p-2 rounded-md bg-primary cursor-pointer font-extrabold mt-4">
                    {isReadMore ? " Read More" : " Show Less"}
                </button>
            )}
        </p>
    );
}; 

export default function Languages() {
    const sectionRef0 = useRef(10);
    const sectionRef1 = useRef(10);
    const sectionRef2 = useRef(10);
    const sectionRef3 = useRef(10);
    const sectionRef4 = useRef(10);
    const sectionRef5 = useRef(10);
    const sectionRef6 = useRef(10);
    const sectionRef7 = useRef(10);
    const isVisible0 = useOnScreen(sectionRef0);
    const isVisible1 = useOnScreen(sectionRef1);
    const isVisible2 = useOnScreen(sectionRef2);
    const isVisible3 = useOnScreen(sectionRef3);
    const isVisible4 = useOnScreen(sectionRef4);
    const isVisible5 = useOnScreen(sectionRef5);
    const isVisible6 = useOnScreen(sectionRef6);
    const isVisible7 = useOnScreen(sectionRef7);



    useEffect(() => {
        document.title = "Our Languages | Tongue Twist";
        const metaDescription = document.querySelector('meta[name="description"]');

        if (metaDescription) {
            metaDescription.setAttribute("content", "Explore langauges offered by Tongue Twist, our solutions, and services we offer.");
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = "Explore langauges offered by Tongue Twist, our solutions, and services we offer.";
            document.head.appendChild(meta);
        }
    }, []);
    return (
        <main>
            <section className='pt-28  bg-primary sm:clip-ellipse overflow-hidden'>
                <div ref={sectionRef0} className=' sm:flex items-center justify-around'>
                    <div className={`sm:w-[45%] mx-4 text-center sm:text-start text-white transform transition-transform duration-1000 ease-in-out ${isVisible0 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                        <h1 className='text-3xl sm:text-1xl font-bold'><span className='text-secondary'>Languages</span> Offered</h1>
                        <p className='text-sm sm:text-base'>Tongue Twist provides expert translation services in a wide array of languages, ensuring that your message is conveyed accurately and effectively.
                        </p>
                        <p className='mt-4 flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ff3c33" fill="none">
                                <path d="M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M8.5 9.5L12 13L21.0002 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p>Fast Trunarounds Times, Delivery within 24 hours </p>
                        </p>
                        <p className='mt-4 flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ff3c33" fill="none">
                                <path d="M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M8.5 9.5L12 13L21.0002 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p>Accepted Worldwide with Word-for-Word Accuracy </p>
                        </p>
                        <p className='mt-4 flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ff3c33" fill="none">
                                <path d="M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M8.5 9.5L12 13L21.0002 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p>24/7 Customer Support</p>
                        </p>
                        {/* Our team of professional translators delivers precise and culturally sensitive translations, helping you communicate clearly in any language and context.</p> */}
                    </div>
                    <div className={`sm:w-[45%] mt-8 sm:mt-0 transform transition-transform duration-1000 ease-in-out ${isVisible0 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        <div>
                            <div className='relative flex justify-center'>
                                <img src={HeroIMG} height={"360px"} width={"360px"} alt="A cupboard of files" className='rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]' />
                                <div className='absolute languagesInfo right-0 md:right-0  lg:right-10 bottom-[-30px] shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] bg-secondary w-fit p-2 rounded-md flex flex-col items-center'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#00175A" fill="none">
                                            <path d="M5 5.82759H7.7M11 5.82759H9.5M7.7 5.82759H9.5M7.7 5.82759V5M9.5 5.82759C9.18351 6.95937 8.52075 8.02923 7.76429 8.96946M5.83571 11C6.44723 10.4377 7.13788 9.74802 7.76429 8.96946M7.76429 8.96946C7.37857 8.51724 6.83857 7.78558 6.68429 7.45455M7.76429 8.96946L8.92143 10.1724" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.5 19L14.3333 17M18.5 19L17.6667 17M14.3333 17L16 13L17.6667 17M14.3333 17H17.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 10V8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8C2 10.8284 2 12.2426 2.87868 13.1213C3.75736 14 5.17157 14 8 14H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M10 16C10 13.1716 10 11.7574 10.8787 10.8787C11.7574 10 13.1716 10 16 10C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22C13.1716 22 11.7574 22 10.8787 21.1213C10 20.2426 10 18.8284 10 16Z" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M4 16.5C4 17.9045 4 18.6067 4.33706 19.1111C4.48298 19.3295 4.67048 19.517 4.88886 19.6629C5.39331 20 6.09554 20 7.5 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M20 7.5C20 6.09554 20 5.39331 19.6629 4.88886C19.517 4.67048 19.3295 4.48298 19.1111 4.33706C18.6067 4 17.9045 4 16.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h2 className='font-extrabold text-5xl text-primary'>17+</h2>
                                    <p className='text-primary font-extrabold'>Languages</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-28 WaveSection '>
                    <div className="waves ">
                        <div className="wave" id="wave1"></div>
                        <div className="wave " id="wave2"></div>
                        <div className="wave" id="wave3"></div>
                        <div className="wave" id="wave4"></div>
                    </div>
                </div>
            </section>


            <section ref={sectionRef1} className=' mt-40 overflow-hidden'>
                <div className='flex flex-col-reverse sm:flex-row items-center justify-around'>
                    <div className={` sm:w-[45%] flex mt-4 sm:mt-0 transform transition-transform duration-[2s] ease-in-out ${isVisible1 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                        <div className='relative mx-auto'>
                            <img
                                src={AI1}
                                alt="Girl With Headst"
                                width={"400px"}
                                height={"400px"}
                                className='rounded-md rotate shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]'
                            />
                            <div className='bg-white w-fit p-4 flex gap-2 items-center rounded-xl absolute top-5 md:left-4 bg-opacity-[0.9]'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="none"
                                >
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C7.52232 2 3.77426 4.94289 2.5 9H5"
                                        color='#00175A'
                                        stroke="#00175A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 8V12L14 14"
                                        stroke="#00175A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 12C2 12.3373 2.0152 12.6709 2.04494 13M9 22C8.6584 21.8876 8.32471 21.7564 8 21.6078M3.20939 17C3.01655 16.6284 2.84453 16.2433 2.69497 15.8462M4.83122 19.3065C5.1369 19.6358 5.46306 19.9441 5.80755 20.2292"
                                        stroke="#00175A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className='font-semibold text-6xl sm:text-5xl text-secondary'>
                                    24/7 Support
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`sm:w-[45%] mx-4 transform transition-transform duration-1000 ease-in-out ${isVisible1 ? 'translate-y-0 opacity-100' : 'translate-y-full   opacity-0'}`}
                    >
                        <h1 className='text-3xl sm:text-1xl font-extrabold text-primary text-center sm:text-start'>
                            Explore Our Comprehensive <span className='text-secondary'> Language Services</span>
                        </h1>
                        <p className='text-sm sm:text-base text-center sm:text-start'>
                            At Tongue Twist, we are dedicated to breaking language barriers with our extensive range of language services with 24/7 support. Our mission is to provide not just translations but a complete linguistic transformation that resonates with the target audience, ensuring clarity, cultural relevance, and precision.
                        </p>
                    </div>
                </div>
            </section>



            <section ref={sectionRef2} className='mt-40 overflow-hidden'>

                <div className='flex justify-center'>
                    <div className='sm:w-[70%] self-center'>
                        <h1 className='text-3xl sm:text-1xl font-extrabold text-center text-primary'>
                            <span className='text-secondary'>Tailored Solutions</span> in Every Language
                        </h1>
                        <p className='text-center text-xs sm:text-base'>
                            Understanding that each industry has unique linguistic needs, we specialize in providing tailored language services for various sectors.
                        </p>
                    </div>
                </div>

                <div className='mt-10 sm:flex justify-around items-center'>
                    <div className={`sm:w-[45%] text-center sm:text-start flex mt-4 sm:mt-0 transform transition-transform duration-1000 ease-in-out ${isVisible2 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                        <p className='text-base sm:text-lg'>
                            Offering precise and specialized translations across various languages and industries,
                            including Medical & Healthcare
                            for clinical trials, patient information, and medical
                            research documents; Legal for contracts, legal documents, and compliance
                            materials; Technology & Engineering for technical manuals, software localization,
                            and engineering documents; Finance & Business for
                            financial reports, business proposals,
                            and market research; and Education & E-Learning
                            for textbooks, online courses, and educational materials</p>
                    </div>
                    <div className={`sm:w-[35%] mx-4 transform transition-transform duration-1000 ease-in-out ${isVisible2 ? 'translate-x-0 opacity-100' : 'translate-x-full  opacity-0'}`}>
                        <div className='flex justify-center'>
                            <img
                                src={AI2}
                                alt=""
                                width={"400px"}
                                height={"400px"}
                                className='rounded-md rotate shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]'
                            />
                        </div>
                    </div>
                </div>

            </section>


            <section className='mt-40 flex flex-col items-center overflow-hidden'>
                <div className='text-center sm:w-[45%]'>
                    <h1 className='text-3xl sm:text-1xl text-primary font-extrabold'>Why Choose <span className='text-secondary'> Tongue Twist </span>for Your Multilingual Needs?</h1>
                </div>
                <div ref={sectionRef3} className="pb-10 flex mt-5 flex-wrap gap-y-9 items-center justify-around">
                    <div className={`w-[90%] sm:w-[45%] lg:w-[40%] transition-transform ease-in-out duration-1000 cursor-pointer ${isVisible3 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                        <div className={`h-[390px] lg:h-[330px] py-5 px-5 justify-around flex flex-col items-center rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.2)]  text-center transition-transform ease-in-out sm:hover:scale-105 duration-300 cursor-pointer `}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                                    <path d="M10 13.3333C10 13.0233 10 12.8683 10.0341 12.7412C10.1265 12.3961 10.3961 12.1265 10.7412 12.0341C10.8683 12 11.0233 12 11.3333 12H12.6667C12.9767 12 13.1317 12 13.2588 12.0341C13.6039 12.1265 13.8735 12.3961 13.9659 12.7412C14 12.8683 14 13.0233 14 13.3333V14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14V13.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.9 13.5H15.0826C16.3668 13.5 17.0089 13.5 17.5556 13.3842C19.138 13.049 20.429 12.0207 20.9939 10.6455C21.1891 10.1704 21.2687 9.59552 21.428 8.4457C21.4878 8.01405 21.5177 7.79823 21.489 7.62169C21.4052 7.10754 20.9932 6.68638 20.4381 6.54764C20.2475 6.5 20.0065 6.5 19.5244 6.5H4.47562C3.99351 6.5 3.75245 6.5 3.56187 6.54764C3.00682 6.68638 2.59477 7.10754 2.51104 7.62169C2.48229 7.79823 2.51219 8.01405 2.57198 8.4457C2.73128 9.59552 2.81092 10.1704 3.00609 10.6455C3.571 12.0207 4.86198 13.049 6.44436 13.3842C6.99105 13.5 7.63318 13.5 8.91743 13.5H10.1" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M3.5 11.5V13.5C3.5 17.2712 3.5 19.1569 4.60649 20.3284C5.71297 21.5 7.49383 21.5 11.0556 21.5H12.9444C16.5062 21.5 18.287 21.5 19.3935 20.3284C20.5 19.1569 20.5 17.2712 20.5 13.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.5 6.5L15.4227 6.14679C15.0377 4.38673 14.8452 3.50671 14.3869 3.00335C13.9286 2.5 13.3199 2.5 12.1023 2.5H11.8977C10.6801 2.5 10.0714 2.5 9.61309 3.00335C9.15478 3.50671 8.96228 4.38673 8.57727 6.14679L8.5 6.5" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold text-primary">Expert Linguists</h1>
                            </div>
                            <div >
                                <ReadMoreText limit={14} text="Our translators aren't just fluent in the languages they work with; they are also subject matter experts in their respective fields, ensuring your content is handled with the highest level of expertise." />
                            </div>
                        </div>
                        <div className={`mt-8 h-[390px] lg:h-[330px] py-5 px-5 justify-around flex flex-col items-center rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.2)]  text-center transition-transform ease-in-out sm:hover:scale-105 duration-300 cursor-pointer `}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                                    <path d="M7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465M7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C5.34315 19.5 4 18.1569 4 16.5C4 15.9313 4.15822 15.3996 4.43304 14.9465M7 4.5C7 5.31791 7.39278 6.04408 8 6.50018M4.43304 14.9465C4.78948 14.3588 5.34207 13.9032 6 13.6707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.25 4.74976L17 6.99976H15M18.5 4.74976C18.5 5.16397 18.8358 5.49976 19.25 5.49976C19.6642 5.49976 20 5.16397 20 4.74976C20 4.33554 19.6642 3.99976 19.25 3.99976C18.8358 3.99976 18.5 4.33554 18.5 4.74976Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.25 19.2498L17 16.9998H15M18.5 19.2498C18.5 18.8355 18.8358 18.4998 19.25 18.4998C19.6642 18.4998 20 18.8355 20 19.2498C20 19.664 19.6642 19.9998 19.25 19.9998C18.8358 19.9998 18.5 19.664 18.5 19.2498Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.25 11.9998H15M18.5 11.9998C18.5 12.414 18.8358 12.7498 19.25 12.7498C19.6642 12.7498 20 12.414 20 11.9998C20 11.5855 19.6642 11.2498 19.25 11.2498C18.8358 11.2498 18.5 11.5855 18.5 11.9998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold text-primary">Cultural Sensitivity</h1>
                            </div>
                            <div>
                                <ReadMoreText limit={14} text="We go beyond word-for-word translation. Our team ensures that your content is culturally adapted to resonate with the target audience, maintaining the message's intent and impact." />
                            </div>
                        </div>

                    </div>
                    <div className={`w-[90%] sm:w-[45%] lg:w-[40%] transition-transform ease-in-out duration-1000 cursor-pointer ${isVisible3 ? 'translate-x-0 opacity-100' : 'translate-x-full  opacity-0'}`}>

                        <div className={`h-[390px] lg:h-[330px] py-5 px-5 justify-around flex flex-col items-center rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.2)]  text-center transition-transform ease-in-out sm:hover:scale-105 duration-300 cursor-pointer `}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                                    <path d="M20 22.0002V17.0002C20 15.1146 20 14.1718 19.4142 13.586C18.8284 13.0002 17.8856 13.0002 16 13.0002L12 22.0002L8 13.0002C6.11438 13.0002 5.17157 13.0002 4.58579 13.586C4 14.1718 4 15.1146 4 17.0002V22.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 15L11.5 19L12 20.5L12.5 19L12 15ZM12 15L11 13H13L12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.5 6.50012V5.50012C15.5 3.56713 13.933 2.00012 12 2.00012C10.067 2.00012 8.5 3.56713 8.5 5.50012V6.50012C8.5 8.43312 10.067 10.0001 12 10.0001C13.933 10.0001 15.5 8.43312 15.5 6.50012Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold text-primary">Cutting-Edge Technology</h1>
                            </div>
                            <div>
                                <ReadMoreText limit={14} text="Utilizing the latest in AI and translation technology, we streamline the translation process, ensuring consistency, accuracy, and faster turnaround times." />
                            </div>                        </div>

                        <div className={`mt-8 h-[390px] lg:h-[330px] py-5 px-5 justify-around flex flex-col items-center rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.2)]  text-center transition-transform ease-in-out sm:hover:scale-105 duration-300 cursor-pointer`}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                                    <path d="M6.5 9H5.5M10.5 9H9.5M6.5 6H5.5M10.5 6H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M18.5 15H17.5M18.5 11H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M14 8V22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V12C22 10.1144 22 9.17157 21.4142 8.58579C20.8284 8 19.8856 8 18 8H14ZM14 8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.02485 13.9545C8.02485 15.0583 7.12945 15.953 6.02491 15.953C4.92038 15.953 4.02497 15.0583 4.02497 13.9545C4.02497 12.8508 4.92038 11.9561 6.02491 11.9561C7.12945 11.9561 8.02485 12.8508 8.02485 13.9545Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M2.06982 20.2101C3.12817 18.582 4.80886 17.9718 6.02491 17.973C7.24097 17.9743 8.8724 18.582 9.93075 20.2101C9.99917 20.3154 10.018 20.445 9.95628 20.5544C9.70877 20.993 8.94028 21.8633 8.38522 21.9223C7.74746 21.9901 6.07914 21.9996 6.0262 21.9999C5.97322 21.9996 4.2534 21.9901 3.61535 21.9223C3.06029 21.8633 2.2918 20.993 2.04429 20.5544C1.98254 20.445 2.00139 20.3154 2.06982 20.2101Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold text-primary">Client-Centric Approach</h1>
                            </div>
                            <div>
                                <ReadMoreText limit={14} text="We believe in close collaboration with our clients, offering personalized services to meet your specific needs and objectives. Whether you're expanding into new markets or connecting with a global audience, we're here to help you succeed." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-40'>
                <div className='flex justify-center'>
                    <div className='sm:w-[45%]'>
                        <h2 className='text-primary font-extrabold text-3xl sm:text-1xl text-center'>
                            Among Our Most <span className='text-secondary'>Requested Languages</span> Are
                        </h2>
                    </div>
                </div>
                <div className='flex flex-wrap  gap-y-16 justify-around'>
                    <div ref={sectionRef4} className='w-full flex flex-wrap items-center gap-y-4 justify-around overflow-hidden'>
                        <div className={`flex flex-col items-center w-[45%] md:w-[25%] transition-transform ease-in-out duration-1000 ${isVisible4 ? 'translate-x-0 opacity-100 ' : '-translate-x-full  opacity-0'}`}>
                            <div className='flag'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[80px] h-[80px]' viewBox="0 0 32 32">
                                    <path fill="#f1c142" d="M1 10H31V22H1z"></path>
                                    <path d="M5,4H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z" fill="#a0251e"></path>
                                    <path d="M5,21H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24.5)" fill="#a0251e"></path>
                                    <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                                    <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                                    <path d="M12.614,13.091c.066-.031,.055-.14-.016-.157,.057-.047,.02-.15-.055-.148,.04-.057-.012-.144-.082-.13,.021-.062-.042-.127-.104-.105,.01-.068-.071-.119-.127-.081,.004-.068-.081-.112-.134-.069-.01-.071-.11-.095-.15-.035-.014-.068-.111-.087-.149-.028-.027-.055-.114-.057-.144-.004-.03-.047-.107-.045-.136,.002-.018-.028-.057-.044-.09-.034,.009-.065-.066-.115-.122-.082,.002-.07-.087-.111-.138-.064-.013-.064-.103-.087-.144-.036-.02-.063-.114-.075-.148-.017-.036-.056-.129-.042-.147,.022-.041-.055-.135-.031-.146,.036-.011-.008-.023-.014-.037-.016,.006-.008,.01-.016,.015-.025h.002c.058-.107,.004-.256-.106-.298v-.098h.099v-.154h-.099v-.101h-.151v.101h-.099v.154h.099v.096c-.113,.04-.169,.191-.11,.299h.002c.004,.008,.009,.017,.014,.024-.015,.002-.029,.008-.04,.017-.011-.067-.106-.091-.146-.036-.018-.064-.111-.078-.147-.022-.034-.057-.128-.046-.148,.017-.041-.052-.131-.028-.144,.036-.051-.047-.139-.006-.138,.064-.056-.033-.131,.017-.122,.082-.034-.01-.072,.006-.091,.034-.029-.047-.106-.049-.136-.002-.03-.054-.117-.051-.143,.004-.037-.059-.135-.04-.149,.028-.039-.06-.14-.037-.15,.035-.053-.043-.138,0-.134,.069-.056-.038-.137,.013-.127,.081-.062-.021-.125,.044-.104,.105-.05-.009-.096,.033-.096,.084h0c0,.017,.005,.033,.014,.047-.075-.002-.111,.101-.055,.148-.071,.017-.082,.125-.016,.157-.061,.035-.047,.138,.022,.154-.013,.015-.021,.034-.021,.055h0c0,.042,.03,.077,.069,.084-.023,.048,.009,.11,.06,.118-.013,.03-.012,.073-.012,.106,.09-.019,.2,.006,.239,.11-.015,.068,.065,.156,.138,.146,.06,.085,.133,.165,.251,.197-.021,.093,.064,.093,.123,.118-.013,.016-.043,.063-.055,.081,.024,.013,.087,.041,.113,.051,.005,.019,.004,.028,.004,.031,.091,.501,2.534,.502,2.616-.001v-.002s.004,.003,.004,.004c0-.003-.001-.011,.004-.031l.118-.042-.062-.09c.056-.028,.145-.025,.123-.119,.119-.032,.193-.112,.253-.198,.073,.01,.153-.078,.138-.146,.039-.104,.15-.129,.239-.11,0-.035,.002-.078-.013-.109,.044-.014,.07-.071,.049-.115,.062-.009,.091-.093,.048-.139,.069-.016,.083-.12,.022-.154Zm-.296-.114c0,.049-.012,.098-.034,.141-.198-.137-.477-.238-.694-.214-.002-.009-.006-.017-.011-.024,0,0,0-.001,0-.002,.064-.021,.074-.12,.015-.153,0,0,0,0,0,0,.048-.032,.045-.113-.005-.141,.328-.039,.728,.09,.728,.393Zm-.956-.275c0,.063-.02,.124-.054,.175-.274-.059-.412-.169-.717-.185-.007-.082-.005-.171-.011-.254,.246-.19,.81-.062,.783,.264Zm-1.191-.164c-.002,.05-.003,.102-.007,.151-.302,.013-.449,.122-.719,.185-.26-.406,.415-.676,.73-.436-.002,.033-.005,.067-.004,.101Zm-1.046,.117c0,.028,.014,.053,.034,.069,0,0,0,0,0,0-.058,.033-.049,.132,.015,.152,0,0,0,.001,0,.002-.005,.007-.008,.015-.011,.024-.219-.024-.495,.067-.698,.206-.155-.377,.323-.576,.698-.525-.023,.015-.039,.041-.039,.072Zm3.065-.115s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0Zm-3.113,1.798v.002s-.002,0-.003,.002c0-.001,.002-.003,.003-.003Z" fill="#9b8028"></path><path d="M14.133,16.856c.275-.65,.201-.508-.319-.787v-.873c.149-.099-.094-.121,.05-.235h.072v-.339h-.99v.339h.075c.136,.102-.091,.146,.05,.235v.76c-.524-.007-.771,.066-.679,.576h.039s0,0,0,0l.016,.036c.14-.063,.372-.107,.624-.119v.224c-.384,.029-.42,.608,0,.8v1.291c-.053,.017-.069,.089-.024,.123,.007,.065-.058,.092-.113,.083,0,.026,0,.237,0,.269-.044,.024-.113,.03-.17,.028v.108s0,0,0,0v.107s0,0,0,0v.107s0,0,0,0v.108s0,0,0,0v.186c.459-.068,.895-.068,1.353,0v-.616c-.057,.002-.124-.004-.17-.028,0-.033,0-.241,0-.268-.054,.008-.118-.017-.113-.081,.048-.033,.034-.108-.021-.126v-.932c.038,.017,.073,.035,.105,.053-.105,.119-.092,.326,.031,.429l.057-.053c.222-.329,.396-.743-.193-.896v-.35c.177-.019,.289-.074,.319-.158Z" fill="#9b8028"></path><path d="M8.36,16.058c-.153-.062-.39-.098-.653-.102v-.76c.094-.041,.034-.115-.013-.159,.02-.038,.092-.057,.056-.115h.043v-.261h-.912v.261h.039c-.037,.059,.039,.078,.057,.115-.047,.042-.108,.118-.014,.159v.873c-.644,.133-.611,.748,0,.945v.35c-.59,.154-.415,.567-.193,.896l.057,.053c.123-.103,.136-.31,.031-.429,.032-.018,.067-.036,.105-.053v.932c-.055,.018-.069,.093-.021,.126,.005,.064-.059,.089-.113,.081,0,.026,0,.236,0,.268-.045,.024-.113,.031-.17,.028v.401h0v.215c.459-.068,.895-.068,1.352,0v-.186s0,0,0,0v-.108s0,0,0,0v-.107s0,0,0,0v-.107s0,0,0,0v-.108c-.056,.002-.124-.004-.169-.028,0-.033,0-.241,0-.269-.055,.008-.119-.018-.113-.083,.045-.034,.03-.107-.024-.124v-1.29c.421-.192,.383-.772,0-.8v-.224c.575,.035,.796,.314,.653-.392Z" fill="#9b8028"></path><path d="M12.531,14.533h-4.28l.003,2.572v1.485c0,.432,.226,.822,.591,1.019,.473,.252,1.024,.391,1.552,.391s1.064-.135,1.544-.391c.364-.197,.591-.587,.591-1.019v-4.057Z" fill="#a0251e"></path></svg>
                            </div>
                            <div className='flex flex-col items-center text-center  '>
                                <h1 className='text-xl font-semibold text-primary'>Spanish</h1>
                                <p className="sm:text-sm text-xs text-primary ">As one of the most widely spoken languages, our Spanish services cover both European and Latin American Spanish. Our team of native speakers and translators are experts in the dialects and cultural nuances of each region.</p>
                            </div>
                        </div>
                        {/* <div className={`flex flex-col items-center w-[45%] md:w-[25%] transition-transform ease-in-out duration-1000 ${isVisible4 ? 'translate-x-0 opacity-100 ' : '-translate-x-full  opacity-0'}`}>
                                        <div className='flag'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[80px] h-[80px]' viewBox="0 0 32 32">
                                                <path fill="#f1c142" d="M1 10H31V22H1z"></path>
                                                <path d="M5,4H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z" fill="#a0251e"></path>
                                                <path d="M5,21H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24.5)" fill="#a0251e"></path>
                                                <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                                                <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                                                <path d="M12.531,14.533h-4.28l.003,2.572v1.485c0,.432,.226,.822,.591,1.019,.473,.252,1.024,.391,1.552,.391s1.064-.135,1.544-.391c.364-.197,.591-.587,.591-1.019v-4.057Z" fill="#a0251e"></path>
                                            </svg>
                                        </div>
                                        <div className='flex flex-col items-center text-center'>
                                            <h1 className='text-xl font-semibold text-primary'>Spanish</h1>
                                            <p className="sm:text-sm text-xs text-primary">As one of the most widely spoken languages, our Spanish services cover both European and Latin American Spanish. Our team of native speakers and translators are experts in the dialects and cultural nuances of each region.</p>
                                        </div>
                                    </div> */}
                        <div className={`flex flex-col items-center w-[45%] md:w-[25%] transition-transform ease-in-out duration-1000 ${isVisible4 ? 'translate-x-0 opacity-100' : '-translate-x-full  opacity-0'}`}>
                            <div className='flag'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[80px] h-[80px]' viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#db362f"></rect><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path fill="#ff0" d="M7.958 10.152L7.19 7.786 6.421 10.152 3.934 10.152 5.946 11.614 5.177 13.979 7.19 12.517 9.202 13.979 8.433 11.614 10.446 10.152 7.958 10.152z"></path><path fill="#ff0" d="M12.725 8.187L13.152 8.898 13.224 8.072 14.032 7.886 13.269 7.562 13.342 6.736 12.798 7.361 12.035 7.037 12.461 7.748 11.917 8.373 12.725 8.187z"></path><path fill="#ff0" d="M14.865 10.372L14.982 11.193 15.37 10.46 16.187 10.602 15.61 10.007 15.997 9.274 15.253 9.639 14.675 9.044 14.793 9.865 14.048 10.23 14.865 10.372z"></path><path fill="#ff0" d="M15.597 13.612L16.25 13.101 15.421 13.13 15.137 12.352 14.909 13.149 14.081 13.179 14.769 13.642 14.541 14.439 15.194 13.928 15.881 14.391 15.597 13.612z"></path><path fill="#ff0" d="M13.26 15.535L13.298 14.707 12.78 15.354 12.005 15.062 12.46 15.754 11.942 16.402 12.742 16.182 13.198 16.875 13.236 16.047 14.036 15.827 13.26 15.535z"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                            </div>
                            <div className='flex flex-col items-center text-center'>

                                <h1 className='text-xl font-semibold text-primary'>Chinese</h1>
                                <p className="sm:text-sm text-xs text-primary">With China's expanding role in global business and trade, our Mandarin Chinese services help you overcome language barriers. Our expert team provides precise translations and accurate interpretation to meet your needs</p>
                            </div>
                        </div>
                        <div className={`flex flex-col items-center w-[45%] md:w-[25%] transition-transform ease-in-out duration-1000 ${isVisible4 ? 'translate-x-0 opacity-100' : 'translate-x-full  opacity-0'}`}>
                            <div className='flag'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[80px] h-[80px]' viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path transform="rotate(-56.31 8.143 10.762)" d="M5.877 10.384H10.41V11.139000000000001H5.877z"></path><path transform="rotate(-56.31 9.086 11.39)" d="M6.819 11.013H11.352V11.768H6.819z"></path><path transform="rotate(-56.31 10.028 12.02)" d="M7.762 11.641H12.295V12.396H7.762z"></path><path transform="rotate(-56.31 24.538 20.216)" d="M23.499 19.839H25.576V20.593999999999998H23.499z"></path><path transform="rotate(-56.31 23.176 22.26)" d="M22.137 21.882H24.215V22.637H22.137z"></path><path transform="rotate(-56.31 23.595 19.588)" d="M22.556 19.21H24.633000000000003V19.965H22.556z"></path><path transform="rotate(-56.31 22.234 21.632)" d="M21.195 21.253H23.272V22.008H21.195z"></path><path transform="rotate(-56.31 22.653 18.96)" d="M21.614 18.582H23.691000000000003V19.337H21.614z"></path><path transform="rotate(-56.31 21.29 21.002)" d="M20.252 20.625H22.329V21.38H20.252z"></path><path d="M12.229,13.486c1.389-2.083,4.203-2.646,6.286-1.257s2.646,4.203,1.257,6.286l-7.543-5.029Z" fill="#be3b3e"></path><path d="M12.229,13.486c-1.389,2.083-.826,4.897,1.257,6.286s4.897,.826,6.286-1.257c.694-1.041,.413-2.449-.629-3.143s-2.449-.413-3.143,.629l-3.771-2.514Z" fill="#1c449c"></path><circle cx="14.114" cy="14.743" r="2.266" fill="#be3b3e"></circle><path transform="rotate(-33.69 8.143 21.238)" d="M7.765 18.972H8.52V23.505000000000003H7.765z"></path><path transform="rotate(-33.69 10.03 19.98)" d="M9.651 17.715H10.406V22.248H9.651z"></path><path transform="rotate(-33.69 22.915 11.39)" d="M22.537 9.124H23.291999999999998V13.657H22.537z"></path><path transform="rotate(-33.69 8.405 19.588)" d="M8.027 18.549H8.782V20.625999999999998H8.027z"></path><path transform="rotate(-33.691 9.767 21.632)" d="M9.389 20.592H10.144V22.668999999999997H9.389z"></path><path transform="rotate(-33.69 21.29 10.998)" d="M20.913 9.959H21.668V12.036H20.913z"></path><path transform="rotate(-33.69 22.652 13.04)" d="M22.275 12.002H23.029999999999998V14.079H22.275z"></path><path transform="rotate(-33.69 23.176 9.741)" d="M22.798 8.702H23.552999999999997V10.779H22.798z"></path><path transform="rotate(-33.691 24.539 11.783)" d="M24.16 10.745H24.915V12.822H24.16z"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <h1 className='text-xl font-semibold text-primary'>Korean</h1>
                                <p className="sm:text-sm text-xs text-primary">With South Korea's increasing prominence in technology and culture, our Korean language services ensure you stay ahead. Our skilled translators deliver accurate translations and interpretations tailored to the nuances of the Korean language</p>
                            </div>
                        </div>
                        <div className={`flex flex-col items-center w-[45%] md:w-[25%] transition-transform ease-in-out duration-1000 ${isVisible4 ? 'translate-x-0 opacity-100' : 'translate-x-full  opacity-0'}`}>
                            <div className="flag">
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[80px] h-[80px]' viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                            </div>
                            <h1 className='text-xl font-semibold text-primary'>English</h1>
                            <div className='flex flex-col items-center text-center'>
                                <p className="sm:text-sm text-xs text-primary">Given the global dominance of English, our services are designed to make your communication seamless. From precise translations to expert interpreting, we ensure your English content is flawless and effective</p>
                            </div>
                        </div>
                    </div>

                    <div ref={sectionRef5} className={`w-full flex flex-wrap items-center gap-y-4 justify-around overflow-hidden`}>

                        <div className={`flex flex-col items-center w-[35%] md:w-[25%] transition-transform ease-in-out duration-300 ${isVisible5 ? 'translate-x-0 opacity-100' : '-translate-x-full  opacity-0'}`}>
                            <div className="flag">
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[80px] h-[80px]' viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><circle cx="16" cy="16" r="6" fill="#ae232f"></circle><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <h1 className='text-xl font-semibold text-primary'>Japanese</h1>
                                <p className="sm:text-sm text-xs text-primary">In Japan's competitive market, effective communication is key. Our Japanese language services provide accurate translations and expert interpretation, tailored to the nuances of Japanese culture and business practices.</p>
                            </div>
                        </div>
                        <div className={`flex flex-col items-center w-[35%] md:w-[25%] transition-transform ease-in-out duration-300 ${isVisible5 ? 'translate-x-0 opacity-100' : '-translate-x-full  opacity-0'}`}>
                            <div className="flag">
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[80px] h-[80px]' viewBox="0 0 32 32"><path fill="#fff" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#357942"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#be2a2c"></path><path d="M11,12L2.316,5.053c-.803,.732-1.316,1.776-1.316,2.947V24c0,1.172,.513,2.216,1.316,2.947l8.684-6.947V12Z"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <h1 className='text-xl font-semibold text-primary'>Arabic</h1>

                                <p className="sm:text-sm text-xs text-primary">Given the rich cultural heritage and growing economic importance of the Arab world, our Arabic language services ensure precise translations and interpretations. We specialize in both Modern Standard Arabic and regional dialects.</p>
                            </div>
                        </div>
                        <div className={`flex flex-col items-center w-[35%] md:w-[25%] transition-transform ease-in-out duration-300 ${isVisible5 ? 'translate-x-0 opacity-100' : 'translate-x-full  opacity-0'}`}>
                            <div className="flag">
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[80px] h-[80px]' viewBox="0 0 32 32"><path fill="#cc2b1d" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#f8d147"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                            </div>
                            <div className='flex flex-col items-center text-center'>

                                <h1 className='text-xl font-semibold text-primary'>German</h1>
                                <p className="sm:text-sm text-xs text-primary">Our German language services ensure clear and accurate communication. Whether you need document translation or interpretation, our team of native speakers and experts will help you navigate the complexities of the German language and culture.</p>
                            </div>
                        </div>
                        <div className={`flex flex-col items-center w-[35%] md:w-[25%] transition-transform ease-in-out duration-300 ${isVisible5 ? 'translate-x-0 opacity-100' : 'translate-x-full  opacity-0'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[80px] h-[80px] flag' viewBox="0 0 32 32" >
                                <path fill="#fff" d="M10 4H22V28H10z"></path>
                                <path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#092050"></path>
                                <path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#be2a2c"></path>
                                <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                                <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                            </svg>
                            <div className='flex flex-col items-center text-center'>
                                <h1 className='text-xl font-semibold text-primary'>French</h1>
                                <p className="sm:text-sm text-xs text-primary">As a global language of diplomacy, culture, and business, our French language services cater to both European and Canadian French. Our team of native speakers and specialized translators ensures that your communication is precise and culturally relevant.</p>
                            </div>
                        </div>

                    </div>


                    <div ref={sectionRef6} className='flex items-center justify-around overflow-hidden'>

                        <div className={`flex flex-col items-center w-[35%] md:w-[25%] transition-transform ease-in-out duration-1000 ${isVisible6 ? 'translate-x-0 opacity-100' : '-translate-x-full  opacity-0'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[80px] h-[80px] flag' viewBox="0 0 32 32">
                                <path fill="#1435a1" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#fff"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#c53a28"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                            <div className="flex flex-col items-center text-center">
                                <h1 className='text-xl font-semibold text-primary'>Russian</h1>
                                <p className="sm:text-sm text-xs text-primary">With Russia's significant role in global politics and energy sectors, our Russian language services provide precise translations and expert interpretation. Our native speakers and specialized translators ensure that your content is accurate and culturally appropriate</p>
                            </div>
                        </div>
                        <div className={`flex flex-col items-center w-[35%] md:w-[25%] transition-transform ease-in-out duration-1000 ${isVisible6 ? 'translate-x-0 opacity-100' : 'translate-x-full  opacity-0'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[80px] h-[80px] flag' viewBox="0 0 32 32" >
                                <path fill="#fff" d="M10 4H22V28H10z"></path>
                                <path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#41914d"></path>
                                <path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#bf393b"></path>
                                <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                                <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                            </svg>
                            <div className='flex flex-col items-center text-center'>
                                <h1 className="text-xl font-semibold text-primary">Italian</h1>
                                <p className="sm:text-sm text-xs text-primary">Italy's vibrant culture, from its world-class cuisine to its stunning art. Our Italian language services bridge the gap, helping you connect seamlessly with Italian-speaking audiences for both professional and personal endeavors.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section ref={sectionRef7} className='mt-40 mb-10'>
                <div className={`flex justify-center text-center `}>
                    <div className={`sm:w-[45%] mx-3 sm:mx-0 text-primary font-extrabold transition-transform ease-in-out duration-1000 ${isVisible7 ? 'translate-x-0 opacity-100' : '-translate-x-full  opacity-0'} `}>
                        <h1 className='text-lg'>
                            No matter the language or the complexity of your project, Tongue Twist is your partner in global communication.
                            <Link to='/contact' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                &nbsp;
                                <span className='text-secondary underline underline-offset-4 cursor-pointer text-4xl transition-transform duration-500 sm:hover:scale-105'>
                                    Reach out to us
                                </span>
                                &nbsp;
                            </Link>
                            today to discuss your needs and discover how we can help you communicate with the world.
                        </h1>
                    </div>
                </div>
            </section>

        </main>
    )
} 
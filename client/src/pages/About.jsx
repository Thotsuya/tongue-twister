import { useEffect, useRef, useState } from "react";

// images
import person from "../assets/images/persons/person.webp";

// third party packages
import CountUp from "react-countup";

import AboutPageDocumentComponent from "../Components/AboutPageDocumentComponent";
import LangaugesCoveredComponent from "../Components/LangaugesCoveredComponent";

export default function About() {
    const [showVision, setShowVision] = useState(false);
    const [counterOn, setCounterOn] = useState(false);
    const [openSections, setOpenSections] = useState({});

    const counterRef = useRef(null);
    const handleButtonClick = (isVision) => {
        setShowVision(isVision);
    };


    const toggleSection = (title) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [title]: !prevState[title],
        }));
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setCounterOn(true);
                    } else {
                        setCounterOn(false);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    const scrollDocumentRef = useRef(null);
    const scrollAudioVedioRef = useRef(null);


    const scrollDocumentLeft = () => {
        if (scrollDocumentRef.current) {
            scrollDocumentRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollDocumentRight = () => {
        if (scrollDocumentRef.current) {
            scrollDocumentRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };
    const scrollAudioVedioLeft = () => {
        if (scrollAudioVedioRef.current) {
            scrollAudioVedioRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };
    const scrollAudioVedioRight = () => {
        if (scrollAudioVedioRef.current) {
            scrollAudioVedioRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    useEffect(() => {
        document.title = "About Us | Tongue Twist";
        const metaDescription = document.querySelector('meta[name="description"]');

        if (metaDescription) {
            metaDescription.setAttribute("content", "Learn more about Tongue Twist, our mission, and the expert services we offer.");
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = "Learn more about Tongue Twist, our mission, and the expert services we offer.";
            document.head.appendChild(meta);
        }
    }, []);


    return (

        <main>
            <section
                className="bg-primary py-20 sm:py-40 clip-ellipse flex justify-center items-center shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]"
            >
                <div className="text-center flex flex-col">
                    <h1 className="text-3xl md:text-1xl text-white font-semibold">
                        Our Dream <br />
                        Delivering
                        <span className="text-secondary">
                            &nbsp;Precision
                        </span>
                        &nbsp;in&nbsp;
                        <span className="text-secondary">
                            Global Communication
                        </span>
                    </h1>
                    <p className="text-white text-sm sm:text-base w-[70%] self-center">
                        Tongue Twist is run by industry professionals, ensuring high-quality translations tailored to each field. Our approach of matching translators with relevant expertise and prioritizing accuracy, cultural appropriateness, and thorough quality checks makes your services stand out.
                    </p>
                </div>
            </section>

            <section className="mt-40 mb-20 relative">
                <div className="sm:flex justify-around max-h-full  mx-2 sm:mx-0">
                    <div className="w-full sm:w-[40%] flex flex-col justify-between  sm:h-auto">
                        <p className="sm:text-5xl">
                            {showVision ? (
                                <>
                                    At Tongue Twist, our vision is to bridge global communication gaps by providing precise, contextually rich, and culturally sensitive localization services. <br /> <br />
                                    We strive to be the foremost choice for clients seeking expert translations, leveraging our team's deep industry knowledge and linguistic expertise to ensure every document and audiovisual project resonates authentically with its target audience. Our goal is to transform complex ideas into clear, impactful messages, fostering seamless interactions across diverse languages and cultures.
                                </>
                            ) : ( 
                                <>
                                    We are a group of insider scholars who are translating aside because every one of us is working as a professional in our field.
                                    <br /><br />
                                    We help localize your documents and audio/videos while ensuring that the content is translated correctly, maintaining the meaning and context of the original material. We utilize professionals with expertise in the subject matter to provide translations that are both technically accurate and culturally appropriate.
                                </>
                            ) }
                        </p> 
                        <div className="flex items-center gap-2 h-[40px] mt-4">
                            <button
                                onClick={() => handleButtonClick(false)}
                                className={`w-[162px] uppercase p-3 text-6xl rounded-md font-bold transition transform duration-300 sm:hover:scale-105 ${showVision ? "bg-secondary text-primary hover:text-secondary hover:border-secondary" : "text-primary border-secondary border-2 hover:bg-white hover:text-secondary hover:border-2 "}`}>
                                Who We Are?
                            </button>
                            <button
                                onClick={() => handleButtonClick(true)}
                                className={`w-[162px] uppercase p-3 text-6xl rounded-md font-bold transition transform duration-300 sm:hover:scale-105 ${showVision ? "bg-white text-primary border-secondary border-2 hover:bg-secondary hover:text-white" : "bg-secondary text-primary hover:bg-white hover:text-secondary hover:border-2 hover:border-secondary"}`}>
                                Our Vision
                            </button>
                        </div>
                    </div>
                    <div className="w-full sm:w-[40%] flex items-center justify-center mt-6 sm:mt-0">
                        <img src={person} className="rounded-lg shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]" loading="lazy" alt="person" width="300px" height="300px" />
                    </div>
                </div>

                <div className="absolute top-0 left-0  w-[217px] h-[217px] bg-custom-gradient" style={{ borderRadius: "217px", background: "linear-gradient(174deg, #E90000 5%, rgba(29,_78,_216,_0.4) 52.88%, rgba(29,_78,_216,_0.4) 83.35%, rgba(217, 217, 217, 0.00) 124.4%)", filter: "blur(80px)" }}>
                </div>
            </section>


            <section className="sm:mt-50  mb-20">

                <div ref={counterRef} className="bg-gradient-to-t sm:bg-gradient-to-r from-secondary to-primary w-full mt-20 text-[#fff] justify-around sm:p-10 flex overflow-x-auto hide-scrollbar ">
                    <div className="  text-center text-4xl sm:text-3xl flex flex-col items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffff" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.00897 9L8 9M16 9L15.991 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            {counterOn && <CountUp start={0} end={300} duration={2} delay={0} />}+
                        </div>
                        <div>
                            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">Happy Clients</h1>
                        </div>
                    </div>
                    <div className="text-center text-4xl sm:text-3xl flex flex-col items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fff" fill="none">
                                <path d="M2 12C2 13.0519 2.18046 14.0617 2.51212 15M13.0137 9H21.5015M11 15H2.51212M21.5015 9C20.266 5.50442 16.9323 3 13.0137 3C14.6146 3 15.9226 6.76201 16.0091 11.5M21.5015 9C21.7803 9.78867 21.9522 10.6278 22 11.5M2.51212 15C3.74763 18.4956 7.08134 21 11 21C9.45582 21 8.18412 17.5 8.01831 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 5.29734C2 4.19897 2 3.64979 2.18738 3.22389C2.3861 2.77223 2.72861 2.40921 3.15476 2.1986C3.55661 2 4.07478 2 5.11111 2H6C7.88562 2 8.82843 2 9.41421 2.62085C10 3.2417 10 4.24095 10 6.23944V8.49851C10 9.37026 10 9.80613 9.73593 9.95592C9.47186 10.1057 9.12967 9.86392 8.4453 9.38036L8.34103 9.30669C7.84086 8.95329 7.59078 8.77658 7.30735 8.68563C7.02392 8.59468 6.72336 8.59468 6.12223 8.59468H5.11111C4.07478 8.59468 3.55661 8.59468 3.15476 8.39608C2.72861 8.18547 2.3861 7.82245 2.18738 7.37079C2 6.94489 2 6.39571 2 5.29734Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M22 17.2973C22 16.199 22 15.6498 21.8126 15.2239C21.6139 14.7722 21.2714 14.4092 20.8452 14.1986C20.4434 14 19.9252 14 18.8889 14H18C16.1144 14 15.1716 14 14.5858 14.6209C14 15.2417 14 16.2409 14 18.2394V20.4985C14 21.3703 14 21.8061 14.2641 21.9559C14.5281 22.1057 14.8703 21.8639 15.5547 21.3804L15.659 21.3067C16.1591 20.9533 16.4092 20.7766 16.6926 20.6856C16.9761 20.5947 17.2766 20.5947 17.8778 20.5947H18.8889C19.9252 20.5947 20.4434 20.5947 20.8452 20.3961C21.2714 20.1855 21.6139 19.8225 21.8126 19.3708C22 18.9449 22 18.3957 22 17.2973Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <div>
                            {counterOn && <CountUp start={0} end={17} duration={2} delay={0} />}+
                        </div>
                        <div>
                            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">Languages</h1>
                        </div>
                    </div>
                    <div className="text-center text-4xl sm:text-3xl flex flex-col items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffff" fill="none">
                                <path d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            {counterOn && <CountUp start={0} end={400} duration={2} delay={0} />}+
                        </div>
                        <div>
                            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">Localizations Completed</h1>
                        </div>
                    </div>
                    <div className="text-center text-4xl sm:text-3xl flex flex-col items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fff" fill="none">
                                <path d="M4.22222 21.9948V18.4451C4.22222 17.1737 3.88927 16.5128 3.23482 15.4078C2.4503 14.0833 2 12.5375 2 10.8866C2 5.97866 5.97969 2 10.8889 2C15.7981 2 19.7778 5.97866 19.7778 10.8866C19.7778 11.4663 19.7778 11.7562 19.802 11.9187C19.8598 12.3072 20.0411 12.6414 20.2194 12.9873L22 16.4407L20.6006 17.1402C20.195 17.3429 19.9923 17.4443 19.851 17.6314C19.7097 17.8184 19.67 18.0296 19.5904 18.4519L19.5826 18.4931C19.4004 19.4606 19.1993 20.5286 18.6329 21.2024C18.4329 21.4403 18.1853 21.6336 17.9059 21.7699C17.4447 21.9948 16.8777 21.9948 15.7437 21.9948C15.219 21.9948 14.6928 22.0069 14.1682 21.9942C12.9247 21.9639 12 20.9184 12 19.7044" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.388 10.5315C13.9617 10.5315 13.5729 10.3702 13.2784 10.1048M14.388 10.5315C14.388 11.6774 13.7241 12.7658 12.4461 12.7658C11.1681 12.7658 10.5043 13.8541 10.5043 15M14.388 10.5315C16.5373 10.5315 16.5373 7.18017 14.388 7.18017C14.1927 7.18017 14.0053 7.21403 13.8312 7.27624C13.9362 4.77819 10.3349 4.1 9.51923 6.44018M10.5043 8.29729C10.5043 7.52323 10.1133 6.8411 9.51923 6.44018M9.51923 6.44018C7.66742 5.19034 5.19883 7.4331 6.37324 9.43277C4.40226 9.72827 4.61299 12.7658 6.6205 12.7658C7.18344 12.7658 7.68111 12.4844 7.98234 12.0538" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            {counterOn && <CountUp start={0} end={20} duration={2} delay={0} />}+
                        </div>
                        <div>
                            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">Professional Scholars</h1>
                        </div>
                    </div>
                    <div className="text-center text-4xl sm:text-3xl flex flex-col items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#fff" fill="none">
                                <path d="M11.9458 6L9.58384 17.0855C9.39588 17.9677 9.49933 18.298 10.1472 18.9315L12.7673 21.4934C13.1127 21.8311 13.2854 22 13.5 22C13.7146 22 13.8873 21.8311 14.2327 21.4934L16.8528 18.9315C17.5007 18.298 17.6041 17.9677 17.4162 17.0855L15.0542 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.5568 3.12403C10.4894 2.60014 10.4557 2.3382 10.6093 2.1691C10.763 2 11.0347 2 11.5781 2H15.4219C15.9653 2 16.237 2 16.3907 2.1691C16.5443 2.3382 16.5106 2.60014 16.4432 3.12403L16.3924 3.51931C16.2498 4.62718 16.1786 5.18111 15.8224 5.54049C15.7645 5.59888 15.7018 5.65262 15.635 5.70117C15.2238 6 14.6492 6 13.5 6C12.3508 6 11.7762 6 11.365 5.70117C11.2982 5.65262 11.2355 5.59888 11.1776 5.54049C10.8214 5.18111 10.7502 4.62718 10.6076 3.5193L10.5568 3.12403Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.99988 15C9.39212 15.6925 8.87749 16 8.49988 16C8.0155 16 7.14348 14.7794 6.75647 13.8954C6.57487 13.4806 6.48408 13.2732 6.50214 13.0108C6.52019 12.7484 6.63912 12.5565 6.87698 12.1727C8.22201 10.0024 10.5144 8.02113 11.9999 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            {counterOn && <CountUp start={0} end={25} duration={2} delay={0} />}+
                        </div>
                        <div>
                            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">PhDs</h1>
                        </div>
                    </div>
                </div>

            </section>

            <section className="sm:mt-40 mb-20">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center w-[70%]">
                        <h1 className="text-4xl sm:text-1xl font-semibold text-primary">What We Do</h1>
                        <p className="text-center text-xs sm:text-sm md:text-lg">
                            <span className="text-secondary font-extrabold">Tongue Twist</span> specialize in localizing documents and audiovisual content across various domains, including scientific, educational, medical, business, and marketing materials. Our team ensures accurate and culturally relevant translations, maintaining the original intent and precision. Our expertise covers everything from research papers and technical manuals to educational and entertainment videos, catering to diverse global audiences.
                        </p>
                    </div>
                </div>

                <div className="mt-10 ">
                    <div>
                        <div className="text-5xl sm:text-3xl font-semibold text-primary text-center">
                            <div className="flex justify-around items-center">
                                <div>
                                    Document Localization
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end pr-2 gap-2">
                            <button className="bg-primary p-2 rounded-full transform transition ease-in-out sm:hover:scale-105 cursor-pointer"
                                onClick={scrollDocumentLeft}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="#ffff" fill="none">
                                    <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="bg-primary p-2 rounded-full transform transition ease-in-out sm:hover:scale-105 cursor-pointer"
                                onClick={scrollDocumentRight}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10" color="#ffff" fill="none">
                                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center px-4 ">
                            <div className="cursor-pointer flex overflow-x-auto gap-x-12 p-10 hide-scrollbar " ref={scrollDocumentRef}>
                                <AboutPageDocumentComponent
                                    title="Scientific Documents"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="53" height="53" fill="none">
                                            <path d="M11.223 6V7.98898C11.223 9.38733 11.223 10.0865 11.4102 10.7577C11.5974 11.4289 11.9644 12.0452 12.6984 13.2779L13.6929 14.9482C15.5632 18.0892 16.4984 19.6597 15.7312 20.824L15.7193 20.8418C14.9409 22 12.9606 22 9 22C5.03938 22 3.05907 22 2.2807 20.8418L2.26884 20.824C1.50164 19.6597 2.43679 18.0892 4.30708 14.9482L5.30163 13.2779C6.03558 12.0452 6.40256 11.4289 6.5898 10.7577C6.77704 10.0865 6.77704 9.38733 6.77704 7.98898V6" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M6 6L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.5 13.2803C6.16667 12.699 7.73448 13.1181 9.00155 13.6643C10.6682 14.3828 12.1667 13.8019 12.5 13.2803" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M11.5 7C11.5 9 13.8624 11.2121 15.4728 11C15.4728 12.6569 16.934 14 18.7364 14C20.5388 14 22 12.6569 22 11C22 9.34315 21 8 19 8C19 6 17.5 4 15.3799 4C15.3799 2.45687 14.5 2 13.5 2C12.5 2 12 3 12 3C12 3 9 3 9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                    description="We provide precise translations for scientific documents, ensuring complex ideas are clearly communicated. Articles, and reports, maintaining accuracy and integrity. Share your discoveries and collaborate globally with our expert services."
                                    isOpen={openSections["Scientific Documents"]}
                                    onToggle={() => toggleSection("Scientific Documents")}
                                />
                                <AboutPageDocumentComponent
                                    title="Educational (K-12) Documents"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="53" height="53" color="#fff" fill="none">
                                            <path d="M14.9805 7.01556C14.9805 7.01556 15.4805 7.51556 15.9805 8.51556C15.9805 8.51556 17.5687 6.01556 18.9805 5.51556" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.99491 2.02134C7.49644 1.91556 5.56618 2.20338 5.56618 2.20338C4.34733 2.29053 2.01152 2.97385 2.01154 6.96454C2.01156 10.9213 1.9857 15.7993 2.01154 17.7439C2.01154 18.932 2.74716 21.7033 5.29332 21.8518C8.38816 22.0324 13.9628 22.0708 16.5205 21.8518C17.2052 21.8132 19.4847 21.2757 19.7732 18.7956C20.0721 16.2263 20.0126 14.4407 20.0126 14.0157" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21.9999 7.01556C21.9999 9.77698 19.7592 12.0156 16.9951 12.0156C14.231 12.0156 11.9903 9.77698 11.9903 7.01556C11.9903 4.25414 14.231 2.01556 16.9951 2.01556C19.7592 2.01556 21.9999 4.25414 21.9999 7.01556Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M6.98053 13.0156H10.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M6.98053 17.0156H14.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    }
                                    description="We specialize in translating K-12 educational documents, ensuring that every piece of content is not only accurate but also culturally relevant. Our expert team of translators understands the unique needs of educational institutions, from curriculum guides and textbooks to parent communications and student assessments."
                                    isOpen={openSections["Educational (K-12) Documents"]}
                                    onToggle={() => toggleSection("Educational (K-12) Documents")}
                                />
                                <AboutPageDocumentComponent
                                    title="Higher Educational (University+)"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="53" height="53" color="#fff" fill="none">
                                            <path d="M2 22H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 13V22M21 13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.5 8V22M16.5 8V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 13H7M22 13H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.5 8H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 8V4.98221M12 4.98221V2.97035C12 2.49615 12 2.25905 12.1464 2.11173C12.6061 1.64939 14.5 2.74303 15.2203 3.18653C15.8285 3.56105 16 4.30914 16 4.98221H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 22L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.5 12L10.5 12.5M13.5 12V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.5 16L10.5 16.5M13.5 16V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                    description="We specialize in translating university-level educational documents, ensuring precise and culturally relevant content. Our services support academic institutions in effectively communicating with diverse global audiences."
                                    isOpen={openSections["Higher Educational (University+)"]}
                                    onToggle={() => toggleSection("Higher Educational (University+)")}
                                />
                                <AboutPageDocumentComponent
                                    title="Research and Thesis Documents"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffff" fill="none">
                                            <path d="M11.223 6V7.98898C11.223 9.38733 11.223 10.0865 11.4102 10.7577C11.5974 11.4289 11.9644 12.0452 12.6984 13.2779L13.6929 14.9482C15.5632 18.0892 16.4984 19.6597 15.7312 20.824L15.7193 20.8418C14.9409 22 12.9606 22 9 22C5.03938 22 3.05907 22 2.2807 20.8418L2.26884 20.824C1.50164 19.6597 2.43679 18.0892 4.30708 14.9482L5.30163 13.2779C6.03558 12.0452 6.40256 11.4289 6.5898 10.7577C6.77704 10.0865 6.77704 9.38733 6.77704 7.98898V6" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M6 6L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.5 13.2803C6.16667 12.699 7.73448 13.1181 9.00155 13.6643C10.6682 14.3828 12.1667 13.8019 12.5 13.2803" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M11.5 7C11.5 9 13.8624 11.2121 15.4728 11C15.4728 12.6569 16.934 14 18.7364 14C20.5388 14 22 12.6569 22 11C22 9.34315 21 8 19 8C19 6 17.5 4 15.3799 4C15.3799 2.45687 14.5 2 13.5 2C12.5 2 12 3 12 3C12 3 9 3 9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                    description="We offer precise translations for research and thesis documents, ensuring high-quality, compliant content that helps researchers and students share their findings across languages."
                                    isOpen={openSections["Research and Thesis Documents"]}
                                    onToggle={() => toggleSection("Research and Thesis Documents")}
                                />
                                <AboutPageDocumentComponent
                                    title="Medical and Pharmaceutical"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="53" height="53" color="#ffff" fill="none">
                                            <path d="M19 9V7.81818C19 6.12494 19 5.27832 18.7478 4.60214C18.3424 3.5151 17.4849 2.65765 16.3979 2.2522C15.7217 2 14.8751 2 13.1818 2C10.2186 2 8.73706 2 7.55375 2.44135C5.65142 3.15088 4.15088 4.65142 3.44135 6.55375C3 7.73706 3 9.21865 3 12.1818L3 14.7273C3 17.7966 3 19.3313 3.79783 20.3971C4.02643 20.7025 4.29752 20.9736 4.60289 21.2022C5.66867 22 7.20336 22 10.2727 22H11C12.1698 22 14.5 22 14.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11 14.3333H11.8403C12.5019 14.3333 12.8326 14.3333 13.0985 14.5076C13.3643 14.6818 13.5122 14.9956 13.8081 15.6232L15.4 19L17.6 12L19.1919 15.3768C19.4878 16.0044 19.6357 16.3182 19.9015 16.4924C20.1674 16.6667 20.4981 16.6667 21.1597 16.6667H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667H7.44444C7.9611 8.66667 8.21942 8.66667 8.43137 8.60988C9.00652 8.45577 9.45576 8.00652 9.60988 7.43137C9.66667 7.21942 9.66667 6.9611 9.66667 6.44444V5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                    description="We offer precise translations for pharmaceutical documents, including clinical trials, regulatory submissions, and labeling, ensuring high-quality, compliant content for the industry."
                                    isOpen={openSections["Medical and Pharmaceutical"]}
                                    onToggle={() => toggleSection("Medical and Pharmaceutical")}
                                />
                                <AboutPageDocumentComponent
                                    title="Business Documents"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="53" height="53" fill="none">
                                            <path d="M11.223 6V7.98898C11.223 9.38733 11.223 10.0865 11.4102 10.7577C11.5974 11.4289 11.9644 12.0452 12.6984 13.2779L13.6929 14.9482C15.5632 18.0892 16.4984 19.6597 15.7312 20.824L15.7193 20.8418C14.9409 22 12.9606 22 9 22C5.03938 22 3.05907 22 2.2807 20.8418L2.26884 20.824C1.50164 19.6597 2.43679 18.0892 4.30708 14.9482L5.30163 13.2779C6.03558 12.0452 6.40256 11.4289 6.5898 10.7577C6.77704 10.0865 6.77704 9.38733 6.77704 7.98898V6" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M6 6L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.5 13.2803C6.16667 12.699 7.73448 13.1181 9.00155 13.6643C10.6682 14.3828 12.1667 13.8019 12.5 13.2803" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M11.5 7C11.5 9 13.8624 11.2121 15.4728 11C15.4728 12.6569 16.934 14 18.7364 14C20.5388 14 22 12.6569 22 11C22 9.34315 21 8 19 8C19 6 17.5 4 15.3799 4C15.3799 2.45687 14.5 2 13.5 2C12.5 2 12 3 12 3C12 3 9 3 9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                    description="We deliver precise translations for marketing, business documents, and financial reports, ensuring cultural relevance and accuracy to help you reach global markets and enhance international communication."
                                    isOpen={openSections["Business Documents"]}
                                    onToggle={() => toggleSection("Business Documents")}
                                />
                                <AboutPageDocumentComponent
                                    title="Technical and Manufacturing"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="53" height="53" fill="none">
                                            <path d="M11.223 6V7.98898C11.223 9.38733 11.223 10.0865 11.4102 10.7577C11.5974 11.4289 11.9644 12.0452 12.6984 13.2779L13.6929 14.9482C15.5632 18.0892 16.4984 19.6597 15.7312 20.824L15.7193 20.8418C14.9409 22 12.9606 22 9 22C5.03938 22 3.05907 22 2.2807 20.8418L2.26884 20.824C1.50164 19.6597 2.43679 18.0892 4.30708 14.9482L5.30163 13.2779C6.03558 12.0452 6.40256 11.4289 6.5898 10.7577C6.77704 10.0865 6.77704 9.38733 6.77704 7.98898V6" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M6 6L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.5 13.2803C6.16667 12.699 7.73448 13.1181 9.00155 13.6643C10.6682 14.3828 12.1667 13.8019 12.5 13.2803" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M11.5 7C11.5 9 13.8624 11.2121 15.4728 11C15.4728 12.6569 16.934 14 18.7364 14C20.5388 14 22 12.6569 22 11C22 9.34315 21 8 19 8C19 6 17.5 4 15.3799 4C15.3799 2.45687 14.5 2 13.5 2C12.5 2 12 3 12 3C12 3 9 3 9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                    description="We provide accurate translations for technical manuals, product specs, and engineering documents, ensuring clarity and precision for effective global communication in the technical and manufacturing sectors."
                                    isOpen={openSections["Technical and Manufacturing"]}
                                    onToggle={() => toggleSection("Technical and Manufacturing")}
                                />
                                <AboutPageDocumentComponent
                                    title="Marketing Documents"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="53" height="53" color="#ffff" fill="none">
                                            <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M12.0303 11.9624L16.5832 7.40948M19.7404 4.3445L19.1872 2.35736C19.0853 2.02999 18.6914 1.89953 18.4259 2.1165C16.9898 3.29006 15.4254 4.87079 16.703 7.36407C19.2771 8.56442 20.7466 6.94572 21.8733 5.58518C22.0975 5.31448 21.9623 4.90755 21.6247 4.80993L19.7404 4.3445Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                    description="We expertly translate marketing materials, including brochures and social media content, ensuring your brand message resonates globally. Our services adapt content for different languages and cultures, enhancing your market reach and international presence."
                                    isOpen={openSections["Marketing Documents"]}
                                    onToggle={() => toggleSection("Marketing Documents")}
                                />
                                <AboutPageDocumentComponent
                                    title="Website Content"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="53" height="53" color="#ffff" fill="none">
                                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M2.5 9H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                            <path d="M13 13L17 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13 17H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.99981 6H7.00879" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.9998 6H11.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 9V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                    description="We offer expert translation for website content, including pages, blogs, and product descriptions, preserving tone and style to enhance user experience and engagement across global markets."
                                    isOpen={openSections["Website Content"]}
                                    onToggle={() => toggleSection("Website Content")}
                                />
                                <AboutPageDocumentComponent
                                    title="Language & Literary Works"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="53" height="53" color="#ffff" fill="none">
                                            <path d="M7 8.37931H11.5M17 8.37931H14.5M11.5 8.37931H14.5M11.5 8.37931V7M14.5 8.37931C13.9725 10.2656 12.8679 12.0487 11.6071 13.6158M8.39286 17C9.41205 16.0628 10.5631 14.9134 11.6071 13.6158M11.6071 13.6158C10.9643 12.8621 10.0643 11.6426 9.80714 11.0909M11.6071 13.6158L13.5357 15.6207" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    }
                                    description="We provide expert translation for books, poems, and essays, preserving the essence and artistic quality of your texts. Our translators capture the style and voice of the original work, helping authors and publishers reach a global audience."
                                    isOpen={openSections["Language and Literary Works"]}
                                    onToggle={() => toggleSection("Language and Literary Works")}
                                />
                                <AboutPageDocumentComponent
                                    title="Personal Documents"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="53" height="53" color="#ffff" fill="none">
                                            <path d="M8.49994 16.5C9.19857 15.2923 10.5044 14.4797 11.9999 14.4797C13.4955 14.4797 14.8013 15.2923 15.4999 16.5M14 10C14 11.1046 13.1045 12 12 12C10.8954 12 9.99997 11.1046 9.99997 10C9.99997 8.89543 10.8954 8 12 8C13.1045 8 14 8.89543 14 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M22 13.9669V10.0332C19.1433 10.0332 17.2857 6.93041 18.732 4.46691L15.2679 2.5001C13.8038 4.99405 10.1978 4.99395 8.73363 2.5L5.26953 4.46681C6.71586 6.93035 4.85673 10.0332 2 10.0332V13.9669C4.85668 13.9669 6.71425 17.0697 5.26795 19.5332L8.73205 21.5C10.1969 19.0048 13.8046 19.0047 15.2695 21.4999L18.7336 19.5331C17.2874 17.0696 19.1434 13.9669 22 13.9669Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                    description=" We offer accurate translations for personal documents, including birth and marriage certificates, ensuring clarity and acceptance across languages. Our services handle sensitive paperwork with care and professionalism, aiding in international processes."
                                    isOpen={openSections["Personal Documents"]}
                                    onToggle={() => toggleSection("Personal Documents")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <div>
                        <div className="text-5xl sm:text-3xl font-semibold text-primary text-center">
                            <div className="flex justify-around items-center">
                                <div>
                                    Audiovisual Localization
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end pr-2 gap-2">
                            <div className="bg-primary p-2 rounded-full transform transition ease-in-out sm:hover:scale-105 cursor-pointer"
                                onClick={scrollAudioVedioLeft}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10" color="#ffff" fill="none">
                                    <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="bg-primary p-2 rounded-full transform transition ease-in-out sm:hover:scale-105 cursor-pointer"
                                onClick={scrollAudioVedioRight}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10" color="#ffff" fill="none">
                                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center px-4">
                            <div className="cursor-pointer flex overflow-x-auto gap-x-12 p-10 hide-scrollbar " ref={scrollAudioVedioRef}>
                                <AboutPageDocumentComponent
                                    title="Educational (K-12)"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="53" height="53" color="#fff" fill="none">
                                            <path d="M14.9805 7.01556C14.9805 7.01556 15.4805 7.51556 15.9805 8.51556C15.9805 8.51556 17.5687 6.01556 18.9805 5.51556" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.99491 2.02134C7.49644 1.91556 5.56618 2.20338 5.56618 2.20338C4.34733 2.29053 2.01152 2.97385 2.01154 6.96454C2.01156 10.9213 1.9857 15.7993 2.01154 17.7439C2.01154 18.932 2.74716 21.7033 5.29332 21.8518C8.38816 22.0324 13.9628 22.0708 16.5205 21.8518C17.2052 21.8132 19.4847 21.2757 19.7732 18.7956C20.0721 16.2263 20.0126 14.4407 20.0126 14.0157" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21.9999 7.01556C21.9999 9.77698 19.7592 12.0156 16.9951 12.0156C14.231 12.0156 11.9903 9.77698 11.9903 7.01556C11.9903 4.25414 14.231 2.01556 16.9951 2.01556C19.7592 2.01556 21.9999 4.25414 21.9999 7.01556Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M6.98053 13.0156H10.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M6.98053 17.0156H14.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    }
                                    description="We specialize in localizing K-12 educational videos, making them accessible and engaging for students worldwide. Our expert team ensures accurate translations and cultural relevance, enhancing the learning experience with high-quality, localized content."
                                    isOpen={openSections["Educational (K-12)"]}
                                    onToggle={() => toggleSection("Educational (K-12)")}
                                />
                                <AboutPageDocumentComponent
                                    title="Educational (University+)"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="53" height="53" color="#fff" fill="none">
                                            <path d="M2 22H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 13V22M21 13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.5 8V22M16.5 8V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 13H7M22 13H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.5 8H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 8V4.98221M12 4.98221V2.97035C12 2.49615 12 2.25905 12.1464 2.11173C12.6061 1.64939 14.5 2.74303 15.2203 3.18653C15.8285 3.56105 16 4.30914 16 4.98221H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 22L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.5 12L10.5 12.5M13.5 12V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.5 16L10.5 16.5M13.5 16V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                    description="We specialize in localizing university-level educational videos, ensuring they are accessible and relevant to students globally. Our expert team provides accurate translations and cultural adaptations, enhancing higher education with high-quality, localized content."
                                    isOpen={openSections["Educational (University+)"]}
                                    onToggle={() => toggleSection("Educational (University+)")}
                                />
                                <AboutPageDocumentComponent
                                    title="Entertainment"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffff" fill="none">
                                            <path d="M14.4531 12.8948C14.3016 13.5215 13.5857 13.9644 12.1539 14.8502C10.7697 15.7064 10.0777 16.1346 9.51993 15.9625C9.28934 15.8913 9.07925 15.7562 8.90982 15.57C8.5 15.1198 8.5 14.2465 8.5 12.5C8.5 10.7535 8.5 9.88018 8.90982 9.42995C9.07925 9.24381 9.28934 9.10868 9.51993 9.03753C10.0777 8.86544 10.7697 9.29357 12.1539 10.1498C13.5857 11.0356 14.3016 11.4785 14.4531 12.1052C14.5156 12.3639 14.5156 12.6361 14.4531 12.8948Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                            <path d="M20.9977 11C21 11.4701 21 11.9693 21 12.5C21 16.9783 21 19.2175 19.6088 20.6088C18.2175 22 15.9783 22 11.5 22C7.02166 22 4.78249 22 3.39124 20.6088C2 19.2175 2 16.9783 2 12.5C2 8.02166 2 5.78249 3.39124 4.39124C4.78249 3 7.02166 3 11.5 3C12.0307 3 12.5299 3 13 3.00231" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M18.5 2L18.7579 2.69703C19.0961 3.61102 19.2652 4.06802 19.5986 4.40139C19.932 4.73477 20.389 4.90387 21.303 5.24208L22 5.5L21.303 5.75792C20.389 6.09613 19.932 6.26524 19.5986 6.59861C19.2652 6.93198 19.0961 7.38898 18.7579 8.30297L18.5 9L18.2421 8.30297C17.9039 7.38898 17.7348 6.93198 17.4014 6.59861C17.068 6.26524 16.611 6.09613 15.697 5.75792L15 5.5L15.697 5.24208C16.611 4.90387 17.068 4.73477 17.4014 4.40139C17.7348 4.06802 17.9039 3.61102 18.2421 2.69703L18.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                    }
                                    description="We localize entertainment videos to ensure they resonate with diverse global audiences. Our team provides accurate translations and cultural adaptations, enhancing the viewer experience with high-quality, localized content."
                                    isOpen={openSections["Entertainment"]}
                                    onToggle={() => toggleSection("Entertainment")}
                                />
                                <AboutPageDocumentComponent
                                    title="Business"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffffff" fill="none">
                                            <path d="M2 8.56907C2 7.37289 2.48238 6.63982 3.48063 6.08428L7.58987 3.79744C9.7431 2.59915 10.8197 2 12 2C13.1803 2 14.2569 2.59915 16.4101 3.79744L20.5194 6.08428C21.5176 6.63982 22 7.3729 22 8.56907C22 8.89343 22 9.05561 21.9646 9.18894C21.7785 9.88945 21.1437 10 20.5307 10H3.46928C2.85627 10 2.22152 9.88944 2.03542 9.18894C2 9.05561 2 8.89343 2 8.56907Z" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M11.9959 7H12.0049" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4 10V18.5M8 10V18.5" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M16 10V18.5M20 10V18.5" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M19 18.5H5C3.34315 18.5 2 19.8431 2 21.5C2 21.7761 2.22386 22 2.5 22H21.5C21.7761 22 22 21.7761 22 21.5C22 19.8431 20.6569 18.5 19 18.5Z" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    }
                                    description="We specialize in localizing business videos for global markets. Our expert team ensures precise translations and cultural relevance, enhancing communication and engagement with high-quality, localized business content."
                                    isOpen={openSections["Business"]}
                                    onToggle={() => toggleSection("Business")}
                                />
                                <AboutPageDocumentComponent
                                    title="Marketing Videos"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffffff" fill="none">
                                            <path d="M15.59 17.7405C14.9612 18.1617 13.3126 19.0218 14.3167 20.098C14.8072 20.6237 15.3536 20.9997 16.0404 20.9997H18H19.9596C20.6464 20.9997 21.1928 20.6237 21.6833 20.098C22.6874 19.0218 21.0388 18.1617 20.41 17.7405C18.9355 16.7528 17.0645 16.7528 15.59 17.7405Z" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M20 12.4998C20 13.6044 19.1046 14.4998 18 14.4998C16.8954 14.4998 16 13.6044 16 12.4998C16 11.3952 16.8954 10.4998 18 10.4998C19.1046 10.4998 20 11.3952 20 12.4998Z" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M10 5.99976H15M10 2.99976H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7 9.49976V13.9998C7 14.9426 7 15.414 6.70711 15.7069C6.41421 15.9998 5.94281 15.9998 5 15.9998H4C3.05719 15.9998 2.58579 15.9998 2.29289 15.7069C2 15.414 2 14.9426 2 13.9998V11.4998C2 10.557 2 10.0856 2.29289 9.79265C2.58579 9.49976 3.05719 9.49976 4 9.49976H7ZM7 9.49976H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.5 4.99976C6.5 6.10433 5.60457 6.99976 4.5 6.99976C3.39543 6.99976 2.5 6.10433 2.5 4.99976C2.5 3.89519 3.39543 2.99976 4.5 2.99976C5.60457 2.99976 6.5 3.89519 6.5 4.99976Z" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    }
                                    description="We excel in localizing marketing videos to captivate global audiences. Our team ensures accurate translations and cultural adaptation, enhancing your brand's reach with high-quality, localized marketing content."
                                    isOpen={openSections["Marketing Videos"]}
                                    onToggle={() => toggleSection("Marketing Videos")}
                                />
                                <AboutPageDocumentComponent
                                    title="Language & Literary Work"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffffff" fill="none">
                                            <path d="M7 8.37931H11.5M17 8.37931H14.5M11.5 8.37931H14.5M11.5 8.37931V7M14.5 8.37931C13.9725 10.2656 12.8679 12.0487 11.6071 13.6158M8.39286 17C9.41205 16.0628 10.5631 14.9134 11.6071 13.6158M11.6071 13.6158C10.9643 12.8621 10.0643 11.6426 9.80714 11.0909M11.6071 13.6158L13.5357 15.6207" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    }
                                    description="We specialize in localizing K-12 educational videos, making them accessible and engaging for students worldwide. Our expert team ensures accurate translations and cultural relevance, enhancing the learning experience with high-quality, localized content."
                                    isOpen={openSections["Language and Literary Work"]}
                                    onToggle={() => toggleSection("Language and Literary Work")}
                                />
                                <AboutPageDocumentComponent
                                    title="Personal Videos"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffffff" fill="none">
                                            <path d="M8.49994 16.5C9.19857 15.2923 10.5044 14.4797 11.9999 14.4797C13.4955 14.4797 14.8013 15.2923 15.4999 16.5M14 10C14 11.1046 13.1045 12 12 12C10.8954 12 9.99997 11.1046 9.99997 10C9.99997 8.89543 10.8954 8 12 8C13.1045 8 14 8.89543 14 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M22 13.9669V10.0332C19.1433 10.0332 17.2857 6.93041 18.732 4.46691L15.2679 2.5001C13.8038 4.99405 10.1978 4.99395 8.73363 2.5L5.26953 4.46681C6.71586 6.93035 4.85673 10.0332 2 10.0332V13.9669C4.85668 13.9669 6.71425 17.0697 5.26795 19.5332L8.73205 21.5C10.1969 19.0048 13.8046 19.0047 15.2695 21.4999L18.7336 19.5331C17.2874 17.0696 19.1434 13.9669 22 13.9669Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                    description="We specialize in localizing K-12 educational videos, making them accessible and engaging for students worldwide. Our expert team ensures accurate translations and cultural relevance, enhancing the learning experience with high-quality, localized content."
                                    isOpen={openSections["Personal Videos"]}
                                    onToggle={() => toggleSection("Personal Videos")}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="mt-20">
                <div className="px-7">

                    <h1 className="text-4xl sm:text-1xl font-semibold text-primary text-center">
                        Meet Our Experts
                    </h1>
                    <p className="text-sm text-center">
                        Our team of dedicated professionals ensures top-quality localization.
                    </p>
                </div>

                <div className="flex justify-around mt-[10px] flex-wrap md:flex-auto">
                    <div className="cursor-pointer text-[#FFF] bg-[url('assets/images/persons/p1.webp')] bg-no-repeat bg-center bg-cover w-[45%] md:w-[20%] h-[350px] flex items-center flex-col justify-end rounded-xl transition-transform duration-300 ease-in-out transform sm:hover:scale-105 p-4">
                        <h1 className="md:text-3xl  text-4xl">
                            Jimmy H.
                        </h1>
                        <p className="text-sm italic">Cheif Translator</p>
                    </div>
                    <div className="cursor-pointer text-[#FFF] bg-[url('assets/images/persons/p2.webp')] bg-no-repeat bg-center bg-cover w-[45%] md:w-[20%] h-[350px] flex items-center flex-col justify-end rounded-xl transition-transform duration-300 ease-in-out transform sm:hover:scale-105 p-4">
                        <h1 className="md:text-3xl  text-4xl">
                            Andrew R.
                        </h1>
                        <p className="text-sm italic">Senior Localization Specialist</p>
                    </div>
                    <div className="cursor-pointer text-[#FFF] bg-[url('assets/images/persons/p3.webp')] bg-no-repeat bg-center bg-cover mt-2 md:mt-0 w-[45%] md:w-[20%] h-[350px] flex items-center flex-col justify-end rounded-xl transition-transform duration-300 ease-in-out transform sm:hover:scale-105 p-4">
                        <h1 className="md:text-3xl  text-4xl">
                            Roman D.
                        </h1>
                        <p className="text-sm italic">Project Manager</p>
                    </div>
                    <div className="cursor-pointer text-[#FFF] bg-[url('assets/images/persons/p4.webp')] bg-no-repeat bg-center bg-cover mt-2 md:mt-0 w-[45%] md:w-[20%] h-[350px] flex items-center flex-col justify-end rounded-xl transition-transform duration-300 ease-in-out transform sm:hover:scale-105 p-4">
                        <h1 className="md:text-3xl  text-4xl">
                            James R.
                        </h1>
                        <p className="text-sm italic text-center">Technical Translator</p>
                    </div>
                </div>
            </section> */}
            <section className=" mt-32  flex flex-col gap-10">
                <div className="text-center flex justify-center">
                    <div className="w-[80%]">
                        <h1 className="text-4xl sm:text-1xl font-semibold text-primary">What Languages Do We Cover?</h1>
                        <p>At Tongue Twist, we offer translations in a wide range of languages, including English, Spanish, Chinese, Dutch, and more.
                            Whatever your needs, we've got you covered.</p>
                    </div>
                </div>
                <div className="cursor-pointer">
                    <LangaugesCoveredComponent />
                </div>
            </section>
        </main >

    );
}

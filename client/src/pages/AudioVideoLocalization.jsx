import { useState, useEffect, useRef } from "react";

// images
import businessVideoImg from "../assets/images/businessVideoImg.webp";
import EducationalK12VideosImg from "../assets/images/EducationalK12Videos.webp";
import EducationalUniversityVideosImg from "../assets/images/EducationalUniversityVideosImg.webp";
import EntertainmentVideos from "../assets/images/EntertainmentVideos.webp";
import MarketingVideos from "../assets/images/MarketingVideos.webp";
import LanguageandLiteraryWork from "../assets/images/LanguageandLiteraryWork.webp";
import PersonalVideos from "../assets/images/PersonalVideos.webp"; 
import expertisePageHeroImg from "../assets/images/expertisePageHeroImg.webp"
  
// components 
import ServiceCard from "../Components/ServicesCard";
import IndustriesCoveredComponent from "../Components/IndustriesCoveredComponent";
import TestimonialCard from "../Components/TestmonialCard";
import AudiovisualProcess from "../Components/AudiovisualProcess";



const testimonialsData = [
    {
         
        name: "Emily R.",
        role: "Marketing Director",
        company: "Global Enterprises",
        rating: 5,
        text: "Working with Tongue Twist has been a game-changer for our international campaigns. Their team of translators provided us with high-quality translations that perfectly captured our brand's voice across multiple languages. Highly recommended!",
    },
    {
        name: "James L.",
        role: "CEO", 
        company: "Tech Innovations",
        rating: 5,
        text: "Tongue Twist has been an invaluable partner in our global expansion. Their expertise in localization and cultural nuances helped us connect with new markets seamlessly. The translators demonstrated a deep understanding of technical jargon and delivered accurate translations that resonated with our target audiences. We appreciate their professionalism and dedication to excellence.",
    },
    {
        
        name: "Sarah M.",
        role: "Marketing Director",
        company: "Yazdan Industry",
        rating: 5,
        text: "Working with Tongue Twist has been a game-changer for our international campaigns. Their team of translators provided us with high-quality translations that perfectly captured our brand's voice across multiple languages. The turnaround time was impressive, and their attention to detail ensured that our marketing materials were culturally relevant and impactful. Highly recommended!",
    },
    {
        
        name: "Michael K.",
        role: "Product Manager",
        company: "Innovative Solutions",
        rating: 4,
        text: "The localization services provided by Tongue Twist were top-notch. They helped us translate technical documentation and software interfaces accurately and efficiently. Their attention to detail and ability to adapt to our specific requirements were impressive. We look forward to working with them on future projects!",
    },
    {
        
        name: "Haroon S.",
        role: "Product Manager",
        company: "GMK Technology",
        rating: 5,
        text: "The localization services provided by Tongue Twist were top-notch. They helped us translate technical documentation and software interfaces accurately and efficiently. Their attention to detail and ability to adapt to our specific requirements were impressive. We look forward to working with them on future projects!",
    }
];


export default function AudioVideoLocalization({ showChatBot, setShowChatBot }) {

    const [isHoveredTranslation, setIsHoveredTranslation] = useState(false);
    const [isHoveredEditing, setIsHoveredEditing] = useState(false);
    const [isHoveredFeedback, setIsHoveredFeedback] = useState(false);
    const [isHoveredAudioGeneration, setIsHoveredAudioGeneration] = useState(false);
    const [isHoveredAudioEditing, setIsHoveredAudioEditing] = useState(false);
    const [isHoveredVideoProduction, setIsHoveredVideoProduction] = useState(false);
    const [isHoveredQualityCheck, setIsHoveredQualityCheck] = useState(false);
    const [isHoveredDelivery, setIsHoveredDelivery] = useState(false);

    const [higherEducational, setHigherEducational] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [entertainment, setEntertainment] = useState(false);
    const [legalServices, setLegalServices] = useState(false);
    const [personalDocuments, setPersonalDocuments] = useState(false);




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
        document.title = "Audiovisual Localization | Tongue Twist";
        const metaDescription = document.querySelector('meta[name="description"]');

        if (metaDescription) {
            metaDescription.setAttribute("content", "Transform your audiovisual content for global audiences with Tongue Twist's expert localization services. We specialize in dubbing, subtitling, and adapting videos with cultural accuracy and technical precision.");
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = "Learn more about Tongue Twist, our mission, and the expert services we offer.";
            document.head.appendChild(meta);
        }
    }, []);
    return (
        <>
            <main>
                <section className="bg-primary items-center sm:clip-ellipse text-white flex flex-col gap-y-6  py-40  md:flex-row justify-around">
                    <div className="mx-3 md:w-[50%] h-full flex flex-col gap-y-2 text-center sm:text-start justify-center  ">
                        <div>
                            <h1 className="text-3xl sm:text-1xl font-semibold">
                                <span className="font-semibold text-[#f14f4e]"> Audio and Video </span>Translation Services In 17+ Languages
                            </h1>
                            <p className="text-base mt-[24px]">
                                Affordably translate videos and audio with our expanding services. Engage multilingual audiences with subtitling and AI voiceovers in over <span className="font-semibold text-[#f14f4e]">17+ language pairs.</span>
                            </p>
                        </div>
                        <div className="h-[60px] mt-[24px]">
                            <button
                                className="p-4 border-2 rounded-md hover:bg-white hover:text-[#f14f4a] transition transform duration-300 hover:scale-105"
                                onClick={() => setShowChatBot(!showChatBot)}>
                                Get A Qoute
                            </button>
                        </div>
                    </div>
                    <div style={{ height: "350px" }} className="md:w-[50%] bg-[url('assets/images/audioLocalizationHero.webp')] bg-contain bg-no-repeat bg-center h-[50%] flex items-center w-[100%]">

                    </div>
                </section>
                <section className="mt-20 p-2">
                    <div className="flex flex-col items-center justify-center ">
                        <div className="md:w-[70%] text-center">
                            <h1 className="text-3xl sm:text-1xl font-extrabold text-primary ">
                                What We <span className="text-secondary">Offer</span>
                            </h1>
                            <p className="text-sm">
                                We are a team of expert scholars, each active in our respective fields, ensuring unmatched expertise for your translation needs. Originating from a close-knit group of top-quality translators, we guarantee exceptional accuracy and excellence in every project.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:flex-row justify-around mt-10 gap-y-2 flex-wrap">
                        <ServiceCard
                            title="Business Videos"
                            description="Need your business videos localized quickly? Tongue Twist offers expert translation and cultural adaptation to ensure your content connects with global audiences. Get fast, high-quality service for meetings, presentations, and more."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#ffffff" fill="none">
                                    <path d="M2 8.56907C2 7.37289 2.48238 6.63982 3.48063 6.08428L7.58987 3.79744C9.7431 2.59915 10.8197 2 12 2C13.1803 2 14.2569 2.59915 16.4101 3.79744L20.5194 6.08428C21.5176 6.63982 22 7.3729 22 8.56907C22 8.89343 22 9.05561 21.9646 9.18894C21.7785 9.88945 21.1437 10 20.5307 10H3.46928C2.85627 10 2.22152 9.88944 2.03542 9.18894C2 9.05561 2 8.89343 2 8.56907Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M11.9959 7H12.0049" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 10V18.5M8 10V18.5" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M16 10V18.5M20 10V18.5" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M19 18.5H5C3.34315 18.5 2 19.8431 2 21.5C2 21.7761 2.22386 22 2.5 22H21.5C21.7761 22 22 21.7761 22 21.5C22 19.8431 20.6569 18.5 19 18.5Z" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            }
                            imgSrc={businessVideoImg}
                        />
                        <ServiceCard
                            title="Educational (K-12) Videos"
                            description="Need your educational videos tailored for global classrooms? Tongue Twist provides expert translation and cultural adaptation to ensure your K-12 content engages students worldwide. Experience fast, high-quality service for lessons, tutorials, and more."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#ffffff" fill="none">
                                    <path d="M19 5L12 2L5 5L8.5 6.5V8.5C8.5 8.5 9.66667 8 12 8C14.3333 8 15.5 8.5 15.5 8.5V6.5L19 5ZM19 5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.5 8.5V9.5C15.5 11.433 13.933 13 12 13C10.067 13 8.5 11.433 8.5 9.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.78256 16.7033C6.68218 17.3878 3.79706 18.7854 5.55429 20.5342C6.41269 21.3885 7.36872 21.9995 8.57068 21.9995H15.4293C16.6313 21.9995 17.5873 21.3885 18.4457 20.5342C20.2029 18.7854 17.3178 17.3878 16.2174 16.7033C13.6371 15.0982 10.3629 15.0982 7.78256 16.7033Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                            imgSrc={EducationalK12VideosImg}
                        />
                        <ServiceCard
                            title="Educational (University+) Videos"
                            description="Looking to localize your university-level educational videos? Tongue Twist's team of PhDs and scholars offers expert translation and cultural adaptation to ensure your content resonates with students worldwide. Trust us for fast, high-quality service for lectures, seminars, and more."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#ffffff" fill="none">
                                <path d="M2 22H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 13V22M21 13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.5 8V22M16.5 8V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 13H7M22 13H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.5 8H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 8V4.98221M12 4.98221V2.97035C12 2.49615 12 2.25905 12.1464 2.11173C12.6061 1.64939 14.5 2.74303 15.2203 3.18653C15.8285 3.56105 16 4.30914 16 4.98221H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 22L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.5 12L10.5 12.5M13.5 12V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.5 16L10.5 16.5M13.5 16V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}
                            imgSrc={EducationalUniversityVideosImg}
                        />
                        <ServiceCard
                            title="Entertainment Videos"
                            description="Want to make your entertainment videos shine on the global stage? Tongue Twist's team of expert translators and cultural specialists ensures your content captivates audiences worldwide. Experience fast, high-quality localization for films, TV shows, and more."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" color="#ffffff" fill="none">
                                <path d="M17.7001 21.3351C16.5281 21.4998 14.9996 21.4998 12.9501 21.4998H11.0501C7.01955 21.4998 5.0043 21.4998 3.75218 20.2476C2.50006 18.9955 2.50006 16.9803 2.50006 12.9498V11.0498C2.50006 7.01925 2.50006 5.00399 3.75218 3.75187C5.0043 2.49976 7.01955 2.49976 11.0501 2.49976H12.9501C16.9806 2.49976 18.9958 2.49976 20.2479 3.75187C21.5001 5.00399 21.5001 7.01925 21.5001 11.0498V12.9498C21.5001 14.158 21.5001 15.1851 21.4663 16.0648C21.4393 16.7699 21.4258 17.1224 21.1588 17.2541C20.8918 17.3859 20.5932 17.1746 19.9958 16.752L18.6501 15.7998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.9453 12.3948C14.7686 13.0215 13.9333 13.4644 12.2629 14.3502C10.648 15.2064 9.8406 15.6346 9.18992 15.4625C8.9209 15.3913 8.6758 15.2562 8.47812 15.07C8 14.6198 8 13.7465 8 12C8 10.2535 8 9.38018 8.47812 8.92995C8.6758 8.74381 8.9209 8.60868 9.18992 8.53753C9.8406 8.36544 10.648 8.79357 12.2629 9.64983C13.9333 10.5356 14.7686 10.9785 14.9453 11.6052C15.0182 11.8639 15.0182 12.1361 14.9453 12.3948Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>}
                            imgSrc={EntertainmentVideos}
                        />
                        <ServiceCard
                            title="Marketing Videos"
                            description="Looking to amplify your marketing videos for a global audience? Tongue Twist specializes in translating and adapting your content to ensure it connects with international consumers. Our team of skilled translators and marketing experts delivers quick, high-quality localization for commercials, product launches, and promotional campaigns."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" color="#fffff" fill="none">
                                    <path d="M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.5 12.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                            imgSrc={MarketingVideos}
                        />
                        <ServiceCard
                            title="Language and Literary Work Videos"
                            description="Bring your language and literary videos to global audiences with Tongue Twist. Our team of linguistic experts ensures precise translation and cultural adaptation, delivering high-quality localization for literary analyses, language tutorials, and more."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" color="#ffffff" fill="none">
                                    <path d="M20 22.0001H6.5C5.11929 22.0001 4 20.8808 4 19.5001M4 19.5001V10.6837C4 7.69913 4 6.20682 4.75662 5.15857C5.00717 4.81144 5.31183 4.50679 5.65895 4.25623C6.70721 3.49961 8.19952 3.49961 11.1841 3.49961C12.1605 3.49961 13.3496 3.55106 14.3358 3.5644C15.235 3.57656 15.6846 3.58265 16.5222 3.43464C17.3597 3.28663 17.4492 3.2526 17.6282 3.18454C18.3982 2.89176 19.1272 2.43641 20 2V11.5001C20 13.3639 20 14.2958 19.6955 15.0309C19.2895 16.011 18.5108 16.7897 17.5307 17.1957C16.7956 17.5001 15.8638 17.5001 14 17.5001H6C4.89543 17.5001 4 18.3956 4 19.5001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 17L18 22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M8 4L8 7.69003C8 8.43013 8 8.80019 8.23811 8.94371C8.24836 8.94989 8.25884 8.95571 8.26951 8.96115C8.51756 9.08746 8.84124 8.89707 9.4886 8.51629C9.97254 8.23164 10.2145 8.08931 10.4815 8.08447C10.4938 8.08425 10.5062 8.08425 10.5185 8.08447C10.7855 8.08931 11.0275 8.23164 11.5114 8.51629C12.1588 8.89707 12.4824 9.08747 12.7305 8.96115C12.7412 8.95571 12.7516 8.94989 12.7619 8.94372C13 8.80019 13 8.43013 13 7.69003V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>}
                            imgSrc={LanguageandLiteraryWork}
                        />
                        <ServiceCard
                            title="Personal Videos"
                            description="Share your personal videos with the world through Tongue Twist. Our skilled translators provide accurate translation and cultural adaptation to ensure your stories connect with diverse audiences. Enjoy fast and reliable localization for vlogs, family events, and more."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#ffffff" fill="none">
                                    <path d="M7.00018 6.00055C5.77954 6.00421 5.10401 6.03341 4.54891 6.2664C3.77138 6.59275 3.13819 7.19558 2.76829 7.96165C2.46636 8.58693 2.41696 9.38805 2.31814 10.9903L2.1633 13.501C1.91757 17.4854 1.7947 19.4776 2.96387 20.7388C4.13303 22 6.10271 22 10.0421 22H13.9583C17.8977 22 19.8673 22 21.0365 20.7388C22.2057 19.4776 22.0828 17.4854 21.8371 13.501L21.6822 10.9903C21.5834 9.38805 21.534 8.58693 21.2321 7.96165C20.8622 7.19558 20.229 6.59275 19.4515 6.2664C18.8964 6.03341 18.2208 6.00421 17.0002 6.00055" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.5 14C15.5 15.933 13.933 17.5 12 17.5C10.067 17.5 8.5 15.933 8.5 14C8.5 12.067 10.067 10.5 12 10.5C13.933 10.5 15.5 12.067 15.5 14Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M11.9998 6H12.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                            imgSrc={PersonalVideos}
                        />
                    </div>
                </section>


                <section className="mt-20 p-2">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-1xl font-extrabold text-primary">How Our <span className="text-secondary">Audiovisual Localization</span> Process Works</h1>
                    </div>


                    <div className="flex flex-wrap sm:flex-nowrap justify-between ">
                        <AudiovisualProcess
                            stepNumber="01"
                            title="Translation"
                            description="Translation by a professional of the content."
                            isHovered={isHoveredTranslation}
                            setIsHovered={setIsHoveredTranslation}
                            svgIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                                    <path d="M5 5.82759H7.7M11 5.82759H9.5M7.7 5.82759H9.5M7.7 5.82759V5M9.5 5.82759C9.18351 6.95937 8.52075 8.02923 7.76429 8.96946M5.83571 11C6.44723 10.4377 7.13788 9.74802 7.76429 8.96946M7.76429 8.96946C7.37857 8.51724 6.83857 7.78558 6.68429 7.45455M7.76429 8.96946L8.92143 10.1724" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.5 19L14.3333 17M18.5 19L17.6667 17M14.3333 17L16 13L17.6667 17M14.3333 17H17.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 10V8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8C2 10.8284 2 12.2426 2.87868 13.1213C3.75736 14 5.17157 14 8 14H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M10 16C10 13.1716 10 11.7574 10.8787 10.8787C11.7574 10 13.1716 10 16 10C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22C13.1716 22 11.7574 22 10.8787 21.1213C10 20.2426 10 18.8284 10 16Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M4 16.5C4 17.9045 4 18.6067 4.33706 19.1111C4.48298 19.3295 4.67048 19.517 4.88886 19.6629C5.39331 20 6.09554 20 7.5 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 7.5C20 6.09554 20 5.39331 19.6629 4.88886C19.517 4.67048 19.3295 4.48298 19.1111 4.33706C18.6067 4 17.9045 4 16.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        />
                        <AudiovisualProcess
                            stepNumber="02"
                            title="Editing"
                            description="Editing for accuracy and formatting."
                            isHovered={isHoveredEditing}
                            setIsHovered={setIsHoveredEditing}
                            svgIcon={

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                                    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M12.0303 11.9624L16.5832 7.40948M19.7404 4.3445L19.1872 2.35736C19.0853 2.02999 18.6914 1.89953 18.4259 2.1165C16.9898 3.29006 15.4254 4.87079 16.703 7.36407C19.2771 8.56442 20.7466 6.94572 21.8733 5.58518C22.0975 5.31448 21.9623 4.90755 21.6247 4.80993L19.7404 4.3445Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>}
                        />
                        <AudiovisualProcess
                            stepNumber="03"
                            title="Feedback"
                            description="Feedback and consultation with the client for language-specific appropriation."
                            isHovered={isHoveredFeedback}
                            setIsHovered={setIsHoveredFeedback}
                            svgIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                                    <path d="M8 13.5H16M8 8.5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            }
                        />
                        <AudiovisualProcess
                            stepNumber="04"
                            title="Audio Generation"
                            description={`1. AI, post-correction by a native linguist `}
                            description2={`2. Human professional voice-over artist.`}
                            isHovered={isHoveredAudioGeneration}
                            setIsHovered={setIsHoveredAudioGeneration}
                            svgIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                                    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 11V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 11V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        />

                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap  justify-between mt-2">


                        <AudiovisualProcess
                            stepNumber="05"
                            title="Audio Editing"
                            description="Internal audio editing by professional audio engineers."
                            isHovered={isHoveredAudioEditing}
                            setIsHovered={setIsHoveredAudioEditing}
                            svgIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                                    <path d="M11.5 6C7.02166 6 4.78249 6 3.39124 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.39124 20.8284C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.8284C21 19.6569 21 17.7712 21 14C21 12.8302 21 11.8419 20.9585 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M18.5 2L18.7579 2.69703C19.0961 3.61102 19.2652 4.06802 19.5986 4.40139C19.932 4.73477 20.389 4.90387 21.303 5.24208L22 5.5L21.303 5.75792C20.389 6.09613 19.932 6.26524 19.5986 6.59861C19.2652 6.93198 19.0961 7.38898 18.7579 8.30297L18.5 9L18.2421 8.30297C17.9039 7.38898 17.7348 6.93198 17.4014 6.59861C17.068 6.26524 16.611 6.09613 15.697 5.75792L15 5.5L15.697 5.24208C16.611 4.90387 17.068 4.73477 17.4014 4.40139C17.7348 4.06802 17.9039 3.61102 18.2421 2.69703L18.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M12 10V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 12V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 13V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 12V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 13V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        />
                        <AudiovisualProcess
                            stepNumber="06"
                            title="Video Production"
                            description="Video production & adaptation thoroughly for each language."
                            isHovered={isHoveredVideoProduction}
                            setIsHovered={setIsHoveredVideoProduction}
                            svgIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                                    <path d="M11 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M9 2.00098C6.37454 2.00933 4.9565 2.08726 3.91891 2.81379C3.48891 3.11488 3.1149 3.48888 2.81382 3.91888C2 5.08113 2 6.72074 2 9.99997C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C21.9127 15.0435 21.9906 13.6254 21.999 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M19.5 4.14631L19.563 4.10086C20.6208 3.3371 21.1498 2.95522 21.5749 3.13961C22 3.324 22 3.9353 22 5.15791V5.84209C22 7.0647 22 7.676 21.5749 7.86039C21.1498 8.04478 20.6208 7.6629 19.563 6.89914L19.5 6.85369M15.5 9H16C17.6499 9 18.4749 9 18.9874 8.55151C19.5 8.10301 19.5 7.38118 19.5 5.9375V5.0625C19.5 3.61882 19.5 2.89699 18.9874 2.44849C18.4749 2 17.6499 2 16 2H15.5C13.8501 2 13.0251 2 12.5126 2.44849C12 2.89699 12 3.61882 12 5.0625V5.9375C12 7.38118 12 8.10301 12.5126 8.55151C13.0251 9 13.8501 9 15.5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            }
                        />
                        <AudiovisualProcess
                            stepNumber="07"
                            title="Quality Check"
                            description="Quality check is done for each audio and video."
                            isHovered={isHoveredQualityCheck}
                            setIsHovered={setIsHoveredQualityCheck}
                            svgIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                                    <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        />
                        <AudiovisualProcess
                            stepNumber="08"
                            title="Delivery"
                            description="The completed audio and videos are delivered to the client."
                            isHovered={isHoveredDelivery}
                            setIsHovered={setIsHoveredDelivery}
                            svgIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                                    <path d="M4 14H6.39482C6.68897 14 6.97908 14.0663 7.24217 14.1936L9.28415 15.1816C9.54724 15.3089 9.83735 15.3751 10.1315 15.3751H11.1741C12.1825 15.3751 13 16.1662 13 17.142C13 17.1814 12.973 17.2161 12.9338 17.2269L10.3929 17.9295C9.93707 18.0555 9.449 18.0116 9.025 17.8064L6.84211 16.7503" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13 16.5L17.5928 15.0889C18.407 14.8352 19.2871 15.136 19.7971 15.8423C20.1659 16.3529 20.0157 17.0842 19.4785 17.3942L11.9629 21.7305C11.4849 22.0063 10.9209 22.0736 10.3952 21.9176L4 20.0199" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 12H13C11.1144 12 10.1716 12 9.58579 11.4142C9 10.8284 9 9.88562 9 8V6C9 4.11438 9 3.17157 9.58579 2.58579C10.1716 2 11.1144 2 13 2H15C16.8856 2 17.8284 2 18.4142 2.58579C19 3.17157 19 4.11438 19 6V8C19 9.88562 19 10.8284 18.4142 11.4142C17.8284 12 16.8856 12 15 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13 5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        />

                    </div>

                </section>

                <section className="mt-20 p-2">

                    <div className="flex flex-col items-center justify-center ">
                        <h1 className="text-3xl sm:text-1xl font-extrabold text-primary "><span className="text-secondary">Industries</span> Covered</h1>
                        <p className="text-sm text-center sm:w-[70%]">
                            We provide expert localization services across diverse industries, including education, medicine, business, and entertainment. Our professional translators ensure precise and culturally adapted translations, delivering top-quality results for both documents and audiovisual content.
                        </p>
                    </div>

                    <div className="mt-5 md:flex items-center justify-around flex-wrap ">

                        <div className="w-full md:w-[40%] flex flex-col">
                            <IndustriesCoveredComponent
                                title="Education (K-12 and Higher Education)"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42" height="42" fill="none">
                                        <path d="M7 22V12.2757C7 11.1939 7 10.653 7.24458 10.1993C7.48915 9.74558 7.93843 9.45308 8.83697 8.86808L10.9185 7.51291C11.4437 7.17097 11.7063 7 12 7C12.2937 7 12.5563 7.17097 13.0815 7.51291L15.163 8.86808C16.0616 9.45308 16.5108 9.74558 16.7554 10.1993C17 10.653 17 11.1939 17 12.2757V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 13H12.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 22V17.1623C20 14.8707 19.0556 14.6852 17 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 22V17.1623C4 14.8707 4.94437 14.6852 7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 7V4.98221M12 4.98221V2.97035C12 2.49615 12 2.25905 12.1464 2.11173C12.6061 1.64939 14.5 2.74303 15.2203 3.18653C15.8285 3.56105 16 4.30914 16 4.98221H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 22L10 19C10 18.0572 10 17.5858 10.2929 17.2929C10.5858 17 11.0572 17 12 17C12.9428 17 13.4142 17 13.7071 17.2929C14 17.5858 14 18.0572 14 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                }
                                description="We make educational videos accessible globally, adapting content for K-12 and higher education to various languages and cultures. Our expert team ensures accurate, high-quality translations, enhancing the learning experience for all students."
                                isOpen={higherEducational}
                                onToggle={() => setHigherEducational(!higherEducational)} />

                            <IndustriesCoveredComponent
                                title="Marketing and Advertising"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42" height="42" fill="none">
                                        <path d="M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.5 12.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                }
                                description="We localize marketing and advertising videos to effectively reach global audiences. Our experts ensure culturally relevant and accurate translations, adapting content to resonate with diverse markets. Boost your brand's impact with high-quality, localized marketing and advertising videos."
                                isOpen={marketing}
                                onToggle={() => setMarketing(!marketing)} />

                            <IndustriesCoveredComponent
                                title="Entertainment"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42" height="42" fill="none">
                                        <path d="M17.7001 21.3351C16.5281 21.4998 14.9996 21.4998 12.9501 21.4998H11.0501C7.01955 21.4998 5.0043 21.4998 3.75218 20.2476C2.50006 18.9955 2.50006 16.9803 2.50006 12.9498V11.0498C2.50006 7.01925 2.50006 5.00399 3.75218 3.75187C5.0043 2.49976 7.01955 2.49976 11.0501 2.49976H12.9501C16.9806 2.49976 18.9958 2.49976 20.2479 3.75187C21.5001 5.00399 21.5001 7.01925 21.5001 11.0498V12.9498C21.5001 14.158 21.5001 15.1851 21.4663 16.0648C21.4393 16.7699 21.4258 17.1224 21.1588 17.2541C20.8918 17.3859 20.5932 17.1746 19.9958 16.752L18.6501 15.7998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.9453 12.3948C14.7686 13.0215 13.9333 13.4644 12.2629 14.3502C10.648 15.2064 9.8406 15.6346 9.18992 15.4625C8.9209 15.3913 8.6758 15.2562 8.47812 15.07C8 14.6198 8 13.7465 8 12C8 10.2535 8 9.38018 8.47812 8.92995C8.6758 8.74381 8.9209 8.60868 9.18992 8.53753C9.8406 8.36544 10.648 8.79357 12.2629 9.64983C13.9333 10.5356 14.7686 10.9785 14.9453 11.6052C15.0182 11.8639 15.0182 12.1361 14.9453 12.3948Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    </svg>
                                }
                                description="We specialize in localizing entertainment videos for global audiences. Our team ensures culturally relevant and accurate translations, adapting content to resonate with diverse viewers. Enhance your reach with high-quality, localized entertainment videos."
                                isOpen={entertainment}
                                onToggle={() => setEntertainment(!entertainment)} />

                            <IndustriesCoveredComponent
                                title="Law and Legal Services"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42" height="42" fill="none">
                                    <path d="M12 5V22M12 22H9M12 22H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 13L18.5 8L16 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 13L5.5 8L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 8H5.0482C6.31166 8 7.5375 7.471 8.5241 6.5C10.5562 4.5 13.4438 4.5 15.4759 6.5C16.4625 7.471 17.6883 8 18.9518 8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.5 17C19.8547 17 21.0344 16.1663 21.6473 14.9349C21.978 14.2702 22.1434 13.9379 21.8415 13.469C21.5396 13 21.04 13 20.0407 13H16.9593C15.96 13 15.4604 13 15.1585 13.469C14.8566 13.9379 15.022 14.2702 15.3527 14.9349C15.9656 16.1663 17.1453 17 18.5 17Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M5.5 17C6.85471 17 8.03442 16.1663 8.64726 14.9349C8.97802 14.2702 9.14339 13.9379 8.84151 13.469C8.53962 13 8.04 13 7.04075 13H3.95925C2.96 13 2.46038 13 2.15849 13.469C1.85661 13.9379 2.02198 14.2702 2.35273 14.9349C2.96558 16.1663 4.14528 17 5.5 17Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z" stroke="currentColor" strokeWidth="1.5" />
                                </svg>}
                                description="We provide specialized localization for law and legal services videos, ensuring precise and culturally appropriate translations. Our team of legal professionals adapts content to meet the needs of diverse audiences, enhancing comprehension and accessibility. Trust us for high-quality, accurate localized legal videos."
                                isOpen={legalServices}
                                onToggle={() => setLegalServices(!legalServices)} />

                            <IndustriesCoveredComponent
                                title="Personal Documents and Services"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42" height="42" fill="none">
                                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M11 7L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M7 7L8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M7 12L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M7 17L8 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M11 12L17 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M11 17L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                }
                                description="We offer localization services for personal documents and videos, ensuring accurate and culturally sensitive translations. Our team adapts content to various languages and contexts, providing high-quality, localized materials for personal use. Enhance accessibility and understanding with our professional localization services."
                                isOpen={personalDocuments}
                                onToggle={() => setPersonalDocuments(!personalDocuments)} />
                        </div>

                        <div className="w-full md:w-[40%]  flex justify-center  ">
                            <img src={expertisePageHeroImg} width={"400px"} height={"400px"} alt="Women With Headset" loading="lazy" className="rounded-lg shadow-2xl " />
                        </div>
                    </div>

                </section>

                <section className="mt-20 border-b-2 bg-primary text-white flex flex-col gap-10 py-10">
                    <div className="flex mx-3">
                        <div className="w-[70%]">
                            <h1 className="text-3xl sm:text-1xl font-semibold text-secondary">Testimonials</h1>
                            <p className="mt-2">Explore the Success Stories of Our Clients Who Have Benefited from Our Expertise in Document and Audiovisual Localization Across 17+ Languages.</p>
                        </div>
                        <div className="w-[40%] flex items-center justify-end gap-2">
                            <div className="cursor-pointer border-2 rounded-full transition transform ease-in-out sm:hover:scale-105" onClick={scrollLeft}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ffffff" fill="none">
                                    <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="cursor-pointer border-2 rounded-full transition transform ease-in-out sm:hover:scale-105" onClick={scrollRight}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ffffff" fill="none">
                                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="mb-2 flex overflow-x-auto hide-scrollbar py-4" ref={scrollRef}>
                        {testimonialsData.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                image={testimonial.image}
                                name={testimonial.name}
                                role={testimonial.role}
                                company={testimonial.company}
                                rating={testimonial.rating}
                                text={testimonial.text}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
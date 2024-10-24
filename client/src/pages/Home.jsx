import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// images 
import documentLocalization from '../assets/images/documentLocalization.webp'
import audioLocalization from '../assets/images/audioLocalization.webp'
import country1 from '../assets/images/country1.webp'
import country2 from '../assets/images/country2.webp'
import country3 from '../assets/images/country3.webp'
import paint from '../assets/images/paint.webp'
// import Discussion from '../assets/images/Discussion.webp'
import File from '../assets/images/file.webp'
import LangaugesCoveredComponent from "../Components/LangaugesCoveredComponent";

const ReadMoreText = ({ text, limit }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => setIsReadMore(!isReadMore);

  const textToShow = isReadMore ? text.split(" ").slice(0, limit).join(" ") + "..." : text;

  return (
    <p className='text-white '>
      {textToShow}
      <br />
      {text.split(" ").length > limit && (
        <button type='button' onClick={toggleReadMore} className="text-white  p-2 rounded-md bg-secondary cursor-pointer font-extrabold mt-4">
          {isReadMore ? " Read More" : " Show Less"}
        </button>
      )}
    </p>
  );
};

export default function Home({ showChatBot, setShowChatBot }) {

  const [DocumentshowAll, setDocumentShowAll] = useState(false);
  const [AudiovisualShowAll, setAudiovisualShowAll] = useState(false);

  const handleToggle = () => {
    setDocumentShowAll(!DocumentshowAll);
  }

  const handelAudiovisualToggle = () => {
    setAudiovisualShowAll(!AudiovisualShowAll);
  }

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set the document title
    document.title = "Tongue Twist - LLC | Language Translation Services";

    // Create or select the meta description tag
    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', 'Welcome to Tongue Twist, your go-to solution for expert-level translation and localization services.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Welcome to Tongue Twist, your go-to solution for expert-level translation and localization services.';
      document.head.appendChild(meta);
    }
  }, []);


  return (

    <>
      <main >

        <section
          className="relative sm:clip-ellipse overflow-hidden  bg-[url('assets/images/heroSectionFrame.webp')] bg-no-repeat bg-cover bg-center shadow-2xl"
          aria-label="Hero section featuring language translation services"
        >
          <div className="flex flex-col items-center justify-center gap-y-5 py-40 ">
            <h1 className="text-white text-4xl font-semibold sm:font-normal text-center ">
              Language Translation Services
            </h1>
            <h2 className="text-white text-6xl sm:text-3xl font-semibold sm:font-normal text-center ">
              Get 100% accurate translations in 17+ languages
            </h2>
            <div className="animated-text shadow-[0_10px_10px_rgba(29,_78,_216,_0.2)] px-2 md:text-[40px] text-[29px] w-auto sm:w-[460px] md:w-[600px] lg:w-[590px] drop-shadow-2xl text-white animate bg-opacity-[0.3]">We're <span className="bg-primary"></span></div>

            <div className="flex flex-col items-center mt-10">
              <h3 className="text-3xl md:text-2xl font-semibold text-secondary mb-4">Services</h3>
              <div className="flex gap-3 sm:gap-10">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#f14f4a" fill="none">
                    <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white text-xs md:text-lg">Document Localization</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#f14f4a" fill="none">
                    <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white text-xs md:text-lg">Audiovisual Localization</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            {isVisible && (
              <img
                src={country1}
                loading="lazy"
                alt="Flag of Nicaragua"
                width={100}
                className="absolute top-[0] left-0 sm:top-[-3] w-[140px] md:w-[220px]"
              />
            )}
          </div>
          <div>
            {isVisible && (
              <img
                src={country2}
                width={100}
                loading="lazy"
                alt="Flag of India"
                className="absolute bottom-2 sm:bottom-10 w-[140px] md:w-[220px]"
              />
            )}
          </div>
          <div>
            {isVisible && (
              <img
                width={100}
                src={country3}
                loading="lazy"
                alt="Flag of China"
                className="absolute bottom-0 right-[-42px] w-[140px] md:w-[220px]"
              />
            )}
          </div>
        </section>


        <section className="orderSection mt-[40dvh] md:mt-[10dvh] md:flex items-center  p-2 justify-around">

          <div className="flex flex-col gap-4 px-5 md:w-[40%]">
            <h1 className="flex items-center gap-2">We work for you <div className=" bg-primary w-[20dvh] h-[0.5dvh]"></div></h1>
            <h1 className="text-4xl font-bold text-[#222446]">
              Order Professional Translations From Professional Scholars and PhD In just a Few Clicks
            </h1>
            <p className="text-sm sm:text-base">
              Our most requested localization services are in the field of medicine and health. Professional medical doctors, who are currently active in their field, will handle the translation of research, medical papers, and any related content
            </p>
            <div className="translate hover:ease-in-out flex items-center h-[50px]">
              <button
                className="p-3 text-sm sm:text-base rounded-md bg-primary text-white hover:bg-white hover:text-secondary transition-transform duration-500 border-[1px] sm:hover:scale-105 hover:border-[1px] hover:border-secondary"
                onClick={() => setShowChatBot(!showChatBot)}
              >Get a Qoute</button>
            </div>
          </div>

          <div className="orderSectionPictures  flex justify-center gap-2 mt-2 md:mt-0 md:w-[50%] ">
            {/* <div >
              <img style={{ clipPath: "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)" }} src={Discussion} className="shadow-2xl border-2 border-red-600" loading="lazy" width={"400px"} height={"400px"}  alt="People Discussing With Each Other" />
            </div> */}
            <div >
              <img style={{ borderRadius: "0% 100% 0% 100% / 20% 0% 100% 80% " }} src={File} className="shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]" loading="lazy" width={"400px"} height={"400px"} alt="People Discussing With Each Other" />
            </div>
          </div>
        </section>

        <section className="servicesDetailSection mt-40  bg-primary bg-no-repeat bg-cover">
          <div className="flex flex-col justify-around py-20">

            <div className="flex justify-around">
              <div className="w-[20%] flex flex-col justify-center items-center">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60" color="#ffff" fill="none">
                  <path d="M2 7C2 5.59987 2 4.8998 2.27248 4.36502C2.51217 3.89462 2.89462 3.51217 3.36502 3.27248C3.8998 3 4.59987 3 6 3C7.40013 3 8.1002 3 8.63498 3.27248C9.10538 3.51217 9.48783 3.89462 9.72752 4.36502C10 4.8998 10 5.59987 10 7V17C10 18.4001 10 19.1002 9.72752 19.635C9.48783 20.1054 9.10538 20.4878 8.63498 20.7275C8.1002 21 7.40013 21 6 21C4.59987 21 3.8998 21 3.36502 20.7275C2.89462 20.4878 2.51217 20.1054 2.27248 19.635C2 19.1002 2 18.4001 2 17V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 17H6.00898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 7H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.4486 8.26843C11.0937 6.93838 10.9163 6.27336 11.0385 5.69599C11.146 5.18812 11.4108 4.72747 11.7951 4.38005C12.2319 3.98508 12.8942 3.80689 14.2187 3.4505C15.5432 3.09412 16.2055 2.91593 16.7804 3.03865C17.2862 3.1466 17.7449 3.41256 18.0909 3.79841C18.4842 4.23706 18.6617 4.90209 19.0166 6.23213L21.5514 15.7316C21.9063 17.0616 22.0837 17.7266 21.9615 18.304C21.854 18.8119 21.5892 19.2725 21.2049 19.62C20.7681 20.0149 20.1058 20.1931 18.7813 20.5495C17.4568 20.9059 16.7945 21.0841 16.2196 20.9614C15.7138 20.8534 15.2551 20.5874 14.9091 20.2016C14.5158 19.7629 14.3383 19.0979 13.9834 17.7679L11.4486 8.26843Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.7812 16.6953L17.7899 16.693" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8.00019L18.5001 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h1 className="text-xs md:text-5xl text-center text-white font-semibold">Books</h1>
              </div>

              <div className="w-[20%] flex flex-col justify-center items-center">


                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60" color="#ffff" fill="none">
                  <path d="M17.0235 3.03358L16.0689 2.77924C13.369 2.05986 12.019 1.70018 10.9555 2.31074C9.89196 2.9213 9.53023 4.26367 8.80678 6.94841L7.78366 10.7452C7.0602 13.4299 6.69848 14.7723 7.3125 15.8298C7.92652 16.8874 9.27651 17.247 11.9765 17.9664L12.9311 18.2208C15.631 18.9401 16.981 19.2998 18.0445 18.6893C19.108 18.0787 19.4698 16.7363 20.1932 14.0516L21.2163 10.2548C21.9398 7.57005 22.3015 6.22768 21.6875 5.17016C21.0735 4.11264 19.7235 3.75295 17.0235 3.03358Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16.8538 7.43306C16.8538 8.24714 16.1901 8.90709 15.3714 8.90709C14.5527 8.90709 13.889 8.24714 13.889 7.43306C13.889 6.61898 14.5527 5.95904 15.3714 5.95904C16.1901 5.95904 16.8538 6.61898 16.8538 7.43306Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 20.9463L11.0477 21.2056C8.35403 21.9391 7.00722 22.3059 5.94619 21.6833C4.88517 21.0608 4.52429 19.6921 3.80253 16.9547L2.78182 13.0834C2.06006 10.346 1.69918 8.97731 2.31177 7.89904C2.84167 6.96631 4 7.00027 5.5 7.00015" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <h1 className="text-xs md:text-5xl font-semibold text-center text-white">Clinical History</h1>
              </div>
              <div className="w-[20%] flex flex-col justify-center items-center">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffff" fill="none">
                  <path d="M18 15V9C18 6.17157 18 4.75736 17.1213 3.87868C16.2426 3 14.8284 3 12 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 8L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 12L14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 16L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 8H19C20.4142 8 21.1213 8 21.5607 8.43934C22 8.87868 22 9.58579 22 11V19C22 20.1046 21.1046 21 20 21C18.8954 21 18 20.1046 18 19V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h1 className="text-xs md:text-5xl font-semibold text-center text-white">Research Papers</h1>
              </div>
              <div className="w-[20%] flex flex-col justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffff" fill="none">
                  <path d="M2 11C2 7.70017 2 6.05025 3.02513 5.02513C4.05025 4 5.70017 4 9 4H10C13.2998 4 14.9497 4 15.9749 5.02513C17 6.05025 17 7.70017 17 11V13C17 16.2998 17 17.9497 15.9749 18.9749C14.9497 20 13.2998 20 10 20H9C5.70017 20 4.05025 20 3.02513 18.9749C2 17.9497 2 16.2998 2 13V11Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M17 8.90585L17.1259 8.80196C19.2417 7.05623 20.2996 6.18336 21.1498 6.60482C22 7.02628 22 8.42355 22 11.2181V12.7819C22 15.5765 22 16.9737 21.1498 17.3952C20.2996 17.8166 19.2417 16.9438 17.1259 15.198L17 15.0941" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="11.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <h1 className="text-xs md:text-5xl font-semibold text-center text-white">Video Localization</h1>
              </div>

            </div>
            <div className="servicesSectionTextContents flex flex-col items-center mt-12 ">
              <h1 className="text-4xl sm:text-3xl font-semibold text-white text-center">
                We offer a wide range of services and <br />
                provide complete client satisfaction
              </h1>
              <p className=" text-sm sm:text-base text-[#C8C9DA] text-center mt-2 md:w-[70%]">
                With our certified professionals and PhDs experts, we offer comprehensive translation services for documents and audiovisual content, including books, clinical histories, research papers, and vidos, Specializing in educational content from K-12 to university subjects, our most requested service is medical doctors handle translations of research and medical papers,
                ensuring top-quality, field-specific accuracy.
              </p>

            </div>


          </div>

        </section>

        <section className="whatWeDoSection mt-20 mx-6">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl sm:text-1xl font-bold text-primary">What We <span className="text-secondary font-extrabold">Offer</span></h1>
          </div>

          <div className="whatWeDoDetails sm:flex md:justify-around mt-10 gap-y-5">
            <div className="flex  flex-col gap-y-5 mx-2 md:w-[40%] hover:rounded-lg transition-transform duration-300 ease-linear p-4 shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" color="#01185B" fill="none">
                  <path d="M14.9805 7.01556C14.9805 7.01556 15.4805 7.51556 15.9805 8.51556C15.9805 8.51556 17.5687 6.01556 18.9805 5.51556" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.99491 2.02134C7.49644 1.91556 5.56618 2.20338 5.56618 2.20338C4.34733 2.29053 2.01152 2.97385 2.01154 6.96454C2.01156 10.9213 1.9857 15.7993 2.01154 17.7439C2.01154 18.932 2.74716 21.7033 5.29332 21.8518C8.38816 22.0324 13.9628 22.0708 16.5205 21.8518C17.2052 21.8132 19.4847 21.2757 19.7732 18.7956C20.0721 16.2263 20.0126 14.4407 20.0126 14.0157" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.9999 7.01556C21.9999 9.77698 19.7592 12.0156 16.9951 12.0156C14.231 12.0156 11.9903 9.77698 11.9903 7.01556C11.9903 4.25414 14.231 2.01556 16.9951 2.01556C19.7592 2.01556 21.9999 4.25414 21.9999 7.01556Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6.98053 13.0156H10.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6.98053 17.0156H14.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h1 className="text-5xl md:text-3xl font-semibold text-primary ">
                  Document Localization:
                </h1>
                <div className="mt-2">
                  <div className=" overflow-hidden text-sm sm:text-base transition-all duration-500 ease-in-out">
                    <div className="flex gap-2 ">
                      <span className="font-semibold">-</span> Scientific Documents
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold">-</span>Educational (K-12) Documents
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold">-</span>Higher Educational (University+) Documents
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold">-</span>Research and Thesis
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold">-</span> Medical Documents
                    </div>
                    <div className={`transition-all duration-500 ease-in-out ${DocumentshowAll ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="flex gap-2"> <span className="font-semibold">-</span>Pharmaceutical Documents</div>
                      <div className="flex gap-2"> <span className="font-semibold">-</span>Business Documents</div>
                      <div className="flex gap-2"> <span className="font-semibold">-</span>Technical Documents</div>
                      <div className="flex gap-2"> <span className="font-semibold">-</span>Manufacturing Documents</div>
                      <div className="flex gap-2"> <span className="font-semibold">-</span>Website Content</div>
                      <div className="flex gap-2"> <span className="font-semibold">-</span>Language and Literary Works</div>
                      <div className="flex gap-2"> <span className="font-semibold">-</span>Personal Documents</div>
                    </div>
                  </div>


                  <button
                    onClick={handleToggle}
                    className="text-primary font-bold mt-2 p-1 text-sm sm:text-base">
                    {DocumentshowAll ? "Show Less" : "Read More"}

                  </button>

                </div>
              </div>
              <div className="self-center">
                <img src={documentLocalization} alt="Document Localization Image" width={"500px"} height={"286px"} className="rounded" />
              </div>

              <Link to="services-document-localization" className="self-center text-sm sm:text-base">
                <button className="px-2 py-3 rounded-md bg-primary text-white hover:bg-white hover:border-secondary border transition-transform duration-300  hover:text-secondary">Discove More</button>
              </Link>
            </div>
            <div className="flex gap-y-5 flex-col mx-2 md:w-[40%]  hover:rounded-lg transition-transform duration-300 ease-linear p-4 shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] rounded-lg mt-6 sm:mt-0">

              <div >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" color="#01185B" fill="none">
                  <path d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M20.5 17C19.1193 17 18 18.1193 18 19.5C18 20.8807 19.1193 22 20.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M14.9609 9.83839C14.8347 10.3756 14.2381 10.7552 13.0449 11.5144C11.8914 12.2484 11.3147 12.6153 10.8499 12.4678C10.6578 12.4068 10.4827 12.291 10.3415 12.1315C10 11.7456 10 10.997 10 9.5C10 8.00296 10 7.25444 10.3415 6.86853C10.4827 6.70898 10.6578 6.59315 10.8499 6.53217C11.3147 6.38466 11.8914 6.75163 13.0449 7.48557C14.2381 8.24479 14.8347 8.6244 14.9609 9.16161C15.013 9.38335 15.013 9.61665 14.9609 9.83839Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <div >
                <h1 className="text-5xl md:text-3xl font-semibold text-primary ">
                  Audio-Visual Localization:
                </h1>
                <div className="audioVisualLocalizationDetials mt-2">
                  <div className="overflow-hidden transition-all duration-500 ease-in-out text-sm sm:text-base">
                    <div className="flex gap-2">
                      <span className="font-semibold">-</span>Educational (K-12) Videos
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold">-</span>Educational (University+) Videos
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold">-</span>Entertainment Videos
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold">-</span>Business Videos
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold">-</span>Marketing Videos
                    </div>
                    <div className={`transition-all duration-500 ease-in-out ${AudiovisualShowAll ? "max-h-110 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="flex gap-2"> <span className="font-semibold">-</span>Language and Literary Work Videos</div>
                      <div className="flex gap-2"> <span className="font-semibold">-</span>Personal Videos</div>
                    </div>
                  </div>

                  <button
                    onClick={handelAudiovisualToggle}
                    className=" text-primary font-bold mt-2 p-1">
                    {AudiovisualShowAll ? "Show Less" : "Read More"}

                  </button>
                </div>
              </div>
              <div className="self-center">
                <img src={audioLocalization} alt="Audio Localization Image" width={"500px"} height={"286px"} className="rounded" />
              </div>
              <Link to="services-audio-video-localization" className="self-center">
                <button className="px-2 py-3 rounded-md bg-primary text-white hover:bg-white hover:border-secondary border transition-transform duration-300  hover:text-secondary">Discove More</button>
              </Link>
            </div>
          </div>
        </section>


        <section className="mt-40  mx-6 flex flex-col gap-20 ">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-1xl font-extrabold text-center text-primary">
              Why <span className="text-secondary">Tongue Twist</span> Team
            </h1>
            <p className="text-center text-sm sm:text-base">
              Our team of professional translators and localization experts are dedicated to delivering high quality services.
            </p>
          </div>

          <div className="flex flex-wrap gap-y-9  items-center justify-around">
            <div className="w-full gap-y-9 flex flex-wrap justify-around">
              <div className="overflow-hidden relative py-10 px-2 justify-center flex flex-col items-center rounded-xl shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]  text-center w-full  sm:w-[45%] md:w-[45%] lg:w-[40%] cursor-pointer sm:h-[460px] sm:hover:scale-105 transition-transform duration-300 ease-in-out ">
                <div className="bg-white rounded-[20px]">
                  <div className="border-2 border-primary bg-primary bg-opacity-20 border-opacity-60 rounded-[20px] p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60" color="#00175A" fill="none">
                      <path d="M10 13.3333C10 13.0233 10 12.8683 10.0341 12.7412C10.1265 12.3961 10.3961 12.1265 10.7412 12.0341C10.8683 12 11.0233 12 11.3333 12H12.6667C12.9767 12 13.1317 12 13.2588 12.0341C13.6039 12.1265 13.8735 12.3961 13.9659 12.7412C14 12.8683 14 13.0233 14 13.3333V14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14V13.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.9 13.5H15.0826C16.3668 13.5 17.0089 13.5 17.5556 13.3842C19.138 13.049 20.429 12.0207 20.9939 10.6455C21.1891 10.1704 21.2687 9.59552 21.428 8.4457C21.4878 8.01405 21.5177 7.79823 21.489 7.62169C21.4052 7.10754 20.9932 6.68638 20.4381 6.54764C20.2475 6.5 20.0065 6.5 19.5244 6.5H4.47562C3.99351 6.5 3.75245 6.5 3.56187 6.54764C3.00682 6.68638 2.59477 7.10754 2.51104 7.62169C2.48229 7.79823 2.51219 8.01405 2.57198 8.4457C2.73128 9.59552 2.81092 10.1704 3.00609 10.6455C3.571 12.0207 4.86198 13.049 6.44436 13.3842C6.99105 13.5 7.63318 13.5 8.91743 13.5H10.1" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M3.5 11.5V13.5C3.5 17.2712 3.5 19.1569 4.60649 20.3284C5.71297 21.5 7.49383 21.5 11.0556 21.5H12.9444C16.5062 21.5 18.287 21.5 19.3935 20.3284C20.5 19.1569 20.5 17.2712 20.5 13.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.5 6.5L15.4227 6.14679C15.0377 4.38673 14.8452 3.50671 14.3869 3.00335C13.9286 2.5 13.3199 2.5 12.1023 2.5H11.8977C10.6801 2.5 10.0714 2.5 9.61309 3.00335C9.15478 3.50671 8.96228 4.38673 8.57727 6.14679L8.5 6.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>

                <div className="mt-10">
                  <h1 className="text-3xl font-semibold text-white">
                    Professional Expertise
                  </h1>

                  <ReadMoreText limit={14} text="At Tongue Twist, our translations are handled by professionals who are not only skilled linguists but also subject matter experts actively working in their respective industries. This means that your content is translated by individuals who possess deep, specialized knowledge in areas such as medicine, engineering, and education." />


                </div>


                <div className="absolute -z-10 rotate-180 bg-no-repeat w-[100%]  top-0 " >
                  <img src={paint} height={100} width={"100%"} alt="wave image" loading="lazy" />
                </div>
                <div className="absolute -z-20 top-0 left-0 h-[100%] w-[100%] bg-[url('assets/images/cardsBg.webp')] bg-cover bg-no-repeat" >

                </div>

              </div>

              <div className="overflow-hidden relative py-10 sm:py-20 px-2 justify-center flex flex-col items-center rounded-xl shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]  text-center w-full sm:w-[45%] lg:w-[40%]  cursor-pointer sm:h-[460px] sm:hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className=" bg-white rounded-[20px]">

                  <div className="border-2 border-primary bg-primary bg-opacity-20 border-opacity-60 rounded-[20px] p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60" color="#01185B" fill="none">
                      <path d="M7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465M7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C5.34315 19.5 4 18.1569 4 16.5C4 15.9313 4.15822 15.3996 4.43304 14.9465M7 4.5C7 5.31791 7.39278 6.04408 8 6.50018M4.43304 14.9465C4.78948 14.3588 5.34207 13.9032 6 13.6707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19.25 4.74976L17 6.99976H15M18.5 4.74976C18.5 5.16397 18.8358 5.49976 19.25 5.49976C19.6642 5.49976 20 5.16397 20 4.74976C20 4.33554 19.6642 3.99976 19.25 3.99976C18.8358 3.99976 18.5 4.33554 18.5 4.74976Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19.25 19.2498L17 16.9998H15M18.5 19.2498C18.5 18.8355 18.8358 18.4998 19.25 18.4998C19.6642 18.4998 20 18.8355 20 19.2498C20 19.664 19.6642 19.9998 19.25 19.9998C18.8358 19.9998 18.5 19.664 18.5 19.2498Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19.25 11.9998H15M18.5 11.9998C18.5 12.414 18.8358 12.7498 19.25 12.7498C19.6642 12.7498 20 12.414 20 11.9998C20 11.5855 19.6642 11.2498 19.25 11.2498C18.8358 11.2498 18.5 11.5855 18.5 11.9998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="mt-10">
                  <h1 className="text-3xl font-semibold text-white">
                    Specialized Knowledge
                  </h1>
                  <ReadMoreText limit={14} text="At Tongue Twist, we pride ourselves on delivering translation services that are managed exclusively by professionals with advanced qualifications, including Master’s degrees, PhDs, or equivalent professional experience in their respective fields. " />
                </div>

                <div className="absolute -z-10  bg-cover rotate-180 bg-no-repeat  w-[100%] top-0 " >
                  <img src={paint} alt="wave image" loading="lazy" />
                </div>
                <div className="absolute -z-20 top-0 left-0 h-[100%] w-[100%] bg-[url('assets/images/cardsBg.webp')] bg-cover bg-no-repeat" >

                </div>

              </div>

            </div>

            <div className="relative overflow-hidden rounded-xl py-10 sm:py-20 px-2 justify-center flex flex-col items-center shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] w-full sm:w-[45%] text-center lg:w-[30%]  cursor-pointer sm:h-[350px] sm:hover:scale-105 transition-transform duration-300 ease-in-out">

              <div className=" absolute top-[30px]  bg-white rounded-[20px]">
                <div className="border-2 border-primary bg-primary bg-opacity-20 border-opacity-60 rounded-[20px] p-2">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                    <path d="M14.9805 7.01556C14.9805 7.01556 15.4805 7.51556 15.9805 8.51556C15.9805 8.51556 17.5687 6.01556 18.9805 5.51556" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.99491 2.02134C7.49644 1.91556 5.56618 2.20338 5.56618 2.20338C4.34733 2.29053 2.01152 2.97385 2.01154 6.96454C2.01156 10.9213 1.9857 15.7993 2.01154 17.7439C2.01154 18.932 2.74716 21.7033 5.29332 21.8518C8.38816 22.0324 13.9628 22.0708 16.5205 21.8518C17.2052 21.8132 19.4847 21.2757 19.7732 18.7956C20.0721 16.2263 20.0126 14.4407 20.0126 14.0157" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.9999 7.01556C21.9999 9.77698 19.7592 12.0156 16.9951 12.0156C14.231 12.0156 11.9903 9.77698 11.9903 7.01556C11.9903 4.25414 14.231 2.01556 16.9951 2.01556C19.7592 2.01556 21.9999 4.25414 21.9999 7.01556Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6.98053 13.0156H10.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6.98053 17.0156H14.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>

                </div>
              </div>

              <div className="mt-24">
                <h1 className="text-3xl text-white font-semibold ">
                  Comprehensive Process
                </h1>
                <p className="text-white">At Tongue Twist, we offer complete document localization, including translation, editing, and quality checks. Our audiovisual localization blends expert translation with AI tools for precise adaptation.</p>

              </div>
              <div className="absolute -z-10   bg-cover rotate-180 bg-no-repeat w-[100%] top-0 left-0 right-0 " >
                <img src={paint} alt="wave image" loading="lazy" />
              </div>
              <div className="absolute -z-20 top-0 left-0 right-0 bottom-0 h-[100%] w-[100%] bg-[url('assets/images/cardsBg.webp')] bg-cover bg-no-repeat" >

              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl py-10 sm:py-20 px-2 justify-center flex flex-col items-center shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] w-full sm:w-[45%] text-center lg:w-[30%]  cursor-pointer sm:h-[350px] sm:hover:scale-105 transition-transform duration-300 ease-in-out">

              <div className=" absolute top-[30px] bg-white rounded-[20px]">
                <div className="border-2 border-primary bg-primary bg-opacity-20 border-opacity-60 rounded-[20px] p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2C12 2 8 6 8 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M21 15H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 9H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="mt-20">
                <h1 className="text-3xl font-semibold text-white">
                  Country Specific Adaptation
                </h1>
                <p className="text-sm sm:text-base text-white">
                  Consultants for modifying your content in any language to fit country specific needs.</p>
              </div>

              <div className="absolute -z-10   bg-cover rotate-180 bg-no-repeat  w-[100%]  top-0 left-0 right-0 " >
                <img src={paint} alt="wave image" loading="lazy" />
              </div>
              <div className="absolute -z-20 top-0 left-0 right-0 bottom-0 h-[100%] w-[100%] bg-[url('assets/images/cardsBg.webp')] bg-cover bg-no-repeat" >

              </div>
            </div>

            <div className="relative overflow-hidden py-20 sm:py-20 px-2 justify-center flex flex-col items-center rounded-xl shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] w-full sm:w-[45%] text-center lg:w-[30%]  cursor-pointer sm:h-[350px] sm:hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className=" absolute top-[30px] bg-white rounded-[20px]">
                <div className="border-2 border-primary bg-primary bg-opacity-20 border-opacity-60 rounded-[20px] p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                    <path d="M21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5C14 15.567 15.567 14 17.5 14C19.433 14 21 15.567 21 17.5Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M17.5 14H6.5C4.567 14 3 15.567 3 17.5C3 19.433 4.567 21 6.5 21H17.5C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 6.5C3 8.433 4.567 10 6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6.5 3H17.5C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10H6.5C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3Z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              <div className="mt-10">
                <h1 className="text-3xl font-semibold text-white">
                  Linguistic Accuracy
                </h1>
                <p className="text-sm sm:text-base text-white">
                  Expertise in managing different language styles, tones, and sentence structures to ensure accurate localization.
                </p>
              </div>

              <div className="absolute -z-10   bg-cover rotate-180 bg-no-repeat w-[100%]  top-0 left-0 right-0 " >
                <img src={paint} alt="wave image" loading="lazy" />
              </div>
              <div className="absolute -z-20 top-0 left-0 right-0 bottom-0 h-[100%] w-[100%] bg-[url('assets/images/cardsBg.webp')] bg-cover bg-no-repeat" >

              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl py-10 sm:py-20 px-2 justify-center flex flex-col items-center shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] w-full sm:w-[45%] text-center lg:w-[30%]  cursor-pointer sm:h-[350px] sm:hover:scale-105 transition-transform duration-300 ease-in-out">


              <div className=" absolute top-[30px] bg-white rounded-[20px]">
                <div className="border-2 border-primary bg-primary bg-opacity-20 border-opacity-60 rounded-[20px] p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                    <path d="M13.5 13L17 9M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6 12C6 8.68629 8.68629 6 12 6C13.0929 6 14.1175 6.29218 15 6.80269" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M2.50006 12.0001C2.50006 7.52172 2.50006 5.28255 3.8913 3.8913C5.28255 2.50006 7.52172 2.50006 12.0001 2.50006C16.4784 2.50006 18.7176 2.50006 20.1088 3.8913C21.5001 5.28255 21.5001 7.52172 21.5001 12.0001C21.5001 16.4784 21.5001 18.7176 20.1088 20.1088C18.7176 21.5001 16.4784 21.5001 12.0001 21.5001C7.52172 21.5001 5.28255 21.5001 3.8913 20.1088C2.50006 18.7176 2.50006 16.4784 2.50006 12.0001Z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="mt-10">
                <h1 className="text-3xl font-semibold text-white">
                  Speed and Quality
                </h1>
                <p className="text-sm sm:text-base text-white">
                  Fast turnaround times with high quality results, often delivering your required work before the deadline. Cause your time is precious to us.
                </p>
              </div>
              <div className="absolute -z-10  bg-cover rotate-180 bg-no-repeat w-[100%] top-0 left-0 right-0 " >
                <img src={paint} alt="wave image" loading="lazy" />
              </div>
              <div className="absolute -z-20 top-0 left-0 right-0 bottom-0 h-[100%] w-[100%] bg-[url('assets/images/cardsBg.webp')] bg-cover bg-no-repeat" >

              </div>
            </div>

          </div>
        </section>

        <section className=' mt-32  flex flex-col gap-10'>
          <div className="text-center flex justify-center">
            <div className="w-[80%]">

              <h1 className='text-3xl sm:text-1xl font-extrabold text-primary'>What <span className="text-secondary ">Languages</span> Do We Cover?</h1>
              <p className="text-sm sm:text-base">At Tongue Twist, we offer translations in a wide range of languages, including English, Spanish, Chinese, Dutch, and more.
                Whatever your needs, we've got you covered.</p>
            </div>
          </div>
          <div className="cursor-pointer ">
            <LangaugesCoveredComponent />
          </div>
        </section>

        <section className="languagesCoveredSection mt-32  ">

          <div className="md:flex justify-between bg-no-repeat bg-cover px-4 py-4 md:p-10">
            <div className=" md:w-[40%]">
              <div>
                <h1 className="flex items-center gap-2 text-primary  font-semibold">Languages <div className="border-secondary border-b-2 w-[60%]"></div></h1>
              </div>

              <div>
                <h1 className="text-3xl sm:text-1xl text-primary font-semibold">
                  Overcome the Language
                  Barrier with Multilingual
                  Translation Services
                </h1>
              </div>
            </div>
            <div className=" md:w-[40%] text-primary text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <h1 className="w-[80px]">English</h1>
                <div className="border-b-2 w-[50%] border-secondary"></div>
              </div>
              <div className="flex items-center gap-2 ">
                <h1 className="w-[80px]">Arabia</h1>
                <div className="border-b-2 w-[50%] border-secondary"></div>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="w-[80px]">Chinese</h1>
                <div className="border-b-2 w-[50%] border-secondary"></div>
              </div>
              <div className="flex items-center gap-2 ">
                <h1 className="w-[80px]">Dutch</h1>
                <div className="border-b-2 w-[50%] border-secondary"></div>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="w-[80px]">French</h1>
                <div className="border-b-2 w-[50%] border-secondary"></div>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="w-[80px]">German</h1>
                <div className="border-b-2 w-[50%] border-secondary"></div>
              </div>

            </div>
          </div>
          <div className="bg-[url('assets/images/dummy1.webp')] bg-center bg-no-repeat bg-cover flex justify-end py-10 sm:py-20 ">
            <div className="bg-white w-[80%] sm:w-[40%] p-10 border border-secondary border-dotted">
              <div className="flex flex-col gap-2">
                <p className="text-xs sm:text-base text-black">
                  I would definitely recommend this
                  company to everyone who is looking
                  for quality translation services. Great
                  job!
                </p>

                <p className="text-primary text-xs sm:text-base font-semibold">Ashley Mansell</p>
                <p className="uppercase text-xs sm:text-base ">Publisher</p>

              </div>

            </div>
          </div>
        </section>

      </main >
    </>
  )
}

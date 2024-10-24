import { useEffect, useState, useRef } from 'react';
import useOnScreen from './useOnScreen.jsx';

// images
import chatbotImg from '../assets/images/ChatBotImage.webp'

// components
import DocumentProcess from '../Components/DocumentProcess';
import DocumentSectionComponent from "../Components/DocumentSectionComponent";
import subtractImg from "../assets/images/Subtract.webp";
import HeroImg from '../assets/images/DocumentPageImage1.png'



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

export default function ServicesDocumentLocalization({ showChatBot, setShowChatBot }) {
  const [scientificDocument, setScientificDocument] = useState(false);
  const [educationalK12Document, setEducationalK12Document] = useState(false);
  const [higherEducational, setHigherEducational] = useState(false);
  const [researchandThesis, setResearchandThesis] = useState(false);
  const [medicalDocuments, setMedicalDocuments] = useState(false);
  const [pharmaceuticalDocuments, setPharmaceuticalDocuments] = useState(false);
  const [websiteContent, setWebsiteContent] = useState(false);
  const [personalDocuments, setPersonalDocuments] = useState(false);
  const [isHoveredTranslation, setIsHoveredTranslation] = useState(false);
  const [isHoveredEditing, setIsHoveredEditing] = useState(false);
  const [isHoveredFeedback, setIsHoveredFeedback] = useState(false);
  const [isHoveredAudioGeneration, setIsHoveredAudioGeneration] = useState(false);
  const [isHoveredAudioEditing, setIsHoveredAudioEditing] = useState(false);
  const [isHoveredVideoProduction, setIsHoveredVideoProduction] = useState(false);
  const [isHoveredQualityCheck, setIsHoveredQualityCheck] = useState(false);

  useEffect(() => {
    document.title = "Document Localization | Tongue Twist";
    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover expert document localization services at Tongue Twist. We specialize in translating and adapting documents for global audiences across various industries. Enhance your reach with precision and cultural relevance.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn more about Tongue Twist, our mission, and the expert services we offer.';
      document.head.appendChild(meta);
    }
  }, []);


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
  return (
    <>

      <main>

        <section ref={sectionRef0} className="overflow-hidden sm:clip-ellipse shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] flex flex-col sm:flex-row items-center bg-primary py-20 sm:py-40 justify-around ">
          <div className={`mb-2 text-center sm:text-start sm:w-[45%] text-white flex flex-col justify-center items-start p-4 gap-4 transform transition-transform duration-1000 ease-in-out ${isVisible0 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>            <div>
            <h1 className='text-3xl sm:text-1xl text-center sm:text-start font-semibold'>
              Expert Document <span className="text-secondary">Localization</span> Services for Over 17+ Languages
            </h1>
            <p className='text-sm'>Transforming your documents to resonate globally.</p>
          </div>

            <div className='self-center sm:self-start'>
              <button
                className=" p-2 sm:p-3 border-2 rounded-md hover:bg-white hover:text-secondary transition-transform transform duration-300 hover:scale-105"
                onClick={() => setShowChatBot(!showChatBot)}
              >Get A Quote</button>
            </div>
          </div>
          <div className={`relative rounded-xl sm:w-[45%] flex justify-center transform transition-transform duration-1000 ease-in-out ${isVisible0 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} `}>
            <div className='absolute z-20 left-0 lg:left-10'>
              <img src={subtractImg} alt="Document Page Image" />
            </div>
            <div className='relative rounded-md'>
              <div className='animatedBorder'>

                <img src={HeroImg} alt="Document Page Image" width={400} height={400} className='w-[320px]  sm:w-[400px] shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] rounded-lg' />
              </div>
              <div className='rounded-md mt-28 DocumentWaveSection absolute left-0 bottom-0'>
                <div className="waves rounded-md">
                  <div className="Documentwave rounded-md" id="Documentwave1"></div>
                  <div className="Documentwave rounded-md" id="Documentwave2"></div>
                  <div className="Documentwave rounded-md" id="Documentwave3"></div>
                  <div className="Documentwave rounded-md" id="Documentwave4"></div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <main>
        <section ref={sectionRef1} className="mt-20 sm:mt-40 mx-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-1xl font-extrabold text-primary">
              What We <span className="text-secondary">Offer</span>
            </h1>
          </div>

          <div className="mt-5 sm:flex items-center justify-between overflow-hidden">

            <div className='sm:w-[40%]'  >
              <div >
                <div className={`transform transition-transform duration-1000  ease-in-out ${isVisible1 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} `}>
                  <DocumentSectionComponent
                    title="Scientific Documents"
                    icon=
                    {
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                        <path d="M11.223 6V7.98898C11.223 9.38733 11.223 10.0865 11.4102 10.7577C11.5974 11.4289 11.9644 12.0452 12.6984 13.2779L13.6929 14.9482C15.5632 18.0892 16.4984 19.6597 15.7312 20.824L15.7193 20.8418C14.9409 22 12.9606 22 9 22C5.03938 22 3.05907 22 2.2807 20.8418L2.26884 20.824C1.50164 19.6597 2.43679 18.0892 4.30708 14.9482L5.30163 13.2779C6.03558 12.0452 6.40256 11.4289 6.5898 10.7577C6.77704 10.0865 6.77704 9.38733 6.77704 7.98898V6" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M6 6L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.5 13.2803C6.16667 12.699 7.73448 13.1181 9.00155 13.6643C10.6682 14.3828 12.1667 13.8019 12.5 13.2803" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M11.5 7C11.5 9 13.8624 11.2121 15.4728 11C15.4728 12.6569 16.934 14 18.7364 14C20.5388 14 22 12.6569 22 11C22 9.34315 21 8 19 8C19 6 17.5 4 15.3799 4C15.3799 2.45687 14.5 2 13.5 2C12.5 2 12 3 12 3C12 3 9 3 9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    }
                    description="Our native professionals working in scientific feild from your desired language will deliver the work that fits to the target country and language. High-quality translations for clinical trials, regulatory filings, product labeling, and patient information are guaranteed by our professionals working in the scientific feild."
                    isOpen={scientificDocument}
                    onToggle={() => setScientificDocument(!scientificDocument)}
                  />
                </div>
              </div>

              <div >

                <div className={`transform transition-transform duration-1000  ease-in-out ${isVisible1 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} `}>
                  <DocumentSectionComponent
                    title="Educational (K-12) Documents"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                        <path d="M2 7C2 5.59987 2 4.8998 2.27248 4.36502C2.51217 3.89462 2.89462 3.51217 3.36502 3.27248C3.8998 3 4.59987 3 6 3C7.40013 3 8.1002 3 8.63498 3.27248C9.10538 3.51217 9.48783 3.89462 9.72752 4.36502C10 4.8998 10 5.59987 10 7V17C10 18.4001 10 19.1002 9.72752 19.635C9.48783 20.1054 9.10538 20.4878 8.63498 20.7275C8.1002 21 7.40013 21 6 21C4.59987 21 3.8998 21 3.36502 20.7275C2.89462 20.4878 2.51217 20.1054 2.27248 19.635C2 19.1002 2 18.4001 2 17V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 17H6.00898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 7H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.4486 8.26843C11.0937 6.93838 10.9163 6.27336 11.0385 5.69599C11.146 5.18812 11.4108 4.72747 11.7951 4.38005C12.2319 3.98508 12.8942 3.80689 14.2187 3.4505C15.5432 3.09412 16.2055 2.91593 16.7804 3.03865C17.2862 3.1466 17.7449 3.41256 18.0909 3.79841C18.4842 4.23706 18.6617 4.90209 19.0166 6.23213L21.5514 15.7316C21.9063 17.0616 22.0837 17.7266 21.9615 18.304C21.854 18.8119 21.5892 19.2725 21.2049 19.62C20.7681 20.0149 20.1058 20.1931 18.7813 20.5495C17.4568 20.9059 16.7945 21.0841 16.2196 20.9614C15.7138 20.8534 15.2551 20.5874 14.9091 20.2016C14.5158 19.7629 14.3383 19.0979 13.9834 17.7679L11.4486 8.26843Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.7812 16.6953L17.7899 16.693" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 8.00019L18.5001 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    }
                    description="Our native professionals working in the educational field from your desired language will deliver the work that fits the target country and language. We provide accurate and compliant translation services for educational settings, including schools, districts, and educational publishers. Our services ensure high-quality translations for K-12 curriculum materials, student assessments, parental communications, and educational resources."
                    isOpen={educationalK12Document}
                    onToggle={() => setEducationalK12Document(!educationalK12Document)}
                  />
                </div>
              </div>


              <div >
                <div className={`transform transition-transform duration-1000  ease-in-out ${isVisible1 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} `}>
                  <DocumentSectionComponent
                    title="Higher Educational (University+)"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
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
                    description="Our native professionals working in the higher education field from your desired language will deliver the work that fits the target country and language. We offer precise and compliant translation services for higher education institutions, including universities, colleges, and research organizations. Our expertise ensures high-quality translations for academic papers, research projects, course materials, and university communications."
                    isOpen={higherEducational}
                    onToggle={() => setHigherEducational(!higherEducational)}
                  />
                </div>
              </div>


              <div >
                <div className={`transform transition-transform duration-1000  ease-in-out ${isVisible1 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} `}>
                  <DocumentSectionComponent
                    title="Research and Thesis"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                      <path d="M14.5405 2V4.48622C14.5405 6.23417 14.5405 7.10814 14.7545 7.94715C14.9685 8.78616 15.3879 9.55654 16.2267 11.0973L17.3633 13.1852C19.5008 17.1115 20.5696 19.0747 19.6928 20.53L19.6792 20.5522C18.7896 22 16.5264 22 12 22C7.47357 22 5.21036 22 4.3208 20.5522L4.30725 20.53C3.43045 19.0747 4.49918 17.1115 6.63666 13.1852L7.7733 11.0973C8.61209 9.55654 9.03149 8.78616 9.24548 7.94715C9.45947 7.10814 9.45947 6.23417 9.45947 4.48622V2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M9 16.002L9.00868 15.9996" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 18.002L15.0087 17.9996" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 2L16 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 11.5563C8.5 10.4029 10.0994 11.2343 12 12.3182C14.5 13.7439 16 12.65 16.5 11.6152" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>}
                    description="Our native professionals working in the research and thesis field from your desired language will deliver the work that fits the target country and language. We provide accurate and compliant translation services for research and thesis documents. Our expertise ensures high-quality translations for dissertations, theses, research papers, and academic publications, helping researchers and students communicate their findings effectively across languages."
                    isOpen={researchandThesis}
                    onToggle={() => setResearchandThesis(!researchandThesis)}
                  />
                </div>
              </div>
            </div>

            <div className='sm:w-[40%] ' >
              <div ref={sectionRef1}>
                <div className={`transform transition-transform duration-1000  ease-in-out ${isVisible1 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} `}>
                  <DocumentSectionComponent
                    title="Medical Documents"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none"><path d="M19 9V7.81818C19 6.12494 19 5.27832 18.7478 4.60214C18.3424 3.5151 17.4849 2.65765 16.3979 2.2522C15.7217 2 14.8751 2 13.1818 2C10.2186 2 8.73706 2 7.55375 2.44135C5.65142 3.15088 4.15088 4.65142 3.44135 6.55375C3 7.73706 3 9.21865 3 12.1818L3 14.7273C3 17.7966 3 19.3313 3.79783 20.3971C4.02643 20.7025 4.29752 20.9736 4.60289 21.2022C5.66867 22 7.20336 22 10.2727 22H11C12.1698 22 14.5 22 14.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 14.3333H11.8403C12.5019 14.3333 12.8326 14.3333 13.0985 14.5076C13.3643 14.6818 13.5122 14.9956 13.8081 15.6232L15.4 19L17.6 12L19.1919 15.3768C19.4878 16.0044 19.6357 16.3182 19.9015 16.4924C20.1674 16.6667 20.4981 16.6667 21.1597 16.6667H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667H7.44444C7.9611 8.66667 8.21942 8.66667 8.43137 8.60988C9.00652 8.45577 9.45576 8.00652 9.60988 7.43137C9.66667 7.21942 9.66667 6.9611 9.66667 6.44444V5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    }
                    description="Our native professionals working in the medical field from your desired language will deliver the work that fits the target country and language. We offer precise and compliant translation services for medical documents, catering to healthcare providers, medical researchers, and pharmaceutical companies. Our services ensure high-quality translations for medical reports, patient records, clinical trial documents, regulatory submissions, and product labeling."
                    isOpen={medicalDocuments}
                    onToggle={() => setMedicalDocuments(!medicalDocuments)}
                  />
                </div>
              </div>


              <div >

                <div className={`transform transition-transform duration-1000  ease-in-out ${isVisible1 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} `}>
                  <DocumentSectionComponent
                    title="Pharmaceutical Documents"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                        <path d="M20.1932 12.999C21.8501 15.8688 20.8669 19.5383 17.9971 21.1952C15.1273 22.8521 11.4578 21.8688 9.80094 18.999M20.1932 12.999C18.5364 10.1293 14.8669 9.14604 11.9971 10.8029C9.12734 12.4598 8.14409 16.1293 9.80094 18.999M20.1932 12.999L9.80094 18.999" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M10.0428 5.54203L15.1278 2.5374C17 1.43112 19.394 2.08763 20.4749 4.00376C21.3433 5.54315 21.1 7.4272 20 8.6822M10.0428 5.54203L4.95785 8.54667C3.08563 9.65294 2.44415 12.1031 3.52508 14.0192C4.17499 15.1713 5.29956 15.868 6.5 16M10.0428 5.54203L11.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    }
                    description="Our native professionals working in the pharmaceutical field from your desired language will deliver the work that fits the target country and language. We provide accurate and compliant translation services for pharmaceutical documents, supporting pharmaceutical companies, biotech firms, and regulatory professionals. Our expertise ensures high-quality translations for clinical trial protocols, regulatory submissions, product labeling, marketing materials, and patient information leaflets."
                    isOpen={pharmaceuticalDocuments}
                    onToggle={() => setPharmaceuticalDocuments(!pharmaceuticalDocuments)}
                  />
                </div>
              </div>
              <div >
                <div className={`transform transition-transform duration-1000  ease-in-out ${isVisible1 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} `}>
                  <DocumentSectionComponent
                    title="Website Content"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M2.5 9H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M13 13L17 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13 17H15" stroke="cuuurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.99981 6H7.00879" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.9998 6H11.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 9V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>}
                    description="Our native professionals working in the website content field from your desired language will deliver the work that fits the target country and language. We offer precise and compliant translation services for website content, helping businesses and organizations effectively reach global audiences. Our services ensure high-quality translations for web pages, product descriptions, marketing content, user interfaces, and SEO keywords, maintaining your brand's voice and enhancing user engagement across languages."
                    isOpen={websiteContent}
                    onToggle={() => setWebsiteContent(!websiteContent)}
                  />
                </div>
              </div>

              <div >
                <div className={`transform transition-transform duration-1000  ease-in-out ${isVisible1 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} `}>
                  <DocumentSectionComponent
                    title="Personal Documents"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                        <path d="M8.49994 16.5C9.19857 15.2923 10.5044 14.4797 11.9999 14.4797C13.4955 14.4797 14.8013 15.2923 15.4999 16.5M14 10C14 11.1046 13.1045 12 12 12C10.8954 12 9.99997 11.1046 9.99997 10C9.99997 8.89543 10.8954 8 12 8C13.1045 8 14 8.89543 14 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M22 13.9669V10.0332C19.1433 10.0332 17.2857 6.93041 18.732 4.46691L15.2679 2.5001C13.8038 4.99405 10.1978 4.99395 8.73363 2.5L5.26953 4.46681C6.71586 6.93035 4.85673 10.0332 2 10.0332V13.9669C4.85668 13.9669 6.71425 17.0697 5.26795 19.5332L8.73205 21.5C10.1969 19.0048 13.8046 19.0047 15.2695 21.4999L18.7336 19.5331C17.2874 17.0696 19.1434 13.9669 22 13.9669Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    }
                    description="Our native professionals working in the personal documents field from your desired language will deliver the work that fits the target country and language. We specialize in providing accurate and reliable translation services for personal documents. Whether you need translations for birth certificates, marriage certificates, passports, academic transcripts, or other personal records, our team ensures that your documents are translated with the utmost care and confidentiality. Our services help individuals navigate international processes and requirements with ease and confidence."
                    isOpen={personalDocuments}
                    onToggle={() => setPersonalDocuments(!personalDocuments)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <main>

        <section ref={sectionRef2} className="overflow-hidden mt-20 sm:mt-40 mx-4 documentLocalizationDetails flex flex-col gap-10 pb-10 ">
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl sm:text-1xl font-extrabold text-primary'>Our <span className="text-secondary">Specializations</span> </h1>
            <p className='text-sm text-center'>
              Tailored localization for diverse industries and document types from Tongue Twist.
            </p>
          </div>

          <div className='flex  flex-wrap gap-y-9  items-center justify-around '>
            <div className={`w-[90%] sm:w-[45%] lg:w-[30%] transition-transform duration-1000  ease-in-out ${isVisible2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              <div className={`h-[240px] py-10 px-5 justify-around flex flex-col items-center  rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] text-center transition-transform ease-in-out sm:hover:scale-105 duration-300 cursor-pointer`}>

                <div>

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                    <path d="M11.223 6V7.98898C11.223 9.38733 11.223 10.0865 11.4102 10.7577C11.5974 11.4289 11.9644 12.0452 12.6984 13.2779L13.6929 14.9482C15.5632 18.0892 16.4984 19.6597 15.7312 20.824L15.7193 20.8418C14.9409 22 12.9606 22 9 22C5.03938 22 3.05907 22 2.2807 20.8418L2.26884 20.824C1.50164 19.6597 2.43679 18.0892 4.30708 14.9482L5.30163 13.2779C6.03558 12.0452 6.40256 11.4289 6.5898 10.7577C6.77704 10.0865 6.77704 9.38733 6.77704 7.98898V6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6 6L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.5 13.2803C6.16667 12.699 7.73448 13.1181 9.00155 13.6643C10.6682 14.3828 12.1667 13.8019 12.5 13.2803" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M11.5 7C11.5 9 13.8624 11.2121 15.4728 11C15.4728 12.6569 16.934 14 18.7364 14C20.5388 14 22 12.6569 22 11C22 9.34315 21 8 19 8C19 6 17.5 4 15.3799 4C15.3799 2.45687 14.5 2 13.5 2C12.5 2 12 3 12 3C12 3 9 3 9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-5xl font-semibold">Scientific Documents</h1>
                  <p className="text-sm">Accurate translations for your research and scientific papers.</p>
                </div>
              </div>
            </div>

            <div className={`w-[90%] sm:w-[45%] lg:w-[30%] transition-transform duration-1000  ease-in-out ${isVisible2 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
              <div className={`h-[240px] py-10 px-5 justify-around flex flex-col items-center  rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] text-center transition-transform ease-in-out sm:hover:scale-105 duration-300 cursor-pointer`}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                    <path d="M19 9V7.81818C19 6.12494 19 5.27832 18.7478 4.60214C18.3424 3.5151 17.4849 2.65765 16.3979 2.2522C15.7217 2 14.8751 2 13.1818 2C10.2186 2 8.73706 2 7.55375 2.44135C5.65142 3.15088 4.15088 4.65142 3.44135 6.55375C3 7.73706 3 9.21865 3 12.1818L3 14.7273C3 17.7966 3 19.3313 3.79783 20.3971C4.02643 20.7025 4.29752 20.9736 4.60289 21.2022C5.66867 22 7.20336 22 10.2727 22H11C12.1698 22 14.5 22 14.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 14.3333H11.8403C12.5019 14.3333 12.8326 14.3333 13.0985 14.5076C13.3643 14.6818 13.5122 14.9956 13.8081 15.6232L15.4 19L17.6 12L19.1919 15.3768C19.4878 16.0044 19.6357 16.3182 19.9015 16.4924C20.1674 16.6667 20.4981 16.6667 21.1597 16.6667H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667H7.44444C7.9611 8.66667 8.21942 8.66667 8.43137 8.60988C9.00652 8.45577 9.45576 8.00652 9.60988 7.43137C9.66667 7.21942 9.66667 6.9611 9.66667 6.44444V5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
                <div>
                  <h1 className="text-5xl font-semibold">Medical & Pharmaceutical</h1>
                  <p className="text-sm text-center">Ensuring precision in medical and pharmaceutical documentation.</p>
                </div>

              </div>
            </div>

            <div className={`w-[90%] sm:w-[45%] lg:w-[30%] transition-transform duration-1000  ease-in-out ${isVisible2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              <div className={`h-[240px] py-10 px-5 justify-around flex flex-col items-center  rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] text-center transition-transform ease-in-out sm:hover:scale-105 duration-300 cursor-pointer`}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                    <path d="M20.3584 13.3567C19.1689 14.546 16.9308 14.4998 13.4992 14.4998C11.2914 14.4998 9.50138 12.7071 9.50024 10.4993C9.50024 7.07001 9.454 4.83065 10.6435 3.64138C11.8329 2.45212 12.3583 2.50027 17.6274 2.50027C18.1366 2.49809 18.3929 3.11389 18.0329 3.47394L15.3199 6.18714C14.6313 6.87582 14.6294 7.99233 15.3181 8.68092C16.0068 9.36952 17.1234 9.36959 17.8122 8.68109L20.5259 5.96855C20.886 5.60859 21.5019 5.86483 21.4997 6.37395C21.4997 11.6422 21.5479 12.1675 20.3584 13.3567Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M13.5 14.5L7.32842 20.6716C6.22386 21.7761 4.433 21.7761 3.32843 20.6716C2.22386 19.567 2.22386 17.7761 3.32843 16.6716L9.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M5.50896 18.5H5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
                <div>
                  <h1 className="font-semibold text-5xl sm:text-4xl">Technical Manuals</h1>
                  <p className="text-sm ">Clear and concise translations for technical and manufacturing manuals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <main>
        <section ref={sectionRef3} className="mt-20 sm:mt-40 bg-[#F8F8F8] p-2 overflow-hidden">
          <div className="serviceHighlightsDetails flex flex-col items-center">
            <h1 className="text-3xl sm:text-1xl font-extrabold text-primary">Client <span className="text-secondary">Interaction</span> </h1>
            <p className="text-sm text-center">
              Ideal for scientific research, educational content, business documents, and more.
            </p>
          </div>

          <div className="lg:flex justify-center items-center text-xl mx-3 md:mx-6 mt-10">
            <div className={`w-full lg:w-[33%] flex justify-center transition-transform duration-1000 ease-in-out ${isVisible3 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <img src={chatbotImg} alt="Chatbot Image" className="rounded-xl lg:shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]" />
            </div>

            <div className={`w-full lg:w-[50%] shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] rounded-xl py-10 px-2 md:rounded-r-md transition-transform duration-1000  ease-in-out ${isVisible3 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="flex items-center justify-between">
                <h1 className="text-4xl bg  font-semibold text-primary"><span className='text-secondary font'> Chatbot </span> for Quote Requests</h1>
                <hr className=" border-b-primary w-[40%] border-b-2" />
              </div>
              <p className="text-sm md:text-6xl">
                Clients can specify the type of localization
                (document or audiovisual), industry, desired language,
                volume of work, estimated project length, and client
                information. The chatbot will send the completed form
                as an email for quoting.
              </p>
            </div>
          </div>
        </section>
      </main>


      <main>
        <section ref={sectionRef4} className="mt-20 overflow-hidden sm:mt-40 whyChooseUsSection mx-2 p-2">
          <div className="text-center">
            <h1 className="text-3xl md:text-1xl font-extrabold  text-primary"> Why Choose <span className="text-secondary">Tongue Twist</span> </h1>
            <p className='text-base'>Professionals Scholars And PhDs</p>
          </div>


          <div className=" flex mt-5 flex-wrap gap-y-9 items-center justify-around pb-10">
            <div className={`w-[90%] sm:w-[45%] lg:w-[30%] transition-transform duration-1000  ease-in-out ${isVisible4 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="h-[390px] lg:h-[330px] py-5 px-5 justify-around flex flex-col items-center rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] text-center transition-transform ease-in-out sm:hover:scale-105 duration-300 cursor-pointer">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                    <path d="M10 13.3333C10 13.0233 10 12.8683 10.0341 12.7412C10.1265 12.3961 10.3961 12.1265 10.7412 12.0341C10.8683 12 11.0233 12 11.3333 12H12.6667C12.9767 12 13.1317 12 13.2588 12.0341C13.6039 12.1265 13.8735 12.3961 13.9659 12.7412C14 12.8683 14 13.0233 14 13.3333V14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14V13.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.9 13.5H15.0826C16.3668 13.5 17.0089 13.5 17.5556 13.3842C19.138 13.049 20.429 12.0207 20.9939 10.6455C21.1891 10.1704 21.2687 9.59552 21.428 8.4457C21.4878 8.01405 21.5177 7.79823 21.489 7.62169C21.4052 7.10754 20.9932 6.68638 20.4381 6.54764C20.2475 6.5 20.0065 6.5 19.5244 6.5H4.47562C3.99351 6.5 3.75245 6.5 3.56187 6.54764C3.00682 6.68638 2.59477 7.10754 2.51104 7.62169C2.48229 7.79823 2.51219 8.01405 2.57198 8.4457C2.73128 9.59552 2.81092 10.1704 3.00609 10.6455C3.571 12.0207 4.86198 13.049 6.44436 13.3842C6.99105 13.5 7.63318 13.5 8.91743 13.5H10.1" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3.5 11.5V13.5C3.5 17.2712 3.5 19.1569 4.60649 20.3284C5.71297 21.5 7.49383 21.5 11.0556 21.5H12.9444C16.5062 21.5 18.287 21.5 19.3935 20.3284C20.5 19.1569 20.5 17.2712 20.5 13.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.5 6.5L15.4227 6.14679C15.0377 4.38673 14.8452 3.50671 14.3869 3.00335C13.9286 2.5 13.3199 2.5 12.1023 2.5H11.8977C10.6801 2.5 10.0714 2.5 9.61309 3.00335C9.15478 3.50671 8.96228 4.38673 8.57727 6.14679L8.5 6.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-extrabold text-primary">Professional Expertise</h1>
                </div>
                <div >
                  <ReadMoreText limit={14} text="Only professionals actively working in their fields handle translations, ensuring high relevance and accuracy. All translators have advanced degrees (Master's, PhDs, or professional degrees such as Doctor of Medicine or Law)" />
                </div>
              </div>
            </div>

            <div className={`w-[90%] sm:w-[45%] lg:w-[30%] transition-transform duration-1000  ease-in-out ${isVisible4 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>

              <div className="h-[390px] lg:h-[330px] py-5 px-5 justify-around flex flex-col items-center rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] text-center transition-transform ease-in-out sm:hover:scale-105 duration-300 cursor-pointer">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                    <path d="M7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465M7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C5.34315 19.5 4 18.1569 4 16.5C4 15.9313 4.15822 15.3996 4.43304 14.9465M7 4.5C7 5.31791 7.39278 6.04408 8 6.50018M4.43304 14.9465C4.78948 14.3588 5.34207 13.9032 6 13.6707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.25 4.74976L17 6.99976H15M18.5 4.74976C18.5 5.16397 18.8358 5.49976 19.25 5.49976C19.6642 5.49976 20 5.16397 20 4.74976C20 4.33554 19.6642 3.99976 19.25 3.99976C18.8358 3.99976 18.5 4.33554 18.5 4.74976Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.25 19.2498L17 16.9998H15M18.5 19.2498C18.5 18.8355 18.8358 18.4998 19.25 18.4998C19.6642 18.4998 20 18.8355 20 19.2498C20 19.664 19.6642 19.9998 19.25 19.9998C18.8358 19.9998 18.5 19.664 18.5 19.2498Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.25 11.9998H15M18.5 11.9998C18.5 12.414 18.8358 12.7498 19.25 12.7498C19.6642 12.7498 20 12.414 20 11.9998C20 11.5855 19.6642 11.2498 19.25 11.2498C18.8358 11.2498 18.5 11.5855 18.5 11.9998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-extrabold text-primary">Specialized Knowledge</h1>
                </div>
                <div>
                  <ReadMoreText limit={14} text="Ensuring high relevance and accuracy in translations requires professionals with specialized knowledge actively working in their fields. All translators possess advanced degrees (Master's, PhDs, or professional degrees such as MD or JD) to ensure expertise." />
                </div>
              </div>
            </div>

            <div className={`w-[90%] sm:w-[45%] lg:w-[30%] transition-transform duration-1000  ease-in-out ${isVisible4 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="h-[390px] lg:h-[330px] py-5 px-5 justify-around flex flex-col items-center rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]  text-center transition-transform ease-in-out sm:hover:scale-105 duration-300 cursor-pointer">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                    <path d="M20 22.0002V17.0002C20 15.1146 20 14.1718 19.4142 13.586C18.8284 13.0002 17.8856 13.0002 16 13.0002L12 22.0002L8 13.0002C6.11438 13.0002 5.17157 13.0002 4.58579 13.586C4 14.1718 4 15.1146 4 17.0002V22.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15L11.5 19L12 20.5L12.5 19L12 15ZM12 15L11 13H13L12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.5 6.50012V5.50012C15.5 3.56713 13.933 2.00012 12 2.00012C10.067 2.00012 8.5 3.56713 8.5 5.50012V6.50012C8.5 8.43312 10.067 10.0001 12 10.0001C13.933 10.0001 15.5 8.43312 15.5 6.50012Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-extrabold text-primary">Professional Localization</h1>
                </div>
                <div>
                  <ReadMoreText limit={14} text="Content often needs to be adapted to meet each contry's specific needs. Our local experts provide consulting to ensute your content resonates with native audience. With deep knowledge of cultural nuances." />
                </div>
              </div>
            </div>

            <div className={`w-[90%] sm:w-[45%] lg:w-[30%] transition-transform duration-1000  ease-in-out ${isVisible4 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>


              <div className="h-[390px] lg:h-[330px] py-5 px-5 justify-around flex flex-col items-center rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] text-center transition-transform ease-in-out sm:hover:scale-105 duration-300 cursor-pointer">
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
                  <h1 className="text-4xl font-extrabold text-primary">Hiring</h1>
                </div>
                <div>
                  <ReadMoreText limit={14} text="We exclusively hire translators who hold advanced degrees, such as a Master's, Ph.D., or a professional degree (e.g., Doctor of Medicine, Doctor of Law)." />
                </div>
              </div>
            </div>

            <div className={`w-[90%] sm:w-[45%] lg:w-[30%] transition-transform duration-1000  ease-in-out ${isVisible4 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>

              <div className="h-[390px] lg:h-[330px] py-5 px-5 justify-around flex flex-col items-center rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] text-center transition-transform ease-in-out sm:hover:scale-105 duration-300 cursor-pointer">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                    <path d="M8 13.5H16M8 8.5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div >
                  <h1 className="text-4xl font-extrabold text-primary">Feedbacks</h1>
                </div>
                <div>
                  <ReadMoreText limit={14} text="As experienced professionals, we provide insightful feedback from a deep understanding of the industry. Our insider perspective allows us to offer practical recommendations tailored to specific challenges." />
                </div>
              </div>
            </div>

            <div className={`w-[90%] sm:w-[45%] lg:w-[30%] transition-transform duration-1000  ease-in-out ${isVisible4 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="h-[390px] lg:h-[330px] py-5 px-5 justify-around flex flex-col items-center rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] text-center transition-transform ease-in-out sm:hover:scale-105 duration-300 cursor-pointer">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#01185B" fill="none">
                    <path d="M13.5 13L17 9M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6 12C6 8.68629 8.68629 6 12 6C13.0929 6 14.1175 6.29218 15 6.80269" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M2.50006 12.0001C2.50006 7.52172 2.50006 5.28255 3.8913 3.8913C5.28255 2.50006 7.52172 2.50006 12.0001 2.50006C16.4784 2.50006 18.7176 2.50006 20.1088 3.8913C21.5001 5.28255 21.5001 7.52172 21.5001 12.0001C21.5001 16.4784 21.5001 18.7176 20.1088 20.1088C18.7176 21.5001 16.4784 21.5001 12.0001 21.5001C7.52172 21.5001 5.28255 21.5001 3.8913 20.1088C2.50006 18.7176 2.50006 16.4784 2.50006 12.0001Z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-extrabold text-primary">Speed and Quality</h1>
                </div>
                <div>
                  <ReadMoreText limit={14} text="With fast turnaround times and high-quality results, we consistently deliver work ahead of deadlines. Our commitment to efficiency and excellence ensures that you receive outstanding outcomes promptly, meeting or exceeding your expectations." />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <main>
        <section ref={sectionRef5} className="mt-20 overflow-hidden sm:mt-40 md:flex justify-around mx-2">
          <div className={`md:w-[45%] transition-transform duration-700 ease-in-out ${isVisible5 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <div className="p-2 rounded-md shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] image bg-[url('assets/images/dummy2.webp')]  bg-cover bg-end sm:bg-cover bg-no-repeat h-[320px] sm:h-[420px]">

            </div>
          </div>
          <div className={`w-full  md:w-[45%] p-2 transition-transform duration-700 ease-in-out ${isVisible5 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <h1 className="text-3xl sm:text-1xl mt-7 font-extrabold text-primary">
              The Power of Localization: Reaching a <span className="text-secondary">Worldwide Audience</span>
            </h1>
            <p className='text-sm sm:text-base'>
              At Tongue Twist, we believe your online presence is a global handshake.
              By localizing your content, you're not just translating words; you're
              speaking the language of your target markets and understanding their
              cultural nuances. This strategic alignment fosters trust, builds
              meaningful connections, and ultimately drives engagement with audiences
              worldwide.
            </p>
            <p className='text-sm sm:text-base'>
              When your users feel valued and understood, interest transforms into
              loyalty, paving the way for successful market expansion.
            </p>
          </div>
        </section>
      </main>
      <main>
        <section ref={sectionRef6} className='mt-20 overflow-hidden sm:mt-40 mx-1'>
          <div>
            <h1 className='text-3xl sm:text-1xl font-extrabold text-primary text-center'>
              How Our <span className="text-secondary">Documnet Localization</span>  Process Works
            </h1>
          </div>
          <div>
            <div className={`flex flex-wrap sm:flex-nowrap transition-transform duration-1000 ease-in-out ${isVisible6 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <DocumentProcess
                stepNumber="01"
                title="Translation"
                description="A translator converts the document into the target language."
                isHovered={isHoveredTranslation}
                setIsHovered={setIsHoveredTranslation}
                svgIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                  <path d="M5 5.82759H7.7M11 5.82759H9.5M7.7 5.82759H9.5M7.7 5.82759V5M9.5 5.82759C9.18351 6.95937 8.52075 8.02923 7.76429 8.96946M5.83571 11C6.44723 10.4377 7.13788 9.74802 7.76429 8.96946M7.76429 8.96946C7.37857 8.51724 6.83857 7.78558 6.68429 7.45455M7.76429 8.96946L8.92143 10.1724" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.5 19L14.3333 17M18.5 19L17.6667 17M14.3333 17L16 13L17.6667 17M14.3333 17H17.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 10V8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8C2 10.8284 2 12.2426 2.87868 13.1213C3.75736 14 5.17157 14 8 14H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10 16C10 13.1716 10 11.7574 10.8787 10.8787C11.7574 10 13.1716 10 16 10C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22C13.1716 22 11.7574 22 10.8787 21.1213C10 20.2426 10 18.8284 10 16Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 16.5C4 17.9045 4 18.6067 4.33706 19.1111C4.48298 19.3295 4.67048 19.517 4.88886 19.6629C5.39331 20 6.09554 20 7.5 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 7.5C20 6.09554 20 5.39331 19.6629 4.88886C19.517 4.67048 19.3295 4.48298 19.1111 4.33706C18.6067 4 17.9045 4 16.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}
              />
              <DocumentProcess
                stepNumber="02"
                title="Editing"
                description="The translation is reviewed for accuracy and formatted."
                isHovered={isHoveredEditing}
                setIsHovered={setIsHoveredEditing}
                svgIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                    <path d="M18.8295 14.2542C19.1276 13.9312 19.2766 13.7698 19.435 13.6756C19.8171 13.4483 20.2876 13.4412 20.6761 13.6569C20.8372 13.7463 20.9908 13.9032 21.298 14.2171C21.6053 14.531 21.7589 14.6879 21.8464 14.8524C22.0575 15.2492 22.0506 15.7299 21.8281 16.1203C21.7359 16.2821 21.5779 16.4343 21.2617 16.7388L17.5003 20.3617C16.9012 20.9387 16.6016 21.2273 16.2272 21.3735C15.8528 21.5197 15.4413 21.509 14.6181 21.4874L14.5062 21.4845C14.2556 21.478 14.1303 21.4747 14.0574 21.392C13.9846 21.3094 13.9945 21.1817 14.0144 20.9265L14.0252 20.7879C14.0812 20.0694 14.1092 19.7102 14.2495 19.3873C14.3898 19.0644 14.6318 18.8022 15.1158 18.2778L18.8295 14.2542Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M22 10.5V9.71749C22 7.77787 22 6.80807 21.4142 6.2055C20.8284 5.60294 19.8856 5.60294 18 5.60294H15.9214C15.004 5.60294 14.9964 5.60116 14.1715 5.18834L10.8399 3.52114C9.44884 2.82504 8.75332 2.47699 8.01238 2.50118C7.27143 2.52537 6.59877 2.91808 5.25345 3.70351L4.02558 4.42037C3.03739 4.99729 2.54329 5.28576 2.27164 5.76564C2 6.24553 2 6.82993 2 7.99873V16.2157C2 17.7514 2 18.5193 2.34226 18.9467C2.57001 19.231 2.88916 19.4222 3.242 19.4856C3.77226 19.5808 4.42148 19.2018 5.71987 18.4437C6.60156 17.929 7.45011 17.3944 8.50487 17.5394C9.38869 17.6608 10.21 18.2185 11 18.6138" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 2.5L8 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M15 5.5V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />
              <DocumentProcess
                stepNumber="03"
                title="Feedback"
                description="The translator consults with the client for cultural appropriateness."
                isHovered={isHoveredFeedback}
                setIsHovered={setIsHoveredFeedback}
                svgIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                    <path d="M8 13.5H16M8 8.5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                }
              />
              <DocumentProcess
                stepNumber="04"
                title="Proofreading"
                description={"The translation is checked for errors."}
                isHovered={isHoveredAudioGeneration}
                setIsHovered={setIsHoveredAudioGeneration}
                svgIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                    <path d="M2 10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 3H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.6 18.6L22 21M20.8 14.4C20.8 11.4176 18.3824 9 15.4 9C12.4176 9 10 11.4176 10 14.4C10 17.3824 12.4176 19.8 15.4 19.8C18.3824 19.8 20.8 17.3824 20.8 14.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />


            </div>

            <div className={`flex flex-wrap sm:flex-nowrap transition-transform duration-1000 ease-in-out ${isVisible6 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} mt-2`}>
              <DocumentProcess
                stepNumber="05"
                title="Second Editing"
                description="The content is refined after proofreading."
                isHovered={isHoveredAudioEditing}
                setIsHovered={setIsHoveredAudioEditing}
                svgIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                    <path d="M10.5 14L11.0305 13.4285C11.653 12.799 12.6825 12.873 13.2107 13.5852C13.6233 14.1417 13.5915 14.915 13.1346 15.4349L10.5 18H13.4315" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="15.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9 9.5L5.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 9.5L18.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 2L14 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.5 9L9.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />
              <DocumentProcess
                stepNumber="06"
                title="Quality Check"
                description="A final review ensures quality standards are met."
                isHovered={isHoveredQualityCheck}
                setIsHovered={setIsHoveredQualityCheck}
                svgIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                    <path d="M14.2618 3.59937C13.1956 2.53312 12.6625 2 12 2C11.3375 2 10.8044 2.53312 9.73815 3.59937C9.09832 4.2392 8.46427 4.53626 7.55208 4.53626C6.7556 4.53626 5.62243 4.38178 5 5.00944C4.38249 5.63214 4.53628 6.76065 4.53628 7.55206C4.53628 8.46428 4.2392 9.09832 3.59935 9.73817C2.53312 10.8044 2.00001 11.3375 2 12C2.00002 12.6624 2.53314 13.1956 3.59938 14.2618C4.31616 14.9786 4.53628 15.4414 4.53628 16.4479C4.53628 17.2444 4.38181 18.3776 5.00949 19C5.63218 19.6175 6.76068 19.4637 7.55206 19.4637C8.52349 19.4637 8.99128 19.6537 9.68457 20.347C10.2749 20.9374 11.0663 22 12 22C12.9337 22 13.7251 20.9374 14.3154 20.347C15.0087 19.6537 15.4765 19.4637 16.4479 19.4637C17.2393 19.4637 18.3678 19.6175 18.9905 19M20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19M18.9905 19H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 10.3077C8 10.3077 10.25 10 12 14C12 14 17.0588 4 22 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />
              <DocumentProcess
                stepNumber="07"
                title="Delivery"
                description="The document is delivered to the client."
                isHovered={isHoveredVideoProduction}
                setIsHovered={setIsHoveredVideoProduction} f
                svgIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#01185B" fill="none">
                    <path d="M4 14H6.39482C6.68897 14 6.97908 14.0663 7.24217 14.1936L9.28415 15.1816C9.54724 15.3089 9.83735 15.3751 10.1315 15.3751H11.1741C12.1825 15.3751 13 16.1662 13 17.142C13 17.1814 12.973 17.2161 12.9338 17.2269L10.3929 17.9295C9.93707 18.0555 9.449 18.0116 9.025 17.8064L6.84211 16.7503" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 16.5L17.5928 15.0889C18.407 14.8352 19.2871 15.136 19.7971 15.8423C20.1659 16.3529 20.0157 17.0842 19.4785 17.3942L11.9629 21.7305C11.4849 22.0063 10.9209 22.0736 10.3952 21.9176L4 20.0199" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 12H13C11.1144 12 10.1716 12 9.58579 11.4142C9 10.8284 9 9.88562 9 8V6C9 4.11438 9 3.17157 9.58579 2.58579C10.1716 2 11.1144 2 13 2H15C16.8856 2 17.8284 2 18.4142 2.58579C19 3.17157 19 4.11438 19 6V8C19 9.88562 19 10.8284 18.4142 11.4142C17.8284 12 16.8856 12 15 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />
              <div className='w-36'>

              </div>
            </div>

          </div>

        </section>
      </main>

      <main>
        <section ref={sectionRef7} className='mt-20 sm:mt-40 overflow-hidden pb-10'>
          <div className='flex flex-col items-center '>
            <div className='justify-center md:w-[50%] mx-2'>

              <h1 className='text-3xl sm:text-1xl font-extrabold text-primary text-center '>Get Started with the Leading <br /> Experts in <span className="text-secondary">Localization Services</span> </h1>
              <p className='text-sm text-center'>Reach out to Tongue Twist for a free, no-obligation quote to localize your business and expand into new markets. You will receive:</p>
            </div>
          </div>

          <div className='flex flex-wrap justify-around gap-y-14 mt-4'>
            <div className={`w-[90%] md:w-[30%] transition-transform duration-1000 ease-in ${isVisible7 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className='mx-2 md:mx-0 h-[250px] flex flex-col p-4 justify-between transition-transform duration-300 ease-in md:hover:scale-105 cursor-pointer rounded-md shadow-[0_10px_16px_rgba(29,_78,_216,_0.4)] '>

                <div className='rounded-full flex items-center'>
                  <div className='bg-primary rounded-full p-2 shadow-2xl'>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#ffff" fill="none">
                      <path d="M15.1312 2.5C14.1462 2.17555 13.0936 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19.5 4.5L12 12M19.5 4.5V2M19.5 4.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <div><h1 className='text-4xl font-semibold md:text-3xl'>100% accuracy</h1></div>
                <div><p>We guarantee 100% accurate translations and localized content every time.</p></div>
              </div>
            </div>

            <div className={`w-[90%] md:w-[30%]  transition-transform duration-1000 ease-in ${isVisible7 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
              <div className=' mx-2 md:mx-0 h-[250px] flex flex-col p-4 justify-between transition-transform duration-300 ease-in  md:hover:scale-105 cursor-pointer rounded-md shadow-[0_10px_16px_rgba(29,_78,_216,_0.4)] '>

                <div className='rounded-full flex  items-center '>
                  <div className='bg-primary rounded-full p-2 shadow-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#ffff" fill="none">
                      <path d="M17 10.8045C17 10.4588 17 10.286 17.052 10.132C17.2032 9.68444 17.6018 9.51076 18.0011 9.32888C18.45 9.12442 18.6744 9.02219 18.8968 9.0042C19.1493 8.98378 19.4022 9.03818 19.618 9.15929C19.9041 9.31984 20.1036 9.62493 20.3079 9.87302C21.2513 11.0188 21.7229 11.5918 21.8955 12.2236C22.0348 12.7334 22.0348 13.2666 21.8955 13.7764C21.6438 14.6979 20.8485 15.4704 20.2598 16.1854C19.9587 16.5511 19.8081 16.734 19.618 16.8407C19.4022 16.9618 19.1493 17.0162 18.8968 16.9958C18.6744 16.9778 18.45 16.8756 18.0011 16.6711C17.6018 16.4892 17.2032 16.3156 17.052 15.868C17 15.714 17 15.5412 17 15.1955V10.8045Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7 10.8046C7 10.3694 6.98778 9.97821 6.63591 9.6722C6.50793 9.5609 6.33825 9.48361 5.99891 9.32905C5.55001 9.12458 5.32556 9.02235 5.10316 9.00436C4.43591 8.9504 4.07692 9.40581 3.69213 9.87318C2.74875 11.019 2.27706 11.5919 2.10446 12.2237C1.96518 12.7336 1.96518 13.2668 2.10446 13.7766C2.3562 14.6981 3.15152 15.4705 3.74021 16.1856C4.11129 16.6363 4.46577 17.0475 5.10316 16.996C5.32556 16.978 5.55001 16.8757 5.99891 16.6713C6.33825 16.5167 6.50793 16.4394 6.63591 16.3281C6.98778 16.0221 7 15.631 7 15.1957V10.8046Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M5 9C5 5.68629 8.13401 3 12 3C15.866 3 19 5.68629 19 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                      <path d="M19 17V17.8C19 19.5673 17.2091 21 15 21H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div><h1 className='text-4xl font-semibold md:text-3xl'>24/7</h1></div>
                <div><p>As a global service provider, we ensure 24/7 assistance for any questions or adjustments.</p></div>
              </div>
            </div>
            <div className={`w-[90%] md:w-[30%]  transition-transform duration-1000 ease-in ${isVisible7 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className=' mx-2 md:mx-0 h-[250px] flex flex-col p-4 justify-between transition-transform duration-300 ease-in md:hover:scale-105 cursor-pointer rounded-md shadow-[0_10px_16px_rgba(29,_78,_216,_0.4)] '>
                <div className='flex items-center p-1'>
                  <div className='bg-primary rounded-full p-2 shadow-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#ffff" fill="none">
                      <path d="M9.66667 7.7143V6.41327C9.66667 4.94834 10.2781 3.68557 11.179 2.62107C11.5294 2.20702 11.7046 2 12 2C12.2954 2 12.4706 2.20702 12.821 2.62107C13.7219 3.68557 14.3333 4.94834 14.3333 6.41327V7.7143C14.3333 8.78573 14.3333 9.09036 14.9807 9.559C15.4985 9.8919 16 10.2143 16 10.8598C16 11.6429 15.6667 12 14.9358 12H9.06415C8.33333 12 8 11.6429 8 10.8598C8 10.2143 8.50146 9.8919 9.01933 9.559C9.66667 9.09036 9.66667 8.78573 9.66667 7.7143Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M19.5 22C20.8807 22 22 20.8061 22 19.3333C22 17.8606 20.8807 16.6667 19.5 16.6667C19.5 15.1939 18.3807 14 17 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.5 22C3.11929 22 2 20.8061 2 19.3333C2 17.8606 3.11929 16.6667 4.5 16.6667C4.5 15.1939 5.61929 14 7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 15V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M14 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div><h1 className='text-4xl font-semibold md:text-3xl'>Fast turnarounds</h1></div>
                <div><p>We provide the quickest turnaround times in the industry.</p></div>
              </div>
            </div>
            <div className={`w-[90%] md:w-[30%]  transition-transform duration-1000 ease-in ${isVisible7 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className='mx-2 md:mx-0 h-[250px] flex flex-col p-4 justify-between transition-transform duration-300 ease-in md:hover:scale-105 cursor-pointer rounded-md shadow-[0_10px_16px_rgba(29,_78,_216,_0.4)] '>

                <div className='rounded-full flex items-center '>

                  <div className='bg-primary rounded-full p-2 shadow-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#fff" fill="none">
                      <path d="M11.5 22C7.49306 22 5.48959 22 4.2448 20.5355C3 19.0711 3 16.714 3 12C3 7.28596 3 4.92893 4.2448 3.46447C5.48959 2 7.49306 2 11.5 2C15.5069 2 17.5104 2 18.7552 3.46447C19.7572 4.64332 19.9527 6.40054 19.9908 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 8H15M8 13H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19.6092 18.1054C20.4521 17.4918 21 16.4974 21 15.375C21 13.511 19.489 12 17.625 12H17.375C15.511 12 14 13.511 14 15.375C14 16.4974 14.5479 17.4918 15.3908 18.1054M19.6092 18.1054C19.0523 18.5108 18.3666 18.75 17.625 18.75H17.375C16.6334 18.75 15.9477 18.5108 15.3908 18.1054M19.6092 18.1054L20.192 19.9404C20.4143 20.6403 20.5255 20.9903 20.4951 21.2082C20.4318 21.6617 20.0619 21.9984 19.6252 22C19.4154 22.0008 19.101 21.8358 18.4723 21.5059C18.2027 21.3644 18.0679 21.2936 17.93 21.252C17.649 21.1673 17.351 21.1673 17.07 21.252C16.9321 21.2936 16.7973 21.3644 16.5277 21.5059C15.899 21.8358 15.5846 22.0008 15.3748 22C14.9381 21.9984 14.5682 21.6617 14.5049 21.2082C14.4745 20.9903 14.5857 20.6403 14.808 19.9404L15.3908 18.1054" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <div><h1 className='text-4xl font-semibold md:text-3xl'>High standards</h1></div>
                <div><p>We offer highly competitive and transparent pricing with no surprises or hidden fees.</p></div>
              </div>
            </div>

            <div className={`w-[90%] md:w-[30%]  transition-transform duration-1000 ease-in ${isVisible7 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className=' mx-2 md:mx-0 h-[250px] flex flex-col  p-4 justify-between transition-transform duration-300 ease-in md:hover:scale-105 cursor-pointer rounded-md shadow-[0_10px_16px_rgba(29,_78,_216,_0.4)] '>

                <div className='flex items-center '>

                  <div className='bg-primary rounded-full p-2 shadow-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#fff" fill="none">
                      <path d="M17 18L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 18L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M7 18L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M6 7C9.19706 10.2683 13.2338 11.0813 17.1413 9.99185M15.6881 8.47133L17.7617 9.48839C18.0076 9.60901 18.074 9.88829 17.91 10.1122L16.5269 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div><h1 className='text-4xl font-semibold md:text-3xl'>Low costs</h1></div>
                <div><p>Our translators, who are scholars and PhDs, have more than 8+ years of localization experience and profound cultural knowledge of their languages.</p></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <main>
        <section className='mt-20 sm:mt-20 mb-10 flex justify-center flex-col items-center'>
          <div>
            <h1 className=' sm:text-4xl text-center '>Expand globally with <span className="text-secondary font-extrabold text-5xl sm:text-4xl">Tongue Twist</span> . Get your localization quote today.</h1>
          </div>
          <div className='h-[30px]'>
            <button className="p-3 rounded-md bg-primary text-white hover:bg-white hover:text-secondary transition-transform duration-300 hover:scale-105 hover:border-[1px] hover:border-secondary font-semibold">Get A Quote</button>
          </div>
        </section>
      </main >
    </>
  )
}
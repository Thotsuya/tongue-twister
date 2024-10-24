  import { useState } from 'react';
  import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom';

  //Components 
  import Navbar from './Components/Navbar.jsx'

  // Pages
  import Home from './pages/Home.jsx'
  import ServicesDocumentLocalization from './pages/ServicesDocumentLocalization.jsx'
  import Footer from './Components/Footer.jsx'
  import AudioVideoLocalization from './pages/AudioVideoLocalization.jsx'
  import BackToTop from './Components/BackToTop.jsx'
  import About from './pages/About.jsx'
  import ChatBot from './ChatBot/ChatBot.jsx'
  import Contact from './pages/Contact.jsx'
  import Expertise from './pages/Expertise.jsx'
  import Languages from './pages/Languages.jsx'
  import SmoothScrolling from './Components/SmoothScrolling.jsx'
  import LoadingHandler from './Components/LoadingHandler.jsx'

  function App() {
    const [showChatBot, setShowChatBot] = useState(false);
    // useEffec(() => {
    //   const timer = setTimeout(() => {
    //     const link1 = document.createElement("link");
    //     link1.rel = "preconnect";
    //     link1.href = "https://fonts.googleapis.com";
    //     document.head.appendChild(link1);

    //     const link2 = document.createElement("link");
    //     link2.rel = "preconnect";
    //     link2.href = "https://fonts.gstatic.com";
    //     link2.crossOrigin = "anonymous";
    //     document.head.appendChild(link2);

    //     const link3 = document.createElement("link");
    //     link3.rel = "stylesheet";
    //     link3.href =
    //       "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
    //       document.head.appendChild(link3);

    //       const link4 = document.createElement("link");
    //       link4.rel = "stylesheet";
    //       link4.href =
    //       "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap";
    //       document.head.appendChild(link4);
    //     }, 4000); 
    //     "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
    //     "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap";

    //   return () => clearTimeout(timer);

    // }, []);
    return (

      <>
        <BackToTop />
        <BrowserRouter>
          <Navbar/>
          <SmoothScrolling />
          {<LoadingHandler />}
          <Routes>
            <Route path='/' element={<Home showChatBot={showChatBot} setShowChatBot={setShowChatBot} />} />
            <Route path='/services-document-localization' element={<ServicesDocumentLocalization showChatBot={showChatBot} setShowChatBot={setShowChatBot} />} />
            <Route path='/services-audio-video-localization' element={<AudioVideoLocalization showChatBot={showChatBot} setShowChatBot={setShowChatBot} />} />
            <Route path='/expertise' element={<Expertise />} />
            <Route path='/languages' element={<Languages />} />
            <Route path='/about-us' element={<About />} /> 
            <Route path='/Contact' element={<Contact />} /> 

          </Routes>

          <Footer />
        </BrowserRouter>
        <div className="chatBotContainer shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]">
          <div 
            onClick={() => setShowChatBot(!showChatBot)}
            className={`fixed w-[100%] sm:w-auto right-[0px] ${setShowChatBot ? "bottom-0" : ""} sm:right-[0px] transition transform duration-300 ease-in-out cursor-pointer`}
          >
            {showChatBot ? (
              <div
                className='w-[100%]  sm:w-auto fixed bottom-0 right-0 sm:bottom-8 sm:right-6 '
                onClick={(e) => e.stopPropagation()}>
                <ChatBot showChatBot={showChatBot} setShowChatBot={setShowChatBot} />
              </div>
            ) : (
              <div className={`fixed bottom-[37px] right-[15px] border-4 w-20 h-20 flex justify-center items-center  border-b-[#f14f4a] border-t-[#f14f4a] border-r-[#fff] border-l-[#fff] bg-primary transition ease-in-out duration-300 sm:hover:scale-110 p-4 rounded-full`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  color="#ffff"
                  fill="none"
                >
                  <path
                    d="M11 8H13C15.8284 8 17.2426 8 18.1213 8.87868C19 9.75736 19 11.1716 19 14C19 16.8284 19 18.2426 18.1213 19.1213C17.2426 20 15.8284 20 13 20H12C12 20 11.5 22 8 22C8 22 9 20.9913 9 19.9827C7.44655 19.9359 6.51998 19.7626 5.87868 19.1213C5 18.2426 5 16.8284 5 14C5 11.1716 5 9.75736 5.87868 8.87868C6.75736 8 8.17157 8 11 8Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 11.5H19.5C20.4346 11.5 20.9019 11.5 21.25 11.701C21.478 11.8326 21.6674 12.022 21.799 12.25C22 12.5981 22 13.0654 22 14C22 14.9346 22 15.4019 21.799 15.75C21.6674 15.978 21.478 16.1674 21.25 16.299C20.9019 16.5 20.4346 16.5 19.5 16.5H19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 11.5H4.5C3.56538 11.5 3.09808 11.5 2.75 11.701C2.52197 11.8326 2.33261 12.022 2.20096 12.25C2 12.5981 2 13.0654 2 14C2 14.9346 2 15.4019 2.20096 15.75C2.33261 15.978 2.52197 16.1674 2.75 16.299C3.09808 16.5 3.56538 16.5 4.5 16.5H5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 5V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12V13M15 12V13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 16.5C10 16.5 10.6667 17 12 17C13.3333 17 14 16.5 14 16.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </>
    )
  }

  export default App

import { Link } from "react-router-dom";
import footerLogo from "../assets/images/footerLogo.webp";

function Footer() {
    const currentYear = new Date().getFullYear();
    const languagesColumn1 = ["English", "Arabic", "Chinese", "Dutch", "French", "German", "Hebrew", "Hindi", "Italian"];
    const languagesColumn2 = ["Japanese", "Korean", "Polish", "Portuguese", "Russian", "Spanish", "Turkish", "Vietnamese"];

    return (
        <footer className="bg-primary FOTTER">
            <div className="flex flex-col gap-3 lg:flex-row justify-around text-white p-5 md:p-8">

                <div className="lg:w-[30%] flex flex-col items-center gap-6">
                    <div className="w-full">
                        <img src={footerLogo} loading="lazy" alt="logo" width="130px" height="100px" />
                    </div>
                    <div>
                        <p className="text-sm md:text-base text-slate-300">
                            We are a professional translation company that offers exceptional language services from insider scholars who are translating alongside their professional fields. Our services are high-quality and tailored by professionals actively working in their respective domains.
                        </p>
                    </div>
                </div>

                <div className="flex lg:flex-col justify-between gap-10">
                    <div className="flex flex-col md:mt-0">
                        <h1 className="text-4xl">Services</h1>
                        <Link to="/services-document-localization" className="text-base hover:opacity-90 text-slate-300">
                            Document Localization
                        </Link>
                        <Link to="/services-audio-video-localization" className='text-base hover:opacity-90 text-slate-300'>
                            Audiovisual Localization
                        </Link>
                    </div>
                    <div> 
                        <h1 className='text-4xl'>Translation</h1>
                        <h2 className="text-base text-slate-300">Document</h2>
                        <h2 className="text-base text-slate-300">Websites</h2>
                        <h2 className="text-base text-slate-300">Certified Translation</h2>
                        <h2 className="text-base text-slate-300">Translation for Regulated Companies</h2>
                    </div>
                </div>

                <div>
                    <h1 className='text-4xl'>Languages</h1>
                    <div className='flex gap-3 justify-between md:justify-normal'>
                        <div className='text-base text-slate-300'>
                            {languagesColumn1.map(language => <h2 key={language}>{language}</h2>)}
                        </div>
                        <div className='text-base text-slate-300'>
                            {languagesColumn2.map(language => <h2 key={language}>{language}</h2>)}
                        </div>
                    </div>
                </div>

                <div className='mt-5 text-sm md:block sm:flex items-center justify-between'>
                    <Link to='/Contact' className='text-base hover:opacity-90'>
                        <div>
                            <button className="p-2 text-5xl border-2 rounded-md hover:bg-white hover:text-secondary font-semibold transition duration-300">Contact Us</button>
                        </div>
                    </Link>
                    <div className="mt-2 flex gap-2 items-center">
                        <a href="#" aria-label="LinkedIn" className="hover:opacity-85 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none">
                                <path d="M7 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.00801 7L6.99902 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:opacity-85 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none">
                                <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:opacity-85 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none">
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook" className="hover:opacity-85 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
 
                </div>
            </div>
            <hr className="border border-white" />
            <div className="text-base flex justify-center items-center tracking-widest text-slate-300">
                Copyright &#169; Tongue Twist {currentYear}
            </div>
        </footer>
    );
}

export default Footer;
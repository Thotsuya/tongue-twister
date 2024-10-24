import { useEffect, useState } from 'react';
import axios from 'axios';

import uploadingAnimation from '../assets/images/uploadinganimation.gif'

export default function ChatBot({ showChatBot, setShowChatBot }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        localizationType: "",
        industry: "",
        language: "",
        volumeType: "",
        volume: "",
        projectLength: "",
        clientType: "",
        name: "",
        email: "",
        jobTitle: "",
        additionalQueries: "",
    });

    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [customLanguage, setCustomLanguage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);
        setProgress(0);

        const finalIndustry = formData.industry === "Other" ? formData.otherIndustry : formData.industry;

        const finalLanguage = formData.language === "Other" ? customLanguage : formData.language;

        const requiredFields = [
            { name: "localizationType", label: "Localization Type" },
            { name: "industry", label: "Industry" },
            { name: "language", label: "Language" },
            { name: "volume", label: "Volume" },
            { name: "name", label: "Name" },
            { name: "email", label: "Email" },
        ];

        for (const field of requiredFields) {
            if (!formData[field.name] || (field.name === "language" && !finalLanguage) || (field.name === "industry" && !finalIndustry)) {
                setLoading(false);
                setError(`Please fill in the ${field.label} field.`);
                return;
            }
        }

        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        data.set('industry', finalIndustry);
        data.set('language', finalLanguage);

        if (file) {
            data.append("file", file);
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/quote`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {

                    const { loaded, total } = progressEvent;
                    const percentCompleted = Math.floor((loaded * 100) / total);
                    setProgress(percentCompleted);
                },
            });

            if (response.status === 200) {
                setSuccess("Your quote request has been submitted!");
                setLoading(false);

                setTimeout(() => {
                    setSuccess("");
                }, 4000);

                setFormData({
                    localizationType: "",
                    industry: "",
                    language: "",
                    volumeType: "",
                    volume: "",
                    projectLength: "",
                    clientType: "",
                    name: "",
                    email: "",
                    jobTitle: "",
                    additionalQueries: "",
                    otherIndustry: "",
                });
                setFile(null);
                setCustomLanguage("")
                setStep(1);
                setProgress(100);
            }
        } catch (error) {
            console.error("Error submitting quote request:", error.response || error.message);
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError("There was an error submitting your quote request. Please try again.");
            }
            setLoading(false);
        }
    };

    const handleNextStep = (nextStep) => {
        setError("");
        setStep(nextStep);
    };
    const handlePreviousStep = () => {
        if (step > 1) {
            setStep(step - 1);
            setError("");
        }
    };

    return (
        <main className="z-30 bg-[url('assets/images/Cham.webp')] bg-no-repeat bg-[length:280px]  bg-bottom  border-[#01185B] chatBotMain animatedBorder h-[75vh] p-3 lg:h-[540px] sm:w-96 bg-white rounded-md sm:py-0">
            <div className="text-center flex flex-col gap-6 h-full overflow-hidden p-2">
                <div className='text-3xl font-bold flex items-center '>
                    <div>
                        <button
                            className="text-white p-1 rounded-md bg-[#00185a] transition transform ease-in-out sm:hover:scale-110 duration-300"
                            type="button"
                            aria-label='Previous button'
                            onClick={handlePreviousStep}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffff" fill="none">
                                <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className='mx-auto'>
                        Request a Quote
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={() => setShowChatBot(!showChatBot)}
                            aria-label='close chat bot'
                            className="rounded-full bg-primary  transform transition ease-in-out hover:border-0 sm:hover:scale-105 hover:rotate-90"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#ffff" fill="none">
                                <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                {error && <p className="text-red-600 text-base fixed bottom-0 left-0 right-0">{error}</p>}
                {success && <p className="text-green-600 ">{success}</p>}
                <form onSubmit={handleSubmit} >
                    {step === 1 && (
                        <div className='flex flex-col items-center gap-6 '>
                            <h3 className='text-4xl w-full'>Which localization do you want?</h3>
                            <button
                                className='font-semibold p-2 border rounded-md flex justify-center items-center gap-5 w-[60%] sm:w-[80%] transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black  bg-[#00185a] text-[#F6F0E2]'
                                type="button"
                                onClick={() => {
                                    setFormData({ ...formData, localizationType: "Document" });
                                    handleNextStep(2);
                                }}
                            >
                                <div className='text-sm sm:text-lg'>
                                    Document
                                </div>
                            </button>

                            <button
                                className='font-semibold p-2 border rounded-md flex justify-center items-center gap-5 w-[60%] sm:w-[80%] transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black  bg-[#00185a] text-[#F6F0E2]'
                                type="button"
                                onClick={() => {
                                    setFormData({ ...formData, localizationType: "Audiovisual" });
                                    handleNextStep(2);
                                }}
                            >
                                <div className='text-sm sm:text-lg'>
                                    Audiovisual
                                </div>
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="flex flex-col gap-2 ">

                            <h3 className="text-4xl">Which industry scholars are you looking for?</h3>
                            <div className="flex flex-wrap gap-y-2 justify-around ">
                                {[
                                    { label: "Educational" },
                                    { label: "Medical" },
                                    { label: "Business" },
                                    { label: "Science" },
                                    { label: "Manufacturing" },
                                    { label: "Entertainment" },
                                ].map((industry) => (
                                    <button
                                        key={industry.label}
                                        className="p-2 border m-1 rounded-md items-center text-sm sm:text-base w-[45%]  sm:w-[45%] transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black bg-[#00185a] text-[#F6F0E2]"
                                        type="button"
                                        onClick={() => {
                                            setFormData({ ...formData, industry: industry.label });
                                            handleNextStep(3);
                                        }}
                                    >
                                        <div>{industry.label}</div>
                                    </button>
                                ))}

                                <button
                                    className={`p-2 border rounded-md flex items-center justify-center gap-5 text-sm sm:text-base w-[25%] sm:w-[45%] transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black bg-[#00185a] text-[#F6F0E2] ${formData.industry === "Other" ? "bg-white text-black" : ""} `}
                                    type="button"
                                    onClick={() => {
                                        setFormData({ ...formData, industry: "Other" });
                                    }}
                                >
                                    <div className=''>
                                        Other
                                    </div>
                                </button>

                                {formData.industry === "Other" && (
                                    <div className="w-full mt-2">
                                        <input
                                            type="text"
                                            className="p-3 border rounded-md w-full outline-none text-5xl"
                                            placeholder="Specify your industry"
                                            value={formData.otherIndustry || ""}
                                            onChange={(e) =>
                                                setFormData({ ...formData, otherIndustry: e.target.value })
                                            }
                                        />
                                    </div>
                                )}
                            </div>
                            {formData.industry === "Other" && (
                                <div>

                                    <button
                                        type="button"
                                        className="mt-2 p-2 bg-[#00185a] text-white rounded text-sm w-[45%] sm:text-lg"
                                        onClick={() => handleNextStep(3)}
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {step === 3 && (
                        <div className=''>
                            <h3 className='text-4xl'>Language wanted</h3>
                            {[
                                { languageLabel: "Arabic" },
                                { languageLabel: "Chinese" },
                                { languageLabel: "German" },
                                { languageLabel: "French" },
                                { languageLabel: "Japanese" },
                                { languageLabel: "Korean" },
                                { languageLabel: "Spanish" },
                                { languageLabel: "Russian" },
                            ].map((language) => (

                                <button
                                    key={language.languageLabel}
                                    className='p-2 border m-1 rounded-md items-center text-sm sm:text-base w-[45%] sm:w-[45%] transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black bg-[#00185a] text-[#F6F0E2]'
                                    type="button"
                                    onClick={() => {
                                        setFormData({ ...formData, language: language.languageLabel });
                                        if (language !== "Other") {
                                            handleNextStep(4);
                                        }
                                    }}
                                >
                                    <div>
                                        {language.languageLabel}
                                    </div>
                                </button>
                            ))}

                            <button
                                className={` p-2 border rounded-md w-[25%] sm:w-[45%] transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black bg-[#00185a] text-[#F6F0E2] ${formData.language === "Other" ? "bg-white text-black" : ""} `}
                                type="button"
                                onClick={() => {
                                    setFormData({ ...formData, language: "Other" });
                                }}
                            >
                                <div className='text-center text-sm sm:text-base '>
                                    <h1>
                                        Other
                                    </h1>
                                </div>
                            </button>

                            {formData.language === "Other" && (
                                <div className='flex flex-col items-center gap-2 mt-2 '>
                                    <input
                                        type="text"
                                        className='w-auto p-3 border rounded-md  outline-none'
                                        name="customLanguage"
                                        value={customLanguage}
                                        onChange={(e) => setCustomLanguage(e.target.value)}
                                        placeholder="Enter your language"
                                    />
                                    <button type="button" onClick={() => handleNextStep(4)} className='font-semibold px-5 py-2 border rounded-md  transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black bg-[#00185a] text-[#F6F0E2]'>
                                        Next
                                    </button>
                                </div>




                            )}
                        </div>
                    )}

                    {step === 4 && (
                        <div>
                            <h3 className='text-4xl'>What is the volume of work</h3>
                            {formData.localizationType === "Document" ? (
                                <div className=' mt-2 flex flex-col mx-auto w-[96%]'>
                                    <label htmlFor="volume" className='bg-[#00185a] text-sm sm:text-lg text-[#F6F0E2] font-semibold p-1 rounded-md '>
                                        Enter Approximate Word Count Below
                                    </label>
                                    <input
                                        type="number"
                                        name="volume"
                                        value={formData.volume}
                                        className='mt-2 p-2 border-2'
                                        onChange={handleInputChange}
                                    />
                                </div>
                            ) : (
                                <div className=' mt-2 flex flex-col mx-auto w-[96%]'>
                                    <label htmlFor="volume" className='bg-[#00185a] text-sm sm:text-lg text-[#F6F0E2] font-semibold p-1 rounded-md '>
                                        Enter Approximate Video Length (in minutes)
                                    </label>
                                    <input
                                        type="number"
                                        name="volume"
                                        className='mt-2 p-2 border-2'
                                        value={formData.volume}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )}
                            <button type="button" onClick={() => handleNextStep(5)} className='font-semibold px-5 py-2 border rounded-md  transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black bg-[#00185a] text-[#F6F0E2] mt-1'>
                                Next
                            </button>
                        </div>
                    )}

                    {step === 5 && (
                        <div >
                            <h3 className='text-4xl'>Estimated project length</h3>
                            <div className='flex justify-around'>

                                {[
                                    "One-time",
                                    "Long-term",
                                ].map((length) => (
                                    <button
                                        key={length}
                                        type="button"
                                        className='font-semibold p-3 text-sm sm:text-base border m-1 rounded-md items-center  w-[45%] transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black bg-[#00185a] text-[#F6F0E2]'
                                        onClick={() => {
                                            setFormData({ ...formData, projectLength: length });
                                            handleNextStep(6);
                                        }}
                                    >
                                        <div>

                                            {length}
                                        </div>
                                    </button>
                                ))}
                            </div>

                        </div>
                    )}

                    {step === 6 && (
                        <div>
                            <h3 className='text-4xl'>Working for</h3>
                            <div className='flex justify-around'>

                                {[
                                    "Individual",
                                    "Company",
                                ].map((clientType) => (
                                    <button
                                        key={clientType}
                                        type="button"
                                        className='font-semibold p-3 text-sm sm:text-base border m-1 rounded-md items-center  w-[45%] transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black bg-[#00185a] text-[#F6F0E2]'
                                        onClick={() => {
                                            setFormData({ ...formData, clientType });
                                            handleNextStep(7);
                                        }}
                                    >
                                        {clientType}
                                    </button>
                                ))}

                            </div>
                        </div>
                    )}

                    {step === 7 && (
                        <div>
                            <h3 className='text-4xl'>Your Details</h3>
                            <div className='flex flex-col'>

                                <div className='flex justify-between sm:flex-col items-start p-2'>
                                    <label htmlFor="name" className=' text-base'>
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className='outline-none p-1 rounded-md border w-full'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='flex justify-between sm:flex-col items-start p-2'>
                                    <label htmlFor="email" className='text-base'>
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className='outline-none p-1 rounded-md border w-full'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='flex justify-between sm:flex-col items-start p-2'>
                                    <label htmlFor="jobTitle" className='text-base'>
                                        Job Title:
                                    </label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        className='outline-none p-1 rounded-md border w-full'
                                        value={formData.jobTitle}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='flex  justify-around sm:flex-col items-start p-2'>
                                    <label htmlFor="additionalQueries" className='text-base'>
                                        Additional Queries
                                    </label>
                                    <textarea
                                        name="additionalQueries"
                                        value={formData.additionalQueries}
                                        onChange={handleInputChange}
                                        className='outline-none border w-full'
                                    />
                                </div>
                                <div className='items-center'>
                                    <div >
                                        <div className='bg-white w-full'>
                                            <label htmlFor="file" className='text-base '>
                                                Attach a File (optional)
                                            </label>
                                        </div>
                                        <div className='flex items-center bg-white w-full'>
                                            <div className='w-[70%]'>
                                                <input
                                                    type="file"
                                                    name="file"
                                                    onChange={handleFileChange}
                                                />
                                            </div>

                                            <div className='w-[30%]'>
                                                {file && loading && <ProgressBar />}
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <button type="submit" disabled={loading}
                                className={`font-semibold px-5 py-2 border rounded-md transition transform ease-in-out duration-300 sm:hover:scale-105 ${loading ? "" : "hover:bg-[#FFF] hover:text-black bg-[#00185a] text-[#F6F0E2]"} mt-1`}>
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    )}

                    {/* <div className='flex justify-center items-end'>
                        <img className='' src={chatBotIMG} width={300} height={300} alt="" />
                    </div> */}
                </form>
            </div >
        </main >
    );
}

const ProgressBar = () => {
    return (
        <div className="w-full mt-2">
            <img src={uploadingAnimation} width={80} height={80} alt="Uploading Animation" />
        </div>
    );
};
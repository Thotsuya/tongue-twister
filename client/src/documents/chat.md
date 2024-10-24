add a previos and next button in this form:
 <form onSubmit={handleSubmit} className=''>
                    {/* Step 1: Translation Services */}
                    {step === 1 && (
                        <div className='flex flex-col items-center gap-10'>
                            <h3 className='text-4xl'>Which localization do you want?</h3>
                            <button
                                className='font-semibold p-3 border rounded-md flex items-center gap-5 w-[80%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black  bg-[#00185a] text-[#F6F0E2]'
                                type="button"
                                onClick={() => {
                                    setFormData({ ...formData, localizationType: "Document" });
                                    handleNextStep(2);
                                }}
                            >
                                <div className='rounded-full h-10 w-10  bg-opacity-[.1] border flex items-center justify-center'>
                                    A.
                                </div>
                                <div>
                                    Document
                                </div>
                            </button>

                            <button
                                className='font-semibold p-3 border rounded-md flex items-center gap-5 w-[80%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black  bg-[#00185a] text-[#F6F0E2]'
                                type="button"
                                onClick={() => {
                                    setFormData({ ...formData, localizationType: "Audiovisual" });
                                    handleNextStep(2);
                                }}
                            >
                                <div className='rounded-full h-10 w-10 bg-[#00185a] bg-opacity-[.1] border flex items-center justify-center'>
                                    B.
                                </div>
                                <div>
                                    Audiovisual
                                </div>
                            </button>
                        </div>
                    )}

                    {/* Step 2: Industry of Interest */}
                    {step === 2 && (
                        <div className="flex flex-col gap-2 ">
                            <h3 className="text-4xl">Which industry scholars are you looking for?</h3>
                            <div className="flex flex-wrap gap-y-2 justify-around text-sm">
                                {[
                                    { label: "Educational", code: "A" },
                                    { label: "Medical", code: "B" },
                                    { label: "Business", code: "C" },
                                    { label: "Science", code: "D" },
                                    { label: "Manufacturing", code: "E" },
                                    { label: "Entertainment", code: "F" },
                                ].map((industry) => (
                                    <button
                                        key={industry.code}
                                        className="font-semibold p-3 border rounded-md flex items-center gap-5 w-[45%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2]"
                                        type="button"
                                        onClick={() => {
                                            setFormData({ ...formData, industry: industry.label });
                                            handleNextStep(3);
                                        }}
                                    >
                                        <div className="rounded-full h-10 w-10 bg-opacity-[.1] border flex items-center justify-center">
                                            {industry.code}
                                        </div>
                                        <div>{industry.label}</div>
                                    </button>
                                ))}

                                <button
                                    className={`font-semibold p-3 border rounded-md flex items-center gap-5 w-[45%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2] ${formData.industry === "Other" ? "bg-white text-black" : ""} `}
                                    type="button"
                                    onClick={() => {
                                        setFormData({ ...formData, industry: "Other" });
                                    }}
                                >
                                    <div className={`rounded-full h-10 w-10 bg-opacity-[.1] border flex items-center justify-center `}>
                                        G.
                                    </div>
                                    <div>Other</div>
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
                            {formData.industry !== null && (
                                <button
                                    type="button"
                                    className="mt-2 p-2 bg-[#00185a] text-white rounded"
                                    onClick={() => handleNextStep(3)}
                                >
                                    Next
                                </button>
                            )}

                        </div>
                    )}

                    {step === 3 && (
                        <div className=''>
                            <h3 className='text-4xl'>Language wanted</h3>
                            {[
                                { languageLabel: "English" },
                                { languageLabel: "Spanish" },
                                { languageLabel: "French" },
                                { languageLabel: "German" },
                                { languageLabel: "Chinese" },
                                { languageLabel: "Japanese" },
                            ].map((language) => (

                                <button
                                    key={language.languageLabel}
                                    className='font-semibold p-3 border m-1 rounded-md items-center  w-[45%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2]'
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
                                className={`font-semibold p-2 border rounded-md w-[45%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2] ${formData.language === "Other" ? "bg-white text-black" : ""} `}
                                type="button"
                                onClick={() => {
                                    setFormData({ ...formData, language: "Other" });
                                }}
                            >
                                <div className='text-center  '>
                                    <h1>
                                        Other
                                    </h1>
                                </div>
                            </button>
                            {/* Show input field for custom language if "Other" is selected */}
                            {formData.language === "Other" && (
                                <div className='flex flex-col items-center gap-2 mt-2 '>
                                    <input
                                        type="text"
                                        className='w-auto p-3 border rounded-md  outline-none text-5xl'
                                        name="customLanguage"
                                        value={customLanguage}
                                        onChange={(e) => setCustomLanguage(e.target.value)}
                                        placeholder="Enter your desired language"
                                    />
                                    <button type="button" onClick={() => handleNextStep(4)} className='font-semibold px-5 py-2 border rounded-md  transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2]'>
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 4: Volume of Work */}
                    {step === 4 && (
                        <div>
                            <h3 className='text-4xl'>What is the volume of work</h3>
                            {formData.localizationType === "Document" ? (
                                <div className='flex flex-col mt-2'>
                                    <label htmlFor="volume" className='bg-[#00185a] text-[#F6F0E2] font-semibold p-3 rounded-md '>
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
                                <div>
                                    <label htmlFor="volume" className='bg-[#00185a] text-[#F6F0E2] font-semibold p-3 rounded-md '>
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
                            <button type="button" onClick={() => handleNextStep(5)} className='font-semibold px-5 py-2 border rounded-md  transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2] mt-1'>
                                Next
                            </button>
                        </div>
                    )}

                    {/* Step 5: Estimated Project Length */}
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
                                        className='font-semibold p-3 border m-1 rounded-md items-center  w-[45%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2]'
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

                    {/* Step 6: Client Info */}
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
                                        className='font-semibold p-3 border m-1 rounded-md items-center  w-[45%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2]'
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

                    {/* Step 7: Client Details */}
                    {step === 7 && (
                        <div>
                            <h3 className='text-4xl'>Your Details</h3>
                            <div className='flex flex-col'>

                                <div className='flex flex-col items-start p-2'>
                                    <label htmlFor="name" className='font-semibold'>
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className='outline-none p-1 rounded-md'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='flex flex-col items-start p-2'>
                                    <label htmlFor="email" className='font-semibold'>
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className='outline-none p-1 rounded-md'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='flex flex-col items-start p-2'>
                                    <label htmlFor="jobTitle" className='font-semibold'>
                                        Job Title:
                                    </label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        className='outline-none p-1 rounded-md'
                                        value={formData.jobTitle}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='flex flex-col items-start p-2'>
                                    <label htmlFor="additionalQueries" className='font-semibold '>
                                        Additional Queries
                                    </label>
                                    <textarea
                                        name="additionalQueries"
                                        value={formData.additionalQueries}
                                        onChange={handleInputChange}
                                        className='outline-none'
                                    />
                                </div>
                                <div className='flex flex-col justify-center items-center '>
                                    <label htmlFor="file">
                                        Attach a File (optional)
                                    </label>
                                    <input
                                        type="file"
                                        name="file"
                                        onChange={handleFileChange}
                                    />
                                </div>

                            </div>
                            <button type="submit" className='font-semibold px-5 py-2 border rounded-md  transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2] mt-1'>Submit</button>
                        </div>
                    )}
                </form>

whole code is this:
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ChatBot() {
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

    // Handle input change for all form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle file change
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

        // Frontend validation
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

        // Create FormData object
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        data.set('industry', finalIndustry); // Set the final industry choice
        data.set('language', finalLanguage); // Set the final language choice

        if (file) {
            data.append("file", file);
        }

        try {
            const response = await axios.post("http://localhost:5000/api/quote", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                    // Update progress percentage
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

                // Reset form
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
                    otherIndustry: "", // Reset the custom industry field
                });
                setFile(null);
                setCustomLanguage("");
                setStep(1); // Reset to first step
                setProgress(100); // Complete the progress bar
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

    useEffect(() => {
        const loadFont = () => {
            const link = document.createElement('link');
            link.href =
                'https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        };

        window.addEventListener('load', loadFont);

        return () => {
            window.removeEventListener('load', loadFont);
        };
    }, []);

    return (
        <main className="chatBotMain h-[600px]  w-96  bg-cover bg-center bg-[#F6F0E2]   rounded-md border py-5">
            <div className="stepForm text-center flex flex-col gap-6 h-full">
                <h1 className='text-1xl font-bold'>Request a Quote</h1>
                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}
                {loading && <ProgressBar progress={progress} />}
                <form onSubmit={handleSubmit} className=''>
                    {/* Step 1: Translation Services */}
                    {step === 1 && (
                        <div className='flex flex-col items-center gap-10'>
                            <h3 className='text-4xl'>Which localization do you want?</h3>
                            <button
                                className='font-semibold p-3 border rounded-md flex items-center gap-5 w-[80%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black  bg-[#00185a] text-[#F6F0E2]'
                                type="button"
                                onClick={() => {
                                    setFormData({ ...formData, localizationType: "Document" });
                                    handleNextStep(2);
                                }}
                            >
                                <div className='rounded-full h-10 w-10  bg-opacity-[.1] border flex items-center justify-center'>
                                    A.
                                </div>
                                <div>
                                    Document
                                </div>
                            </button>

                            <button
                                className='font-semibold p-3 border rounded-md flex items-center gap-5 w-[80%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black  bg-[#00185a] text-[#F6F0E2]'
                                type="button"
                                onClick={() => {
                                    setFormData({ ...formData, localizationType: "Audiovisual" });
                                    handleNextStep(2);
                                }}
                            >
                                <div className='rounded-full h-10 w-10 bg-[#00185a] bg-opacity-[.1] border flex items-center justify-center'>
                                    B.
                                </div>
                                <div>
                                    Audiovisual
                                </div>
                            </button>
                        </div>
                    )}

                    {/* Step 2: Industry of Interest */}
                    {step === 2 && (
                        <div className="flex flex-col gap-2 ">
                            <h3 className="text-4xl">Which industry scholars are you looking for?</h3>
                            <div className="flex flex-wrap gap-y-2 justify-around text-sm">
                                {[
                                    { label: "Educational", code: "A" },
                                    { label: "Medical", code: "B" },
                                    { label: "Business", code: "C" },
                                    { label: "Science", code: "D" },
                                    { label: "Manufacturing", code: "E" },
                                    { label: "Entertainment", code: "F" },
                                ].map((industry) => (
                                    <button
                                        key={industry.code}
                                        className="font-semibold p-3 border rounded-md flex items-center gap-5 w-[45%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2]"
                                        type="button"
                                        onClick={() => {
                                            setFormData({ ...formData, industry: industry.label });
                                            handleNextStep(3);
                                        }}
                                    >
                                        <div className="rounded-full h-10 w-10 bg-opacity-[.1] border flex items-center justify-center">
                                            {industry.code}
                                        </div>
                                        <div>{industry.label}</div>
                                    </button>
                                ))}

                                <button
                                    className={`font-semibold p-3 border rounded-md flex items-center gap-5 w-[45%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2] ${formData.industry === "Other" ? "bg-white text-black" : ""} `}
                                    type="button"
                                    onClick={() => {
                                        setFormData({ ...formData, industry: "Other" });
                                    }}
                                >
                                    <div className={`rounded-full h-10 w-10 bg-opacity-[.1] border flex items-center justify-center `}>
                                        G.
                                    </div>
                                    <div>Other</div>
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
                            {formData.industry !== null && (
                                <button
                                    type="button"
                                    className="mt-2 p-2 bg-[#00185a] text-white rounded"
                                    onClick={() => handleNextStep(3)}
                                >
                                    Next
                                </button>
                            )}

                        </div>
                    )}

                    {step === 3 && (
                        <div className=''>
                            <h3 className='text-4xl'>Language wanted</h3>
                            {[
                                { languageLabel: "English" },
                                { languageLabel: "Spanish" },
                                { languageLabel: "French" },
                                { languageLabel: "German" },
                                { languageLabel: "Chinese" },
                                { languageLabel: "Japanese" },
                            ].map((language) => (

                                <button
                                    key={language.languageLabel}
                                    className='font-semibold p-3 border m-1 rounded-md items-center  w-[45%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2]'
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
                                className={`font-semibold p-2 border rounded-md w-[45%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2] ${formData.language === "Other" ? "bg-white text-black" : ""} `}
                                type="button"
                                onClick={() => {
                                    setFormData({ ...formData, language: "Other" });
                                }}
                            >
                                <div className='text-center  '>
                                    <h1>
                                        Other
                                    </h1>
                                </div>
                            </button>
                            {/* Show input field for custom language if "Other" is selected */}
                            {formData.language === "Other" && (
                                <div className='flex flex-col items-center gap-2 mt-2 '>
                                    <input
                                        type="text"
                                        className='w-auto p-3 border rounded-md  outline-none text-5xl'
                                        name="customLanguage"
                                        value={customLanguage}
                                        onChange={(e) => setCustomLanguage(e.target.value)}
                                        placeholder="Enter your desired language"
                                    />
                                    <button type="button" onClick={() => handleNextStep(4)} className='font-semibold px-5 py-2 border rounded-md  transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2]'>
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 4: Volume of Work */}
                    {step === 4 && (
                        <div>
                            <h3 className='text-4xl'>What is the volume of work</h3>
                            {formData.localizationType === "Document" ? (
                                <div className='flex flex-col mt-2'>
                                    <label htmlFor="volume" className='bg-[#00185a] text-[#F6F0E2] font-semibold p-3 rounded-md '>
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
                                <div>
                                    <label htmlFor="volume" className='bg-[#00185a] text-[#F6F0E2] font-semibold p-3 rounded-md '>
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
                            <button type="button" onClick={() => handleNextStep(5)} className='font-semibold px-5 py-2 border rounded-md  transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2] mt-1'>
                                Next
                            </button>
                        </div>
                    )}

                    {/* Step 5: Estimated Project Length */}
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
                                        className='font-semibold p-3 border m-1 rounded-md items-center  w-[45%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2]'
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

                    {/* Step 6: Client Info */}
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
                                        className='font-semibold p-3 border m-1 rounded-md items-center  w-[45%] transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2]'
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

                    {/* Step 7: Client Details */}
                    {step === 7 && (
                        <div>
                            <h3 className='text-4xl'>Your Details</h3>
                            <div className='flex flex-col'>

                                <div className='flex flex-col items-start p-2'>
                                    <label htmlFor="name" className='font-semibold'>
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className='outline-none p-1 rounded-md'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='flex flex-col items-start p-2'>
                                    <label htmlFor="email" className='font-semibold'>
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className='outline-none p-1 rounded-md'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='flex flex-col items-start p-2'>
                                    <label htmlFor="jobTitle" className='font-semibold'>
                                        Job Title:
                                    </label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        className='outline-none p-1 rounded-md'
                                        value={formData.jobTitle}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='flex flex-col items-start p-2'>
                                    <label htmlFor="additionalQueries" className='font-semibold '>
                                        Additional Queries
                                    </label>
                                    <textarea
                                        name="additionalQueries"
                                        value={formData.additionalQueries}
                                        onChange={handleInputChange}
                                        className='outline-none'
                                    />
                                </div>
                                <div className='flex flex-col justify-center items-center '>
                                    <label htmlFor="file">
                                        Attach a File (optional)
                                    </label>
                                    <input
                                        type="file"
                                        name="file"
                                        onChange={handleFileChange}
                                    />
                                </div>

                            </div>
                            <button type="submit" className='font-semibold px-5 py-2 border rounded-md  transition transform ease-in-out duration-300 hover:scale-105 hover:bg-[#F6F0E2] hover:text-black bg-[#00185a] text-[#F6F0E2] mt-1'>Submit</button>
                        </div>
                    )}
                </form>
            </div>
        </main>
    );
}

const ProgressBar = ({ progress }) => {
    return (
        <div className="progress-bar" style={{ width: `${progress}%` }}>
            {progress}%
        </div>
    );
};

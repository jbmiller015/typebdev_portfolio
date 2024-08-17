import React, {useState, useEffect} from 'react';
import './style/Resume.css';
import './style/SlidingLine.css';
import data from '../../info/resume.json';
import SlidingLine from "./SlidingLine";

const Resume = () => {
    const [profileData, setProfileData] = useState({Education: [], Career: []});

    useEffect(() => {
        setProfileData(data);
    }, []);
    const isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;


    return (

        <div className="resume" id="ResumeSection">
            <div className="mx-auto max-w-5xl lg:mx-0">
                <h2 className="py-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                    Resume
                </h2>

                <section className="mt-6 mb-6 flex flex-col content-center justify-center text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Education</h2>
                    {profileData.Education.map((edu, index) => (
                        <div className="relative" key={index}>
                            {!isMobile ? <>
                                <div className="leftLine" style={{position: 'absolute', left: 0, height: '50px'}}>
                                    <SlidingLine direction={"left"} height={'65'} offset={`${200}`}
                                                 bounds={{start: '23', end: '37'}}/>
                                </div>
                                <div className="rightLine" style={{position: 'absolute', right: 0, height: '50px'}}>
                                    <SlidingLine direction={"right"} height={'65'} offset={`${200}`}
                                                 bounds={{start: '23', end: '37'}}/>
                                </div>
                            </> : null}
                            <div className="collapse rounded-lg">
                                <input type="radio" name="my-accordion-4"/>
                                <div className="collapse-title text-lg sm:text-xl font-medium">
                                    <h3 className="text-lg sm:text-xl font-semibold">{edu.school}</h3>
                                    <p className="text-sm sm:text-base text-gray-700">
                                        {edu.degree} in {edu.field.join(" & ")}
                                    </p>
                                    <p className="text-sm sm:text-base text-gray-500">
                                        {new Date(edu.startDate).toLocaleDateString(undefined, {year: 'numeric'})} -
                                        {edu.endDate ? new Date(edu.endDate).toLocaleDateString(undefined, {year: 'numeric'}) : 'Present'}
                                    </p>
                                </div>
                                <div className="collapse-content">
                                    <div className="relative">
                                        <p className="text-sm sm:text-base text-gray-500">{edu.location}</p>
                                        <ul className="list-none list-inside text-sm sm:text-base text-gray-700 mt-2">
                                            {edu.extra.map((value, index) => (
                                                <li key={index}>{value}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="mt-6 py-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Career</h2>
                    {profileData.Career.map((job, index) => (
                        <div className="relative" key={index}>
                            {!isMobile ?
                                <>
                                    <div className="leftLine"
                                         style={{position: 'absolute', left: 0, height: '50px'}}>
                                        <SlidingLine direction={"left"} height={'100'} offset={`${350}`}
                                                     bounds={{start: '23', end: '37'}}/>
                                    </div>
                                    <div className="rightLine"
                                         style={{position: 'absolute', right: 0, height: '50px'}}>
                                        <SlidingLine direction={"right"} height={'100'} offset={`${350}`}
                                                     bounds={{start: '23', end: '37'}}/>
                                    </div>
                                </> : null}
                            <div className="collapse rounded-lg transition-all duration-500 hover:duration-700">
                                <input type="radio" name="my-accordion-4"/>
                                <div className="collapse-title text-lg sm:text-xl font-medium">
                                    <h3 className="text-lg sm:text-xl font-semibold">{job.jobTitle} at {job.employer}</h3>
                                    <p className="text-sm sm:text-base text-gray-500">
                                        {new Date(job.startDate).toLocaleDateString(undefined, {
                                            month: "long",
                                            year: 'numeric'
                                        })} -
                                        {job.endDate ? new Date(job.endDate).toLocaleDateString(undefined, {
                                            month: "long",
                                            year: 'numeric'
                                        }) : 'Present'}
                                    </p>
                                </div>
                                <div className="collapse-content sm:px-8 md:px-16 lg:px-24">
                                    <ul className="list-disc list-inside text-left text-sm sm:text-base text-gray-700">
                                        {job.description.map((desc, index) => (
                                            <li className="py-2" key={index}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Resume;

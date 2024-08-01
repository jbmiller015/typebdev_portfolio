import React, {useState, useEffect} from 'react';
import './style/Resume.css';
import data from '../../info/resume.json'

const Resume = () => {
    const [profileData, setProfileData] = useState({Education: [], Career: []});

    useEffect(() => {
        setProfileData(data);
    }, []);

    return (
        <div className="resume" id="ResumeSection">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-5xl lg:mx-0">
                    <h2 className="py-4 text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">Resume</h2>
                    <section className="mt-6 mb-6 join join-vertical w-full">
                        <h2 className="text-3xl font-bold mb-4">Education</h2>
                        {profileData.Education.map((edu, index) => (
                            <div key={index}
                                 className="collapse rounded-lg shadow-inner bg-gradient-to-r from-purple-300/10 via-yellow-300/10 to-green-300/10-accent">
                                <input type="radio" name="my-accordion-4"/>
                                <div className="collapse-title text-xl font-medium">
                                    <h3 className="text-xl font-semibold">{edu.school}</h3>
                                    <p className="text-gray-700">{edu.degree} in {edu.field.map((value, index) => {
                                        if (index === 0 && edu.field.length >= 2) {
                                            return value + " & ";
                                        } else return value;
                                    })}</p>
                                    <p className="text-gray-500">{new Date(edu.startDate).toLocaleDateString(undefined, {year: 'numeric'})} - {edu.endDate ? new Date(edu.endDate).toLocaleDateString(undefined, {year: 'numeric'}) : 'Present'}</p>
                                </div>
                                <div className="collapse-content ">
                                    <p className="text-gray-500">{edu.location}</p>
                                    <ul className="list-none list-inside text-gray-700 mt-2">
                                        {edu.extra.map((value, index) =>
                                            (<li key={index}>{value}</li>)
                                        )}

                                    </ul>

                                </div>
                            </div>
                        ))}
                    </section>
                    <section className="mt-6 py-4">
                        <h2 className="text-3xl font-bold mb-4">Career</h2>
                        {profileData.Career.map((job, index) => (
                            <div key={index}
                                 className="collapse rounded-lg shadow  bg-gradient-to-r from-purple-300/10 via-yellow-300/10 to-green-300/10-accent transition-all duration-900 hover:duration-900">
                                <input type="radio" name="my-accordion-4"/>
                                <div
                                    className="collapse-title text-xl font-medium">
                                    <h3 className="text-xl font-semibold">{job.jobTitle} at {job.employer}</h3>
                                    <p className="text-gray-500">{new Date(job.startDate).toLocaleDateString(undefined, {
                                        month: "long",
                                        year: 'numeric',
                                    })} - {job.endDate ? new Date(job.endDate).toLocaleDateString(undefined, {
                                        month: "long",
                                        year: 'numeric'
                                    }) : 'Present'}</p>
                                </div>
                                <div className="collapse-content px-24">
                                    <ul className="list-disc list-inside text-gray-700 text-left ">
                                        {job.description.map((desc, i) => (
                                            <li className="py-2" key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
}
export default Resume;

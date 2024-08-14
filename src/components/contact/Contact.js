import React from "react";
import './style/Contact.css';
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div className="contact" id="ContactSection">
            <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <h2 className="py-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
                    Contact
                </h2>
                <div
                    className="mt-6 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto bg-gradient-to-r from-green-900/20 via-yellow-900/20 to-purple-900/20 rounded-lg">
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 p-4 sm:p-6 lg:p-8 font-[sans-serif]">
                        <div>
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                                Get in Touch
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 leading-relaxed text-gray-900">
                                Want to build something together? Have some big idea or brand to develop? Then reach
                                out! I'd love to hear about your project and see how I could help.
                            </p>

                            <ul className="mt-8 sm:mt-10 md:mt-12 space-y-4 sm:space-y-6 md:space-y-8 text-gray-900">
                                <li className="flex items-center">
                                    <i className="fa-regular fa-envelope text-lg sm:text-xl md:text-2xl"></i>
                                    <a href="mailto:jbmiller015@gmail.com"
                                       className="text-sm sm:text-base md:text-lg ml-4">
                                        jbmiller015@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa-solid fa-phone text-lg sm:text-xl md:text-2xl"></i>
                                    <a href="tel:+12066139164" className="text-sm sm:text-base md:text-lg ml-4">
                                        +1 206 613 9164
                                    </a>
                                </li>
                            </ul>

                            <ul className="flex mt-8 sm:mt-10 md:mt-12 space-x-4">
                                <li className="bg-gradient-to-r from-green-900 via-yellow-900 to-purple-900 hover:bg-gradient-to-r hover:from-green-900/70 hover:via-yellow-900/70 hover:to-purple-900/70 h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 rounded-full flex items-center justify-center shrink-0">
                                    <a href="https://www.linkedin.com/in/millerjacobb/">
                                        <i className="fa-brands fa-linkedin-in text-white text-lg sm:text-xl md:text-2xl"></i>
                                    </a>
                                </li>
                                <li className="bg-gradient-to-r from-green-900 via-yellow-900 to-purple-900 hover:bg-gradient-to-r hover:from-green-900/70 hover:via-yellow-900/70 hover:to-purple-900/70 h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 rounded-full flex items-center justify-center shrink-0">
                                    <a href="https://github.com/jbmiller015">
                                        <i className="fa-brands fa-github text-white text-lg sm:text-xl md:text-2xl"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

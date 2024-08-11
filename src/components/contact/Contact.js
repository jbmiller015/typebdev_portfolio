import React, {useEffect, useState} from "react";
import './style/Contact.css';
import ContactForm from "./ContactForm";


const Contact = () => {
    return (<div className="contact" id={"ContactSection"}>
        <div className="container mx-auto p-4">
            <h2 className="py-4 text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">Contact</h2>
            <div
                className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-gradient-to-r from-green-900/20 via-yellow-900/20 to-purple-900/20 rounded-lg">
                <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
                    <div>
                        <h1 className="text-4xl font-bold text-grey-900">Get in Touch</h1>
                        <p className="text-sm text-grey-900 mt-4 leading-relaxed">Want to build something together? Have
                            some big idea or brand to develop? Then reach out! I'd love to hear about your project and
                            see how I could help.</p>

                        <ul className="mt-12 space-y-8 text-gray-900">
                            <li className="flex items-center ">
                                <i className="fa-regular fa-envelope text-xl"></i>
                                <a href="javascript:void(0)" className="text-sm ml-4">
                                    jbmiller015@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <i className="fa-solid fa-phone text-xl"></i>
                                <a href="javascript:void(0)" className="text-sm ml-4">
                                    +1 206 613 9164
                                </a>
                            </li>
                        </ul>

                        <ul className="flex mt-12 space-x-4">
                            <li className="bg-gradient-to-r from-green-900 via-yellow-900 to-purple-900 hover:bg-gradient-to-r hover:from-green-900/70 hover:via-yellow-900/70 hover:to-purple-900/70 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://www.linkedin.com/in/millerjacobb/">
                                    <i className="fa-brands fa-github text-white text-xl"></i>
                                </a>
                            </li>
                            <li className="bg-gradient-to-r from-green-900 via-yellow-900 to-purple-900 hover:bg-gradient-to-r hover:from-green-900/70 hover:via-yellow-900/70 hover:to-purple-900/70 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://github.com/jbmiller015">
                                    <i className="fa-brands fa-linkedin-in text-white text-xl"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </div>
    </div>);
}
export default Contact;

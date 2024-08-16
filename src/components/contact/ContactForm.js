import React, {useRef, useState} from "react";
import {Form} from "react-router-dom";
import FormSoup from "./FormSoup";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [formValue, setFormValue] = useState({});

    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, {
                publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const buttons = [
        {id: '0', name: 'Web Design'},
        {id: '1', name: 'Web Development'},
        {id: '2', name: 'Fullstack'},
        {id: '3', name: 'Frontend'},
        {id: '4', name: 'Backend'}
    ];

    return <div className="bg-purple-100 p-6 rounded-lg">
        <p className="text-md font-semibold text-gray-800">I'm looking for...</p>

        <div className="space-y-4 max-lg:mt-4">
            {buttons.map((button, index) => (
                <button type="button" id={button.id} key={`formButton${index}`}
                        className={`px-4 py-2 rounded-lg text-sm tracking-wider font-medium outline-none border-2 border-purple-900 mr-4 ${formValue['ActiveButton'] && formValue['ActiveButton'].includes(button.id) ? "bg-gradient-to-l from-green-900 via-yellow-900 to-purple-900 text-white" : "bg-gradient-to-b from-purple-100/20 via-yellow-300/20 to-green-100/20 text-gray-900"}`}
                        onClick={() => {
                            if (formValue['ActiveButton'] && formValue['ActiveButton'].includes(button.id)) {
                                setFormValue({
                                    "ButtonValue": formValue["ButtonValue"].filter(val => val !== button.name),
                                    "ActiveButton": formValue["ActiveButton"].filter(val => val !== button.id)
                                })
                            } else {
                                setFormValue({
                                    "ButtonValue": formValue["ButtonValue"] ? [...formValue["ButtonValue"], button.name] : [button.name],
                                    "ActiveButton": formValue["ActiveButton"] ? [...formValue["ActiveButton"], button.id] : [button.id]
                                })
                            }
                        }
                        }>{button.name}
                </button>))}
        </div>
        <form ref={form} onSubmit={onSubmit} className="mt-8 space-y-4">
            <input type="text" placeholder="Name"
                   className="w-full rounded-lg py-3 px-4 text-white-800 input-white-800 text-sm outline-[#a91079] bg-yellow-300/20"/>
            <input type="email" placeholder="Email"
                   className="w-full rounded-lg py-3 px-4 text-white-800 text-sm outline-[#a91079] bg-yellow-300/20"/>
            <input type="text" placeholder="Subject"
                   className="w-full rounded-lg py-3 px-4 text-white-800 text-sm outline-[#a91079] bg-yellow-300/20"/>
            <textarea placeholder="Message" rows="6"
                      className="w-full rounded-lg px-4 text-white-800 text-sm pt-3 outline-[#a91079] bg-yellow-300/20"></textarea>
            <button type="button"
                    className="text-white bg-gradient-to-r from-green-900 via-yellow-900 to-purple-900 hover:bg-gradient-to-r hover:from-green-900/70 hover:via-yellow-900/70 hover:to-purple-900/70 tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff"
                     className="mr-2" viewBox="0 0 548.244 548.244">
                    <path fillRule="evenodd"
                          d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                          clipRule="evenodd" data-original="#000000"/>
                </svg>
                Send Message
            </button>
        </form>
    </div>;
}
export default ContactForm;

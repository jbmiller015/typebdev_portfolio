import React, {useEffect, useState} from "react";
import './style/ButtonSections.css'

const ButtonSections = () => {
    const [isSticky, setIsSticky] = useState(false);

    const buttons = [
        {id: 'AboutSection', title: 'About'},
        {id: 'ResumeSection', title: 'Resume'},
        {id: 'ProjectsSection', title: 'Projects'},
        {id: 'SkillsSection', title: 'Skills'},
        {id: 'ContactSection', title: 'Contact'},
    ];

    useEffect(() => {
        const handleScroll = () => {

            //TODO: Percentage Y
            if (window.scrollY >= 320) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`sticky-nav z-100 px-0 sm:px-6 mx-3/5 sm:mx-auto ${isSticky ? 'fixed' : ''}`}>
                {buttons.map(button => (

                    <button
                        key={button.id}
                        onClick={() => document.getElementById(button.id).scrollIntoView({behavior: 'smooth'})}
                    >
                        {button.title}
                    </button>
                ))}
            </nav>
        </>
    );


}
export default ButtonSections;

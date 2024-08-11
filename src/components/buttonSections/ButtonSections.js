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
        <div>
            <nav className={`sticky-nav z-100 ${isSticky ? 'fixed' : ''}`}>
                {buttons.map(button => (

                    <button
                        key={button.id}
                        onClick={() => document.getElementById(button.id).scrollIntoView({behavior: 'smooth'})}
                    >
                        {button.title}
                    </button>
                ))}
            </nav>
        </div>
    );


}
export default ButtonSections;

import React, {useState, useEffect} from 'react';
import './style/ScrollComponent.css';

const FloatingButton = ({link, name, cssClass, limit}) => {
    const [isFixed, setIsFixed] = useState(false);
    const [isHalfway, setIsHalfway] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollPosition = scrollTop + windowHeight;
            const halfwayPoint = docHeight * limit;

            if (scrollPosition >= halfwayPoint) {
                setIsHalfway(true);
            } else {
                setIsHalfway(false);
            }

            if (scrollTop > halfwayPoint - windowHeight * limit) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHalfway]);

    return (
        <div className={`floating-Button ${isFixed ? 'fixed' : isHalfway ? 'halfway' : ''}`}>
            <a className={cssClass} href={link}>{name}</a>
        </div>
    );
};

export default FloatingButton;

import React, {useState, useEffect} from 'react';
import './style/WavyLine.css';

const WavyLine = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="wavy-line-container">
            <div className="wavy-line"/>
            <div className="wavy-line wavy-line2"/>
        </div>
    );
};

export default WavyLine;

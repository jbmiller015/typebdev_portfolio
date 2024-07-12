import React, {useEffect, useState} from 'react';
import './style/RotatingLine.css';

const RotatingLine = ({direction}) => {
    const [rotation, setRotation] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        const rotationDegree = direction === "right" ? (scrollPercent / 100) * -180 : (scrollPercent / 100) * 180; // Rotate up to 360 degrees
        setRotation(rotationDegree);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="line" style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: direction /* Rotate around the center */
        }}></div>
    );
};

export default RotatingLine;

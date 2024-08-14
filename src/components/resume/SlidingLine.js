import React, {useEffect, useState} from "react";

const SlidingLine = ({direction, height, offset, bounds}) => {
    const [distance, setDistance] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (scrollPercent > bounds.start && scrollPercent < bounds.end) {
            const translateDistance = direction === "left" ? ((scrollPercent * 10) - parseInt(offset)) : (parseInt(offset) - (scrollPercent * 10));
            setDistance(translateDistance);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="SlidingLine" style={{
            transform: `translate(${distance}px)`,
            transformOrigin: `${direction}`,
            borderRight: `${direction === 'left' ? 'none' : ''}`,
            borderLeft: `${direction === 'left' ? '' : 'none'}`,
            width: `${height}%`
        }}></div>
    );
}
export default SlidingLine;

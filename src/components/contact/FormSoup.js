import React, {useEffect, useRef, useState} from 'react';
import './style/FormSoup.css';

const FormSoup = ({data}) => {
    const canvasRef = useRef(null);
    const [buttons, setButtons] = useState([]);
    const [animateLimit, setAnimateLimit] = useState(5);


    const splatterReveal = (ctx) => {
        const x = Math.random() * ctx.canvas.width;
        const y = Math.random() * ctx.canvas.height;
        const radius = Math.random() * 3;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        let backgroundGradient = ctx.createLinearGradient(0, 0, 280, 140,);
        backgroundGradient.addColorStop(0, "#F3E8FF");
        backgroundGradient.addColorStop(.25, "#FDE047");
        backgroundGradient.addColorStop(.50, "#DCFCE7");
        backgroundGradient.addColorStop(.75, "#FDE047");
        backgroundGradient.addColorStop(1, "#F3E8FF");
        ctx.shadowColor = backgroundGradient;
        ctx.shadowBlur = (Math.random() * 10) + 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.fillStyle = backgroundGradient;
        ctx.fill();
    }

    const paintTitle = (ctx) => {
        ctx.font = "50px Arial";
        ctx.shadowColor = 'none';
        ctx.shadowBlur = 0;
        let backgroundGradient = ctx.createLinearGradient(0, 0, 280, 0,);
        backgroundGradient.addColorStop(0, "#581C87");
        backgroundGradient.addColorStop(1, "#22C55E");
        ctx.fillStyle = backgroundGradient;
        ctx.fillText("FormSoup", ctx.canvas.width / 5, ctx.canvas.height / 2);

        ctx.beginPath();
        ctx.moveTo((ctx.canvas.width / 5) - 4, (ctx.canvas.height / 2) + 4);
        ctx.lineTo(ctx.canvas.width / 5 - 4, (ctx.canvas.height / 2) - 40);
        ctx.lineTo(ctx.canvas.width / 5 + 240, (ctx.canvas.height / 2) - 40);
        ctx.lineTo(ctx.canvas.width / 5 + 240, (ctx.canvas.height / 2) + 4);
        ctx.lineTo(ctx.canvas.width / 5 - 4, (ctx.canvas.height / 2) + 4);
        ctx.strokeStyle = backgroundGradient;
        ctx.stroke();
    }
    useEffect(() => {
        if (active) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            let animationFrameId

            const render = () => {

                for (let i = 0; i < 150; i++) {
                    splatterReveal(ctx)
                }

                paintTitle(ctx)

            }
            animationFrameId = window.requestAnimationFrame(render)

            render()
            return () => {
                window.cancelAnimationFrame(animationFrameId)
            }
        }

    }, [splatterReveal])


    const [active, setActive] = useState(true);


    const toggleFill = () => {
        setActive(active => !active);
    }


    return (
        <div className="container mx-auto p-4">
            <canvas
                ref={canvasRef}
                width={400}
                height={600}
                className="border border-gray-300 rounded-lg"
                onClick={toggleFill}
            ></canvas>
        </div>
    );
};

export default FormSoup;

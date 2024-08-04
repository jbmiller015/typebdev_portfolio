import React, {useEffect, useRef, useState} from 'react';
import './style/FormSoup.css';

const FormSoup = ({data}) => {
    const canvasRef = useRef(null);
    const [buttons, setButtons] = useState([]);


    const splatterReveal = (ctx) => {

        const x = Math.random() * ctx.canvas.width;
        const y = Math.random() * ctx.canvas.height;
        const radius = Math.random() * 3;
//from-purple-100/20 via-yellow-300/20 to-green-100/20
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


        ctx.font = "50px Arial";
        ctx.shadowColor = 'none';
        ctx.shadowBlur = 0;
        backgroundGradient = ctx.createLinearGradient(0, 0, 280, 0,);
        backgroundGradient.addColorStop(0, "#581C87");
        backgroundGradient.addColorStop(1, "#22C55E");
        ctx.fillStyle = backgroundGradient;
        ctx.fillText("FormSoup", ctx.canvas.width / 5, ctx.canvas.height / 2);

        ctx.beginPath();
        ctx.moveTo(ctx.canvas.width / 5 - 1, ctx.canvas.height / 2 - 2);
        ctx.lineTo(ctx.canvas.width / 5 - 2, (ctx.canvas.height / 2) - 40);
        ctx.lineTo(ctx.canvas.width / 5 + 240, (ctx.canvas.height / 2) - 40);
        ctx.lineTo(ctx.canvas.width / 5 + 240, (ctx.canvas.height / 2) - 1);
        ctx.strokeStyle = backgroundGradient;
        ctx.stroke();

    }
    useEffect(() => {
        if (active) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            let frameCount = 0
            let animationFrameId

            const render = () => {
                for (let i = 0; i < 150; i++) {
                    splatterReveal(ctx)
                }
                animationFrameId = window.requestAnimationFrame(render)
            }

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

    /**
     const ball = {
     x: 100,
     y: 100,
     vx: 5,
     vy: 1,
     radius: 25,
     color: "blue",
     draw() {
     ctx.beginPath();
     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
     ctx.closePath();
     ctx.fillStyle = this.color;
     ctx.fill();
     },
     };

     function clear() {
     ctx.fillStyle = "rgb(255 255 255 / 30%)";
     ctx.fillRect(0, 0, canvas.width, canvas.height);
     }

     function draw() {
     clear();
     ball.draw();
     ball.x += ball.vx;
     ball.y += ball.vy;

     if (
     ball.y + ball.vy > canvas.height - ball.radius ||
     ball.y + ball.vy < ball.radius
     ) {
     ball.vy = -ball.vy;
     }
     if (
     ball.x + ball.vx > canvas.width - ball.radius ||
     ball.x + ball.vx < ball.radius
     ) {
     ball.vx = -ball.vx;
     }

     raf = window.requestAnimationFrame(draw);
     }

     canvas.addEventListener("mousemove", (e) => {
     if (!running) {
     clear();
     ball.x = e.clientX;
     ball.y = e.clientY;
     ball.draw();
     }
     });

     canvas.addEventListener("click", (e) => {
     if (!running) {
     raf = window.requestAnimationFrame(draw);
     running = true;
     }
     });

     canvas.addEventListener("mouseout", (e) => {
     window.cancelAnimationFrame(raf);
     running = false;
     });

     ball.draw();

     useEffect(() => {
     const canvas = canvasRef.current;
     const ctx = canvas.getContext('2d');
     const buttonWidth = 150;
     const buttonHeight = 50;
     const margin = 10;
     const fontSize = 16;
     let x = margin;
     let y = margin;

     const drawButton = (button) => {
     ctx.fillStyle = '#007BFF';
     ctx.fillRect(button.x, button.y, buttonWidth, buttonHeight);
     ctx.fillStyle = '#FFF';
     ctx.font = `${fontSize}px Arial`;
     ctx.textAlign = 'center';
     ctx.textBaseline = 'middle';
     ctx.fillText(button.label, button.x + buttonWidth / 2, button.y + buttonHeight / 2);
     ctx.strokeStyle = '#000';
     ctx.strokeRect(button.x, button.y, buttonWidth, buttonHeight);
     };

     ctx.clearRect(0, 0, canvas.width, canvas.height);
     buttons.forEach(drawButton);

     for (const key in data) {
     if (Object.hasOwnProperty.call(data, key)) {
     const button = {
     label: key,
     x,
     y,
     targetY: y,
     speed: 0
     };
     setButtons((prevButtons) => [...prevButtons, button]);
     y += buttonHeight + margin;
     if (y + buttonHeight + margin > canvas.height) {
     y = margin;
     x += buttonWidth + margin;
     }
     }
     }
     }, [data]);

     useEffect(() => {
     const canvas = canvasRef.current;
     const ctx = canvas.getContext('2d');
     const buttonWidth = 150;
     const buttonHeight = 50;
     const fontSize = 16;

     const drawButton = (button) => {
     ctx.fillStyle = '#007BFF';
     ctx.fillRect(button.x, button.y, buttonWidth, buttonHeight);
     ctx.fillStyle = '#FFF';
     ctx.font = `${fontSize}px Arial`;
     ctx.textAlign = 'center';
     ctx.textBaseline = 'middle';
     ctx.fillText(button.label, button.x + buttonWidth / 2, button.y + buttonHeight / 2);
     ctx.strokeStyle = '#000';
     ctx.strokeRect(button.x, button.y, buttonWidth, buttonHeight);
     };


     const animate = () => {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     setButtons((prevButtons) =>
     prevButtons.map((button) => {
     if (button.y < button.targetY) {
     button.y += button.speed;
     if (button.y > button.targetY) {
     button.y = button.targetY;
     }
     }
     return button;
     })
     );
     buttons.forEach(drawButton);
     requestAnimationFrame(animate);
     };

     animate();
     }, [buttons]);


     const handleCanvasClick = (e) => {
     const canvas = canvasRef.current;
     const rect = canvas.getBoundingClientRect();
     const x = e.clientX - rect.left;
     const y = e.clientY - rect.top;
     const buttonWidth = 150;
     const buttonHeight = 50;

     setButtons((prevButtons) =>
     prevButtons.map((button) => {
     if (
     x >= button.x &&
     x <= button.x + buttonWidth &&
     y >= button.y &&
     y <= button.y + buttonHeight
     ) {
     return {...button, targetY: canvas.height - buttonHeight - 10, speed: 1};
     }
     return button;
     })
     );
     };
     */
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

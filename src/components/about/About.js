import React, {useEffect, useRef} from "react";
import './style/About.css'
import WavyLine from "./WavyLine";

function About() {
    const aboutRef = useRef(null);
    const [active, setActive] = React.useState(false);

    const resizeCanvas = (context) => {
        const canvas = context.canvas;
        const {width, height} = canvas.getBoundingClientRect();

        if (canvas.width !== width || canvas.height !== height) {
            const {devicePixelRatio: ratio = 1} = window;
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            context.scale(ratio, ratio);
        }
    };

    const drawLine = (ctx, start, end) => {

        ctx.font = "50px Arial";
        ctx.shadowColor = 'none';
        ctx.shadowBlur = 0;
        let backgroundGradient = ctx.createLinearGradient(0, 0, 280, 0,);
        backgroundGradient.addColorStop(0, "#581C87");
        backgroundGradient.addColorStop(1, "#22C55E");

        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.strokeStyle = backgroundGradient;
        ctx.closePath();
        ctx.stroke();
    }

    const linePoints = (p1, p2) => {
        // start building a points array with the starting point
        const points = [p1];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const count = Math.sqrt(dx * dx + dy * dy) * 3;
        for (let pct = 0; pct < count; pct++) {
            // calc next waypoint on the line
            let x = p1.x + dx * pct / count;
            let y = p1.y + dy * pct / count;
            let lastPt = points[points.length - 1];
            // add new waypoint if the its integer pixel value has
            // changed from last waypoint
            if (parseInt(x) !== parseInt(lastPt.x) || parseInt(y) !== parseInt(lastPt.y)) {
                points.push({x: x, y: y});
            }
        }
        // force the last point to be the ending point
        points[points.length - 1] = p2;
        // return a unique points[] forming a line from p1 to p2
        return (points);
    }
    useEffect(() => {
        console.log(active)
        if (active) {
            const canvas = aboutRef.current;
            const ctx = canvas.getContext("2d");
            let animationFrameId;
            const lines = [{
                points: linePoints({
                        x: (canvas.width / 5),
                        y: (canvas.height / 3)
                    },
                    {
                        x: (canvas.width / 5),
                        y: (canvas.height / 3) + 200
                    }),
                currentPoint: 0
            }, {
                points: linePoints({
                        x: (canvas.width / 5),
                        y: (canvas.height / 3) + 200
                    },
                    {
                        x: (canvas.width / 5) + 900,
                        y: (canvas.height / 3) + 200
                    }),
                currentPoint: 0
            }, {
                points: linePoints({
                    x: (canvas.width / 5) + 900,
                    y: (canvas.height / 3) + 200
                }, {
                    x: (canvas.width / 5) + 900,
                    y: (canvas.height / 3)
                }),
                currentPoint: 0
            }, {
                points: linePoints({
                        x: (canvas.width / 5) + 900,
                        y: (canvas.height / 3)
                    },
                    {
                        x: (canvas.width / 5),
                        y: (canvas.height / 3)
                    }),
                currentPoint: 0
            }];

            let count = 0;
            let lastTime = 0;
            let delay = 1000 / 60 * 5;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const render = (time) => {
                if (time < lastTime) {
                    requestAnimationFrame(render);
                    return;
                }
                let complete = true;
                for (let i = 0; i < lines.length; i++) {
                    let line = lines[i];
                    if ((line.currentPoint + 1) < line.points.length - 1) {
                        complete = false;
                        line.currentPoint++;
                    }
                    drawLine(ctx, {x: line.points[0].x, y: line.points[0].y}, {
                        x: line.points[line.currentPoint].x,
                        y: line.points[line.currentPoint].y
                    });
                }
                if (!complete) {
                    requestAnimationFrame(render)
                }
            }
            render()
            return () => {
                window.cancelAnimationFrame(animationFrameId)
            }
        }

    }, [active])

    const toggleFill = () => {
        setActive(active => !active);
    }

    const stats = [
        {
            name: 'Years of Experience',
            value: '5',
            description: 'I started building software as a freelancer while working through gradschool. After a few technical part-time roles and some contracts, I transitioned to a full-time software developer.'
        },
        {
            name: 'Degrees',
            value: '3',
            description: 'Two Bachelors and a Masters! While I\'m very proud of my technical Masters, I feel that my non-technical undergrad helps me better understand, not just the code, but the customer too.'
        },
        {
            name: 'Technical Depth',
            value: 'Deep',
            description: 'I\'ve had the chance to work on a huge variety of technical problems and solutions. I\'ve worked hard to make myself comfortable in every aspect of the modern software development and design lifecycle.'
        },
        {
            name: 'Patience',
            value: 'Unlimited',
            description: 'As a father to a young toddler, I have become an expert in patience. As a developer, this skill allows me to make sure everything works the way it\'s supposed to before sending it out.'
        },
    ]

    return (
        <div className="about" id="AboutSection">
            <div
                className="absolute mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col content-center justify-top">
                <div className="mx-auto max-w-full lg:mx-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                        About Me
                    </h2>
                    <WavyLine/>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-gray-600">
                        Hello World! I'm a developer with a critical eye for detail and design. I started my career in
                        tech at Amazon and got really excited about the things being developed around me. Eventually
                        that excitement spurred me to become the software developer that I am today. I'm an all-rounder,
                        jack-of-all-trades developer that enjoys making things work well and look good doing it!
                    </p>
                </div>
                <div className="mx-auto mt-8 sm:mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <dl className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse">
                                <p>{stat.description}</p>
                                <dt className="text-sm md:text-base leading-5 md:leading-7 text-gray-600">
                                    {stat.name}
                                </dt>
                                <dd className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-7 sm:leading-9 text-transparent bg-gradient-to-r from-purple-900 via-yellow-900 to-green-900 bg-clip-text">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* <canvas ref={aboutRef} width={window.innerWidth} height={window.innerHeight} onClick={toggleFill} /> */}
        </div>
    );
}

export default About;

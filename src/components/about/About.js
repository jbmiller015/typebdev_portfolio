import React from "react";
import './style/About.css'

function About() {

    const stats = [
        {name: 'Years of Experience', value: '5'},
        {name: 'Degrees', value: '3'},
        {name: 'Technical Languages', value: '8'},
        {name: 'Capacity for Love', value: 'Unlimited'},
    ]

    return (
        <div className="about" id="AboutSection">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-5xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">About Me</h2>
                    <p className="mt-6 text-lg leading-8 text-grey-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                        malesuada purus non mi dictum, ut aliquet lacus feugiat. Anim aute id magna aliqua ad ad non
                        deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                        sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                <dd className="text-3xl font-bold leading-9 bg-gradient-to-r from-purple-900 via-yellow-900 to-green-900-accent inline-block text-transparent bg-clip-text">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>


        /*<section className="about" id={"AboutSection"}>
            <h2>about Me</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                malesuada purus non mi dictum, ut aliquet lacus feugiat.
            </p>
        </section>*/
    );
}

export default About;

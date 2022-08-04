import React from 'react';
import useComponentVisible from "../../../Hooks/useComponentVisible";
import "./style/education.css"
import LCLogo from '../../../Resources/images/LCLogo.png';
import SULogo from '../../../Resources/images/SULogo.png';
import moment from "moment";

const Education = (props) => {
    const {school, startDate, endDate, location, field, degree} = props.values;


    const imageName = () => {
        if (school === "Luther College") {
            return <img src={LCLogo} className={"accordionImage"} alt={"LCLogo"}/>
        } else return <img src={SULogo} className={"accordionImage"} alt={"SULogo"}/>
    }

    const fade = () => {
        return (<div className={"fadeBox"}>
            <div className="ui fade reveal">
                <div className="visible content">
                    <div className={"contentBox"}>
                        {imageName()}
                    </div>
                </div>
                <div className="hidden content">
                    <div className={"contentBoxText"}>
                        <h2>{field}</h2>
                        <p>{moment(startDate).format("MMMM YYYY") + " - " + moment(endDate).format("MMMM YYYY")}</p>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>)
    }


    return (
        <div>
            <h2 className="ui header">{degree}</h2>
            {fade()}
        </div>
    );
}
export default Education;

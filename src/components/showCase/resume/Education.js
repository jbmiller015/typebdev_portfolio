import React from 'react';
import useComponentVisible from "../../../Hooks/useComponentVisible";
import "./style/education.css"
import LCLogo from '../../../Resources/images/LCLogo.png';
import SULogo from '../../../Resources/images/SULogo.png';
import moment from "moment";

const Education = (props) => {
    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);
    const {school, startDate, endDate, location, field, degree} = props.values;


    const imageName = () => {
      if(school === "Luther College"){
         return <img src={LCLogo} className={"accordionImage"} alt={"LCLogo"}/>
      }
      else return <img src={SULogo} className={"accordionImage"} alt={"SULogo"}/>
    }

    const accordion = () => {
        return (<div className="ui accordion">
            <div className={`${isComponentVisible ? "active" : ""} title`} onClick={() => {
                setIsComponentVisible(!isComponentVisible)
            }}>
                <i className="dropdown icon"/>
                {degree + ": " + field}
            </div>
            <div className={`${isComponentVisible ? "active" : ""} content`} ref={ref}>
                <div className={"accordionContent"}>
                    {imageName()}
                    <div className={"accordionText"}>
                        <h2>{school}</h2>
                        <p>{location}</p>
                        <br/>
                        <p>From</p>
                        <p>{moment(startDate).format("MMMM YYYY")}</p>
                        <p>To</p>
                        <p>{moment(endDate).format("MMMM YYYY")}</p>
                    </div>
                </div>
            </div>
        </div>);
    }
    return (<div className={"ui segments"}>{accordion()}
    </div>);
}
export default Education;

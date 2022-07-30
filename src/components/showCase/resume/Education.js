import React from 'react';
import useComponentVisible from "../../../Hooks/useComponentVisible";
import "./style/education.css"

const Education = (props) => {
    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);
    const {school, startDate, endDate, location, field, degree} = props.values;

    const renderComps = () => {
        return Object.entries(props.values).map((entry, i) => {
            return (<div className={"ui segment"} key={"eduShow" + i}>
                <div className={"ui header"}>{entry[0]}</div>
                <div className={"description"}>
                    <p>{entry[1]}</p>
                </div>
            </div>)
        })
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
                <div className={"lutherAccordionContent"}>
                    <h4>{school}</h4>
                    <p>{location}</p>
                    <p>{startDate}</p>
                    <p>{endDate}</p>
                </div>

            </div>

        </div>);
    }
    return (<div className={"ui segments"}>{accordion()}
    </div>);
}
export default Education;

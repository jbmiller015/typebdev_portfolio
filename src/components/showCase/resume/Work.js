import React from 'react';
import moment from "moment";

import useComponentVisible from "../../../Hooks/useComponentVisible";


const Work = (props) => {

    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);
    const {description, employer, startDate, endDate, jobTitle, location} = props.values;

    console.log(description)
    const descFeed = () => {
        return description.map((desc) => {
            console.log(desc)
            return (<div className="event">
                <div className="label">
                    <i className="mini angle right icon"/>
                </div>
                <div className="content">
                    <div className="summary">
                        {desc}
                    </div>
                </div>
            </div>)
        })
    }

    const accordion = () => {
        return (<div className="ui accordion">
            <div className={`${isComponentVisible ? "active" : ""} title`} onClick={() => {
                setIsComponentVisible(!isComponentVisible)
            }}>
                <div className="ui top attached header"><i className="dropdown icon"/>{jobTitle}
                </div>

            </div>
            <div className={`${isComponentVisible ? "active" : ""} content`} ref={ref}>
                <div className={"accordionContent"}>
                    <div className={"ui basic compact segment"}>
                        <h4 className="ui sub header">{employer}</h4>
                        <div className="ui small feed">
                            {descFeed()}
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

    const workCards = () => {
        return (<div className="ui card">
            <div className="content">
                <div className="header">{jobTitle}</div>
            </div>
            <div className="content">
                <h4 className="ui sub header">{employer}</h4>
                <div className="ui small feed">
                    {descFeed()}
                </div>
            </div>
            <div className="extra content">
                {moment(startDate).format("MMMM YYYY") + " - " + (endDate !== "" ? moment(endDate).format("MMMM YYYY") : "Current")}
            </div>
        </div>)
    }


    return (<div>
        {//<div>{workCards()}</div>
        }
        <div>{accordion()}</div>
    </div>);
}
export default Work;

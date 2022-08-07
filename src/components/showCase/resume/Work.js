import React, {useState} from 'react';
import moment from "moment";

import useComponentVisible from "../../../Hooks/useComponentVisible";


const Work = (props) => {

    const [title, setTitle] = useState("active");
    const [content, setContent] = useState("");
    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);
    const {description, employer, startDate, endDate, jobTitle, location} = props.values;

    const descFeed = () => {
        return description.map((desc, i) => {
            return (<div className="event" key={"event" + i}>
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

    const setActive = () => {
        if (title === "active") {
            setTitle("");
            setContent("active");
        } else {
            setTitle("active");
            setContent("");
        }
    }

    const accordion = () => {
        return (<div className="ui accordion">
            <div className={title + " title"} onClick={() => {
                setActive()
            }}>
                <div className="ui top attached header"><i
                    className="dropdown icon"/>{`${jobTitle}`}
                </div>

            </div>
            <div className={content + " content"} ref={ref}>
                <div className={"accordionContent"}>
                    <div className={"ui basic compact segment"}>
                        <h4 className="ui sub header">{employer}</h4>
                        {`${moment(startDate).format("MMMM YYYY")} - ${endDate ? moment(endDate).format("MMMM YYYY") : "Present"}`}
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

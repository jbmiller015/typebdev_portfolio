import React, {useState} from 'react';
import moment from "moment";
import replaceText from "../../../Middleware/ReplaceText";

const Work = (props) => {

    //TODO: Clean up
    const {extract, replace} = replaceText();
    extract()

    const [title, setTitle] = useState("active");
    const [content, setContent] = useState("");
    let {description, employer, startDate, endDate, jobTitle, location} = props.values;

    //description = replace(description);


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
            <div className={content + " content"}>
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


    return (<div>
        <div>{accordion()}</div>
    </div>);
}
export default Work;

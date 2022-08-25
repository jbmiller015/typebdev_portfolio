import React from 'react';
import replaceText from "../../../Middleware/ReplaceText";

const Tech = (props) => {

    const {extract,replace} = replaceText()
    extract();

    return (<div className={"ui circular segment"}>
        <div className="header">{replace(props.data[0])}</div>
        {props.data[1].icon ? <i className={props.data[1].icon.name}/> : null}
    </div>);
}
export default Tech;

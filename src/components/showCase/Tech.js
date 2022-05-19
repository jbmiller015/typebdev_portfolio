import React from 'react';

const Tech = (props) => {
    console.log(props.data)
    return (<div className={"ui circular segment"}>
        <div className="header">{props.data[0]}</div>
        {props.data[1].icon ? <i className={props.data[1].icon.name}/> : null}
    </div>);
}
export default Tech;

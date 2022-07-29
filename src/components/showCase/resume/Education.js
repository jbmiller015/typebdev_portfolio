import React from 'react';

const Education = (props) => {

    const {school, startDate, endDate, location, field, degree} = props.values;
    const renderComps = () => {
      return Object.entries(props.values).map((entry, i)=>{
          return(<div className={"ui segment"} key={"eduShow" + i}>
              <div className={"ui header"}>{entry[0]}</div>
              <div className={"description"}>
                  <p>{entry[1]}</p>
              </div>
          </div>)
      })
    }
    
    const accordion = () => {
      return(<div className="ui accordion">
          <div className="active title">
              <i className="dropdown icon"></i>
              {degree + ": " + field}
          </div>
          <div className="active content">
              <h4>{school}</h4>
              <p>{location}</p>
              <p>{startDate}</p>
              <p>{endDate}</p>
          </div>

      </div>);
    }
    return (<div className={"ui segments"}>{accordion()}
    </div>);
}
export default Education;

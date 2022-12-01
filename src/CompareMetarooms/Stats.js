import React from 'react'
import "./MetaroomStats"

function Stats(props) {
  return (
    <div className="statsDiv">
        <div className="categoryDiv">{props.dataType}:</div>
        <div className="values">
            {props.yourData} 
            &nbsp;<span className="arrow">&#8658; </span>&nbsp;
            {props.noUserData}
        </div>
    </div>
  )
}

export default Stats
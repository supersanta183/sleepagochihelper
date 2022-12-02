import React from 'react'
import "./MetaroomStats"

function Stats(props) {
  return (
    <div className="statsDiv">
        <div className="categoryDiv"><h3>{props.dataType}:</h3></div>
        <div className="values">
              <h4> 
              {props.yourData} 
              &nbsp; <span className="arrow">&#8658; </span> &nbsp;
              {props.noUserData}
            </h4>
        </div>
    </div>
  )
}

export default Stats
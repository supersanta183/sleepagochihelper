import React from "react";
import {Link} from 'react-router-dom';


const Button = (props) =>{

    return(
    <div className="linkdivClass">
        <button> <Link to={props.location} className="linkClass"><h3>{props.name}</h3></Link> </button>
    </div>
    )
}


export default Button
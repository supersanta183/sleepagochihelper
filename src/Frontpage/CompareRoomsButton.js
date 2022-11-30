import React from "react";
import { Link } from "react-router-dom";

const CompareMetarooms = () =>{
    return (
        <div className="linkdivClass">
            <button> <Link to={"/CompareMetarooms"} className="linkClass">Compare metarooms</Link> </button>
        </div>
    )
}
export default CompareMetarooms
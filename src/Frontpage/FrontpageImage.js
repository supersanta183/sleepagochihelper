import React from "react";
import CozyBedlvl1 from "../Images/beds/cozybed.webp"
import "./Frontpage.css"

const FrontpageImage = () => {
    return (
        <div className="frontpageimagediv">
            <img src={CozyBedlvl1} className="frontpageimage" alt="cozy bed" />
        </div>
    )
}
export default FrontpageImage
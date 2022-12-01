import React, { useEffect } from "react";
import YouMetaroom from "./YourMetaroom";
import MetaRoomStats from "./MetaroomStats";
import NewMetaroom from "./NewMetaroom";
import { user } from "../Backend/Classes/User.js";
import { metaroom } from "../Backend/Classes/Metaroom.js";
import { leagues } from "../Backend/Utilities/Constants.js";
import { useState } from "react";

const SubContainer = (props) =>{
    const [yourMetaroom,setYourMetaroom] = useState(props.metaroom.yourMetaroom)
    const [noUserMetaroom, setNoUserMetaroom] = useState(props.metaroom.noUserMetaroom)

    useEffect(() =>{
        //console.log(yourMetaroom)
    },[yourMetaroom])
    const updateYourMetaroom = async (metaroom) =>{
        setYourMetaroom(yourMetaroom=>{
            return metaroom})
    }
    const updateNoUserMetaroom = async (metaroom) =>{
        setNoUserMetaroom(noUserMetaroom=>{
            return metaroom})
    }
    const metarooms = {you: yourMetaroom, noUser: noUserMetaroom} 


    return(
        <div className="SubContainer">
            <YouMetaroom metaroom={props.metaroom.yourMetaroom} setMetaroom={updateYourMetaroom}/>
            <MetaRoomStats metarooms={metarooms}/>
            <NewMetaroom metaroom={props.metaroom.noUserMetaroom} setMetaroom={updateNoUserMetaroom}/>
        </div>
        )
}
export default SubContainer
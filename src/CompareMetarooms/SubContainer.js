import React, { useEffect } from "react";
import YouMetaroom from "./YourMetaroom";
import MetaRoomStats from "./MetaroomStats";
import NewMetaroom from "./NewMetaroom";
import { user } from "../Backend/Classes/User.js";
import { metaroom } from "../Backend/Classes/Metaroom.js";
import { leagues } from "../Backend/Utilities/Constants.js";
import { useState } from "react";

const SubContainer = (props) =>{
    const [yourMetaroom,setYourMetaroom] = useState(props.metaroom.x)
    const [noUserMetaroom, setNoUserMetaroom] = useState(props.metaroom.y)

    const updateYourMetaRoom = async (metaroom) =>{
        setYourMetaroom(yourMetaroom=>{
            return metaroom})
    }
    console.log(yourMetaroom)


    return(
        <div className="SubContainer">
            <YouMetaroom metaroom={props.metaroom.x} setMetaroom={updateYourMetaRoom}/>
            <MetaRoomStats/>
            <NewMetaroom metaroom={props.metaroom.y}/>
        </div>
        )
}
export default SubContainer
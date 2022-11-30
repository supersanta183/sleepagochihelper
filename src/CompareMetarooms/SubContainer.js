import React from "react";
import YouMetaroom from "./YourMetaroom";
import MetaRoomStats from "./MetaroomStats";
import NewMetaroom from "./NewMetaroom";
import { user } from "../Backend/Classes/User.js";
import { metaroom } from "../Backend/Classes/Metaroom.js";
import { leagues } from "../Backend/Utilities/Constants.mjs";

const SubContainer = (props) =>{
    return(
        <div className="SubContainer">
            <YouMetaroom metaroom={props.metaroom.yourMetaroom}/>
            <MetaRoomStats/>
            <NewMetaroom metaroom={props.metaroom.noUserMetaroom}/>
        </div>
        )
}
export default SubContainer
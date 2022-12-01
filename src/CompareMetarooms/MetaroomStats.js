import React from "react";
import "./MetaroomStats.css"
import Arrows from "../Images/other/yellow-minimal-arrows.webp"
import cozy from "../Images/beds/cozybed.webp"
import Stats from "./Stats.js";

const MetaRoomStats = (props) => {
    const playerTotalPower = props.metarooms.you.getRawPower()*props.metarooms.you.getCombo()
    const newTotalPower = props.metarooms.noUser.getRawPower()*props.metarooms.noUser.getCombo()

    return (
        <div className="MetaroomStats">
            <div classname="filler"></div>
            <div className="statsWrapper2">
                <Stats yourData={props.metarooms.you.getCombo().toFixed(2)} 
                    noUserData={props.metarooms.noUser.getCombo().toFixed(2)}
                    dataType="Combo"
                />
            </div>
            <div className="statsWrapper2">
                <Stats yourData={props.metarooms.you.getRawPower().toFixed(2)} 
                    noUserData={props.metarooms.noUser.getRawPower().toFixed(2)}
                    dataType="Raw power"
                />
            </div>
            <div className="statsWrapper2">
                <Stats yourData={props.metarooms.you.getLuck().toFixed(2)} 
                    noUserData={props.metarooms.noUser.getLuck().toFixed(2)}
                    dataType="Luck"
                />
            </div>
            <div className="statsWrapper2">
                <Stats yourData={props.metarooms.you.getCleanReadiness().toFixed(2)} 
                    noUserData={props.metarooms.noUser.getCleanReadiness().toFixed(2)}
                    dataType="Clean readiness"
                />
            </div>
            <div className="statsWrapper2">
                <Stats yourData={playerTotalPower.toFixed(2)} 
                    noUserData={newTotalPower.toFixed(2)}
                    dataType="Total power"
                />
            </div>
        </div>
    )
}
export default MetaRoomStats
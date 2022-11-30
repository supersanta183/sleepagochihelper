import React from "react";
import { ElementItems } from "./ElementItems";
import Dropdown from "./Dropdown";
import { itemNames } from "../Backend/Utilities/Constants";
import { levelOneItemStats } from "../Backend/Utilities/itemStats";

const options =[]

for(let i = 0; i<itemNames.length;i++){
    options.push(levelOneItemStats[itemNames[i]])
}


const YouMetaroom = (props) =>{
    return (
        <div className="YourMetaroom">
        <h2>Your metaroom</h2>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.Setting} options={options}/>
        </div>
        <div className="itemWrapper">
            <ElementItems item={props.metaroom.Storage}/>
        </div>
        <div className="itemWrapper">
            <ElementItems item={props.metaroom.Bed}/>
        </div>
        <div className="itemWrapper">
            <ElementItems item={props.metaroom.Rug}/>
        </div>
        <div className="itemWrapper">
            <ElementItems item={props.metaroom.Poster}/>
        </div>
        </div>
    )
}
export default YouMetaroom
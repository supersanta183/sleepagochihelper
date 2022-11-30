import React from "react";
import { ElementItems } from "./ElementItems";
import Dropdown from "./Dropdown";
import tempCommonItemNames from "../Backend/Utilities/Constants.mjs";
//import commonItemNames from "../Backend/Utilities/Constants"
import { levelOneItemStats } from "../Backend/Utilities/itemStats";
const commonItemNames = {Starter: "Starter", Student: "Student", Comfy: "Comfy", WoodenCabinet: "WoodenCabinet", Shelving: "Shelving", VintageBookshelf: "VintageBookshelf", CozyBed: "CozyBed", Mattress: "Mattress", TwinSize: "TwinSize", TropicalRug: "TropicalRug", PatternRug: "PatternRug", RetroRug: "RetroRug", Waves: "Waves", FramedPlants: "FramedPlants", Sunset:"Sunset"}

const options =[]

for(let i = 0; i<commonItemNames.length;i++){
    options.push(levelOneItemStats[commonItemNames[i]])
}


const YouMetaroom = (props) =>{
    return (
        <div className="YourMetaroom">
        <h2>Your metaroom</h2>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.Setting} options={options}/>
        </div>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.Storage} options={options}/>
        </div>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.Bed} options={options}/>
        </div>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.Rug} options={options}/>
        </div>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.Poster} options={options}/>
        </div>
        </div>
    )
}
export default YouMetaroom
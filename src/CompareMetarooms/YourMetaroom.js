import React from "react";
import { ElementItems } from "./ElementItems";
import Dropdown from "./Dropdown";
import { itemNames, types } from "../Backend/Utilities/Constants";
import { levelOneItemStats } from "../Backend/Utilities/itemStats";
import { metaroom } from "../Backend/Classes/Metaroom.js";
import { useState } from "react";

const setting = []
const storage = []
const bed = []
const rug = []
const poster = []

for(let i = 0; i<itemNames.length;i++){
    switch(levelOneItemStats[itemNames[i]].type){
        case types.Setting:
            setting.push(levelOneItemStats[itemNames[i]])
            break
        case types.Storage:
            storage.push(levelOneItemStats[itemNames[i]])
            break
        case types.Bed:
            bed.push(levelOneItemStats[itemNames[i]])
            break
        case types.Rug:
            rug.push(levelOneItemStats[itemNames[i]])
            break
        case types.Poster:
            poster.push(levelOneItemStats[itemNames[i]])
            break
    }
}


const YouMetaroom = (props) =>{

    const [metaroomSetting, setMetaroomSetting] = useState(props.metaroom.getSetting())
    const [metaroomStorage, setMetaroomStorage] = useState(props.metaroom.getStorage())
    const [metaroomBed,setMetaroomBed] = useState(props.metaroom.getBed())
    const [metaroomRug,setMetaroomRug] = useState(props.metaroom.getRug())
    const [metaroomPoster,setMetaroomPoster] = useState(props.metaroom.getPoster())

    const setParentMetaroom = async () =>{
        setMetaroomSetting(metaroomSetting => ({
            ...metaroomSetting,
            ...levelOneItemStats["Comfy"]
        })) 
        props.setMetaroom(new metaroom(metaroomSetting,metaroomStorage,metaroomBed,metaroomRug,metaroomPoster))
    }


    return (
        <div className="YourMetaroom">
        <h2>Your metaroom</h2>
        <button onClick={setParentMetaroom}></button>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.getSetting()} options={setting}/>
        </div>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.getStorage()} options={storage}/>
        </div>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.getBed()} options={bed}/>
        </div>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.getRug()} options={rug}/>
        </div>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.getPoster()} options={poster}/>
        </div>
        </div>
    )
}
export default YouMetaroom
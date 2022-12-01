import React, { useEffect } from "react";
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

const NewMetaroom = (props) =>{
    const [metaroomSetting, setMetaroomSetting] = useState(props.metaroom.getSetting())
    const [metaroomStorage, setMetaroomStorage] = useState(props.metaroom.getStorage())
    const [metaroomBed,setMetaroomBed] = useState(props.metaroom.getBed())
    const [metaroomRug,setMetaroomRug] = useState(props.metaroom.getRug())
    const [metaroomPoster,setMetaroomPoster] = useState(props.metaroom.getPoster())

    const setParentMetaroom = async (item) =>{
        const type = item.type
        if(type===types.Setting){
            setMetaroomSetting(metaroomSetting => ({
                ...metaroomSetting,
                ...item
            }))
        }
        if(type===types.Storage){
            setMetaroomStorage(metaroomStorage => ({
                ...metaroomStorage,
                ...item
            }))
        }
        if(type === types.Bed){
            setMetaroomBed(metaroomBed => ({
                ...metaroomBed,
                ...item
            }))
        }
        if(type === types.Rug){
            setMetaroomRug(metaroomRug => ({
                ...metaroomRug,
                ...item
            }))
        }
        if(type === types.Poster){
            setMetaroomPoster(metaroomPoster => ({
                ...metaroomPoster,
                ...item
            }))
        }
    }
    useEffect(()=>{
        props.setMetaroom(new metaroom(metaroomSetting,metaroomStorage,metaroomBed,metaroomRug,metaroomPoster))
    },[metaroomSetting, metaroomStorage,metaroomBed,metaroomRug,metaroomPoster]) 

    return (
        <div className="YourMetaroom">
        <h2>New metaroom</h2>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.getSetting()} options={setting} setParentItem={setParentMetaroom}/>
        </div>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.getStorage()} options={storage} setParentItem={setParentMetaroom}/>
        </div>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.getBed()} options={bed} setParentItem={setParentMetaroom}/>
        </div>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.getRug()} options={rug} setParentItem={setParentMetaroom}/>
        </div>
        <div className="itemWrapper">
            <Dropdown item={props.metaroom.getPoster()} options={poster} setParentItem={setParentMetaroom}/>
        </div>
        </div>
    )
}
export default NewMetaroom
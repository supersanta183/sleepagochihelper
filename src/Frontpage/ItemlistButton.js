import React from "react";
import {Routes, Route, useNavigate, Link, redirect} from 'react-router-dom';
import { metaroom } from "../Backend/Classes/Metaroom.js";
import { levelThreeItemStats } from "../Backend/Utilities/itemStats.js";

const ItemlistButton = () =>{
    let meta1 = new metaroom()

    function onClickTest(){
        meta1.updateItem(levelThreeItemStats.Comfy)
        console.log("Metaroom raw power: " + meta1.getRawPower())
        }

    return(
    <div className="linkdivClass">
        <button> <Link to={"/Itemlist"} className="linkClass">Itemlist</Link></button>
    </div>
    )
}


export default ItemlistButton
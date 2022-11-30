import React from "react";
import { user } from "../Backend/Classes/User.js";
import { metaroom } from "../Backend/Classes/Metaroom.js";
import { leagues } from "../Backend/Utilities/Constants.js";
import Header from "./Header.js";
import SubContainer from "./SubContainer.js";
import {Helmet} from "react-helmet"
import "./CompareMetarooms.css"


let noUser = new user("default", new metaroom(), leagues.TrainingCamp)
let player = new user("default", new metaroom(), leagues.TrainingCamp)
let yourMetaroom = {
    Setting: player.getSetting(),
    Storage: player.getStorage(),
    Bed: player.getBed(),
    Rug: player.getRug(),
    Poster: player.getPoster()
}
const noUserMetaroom = {
    Setting: noUser.getSetting(),
    Storage: noUser.getStorage(),
    Bed: noUser.getBed(),
    Rug: noUser.getRug(),
    Poster: noUser.getPoster()
}

const data = {yourMetaroom,noUserMetaroom}


const CompareMetarooms = () =>{
    return(
        <div className="Container">
            <Helmet>
            <body className="testBody"/>
            </Helmet>
            <Header/>
            <SubContainer 
                metaroom = {data}
            />
        </div>
    )
}
export default CompareMetarooms
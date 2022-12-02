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

let yourMetaroom = player.getMetaroom()
let noUserMetaroom = noUser.getMetaroom()

const data = {yourMetaroom,noUserMetaroom}


const CompareMetarooms = () =>{
    return(
        <div className="Container">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <Helmet>
            <body className="testBody"/>
            </Helmet>
            <Header/>
            <SubContainer 
                metaroom = {data}/>
            <div className="footer"></div>
        </div>
    )
}
export default CompareMetarooms
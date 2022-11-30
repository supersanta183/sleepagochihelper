import React from "react";
import { ElementItems } from "./ElementItems";

const NewMetaroom = (props) =>{
    return (
        <div className="NewMetaroom">
        <h2>New metaroom</h2>
        <div className="itemWrapper">
            <ElementItems item={props.metaroom.getSetting()}/>
        </div>
        <div className="itemWrapper">
            <ElementItems item={props.metaroom.getStorage()}/>
        </div>
        <div className="itemWrapper">
            <ElementItems item={props.metaroom.getBed()}/>
        </div>
        <div className="itemWrapper">
            <ElementItems item={props.metaroom.getRug()}/>
        </div>
        <div className="itemWrapper">
            <ElementItems item={props.metaroom.getPoster()}/>
        </div>
        </div>
    )
}
export default NewMetaroom
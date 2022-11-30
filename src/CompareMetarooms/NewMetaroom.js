import React from "react";
import { ElementItems } from "./ElementItems";

const NewMetaroom = (props) =>{
    return (
        <div className="NewMetaroom">
        <h2>New metaroom</h2>
        <div className="itemWrapper">
            <ElementItems item={props.metaroom.Setting}/>
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
export default NewMetaroom
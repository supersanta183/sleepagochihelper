import React from "react";
import {Link} from 'react-router-dom';


const ItemlistButton = () =>{

    return(
    <div className="linkdivClass">
        <button> <Link to={"/Itemlist"} className="linkClass">Itemlist</Link> </button>
    </div>
    )
}


export default ItemlistButton
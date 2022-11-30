import React from "react";
import {Routes, Route, useNavigate, Link, redirect, BrowserRouter} from 'react-router-dom';
import FrontpageContainer from "./Frontpage/FrontpageContainer.js";
import Itemlist from "./Itemlist/Itemlist.js";
import CompareMetarooms from "./CompareMetarooms/ComparemetaroomsContainer.js";

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FrontpageContainer/>}/>
                    <Route path="/Itemlist" element={<Itemlist/>}/>
                    <Route path ="/CompareMetarooms" element={<CompareMetarooms/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
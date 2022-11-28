import React from "react";
import {Routes, Route, useNavigate, Link, redirect, BrowserRouter} from 'react-router-dom';
import FrontpageContainer from "./Frontpage/FrontpageContainer.js";
import Itemlist from "./Itemlist/Itemlist.js";

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FrontpageContainer/>}/>
                    <Route path="/Itemlist" element={<Itemlist/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
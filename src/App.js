import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import FrontpageContainer from "./Frontpage/FrontpageContainer.js";
import Itemlist from "./Itemlist/Itemlist.js";
import CompareMetarooms from "./CompareMetarooms/ComparemetaroomsContainer.js";
import Navbar from "./Components/navbar.js";

const App = () => {
    return(
        <div>
            <Navbar/>
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
import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import FrontpageContainer from "./Frontpage/FrontpageContainer.js";
import CompareMetarooms from "./CompareMetarooms/ComparemetaroomsContainer.js";
import Navbar from "./Components/navbar.js";
import FlippinghelperContainer from "./frontend/flippinghelper/FlippinghelperContainer.js";

const App = () => {
    return(
        <div>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FrontpageContainer/>}/>
                    <Route path="/Flippinghelper" element={<FlippinghelperContainer/>}/>
                    <Route path ="/CompareMetarooms" element={<CompareMetarooms/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
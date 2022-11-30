import React, { StrictMode } from "react"
import {createRoot} from "react-dom/client"
import FrontpageContainer from "./Frontpage/FrontpageContainer.js"
import {Routes, Route, useNavigate, Link, redirect} from 'react-router-dom';
import App from "./App.js";

const root = createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
export default root
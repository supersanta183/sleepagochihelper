import React from "react";
import Header from "./Header.js";
import FrontpageImage from "./FrontpageImage.js";
import SubHeader from "./Subheader.js"
import "./Frontpage.css"
import Button from "./Button.js";

class FrontpageContainer extends React.Component{
    render() {
        return (
            <div class="navbar-wrapper">
                <div className="wrapper">
                    <Header />
                    <FrontpageImage />
                    <SubHeader />
                    <Button location="./CompareMetarooms" name="Compare Metarooms"/>
                    <Button location="./Itemlist" name="Itemlist"/>
                </div>
            </div>
        )   
    }
}
export default FrontpageContainer
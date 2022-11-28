import React from "react";
import Header from "./Header.js";
import FrontpageImage from "./FrontpageImage.js";
import SubHeader from "./Subheader.js"
import ItemlistButton from "./ItemlistButton.js";
import "./Frontpage.css"

class FrontpageContainer extends React.Component{

    render() {
        return (
            <div className="wrapper">
                <Header />
                <FrontpageImage />
                <SubHeader />
                <ItemlistButton/>
            </div>
        )   
    }

}
export default FrontpageContainer
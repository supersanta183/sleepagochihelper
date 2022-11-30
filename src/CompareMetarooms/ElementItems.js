import React from "react";
import "./ElementItemsStyle.css"
import Starterlvl1 from "../Images/setting/starter-lvl1.webp"
import { levelOneItemStats, levelTwoItemStats, levelThreeItemStats } from "../Backend/Utilities/itemStats.js";
import { useState, useEffect } from "react";
import images from "../images.js"

/*
        name: 
        type: 
        rarity: 
        level: 
        luck: 
        combo: 
        cleanReadiness: 
        sleepPower: 
*/
export const ElementItems = (props) =>{
    const [item, setItem] = useState(props.item)
    const [stateButton1,setbutton1] = useState(false)
    const [stateButton2,setbutton2] = useState(false)
    const [stateButton3,setbutton3] = useState(false)

    function setInitiallyClicked(){
        if(item.level==1){
            chooseLevelOne()
        }else if(item.level==2){
            chooseLevelTwo()
        }else if(item.level==3){
            chooseLevelThree()
        }
    }

    function chooseLevelOne(){
        setbutton1(true)
        setbutton2(false)
        setbutton3(false)
        let name = item.name
        setItem(levelOneItemStats[name])
    }
    function chooseLevelTwo(){
        setbutton1(false)
        setbutton2(true)
        setbutton3(false)
        let name = item.name
        setItem(levelTwoItemStats[name])
    }
    function chooseLevelThree(){
        setbutton1(false)
        setbutton2(false)
        setbutton3(true)
        let name = item.name
        setItem(levelThreeItemStats[name])
    }

    useEffect(() => {
        setInitiallyClicked()
    })
    const names = props.item.name


    return (
        <div className="elementItemWrapper">
            <div className="levelDiv">
                <p className="levelClass">Level</p>
                <div className="buttonpadding"><button className={`itemButtonClass ${stateButton1 ? "clicked" : ""}`} onClick={chooseLevelOne}>1</button></div>
                <div className="buttonpadding"><button className={`itemButtonClass ${stateButton2 ? "clicked" : ""}`} onClick={chooseLevelTwo}>2</button></div>
                <div className="buttonpadding"><button className={`itemButtonClass ${stateButton3 ? "clicked" : ""}`} onClick={chooseLevelThree}>3</button></div>
            </div>

            <div className="imgClasswrapper">
                <img className="imgClass" src={images[names]} alt="starter" />
            </div>

            <div className="statsWrapper">
                <div>
                    <h3>{item.name} level {item.level}</h3>
                    <div className="statsRowWrapper">
                        <div className="statsRow">
                            <div className="statsRowElement">
                                <div className="statsRowElement2">Luck</div>
                                <div className="luckDiv">{item.luck}</div>
                            </div>
                            <div className="statsRowElement">
                                <div className="statsRowElement2">Clean Readiness</div>
                                <div className="CRDiv">{item.cleanReadiness}</div>
                            </div>
                        </div>
                        <div className="statsRow">
                            <div className="statsRowElement">
                                <div className="statsRowElement2">Combo</div>
                                <div className="comboDiv">{item.combo}</div>
                            </div>
                            <div className="statsRowElement">
                                <div className="statsRowElement2">Sleep Power</div>
                                <div className="sleepPowerDiv">{item.sleepPower}</div>
                            </div>
                        </div>
                        <div className="statsRow">
                            <div className="statsRowElement">
                                <div className="statsRowElement2">Rarity</div>
                                <div className="rarityDiv">{item.rarity}</div>
                            </div>
                            <div className="statsRowElement">
                                <div className="statsRowElement2">Type</div>
                                <div className="typeDiv">{item.type}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
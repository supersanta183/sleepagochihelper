import React from "react";
import "./ElementItemsStyle.css"
import { levelOneItemStats, levelTwoItemStats, levelThreeItemStats } from "../Backend/Utilities/itemStats.js";
import { useState, useEffect } from "react";
import images from "../images.js"
import { rarities } from "../Backend/Utilities/Constants";

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
    const names = props.item.name

    useEffect(() =>{
        props.setState(item)
    },[stateButton1,stateButton2,stateButton3])
    function setInitiallyClicked(){
        if(item.level === 1){
            chooseLevelOne()
        }else if(item.level === 2){
            chooseLevelTwo()
        }else if(item.level === 3){
            chooseLevelThree()
        }
    }
    function chooseLevelOne(){
        setbutton1(true)
        setbutton2(false)
        setbutton3(false)
        let names = item.name
        setItem(levelOneItemStats[names])
    }
    function chooseLevelTwo(){
        setbutton1(false)
        setbutton2(true)
        setbutton3(false)
        let names = item.name
        if(!levelTwoItemStats[names]){
            setItem(levelOneItemStats[names])

        }else{
            setItem(levelTwoItemStats[names])
        }
    }
    function chooseLevelThree(){
        setbutton1(false)
        setbutton2(false)
        setbutton3(true)
        let names = item.name
        if(!levelTwoItemStats[names]){
            setItem(levelOneItemStats[names])

        }else{
            setItem(levelThreeItemStats[names])
        }
    }
    useEffect(() => {
        setInitiallyClicked()
    })

    const determineType = (rarity) => {
        if(rarity==item.rarity){
            return item.rarity
        }
    }


    return (
        <div className="elementItemWrapper">
            <div className="levelDiv">
                <div className="leveltitlediv">
                    Level
                </div>
                <div className="buttonpadding"><button className={`itemButtonClass ${stateButton1 ? "clicked" : ""}`} onClick={chooseLevelOne}>1</button></div>
                <div className="buttonpadding"><button className={`itemButtonClass ${stateButton2 ? "clicked" : ""}`} onClick={chooseLevelTwo}>2</button></div>
                <div className="buttonpadding"><button className={`itemButtonClass ${stateButton3 ? "clicked" : ""}`} onClick={chooseLevelThree}>3</button></div>
            </div>

            <div className="imgClasswrapper">
                <img className="imgClass" src={images[names]} alt="starter" />
            </div>

            <div className="statsWrapper">
                <div>
                    <div className="nameDiv">
                        <div><h3>{item.name} level {item.level}</h3></div>
                    </div>
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
                                <div className="rarityDiv">
                                <span className="common">{determineType(rarities.Common)}</span>
                                <span className="uncommon">{determineType(rarities.Uncommon)}</span>
                                <span className="rare">{determineType(rarities.Rare)}</span>
                                <span className="super">{determineType(rarities.Super)}</span>
                                </div>
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
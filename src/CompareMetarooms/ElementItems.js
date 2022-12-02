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
                    <h4>Level</h4>
                </div>
                <div className="buttonpadding"><button className={`itemButtonClass ${stateButton1 ? "clicked" : ""}`} onClick={chooseLevelOne}>1</button></div>
                <div className="buttonpadding"><button className={`itemButtonClass ${stateButton2 ? "clicked" : ""}`} onClick={chooseLevelTwo}>2</button></div>
                <div className="buttonpadding"><button className={`itemButtonClass ${stateButton3 ? "clicked" : ""}`} onClick={chooseLevelThree}>3</button></div>
            </div>

            <div className="imgClasswrapper">
                <img className="imgClass" src={images[names]} alt="starter" />
            </div>

            <div className="statsWrapper">
                    <div className="nameDiv">
                        <h4>{item.name} level {item.level}</h4>
                    </div>
                    <div className="statsRowWrapper">
                        <div className="statsRow">
                            <div className="statsRowElement">
                                <div className="statsRowElement2"><h5>Luck</h5></div>
                                <div className="luckDiv"><p>{item.luck}</p></div>
                            </div>
                            <div className="statsRowElement">
                                <div className="statsRowElement2"><h5>Clean Readiness</h5></div>
                                <div className="CRDiv"><p>{item.cleanReadiness}</p></div>
                            </div>
                        </div>
                        <div className="statsRow">
                            <div className="statsRowElement">
                                <div className="statsRowElement2"><h5>Combo</h5></div>
                                <div className="comboDiv"><p>{item.combo}</p></div>
                            </div>
                            <div className="statsRowElement">
                                <div className="statsRowElement2"><h5>Sleep Power</h5></div>
                                <div className="sleepPowerDiv"><p>{item.sleepPower}</p></div>
                            </div>
                        </div>
                        <div className="statsRow">
                            <div className="statsRowElement">
                                <div className="statsRowElement2"><h5>Rarity</h5></div>
                                <div className="rarityDiv">
                                <span className="common"><p>{determineType(rarities.Common)}</p></span>
                                <span className="uncommon"><p>{determineType(rarities.Uncommon)}</p></span>
                                <span className="rare"><p>{determineType(rarities.Rare)}</p></span>
                                <span className="super"><p>{determineType(rarities.Super)}</p></span>
                                </div>
                            </div>
                            <div className="statsRowElement">
                                <div className="statsRowElement2"><h5>Type</h5></div>
                                <div className="typeDiv"><p>{item.type}</p></div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
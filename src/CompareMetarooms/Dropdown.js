import React, { useEffect, useState } from "react";
import { ElementItems } from "./ElementItems";
import "./Dropdown.css";
import root from "..";
import CompareMetarooms from "./ComparemetaroomsContainer";
import { flushSync } from "react-dom";
import { levelOneItemStats } from "../Backend/Utilities/itemStats";

const Dropdown = ({ item, options }) => {
    const [showMenu,setShowMenu] = useState(false)
    const [selectedValue, setSelectedValue] = useState(item.name)
    const [state,setState] = useState(item.name)

    useEffect(() => {
        const handler = () => setShowMenu(false)
        window.addEventListener("click",handler)
        return () => {
            window.removeEventListener("click", handler)
        }
    })

    const handleInputClick = (e) =>{
        if(e.target instanceof HTMLButtonElement){
        }else{
            e.stopPropagation()
            setShowMenu(!showMenu)
        }
    }

const isSelected = (option) => {
    if(!selectedValue){
        return false
    }
    return selectedValue.name === option.name
}

  const onItemClick = (option) =>{
    console.log(option.name)
    setSelectedValue(option.name)
    setState(option.name)
  }

  return (
    <div className="dropdown-container">
      <div onClick={handleInputClick} className="dropdown-input">
      {showMenu &&(
      <div className="dropdown-menu">
        {options.map((option) =>(
            <div onClick={() => onItemClick(option)} key={option.name} className={`dropdown-item ${isSelected(option) && "selected"}`}>
                <ElementItems item={option}/>
            </div>))}
      </div>
      )}
        <div className="dropdown-selected-value">
          <span key={state}> <ElementItems item={levelOneItemStats[state]}/></span> 
         </div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;
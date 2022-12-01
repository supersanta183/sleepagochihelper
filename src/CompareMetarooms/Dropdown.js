import React, { useEffect, useRef, useState } from "react";
import { ElementItems } from "./ElementItems";
import "./Dropdown.css";
import { levelOneItemStats, levelTwoItemStats, levelThreeItemStats } from "../Backend/Utilities/itemStats";

const Dropdown = ({ item, options,setParentItem }) => {
    const [showMenu,setShowMenu] = useState(false)
    const [state,setState] = useState(item.name)
    const inputRef = useRef()
    const [searchValue, setSearchValue] = useState("")
    const searchRef = useRef()

    useEffect(() => {
      setSearchValue("")
      if(showMenu && searchRef.current){
        searchRef.current.focus()
      }

        const handler = (e) => {
          if(inputRef.current && !inputRef.current.contains(e.target)){
            setShowMenu(false)
          }
          
        }
        window.addEventListener("click",handler)
        return () => {
            window.removeEventListener("click", handler)
        }
    }, [showMenu])

    const onSearch = (e) => {
      setSearchValue(e.target.value)
    }
    const getoptions = () => {
      if(!searchValue){
        return options
      }
      return options.filter((option)=>
        option.name.toLowerCase().indexOf(searchValue.toLowerCase())>=0)
    }

    const handleInputClick = (e) =>{
        if(e.target instanceof HTMLButtonElement){
        }else{
            setShowMenu(!showMenu)
        }
    }

const isSelected = (option) => {
    return state === option.name
}

  const onItemClick = (option) =>{
    setState(option.name)
    setParentItem(option)
    }

  return (
    <div className="dropdown-container">
      <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
      {showMenu &&(
      <div className="dropdown-menu">
      <div className="searchBox">
        <input placeholder="Search for item..." className="inputfield" onChange={onSearch} value={searchValue} ref={searchRef}></input>
      </div>
        {getoptions().map((option) =>(
            <div onClick={() => onItemClick(option)} key={option.name} className={`dropdown-item ${isSelected(option) && "selected"}`}>
                {option.name}
                <ElementItems item={option}
                  setState={()=>{}}
                />
            </div>))}
      </div>
      )}
        <div className="dropdown-selected-value">
          <span key={state}> <ElementItems item={levelOneItemStats[state]} setState={onItemClick}/></span> 
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
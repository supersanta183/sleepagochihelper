import React, {useEffect, useState, useRef} from 'react'
import "./navbar.css"

function Navbar() {

    //to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class,setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const inputRef = useRef()

    //toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    useEffect(() => {
          const handler = (e) => {
            if(inputRef.current && !inputRef.current.contains(e.target)){
              setIsMenuClicked(false)
              setMenuClass("menu hidden")
            }
          }
          console.log(isMenuClicked)
          window.addEventListener("click",handler)
          return () => {
              window.removeEventListener("click", handler)
          }
      }, [isMenuClicked])

  return (
    <div className='navbar-wrapper'style={{width: '100%', height: '100vh'}} ref={inputRef}>
        <nav>
            <div className='burger-menu' onClick={updateMenu} >
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
            </div>
        </nav>

        <div className={menu_class}>
            <div className='menu-button'>
                <ul className='menu-list'>
                    <li><a href='./'><h6>Frontpage</h6></a></li>
                    <li><a href="./CompareMetarooms"><h6>Compare Metarooms</h6></a></li>
                    <li><a href='./Itemlist'><h6>Item List</h6></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
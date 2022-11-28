//User (et metaroom, navn, total power, combo, et id, league, username)
//metaroom(setting, storage, bed, rug, poster)

import { metaroom } from './Metaroom.js'
import { leagues } from '../Utilities/Constants.js'
import { getLeagueBonus } from '../Utilities/HelperFunctions.js'
import { levelOneItemStats, levelThreeItemStats, levelTwoItemStats } from "../Utilities/itemStats.js"
import { Errors } from '../Utilities/Errors.js'

class user {
    #id = 0
    #metaroom = new metaroom(levelOneItemStats.Student,levelOneItemStats.Shelving,levelOneItemStats.CozyBed,levelOneItemStats.PatternRug, levelOneItemStats.FramedPlants)
    #league = ""
    #combo = 0
    #totalPower = 0
    #username
    #expectedIncome
    constructor(username, metaroom, league){
        this.checkUsername(username)
        this.#username = username
        this.#metaroom = metaroom
        this.#league = league
        this.updateUser()
    }

    updateUser(){
        this.setCombo()
        this.setTotalPower()
        this.#expectedIncome = this.getTotalpower()*1.5*2
    }

    checkUsername(username){
        if(username.includes(" ")){
            console.log("Error: " + Errors.INVALID_CHARACTERS_IN_USERNAME)
            throw Errors.INVALID_CHARACTERS_IN_USERNAME
        }
    }

    //sets total combo including league bonus
    setCombo(){
        this.#combo = this.#metaroom.getCombo()*getLeagueBonus(this.#league)
    }

    //multiplies power of metaroom with users combo
    setTotalPower(){
        this.#totalPower = this.#metaroom.getRawPower()*this.#combo
    }

    swapItemInMetaroom(newItem){
        this.#metaroom.updateItem(newItem)
        this.updateUser()
    }
    
    getTotalpower(){
        return this.#totalPower.toFixed(2)
    }
    getMetaroom(){
        return this.#metaroom
    }
    getId(){
        return this.#id
    }
    getUsername(){
        return this.#username
    }
    getExpectedIncome(){
        return this.#expectedIncome.toFixed(2)
    }
    getCombo(){
        return this.#combo.toFixed(2)
    }
}

let Bjarke = new user("Ham", new metaroom(), leagues.Challenger)
Bjarke.swapItemInMetaroom(levelThreeItemStats.VintageBookshelf)
Bjarke.swapItemInMetaroom(levelThreeItemStats.Sunset)
Bjarke.swapItemInMetaroom(levelThreeItemStats.Mattress)
Bjarke.swapItemInMetaroom(levelThreeItemStats.Comfy)
Bjarke.swapItemInMetaroom(levelThreeItemStats.RetroRug)
console.log("Total power: " + Bjarke.getExpectedIncome())
console.log(Bjarke.getCombo())
console.log(Bjarke.getMetaroom().getRawPower())
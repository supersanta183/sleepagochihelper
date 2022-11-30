//metaroom(1 af hver type item, Raw power, total luck, total combo, total clean readiness)
import types from "../Utilities/Constants.mjs"
import Errors from "../Utilities/Errors.js"
import getItem from "../Utilities/HelperFunctions.js"
import { levelOneItemStats, levelThreeItemStats, levelTwoItemStats } from "../Utilities/itemStats.js"

//metaroom takes 5 items, one of each type.
class metaroom{
    #setting
    #storage
    #bed
    #rug
    #poster
    #rawPower
    #luck
    #combo
    #cleanReadiness
    constructor(setting = levelOneItemStats.Starter, storage= levelOneItemStats.Shelving, 
        bed = levelOneItemStats.CozyBed, rug = levelOneItemStats.PatternRug, poster = levelOneItemStats.FramedPlants){
        if(setting.type == types.Setting && storage.type == types.Storage && bed.type == types.Bed && rug.type == types.Rug && poster.type == types.Poster){
        this.#setting = setting
        this.#storage = storage
        this.#bed = bed
        this.#rug = rug
        this.#poster = poster
        }else{
            console.log("Error: " + Errors.WRONG_ITEM_TYPE_IN_METAROOM)
            console.log("Setting: " + setting.type)
            console.log("Storage: " + storage.type)
            console.log("bed: " + bed.type)
            console.log("rug: " + rug.type)
            console.log("poster: " + poster.type)
            throw Errors.WRONG_ITEM_TYPE_IN_METAROOM
        }
        this.updateMetaroom(this.setting, this.storage, this.bed, this.rug, this.poster)
    }

    updateMetaroom(){
        this.setPower()
        this.setLuck()
        this.setCombo()
        this.setCleanReadiness()
    }
    
    //ssums the power of the items in the metaroom
    setPower() {

        this.#rawPower = this.#setting.sleepPower + this.#storage.sleepPower + this.#bed.sleepPower + this.#rug.sleepPower + this.#poster.sleepPower
    }

    //sums the luck of the items in the metaroom
    setLuck(){
        this.#luck = this.#setting.luck + this.#storage.luck + this.#bed.luck + this.#rug.luck + this.#poster.luck
    }

    //product of the combo of the items in the metaroom
    setCombo(){
        this.#combo = this.#setting.combo*this.#storage.combo*this.#bed.combo*this.#rug.combo*this.#poster.combo
    }

    //sums the cleanreadiness of the items in the metaroom
    setCleanReadiness(){
        this.#cleanReadiness = this.#setting.cleanReadiness + this.#storage.cleanReadiness + this.#bed.cleanReadiness + this.#rug.cleanReadiness + this.#poster.cleanReadiness
    }

    getRawPower(){
        return this.#rawPower
    }

    getCombo(){
        return this.#combo
    }

    getSetting(){
        return this.#setting
    }
    getStorage(){
        return this.#storage
    }
    getBed(){
        return this.#bed
    }
    getRug(){
        return this.#rug
    }
    getPoster(){
        return this.#poster
    }

    updateItem(newItem){
        let newLevel = newItem.level
        let newName = newItem.name
        switch(newItem.type){
            case types.Setting:
                this.#setting = getItem(newLevel,newName)
                break
            case types.Storage:
                this.#storage = getItem(newLevel,newName)
                break
            case types.Bed:
                this.#bed = getItem(newLevel,newName)
                break
            case types.Rug:
                this.#rug = getItem(newLevel,newName)
                break
            case types.Poster:
                this.#poster = getItem(newLevel,newName)
        }
        this.updateMetaroom()
    }
}
export default metaroom
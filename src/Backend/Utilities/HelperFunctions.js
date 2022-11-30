import leagueBonus from "./Constants.mjs"
import * as itemStats from "./itemStats.js"

//gets the league bonus combo given the league name
export function getLeagueBonus(league){
    return leagueBonus[league]
}

//fetches an item given a level and a name
function getItem(level, name){
    switch(level){
        case 1:
            return itemStats.levelOneItemStats[name]
        case 2:
            return itemStats.levelTwoItemStats[name]
        case 3:
            return itemStats.levelThreeItemStats[name]
    }
}
export default getItem
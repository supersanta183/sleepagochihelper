import * as Constants from "./Constants.js"
import * as itemStats from "./itemStats.js"

//gets the league bonus combo given the league name
export function getLeagueBonus(league){
    return Constants.leagueBonus[league]
}

//fetches an item given a level and a name
export function getItem(level, name){
    switch(level){
        case 1:
            return itemStats.levelOneItemStats[name]
        case 2:
            return itemStats.levelTwoItemStats[name]
        case 3:
            return itemStats.levelThreeItemStats[name]
    }
}
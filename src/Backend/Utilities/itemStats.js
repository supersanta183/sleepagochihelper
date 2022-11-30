//name, type, rarity, level, luck, combo, clean readiness, sleep power
//import types from "./Constants.mjs"
//import rarities from "./Constants.mjs"
//import commonItemNames from "./Constants.mjs"

const rarities = {Common: "Common",Ucommon: "Uncommon",Rare: "Rare",Super: "Super",Myth: "Myth",Secret: "Secret"}
const types = {Setting: "Setting",Bed: "Bed", Poster: "Poster",Rug: "Rug",Storage: "Storage"}
const leagues = {TrainingCamp: "TrainingCamp",Challenger: "Challenger",Explorer: "Explorer",Wizard: "Wizard",Hero: "Hero",Legend: "Legend",Dreamcatcher: "Dreamcatcher"}
const leagueBonus = {TrainingCamp: 1, Challenger: 1.01, Explorer: 1.02, Wizard: 1.03, Hero: 1.04, Legend: 1.05, Dreamcatcher: 1.06}
const commonItemNames = {Starter: "Starter", Student: "Student", Comfy: "Comfy", WoodenCabinet: "WoodenCabinet", Shelving: "Shelving", VintageBookshelf: "VintageBookshelf", CozyBed: "CozyBed", Mattress: "Mattress", TwinSize: "TwinSize", TropicalRug: "TropicalRug", PatternRug: "PatternRug", RetroRug: "RetroRug", Waves: "Waves", FramedPlants: "FramedPlants", Sunset:"Sunset"}
export default {rarities,types,leagueBonus, leagues, commonItemNames}


export const tempCommonItemNames = [commonItemNames.Starter, commonItemNames.Comfy, commonItemNames.Student]

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

export const levelOneItemStats = {
    Starter: {
        name: commonItemNames.Starter,
        type: types.Setting,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.04,
        cleanReadiness: 1.1,
        sleepPower: 0.6
    },
    Student: {
        name: commonItemNames.Student,
        type: types.Setting,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.02,
        sleepPower: 0.7,
        cleanReadiness: 1.1
    },
    Comfy: {
        name: commonItemNames.Comfy,
        type: types.Setting,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.04,
        cleanReadiness: 1.1,
        sleepPower: 0.5
    },
    WoodenCabinet: {
        name: commonItemNames.WoodenCabinet,
        type: types.Storage,
        rarity: rarities.cleanReadiness,
        level: 1,
        luck: 1.1,
        combo: 1.04,
        cleanReadiness: 1.1,
        sleepPower: 0.6
    },
    Shelving: {
        name: commonItemNames.Shelving,
        type: types.Storage,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.02,
        cleanReadiness: 1.1,
        sleepPower: 0.7
    },
    VintageBookshelf: {
        name: commonItemNames.VintageBookshelf,
        type: types.Storage,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.04,
        cleanReadiness: 1.1,
        sleepPower: 0.5
    },
    CozyBed: {
        name: commonItemNames.CozyBed,
        type: types.Bed,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 1.1
    },
    Mattress: {
        name: commonItemNames.Mattress,
        type: types.Bed,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.04,
        cleanReadiness: 1.1,
        sleepPower: 1
    },
    TwinSize:{
        name: commonItemNames.TwinSize,
        type: types.Bed,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.02,
        cleanReadiness: 1.1,
        sleepPower: 1.5
    },
    TropicalRug: {
        name: commonItemNames.TropicalRug,
        type: types.Rug,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.04,
        cleanReadiness: 1.1,
        sleepPower: 0.5
    },
    PatternRug: {
        name: commonItemNames.PatternRug,
        type: types.Rug,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.02,
        cleanReadiness: 1.1,
        sleepPower: 0.6
    },
    RetroRug: {
        name: commonItemNames.RetroRug,
        type: types.Rug,
        rarity: rarities.common,
        level: 1,
        luck: 1.1,
        combo: 1.04,
        cleanReadiness: 1.1,
        sleepPower: 0.4
    },
    Waves: {
        name: commonItemNames.Waves,
        type: types.Poster,
        rarity: rarities.common,
        level: 1,
        luck: 1.1,
        combo: 1.02,
        cleanReadiness: 1.1,
        sleepPower: 0.6
    },
    FramedPlants: {
        name: commonItemNames.FramedPlants,
        type: types.Poster,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.04,
        cleanReadiness: 1.1,
        sleepPower: 0.5
    },
    Sunset: {
        name: commonItemNames.Sunset,
        type: types.Poster,
        rarity: rarities.common,
        level: 1,
        luck: 1.1,
        combo: 1.04,
        cleanReadiness: 1.1,
        sleepPower: 0.4
    }

}

export const levelTwoItemStats = {
    Starter: {
        name: commonItemNames.Starter,
        type: types.Setting,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.04,
        cleanReadiness: 1.2,
        sleepPower: 0.8
    },
    Comfy: {
        name: commonItemNames.Comfy,
        type: types.Setting,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.08,
        cleanReadiness: 1.2,
        sleepPower: 0.73
    },
    WoodenCabinet: {
        name: commonItemNames.WoodenCabinet,
        type: types.Storage,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.04,
        cleanReadiness: 1.2,
        sleepPower: 0.8
    },
    RetroRug: {
        name: commonItemNames.RetroRug,
        type: types.Rug,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.08,
        cleanReadiness: 1.2,
        sleepPower: 0.67
    },
    Waves: {
        name: commonItemNames.Waves,
        type: types.Poster,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.02,
        cleanReadiness: 1.2,
        sleepPower: 0.85
    }
}

export const levelThreeItemStats = {
    Starter: {
        name: commonItemNames.Starter,
        type: types.Setting,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.04,
        cleanReadiness: 1.3,
        sleepPower: 1
    },
    Comfy: {
        name: commonItemNames.Comfy,
        type: types.Setting,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.12,
        cleanReadiness: 1.3,
        sleepPower: 0.96
    },
    VintageBookshelf: {
        name: commonItemNames.VintageBookshelf,
        type: types.Storage,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.12,
        cleanReadiness: 1.3,
        sleepPower: 0.96
    },
    Mattress: {
        name: commonItemNames.Mattress,
        type: types.Bed,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.12,
        cleanReadiness: 1.3,
        sleepPower: 1.8
    },
    RetroRug:{
        name: commonItemNames.RetroRug,
        type: types.Rug,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.12,
        cleanReadiness: 1.3,
        sleepPower: 0.94
    },
    Sunset: {
        name: commonItemNames.Sunset,
        type: types.Poster,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.12,
        cleanReadiness: 1.3,
        sleepPower: 0.94
    },
    CozyBed: {
        name: commonItemNames.CozyBed,
        type: types.Bed,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.06,
        cleanReadiness: 1.3,
        sleepPower: 1.9
    }
}

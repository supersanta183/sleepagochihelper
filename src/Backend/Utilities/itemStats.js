//name, type, rarity, level, luck, combo, clean readiness, sleep power
import { rarities, types } from "./Constants.js"

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
    Student: {
        name: "Student",
        type: types.Setting,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.02,
        sleepPower: 0.7,
        cleanReadiness: 1.1
    },
    Starter: {
        name: "Starter",
        type: types.Setting,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.04,
        cleanReadiness: 1.1,
        sleepPower: 0.6
    },
    Shelving: {
        name: "Shelving",
        type: types.Storage,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.02,
        cleanReadiness: 1.1,
        sleepPower: 0.7
    },
    CozyBed: {
        name: "CozyBed",
        type: types.Bed,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 1.1
    },
    PatternRug: {
        name: "PatternRug",
        type: types.Rug,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.02,
        cleanReadiness: 1.1,
        sleepPower: 0.6
    },
    FramedPlants: {
        name: "FramedPlants",
        type: types.Poster,
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.04,
        cleanReadiness: 1.1,
        sleepPower: 0.5
    }

}

export const levelTwoItemStats = {
    Starter: {
        name: "Starter",
        type: types.Setting,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.04,
        cleanReadiness: 1.2,
        sleepPower: 0.8
    },
    WoodenCabinet: {
        name: "WoodenCabinet",
        type: types.Storage,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.04,
        cleanReadiness: 1.2,
        sleepPower: 0.8
    },
    RetroRug: {
        name: "RetroRug",
        type: types.Rug,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.08,
        cleanReadiness: 1.2,
        sleepPower: 0.67
    },
    Waves: {
        name: "Waves",
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
    Comfy: {
        name: "Comfy",
        type: types.Setting,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.12,
        cleanReadiness: 1.3,
        sleepPower: 0.96
    },
    VintageBookshelf: {
        name: "VintageBookshelf",
        type: types.Storage,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.12,
        cleanReadiness: 1.3,
        sleepPower: 0.96
    },
    Mattress: {
        name: "Mattress",
        type: types.Bed,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.12,
        cleanReadiness: 1.3,
        sleepPower: 1.8
    },
    RetroRug:{
        name: "RetroRug",
        type: types.Rug,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.12,
        cleanReadiness: 1.3,
        sleepPower: 0.94
    },
    Sunset: {
        name: "Sunset",
        type: types.Poster,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.12,
        cleanReadiness: 1.3,
        sleepPower: 0.94
    }
}

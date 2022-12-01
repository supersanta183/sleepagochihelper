//name, type, rarity, level, luck, combo, clean readiness, sleep power
import { commonItemNames, rarities, types } from "./Constants.js"

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

    //Royalty:"Royalty", Traditional: "Traditional", Workout: "Workout", AfternoonTea: "AfternoonTea", ChestOfDrawers: "ChestOfDrawers", LuckyCupboard: "LuckyCupboard", PullUpBar: "PullUpBar",
    //VintageTvCabinet: "VintageTvCabinet", Futon: "Futon", KingsBed: "KingsBed", BenchPress: "BenchPress", OhBear: "OhBear", TapisBleuRoyal: "TapisBleuRoyal", Tatami: "Tatami", 
    //JoggingTrack: "JoggingTrack", SeaWaves: "SeaWaves", Fujisan: "Fujisan", FleurDeLys: "FleurDeLys", Motivation: "Motivation", Taipei101:"Taipei101"

export const levelOneItemStats = {
    //Common items
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
        rarity: rarities.Common,
        level: 1,
        luck: 1.1,
        combo: 1.04,
        cleanReadiness: 1.1,
        sleepPower: 0.4
    },
    //Uncommon items
    Royalty: {
        name: commonItemNames.Royalty,
        type: types.Setting,
        rarity: rarities.Uncommon,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 1.1
    },
    Traditional: {
        name: commonItemNames.Traditional,
        type: types.Setting,
        rarity: rarities.Uncommon,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 0.95
    },
    Workout: {
        name: commonItemNames.Workout,
        type: types.Setting,
        rarity: rarities.Rare,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 1.55
    },
    AfternoonTea: {
        name: commonItemNames.AfternoonTea,
        type: types.Setting,
        rarity: rarities.Super,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 3.3
    },
    ChestOfDrawers: {
        name: commonItemNames.ChestOfDrawers,
        type: types.Storage,
        rarity: rarities.Uncommon,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 1.1
    },
    LuckyCupboard: {
        name: commonItemNames.LuckyCupboard,
        type: types.Storage,
        rarity: rarities.Uncommon,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 0.95
    },
    PullupBar: {
        name: commonItemNames.PullupBar,
        type: types.Storage,
        rarity: rarities.Rare,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 1.55
    },
    VintageTvCabinet: {
        name: commonItemNames.VintageTvCabinet,
        type: types.Storage,
        rarity: rarities.Super,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 3.3
    },
    Futon: {
        name: commonItemNames.Futon,
        type: types.Bed,
        rarity: rarities.Uncommon,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 1.8
    },
    KingsBed: {
        name: commonItemNames.KingsBed,
        type: types.Bed,
        rarity: rarities.Uncommon,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 1.9
    },
    BenchPress: {
        name: commonItemNames.BenchPress,
        type: types.Bed,
        rarity: rarities.Rare,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 2.7
    },
    OhBear: {
        name: commonItemNames.OhBear,
        type: types.Bed,
        rarity: rarities.Super,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 5.5
    },
    TapisBleuRoyal: {
        name: commonItemNames.TapisBleuRoyal,
        type: types.Rug,
        rarity: rarities.Uncommon,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 1
    },
    Tatami: {
        name: commonItemNames.Tatami,
        type: types.Rug,
        rarity: rarities.Uncommon,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 0.9
    },
    JoggingTrack: {
        name: commonItemNames.JoggingTrack,
        type: types.Rug,
        rarity: rarities.Rare,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 1.5
    },
    SeaWaves: {
        name: commonItemNames.SeaWaves,
        type: types.Rug,
        rarity: rarities.Super,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 3.4
    },
    Fujisan: {
        name: commonItemNames.Fujisan,
        type: types.Poster,
        rarity: rarities.Uncommon,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 0.95
    },
    FleurDeLys: {
        name: commonItemNames.FleurDeLys,
        type: types.Poster,
        rarity: rarities.Uncommon,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 1
    },
    Motivation: {
        name: commonItemNames.Motivation,
        type: types.Poster,
        rarity: rarities.Rare,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 1.5
    },
    Taipei101: {
        name: commonItemNames.Taipei101,
        type: types.Poster,
        rarity: rarities.Super,
        level: 1,
        luck: 1.1,
        combo: 1.06,
        cleanReadiness: 1.1,
        sleepPower: 3.4
    },
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
    Student: {
        name: commonItemNames.Student,
        type: types.Setting,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.02,
        sleepPower: 0.9,
        cleanReadiness: 1.2
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
        rarity: rarities.cleanReadiness,
        level: 2,
        luck: 1.2,
        combo: 1.04,
        cleanReadiness: 1.2,
        sleepPower: 0.8
    },
    Shelving: {
        name: commonItemNames.Shelving,
        type: types.Storage,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.02,
        cleanReadiness: 1.2,
        sleepPower: 0.9
    },
    VintageBookshelf: {
        name: commonItemNames.VintageBookshelf,
        type: types.Storage,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.08,
        cleanReadiness: 1.2,
        sleepPower: 0.73
    },
    CozyBed: {
        name: commonItemNames.CozyBed,
        type: types.Bed,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.06,
        cleanReadiness: 1.2,
        sleepPower: 1.5
    },
    Mattress: {
        name: commonItemNames.Mattress,
        type: types.Bed,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.08,
        cleanReadiness: 1.2,
        sleepPower: 1.4
    },
    TwinSize:{
        name: commonItemNames.TwinSize,
        type: types.Bed,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.02,
        cleanReadiness: 1.2,
        sleepPower: 1.89
    },
    TropicalRug: {
        name: commonItemNames.TropicalRug,
        type: types.Rug,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.04,
        cleanReadiness: 1.2,
        sleepPower: 0.75
    },
    PatternRug: {
        name: commonItemNames.PatternRug,
        type: types.Rug,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.02,
        cleanReadiness: 1.2,
        sleepPower: 0.85
    },
    RetroRug: {
        name: commonItemNames.RetroRug,
        type: types.Rug,
        rarity: rarities.common,
        level: 2,
        luck: 1.2,
        combo: 1.08,
        cleanReadiness: 1.2,
        sleepPower: 0.67
    },
    Waves: {
        name: commonItemNames.Waves,
        type: types.Poster,
        rarity: rarities.common,
        level: 2,
        luck: 1.2,
        combo: 1.02,
        cleanReadiness: 1.2,
        sleepPower: 0.85
    },
    FramedPlants: {
        name: commonItemNames.FramedPlants,
        type: types.Poster,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.04,
        cleanReadiness: 1.2,
        sleepPower: 0.75
    },
    Sunset: {
        name: commonItemNames.Sunset,
        type: types.Poster,
        rarity: rarities.Common,
        level: 2,
        luck: 1.2,
        combo: 1.08,
        cleanReadiness: 1.2,
        sleepPower: 0.67
    },
    //Uncommon items
    Royalty: {
        name: commonItemNames.Royalty,
        type: types.Setting,
        rarity: rarities.Uncommon,
        level: 2,
        luck: 1.2,
        combo: 1.06,
        cleanReadiness: 1.2,
        sleepPower: 1.45
    },
    Traditional: {
        name: commonItemNames.Traditional,
        type: types.Setting,
        rarity: rarities.Uncommon,
        level: 2,
        luck: 1.2,
        combo: 1.08,
        cleanReadiness: 1.2,
        sleepPower: 1.26
    },
    Workout: {
        name: commonItemNames.Workout,
        type: types.Setting,
        rarity: rarities.Rare,
        level: 2,
        luck: 1.2,
        combo: 1.06,
        cleanReadiness: 1.2,
        sleepPower: 2.1
    },
    ChestOfDrawers: {
        name: commonItemNames.ChestOfDrawers,
        type: types.Storage,
        rarity: rarities.Uncommon,
        level: 2,
        luck: 1.2,
        combo: 1.06,
        cleanReadiness: 1.2,
        sleepPower: 1.45
    },
    LuckyCupboard: {
        name: commonItemNames.LuckyCupboard,
        type: types.Storage,
        rarity: rarities.Uncommon,
        level: 2,
        luck: 1.2,
        combo: 1.08,
        cleanReadiness: 1.2,
        sleepPower: 1.26
    },
    PullupBar: {
        name: commonItemNames.PullupBar,
        type: types.Storage,
        rarity: rarities.Rare,
        level: 2,
        luck: 1.2,
        combo: 1.06,
        cleanReadiness: 1.2,
        sleepPower: 2.1
    },
    Futon: {
        name: commonItemNames.Futon,
        type: types.Bed,
        rarity: rarities.Uncommon,
        level: 2,
        luck: 1.2,
        combo: 1.08,
        cleanReadiness: 1.2,
        sleepPower: 2.3
    },
    KingsBed: {
        name: commonItemNames.KingsBed,
        type: types.Bed,
        rarity: rarities.Uncommon,
        level: 2,
        luck: 1.2,
        combo: 1.06,
        cleanReadiness: 1.2,
        sleepPower: 2.55
    },
    BenchPress: {
        name: commonItemNames.BenchPress,
        type: types.Bed,
        rarity: rarities.Rare,
        level: 2,
        luck: 1.2,
        combo: 1.06,
        cleanReadiness: 1.2,
        sleepPower: 3.6
    },
    TapisBleuRoyal: {
        name: commonItemNames.TapisBleuRoyal,
        type: types.Rug,
        rarity: rarities.Uncommon,
        level: 2,
        luck: 1.2,
        combo: 1.06,
        cleanReadiness: 1.2,
        sleepPower: 1.4
    },
    Tatami: {
        name: commonItemNames.Tatami,
        type: types.Rug,
        rarity: rarities.Uncommon,
        level: 2,
        luck: 1.2,
        combo: 1.08,
        cleanReadiness: 1.2,
        sleepPower: 1.25
    },
    JoggingTrack: {
        name: commonItemNames.JoggingTrack,
        type: types.Rug,
        rarity: rarities.Rare,
        level: 2,
        luck: 1.2,
        combo: 1.06,
        cleanReadiness: 1.2,
        sleepPower: 2.1
    },
    Fujisan: {
        name: commonItemNames.Fujisan,
        type: types.Poster,
        rarity: rarities.Uncommon,
        level: 2,
        luck: 1.2,
        combo: 1.08,
        cleanReadiness: 1.2,
        sleepPower: 1.26
    },
    FleurDeLys: {
        name: commonItemNames.FleurDeLys,
        type: types.Poster,
        rarity: rarities.Uncommon,
        level: 2,
        luck: 1.2,
        combo: 1.06,
        cleanReadiness: 1.2,
        sleepPower: 1.4
    },
    Motivation: {
        name: commonItemNames.Motivation,
        type: types.Poster,
        rarity: rarities.Rare,
        level: 2,
        luck: 1.2,
        combo: 1.06,
        cleanReadiness: 1.2,
        sleepPower: 2.1
    },
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
    Student: {
        name: commonItemNames.Student,
        type: types.Setting,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.02,
        sleepPower: 1.1,
        cleanReadiness: 1.3
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
    WoodenCabinet: {
        name: commonItemNames.WoodenCabinet,
        type: types.Storage,
        rarity: rarities.cleanReadiness,
        level: 3,
        luck: 1.3,
        combo: 1.04,
        cleanReadiness: 1.3,
        sleepPower: 1
    },
    Shelving: {
        name: commonItemNames.Shelving,
        type: types.Storage,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.02,
        cleanReadiness: 1.3,
        sleepPower: 1.1
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
    CozyBed: {
        name: commonItemNames.CozyBed,
        type: types.Bed,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.06,
        cleanReadiness: 1.3,
        sleepPower: 1.9
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
    TwinSize:{
        name: commonItemNames.TwinSize,
        type: types.Bed,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.02,
        cleanReadiness: 1.3,
        sleepPower: 2.28
    },
    TropicalRug: {
        name: commonItemNames.TropicalRug,
        type: types.Rug,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.04,
        cleanReadiness: 1.3,
        sleepPower: 1
    },
    PatternRug: {
        name: commonItemNames.PatternRug,
        type: types.Rug,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.02,
        cleanReadiness: 1.3,
        sleepPower: 1.1
    },
    RetroRug: {
        name: commonItemNames.RetroRug,
        type: types.Rug,
        rarity: rarities.common,
        level: 3,
        luck: 1.3,
        combo: 1.12,
        cleanReadiness: 1.3,
        sleepPower: 0.94
    },
    Waves: {
        name: commonItemNames.Waves,
        type: types.Poster,
        rarity: rarities.common,
        level: 3,
        luck: 1.3,
        combo: 1.02,
        cleanReadiness: 1.3,
        sleepPower: 1.1
    },
    FramedPlants: {
        name: commonItemNames.FramedPlants,
        type: types.Poster,
        rarity: rarities.Common,
        level: 3,
        luck: 1.3,
        combo: 1.04,
        cleanReadiness: 1.3,
        sleepPower: 1
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
    //Uncommon items
    Royalty: {
        name: commonItemNames.Royalty,
        type: types.Setting,
        rarity: rarities.Uncommon,
        level: 3,
        luck: 1.3,
        combo: 1.06,
        cleanReadiness: 1.3,
        sleepPower: 1.8
    },
    Traditional: {
        name: commonItemNames.Traditional,
        type: types.Setting,
        rarity: rarities.Uncommon,
        level: 3,
        luck: 1.3,
        combo: 1.1,
        cleanReadiness: 1.3,
        sleepPower: 1.57
    },
    Workout: {
        name: commonItemNames.Workout,
        type: types.Setting,
        rarity: rarities.Rare,
        level: 3,
        luck: 1.3,
        combo: 1.06,
        cleanReadiness: 1.3,
        sleepPower: 2.65
    },
    ChestOfDrawers: {
        name: commonItemNames.ChestOfDrawers,
        type: types.Storage,
        rarity: rarities.Uncommon,
        level: 3,
        luck: 1.3,
        combo: 1.06,
        cleanReadiness: 1.3,
        sleepPower: 1.8
    },
    LuckyCupboard: {
        name: commonItemNames.LuckyCupboard,
        type: types.Storage,
        rarity: rarities.Uncommon,
        level: 3,
        luck: 1.3,
        combo: 1.1,
        cleanReadiness: 1.3,
        sleepPower: 1.57
    },
    PullupBar: {
        name: commonItemNames.PullupBar,
        type: types.Storage,
        rarity: rarities.Rare,
        level: 3,
        luck: 1.3,
        combo: 1.06,
        cleanReadiness: 1.3,
        sleepPower: 2.65
    },
    Futon: {
        name: commonItemNames.Futon,
        type: types.Bed,
        rarity: rarities.Uncommon,
        level: 3,
        luck: 1.3,
        combo: 1.1,
        cleanReadiness: 1.3,
        sleepPower: 2.8
    },
    KingsBed: {
        name: commonItemNames.KingsBed,
        type: types.Bed,
        rarity: rarities.Uncommon,
        level: 3,
        luck: 1.3,
        combo: 1.06,
        cleanReadiness: 1.3,
        sleepPower: 3.2
    },
    BenchPress: {
        name: commonItemNames.BenchPress,
        type: types.Bed,
        rarity: rarities.Rare,
        level: 3,
        luck: 1.3,
        combo: 1.06,
        cleanReadiness: 1.3,
        sleepPower: 4.5
    },
    TapisBleuRoyal: {
        name: commonItemNames.TapisBleuRoyal,
        type: types.Rug,
        rarity: rarities.Uncommon,
        level: 3,
        luck: 1.3,
        combo: 1.06,
        cleanReadiness: 1.3,
        sleepPower: 1.8
    },
    Tatami: {
        name: commonItemNames.Tatami,
        type: types.Rug,
        rarity: rarities.Uncommon,
        level: 3,
        luck: 1.3,
        combo: 1.1,
        cleanReadiness: 1.3,
        sleepPower: 1.6
    },
    JoggingTrack: {
        name: commonItemNames.JoggingTrack,
        type: types.Rug,
        rarity: rarities.Rare,
        level: 3,
        luck: 1.3,
        combo: 1.06,
        cleanReadiness: 1.3,
        sleepPower: 2.7
    },
    Fujisan: {
        name: commonItemNames.Fujisan,
        type: types.Poster,
        rarity: rarities.Uncommon,
        level: 3,
        luck: 1.3,
        combo: 1.1,
        cleanReadiness: 1.3,
        sleepPower: 1.57
    },
    FleurDeLys: {
        name: commonItemNames.FleurDeLys,
        type: types.Poster,
        rarity: rarities.Uncommon,
        level: 3,
        luck: 1.3,
        combo: 1.06,
        cleanReadiness: 1.3,
        sleepPower: 1.8
    },
    Motivation: {
        name: commonItemNames.Motivation,
        type: types.Poster,
        rarity: rarities.Rare,
        level: 3,
        luck: 1.3,
        combo: 1.06,
        cleanReadiness: 1.3,
        sleepPower: 2.7
    },
}
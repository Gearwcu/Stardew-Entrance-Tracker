let stardew = {
	debug: false,
    name: "stardewmap",
    folder: "stardew",
    start_location: "town",
    font: "NDS_Font",
    font_size: "0px",

    // Config texts
	config_name: "Stardew Valley",
	config_tracker_author: "Gearwcu", 
	//config_tracker_link: "",

	// Tracker information
    locations: {
        town: { x: 2200, y: 800, w: 1600, h: 1200, name: "Pelican Town" },
        town_indoors: { x: 3800, y: 800, w: 1000, h: 1300, name: "Town Indoors" },
        farm: { x: 1100, y: 900, w: 1100, h: 700, name: "Farm" },
        mountain: { x: 2200, y: 150, w: 1500, h: 600, name: "Mountain" },
        mountain_indoors: { x: 3700, y: 100, w: 1200, h: 700, name: "Mountain indoors" },
        beach: { x: 1900, y: 2200, w: 1515, h: 682, name: "Beach" },
        forest: { x: 900, y: 1600, w: 1000, h: 900, name: "Cindersap Forest" },
        forest_indoors: { x: 150, y: 1200, w: 800, h: 1600, name: "Cindersap Forest indoors" },
        island_west: { x: 3540, y: 2400, w: 800, h: 800, name: "Ginger Island West" },
        island_north: { x: 3540, y: 2110, w: 1700, h: 400, name: "Ginger Island North" },
        island_south: { x: 4340, y: 2500, w: 900, h: 700, name: "Ginger Island South" },
        desert: { x: 50, y: 50, w: 1450, h: 750, name: "Calico Desert" },
    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>

    warps: {
        town: {
            pharmacy_entry: { x: 258, y: 393, name:"Pharmacy Entry", text_offset: { x: -0.12, y: -.07 } },
            general_store_entry: { x: 318, y: 404, text_offset: { x: .04, y: +.03 } },
            saloon_entry: { x: 330, y: 510 },
            georges_entry: { x: 420, y: 458 },
            trailer_entry: { x: 535, y: 495 },
            mayors_entry: { x: 437, y: 620 },
            sewer_entry: { x: 256, y: 707, name:"Town Sewer Entry" },
            sam_entry: { x: 72, y: 629, text_offset: { x: 0, y: -.09 } },
            emily_entry: { x: 148, y: 645 },
            joja_mart_entry: { x: 708, y: 365 },
            community_entry: { x: 388, y: 135, name:"Community Center Entry" },
            smithy_entry: { x: 699, y: 593 },
            museum_entry: { x: 746, y: 648 },
        },

        town_indoors: {
            pharmacy_exit: { x: 258, y: 393, text_offset: { x: -0.12, y: -.07 }, name: "Pharmacy" },
            harvey_entry: { x: 209, y: 336, name: "Pharmacy" },
            harvey_exit: { x: 209, y: 296, name: "Harvey" },
            general_store_exit: { x: 318, y: 404, text_offset: { x: .04, y: +.03 }, name: "General Store"},
            general_store_tea_entry: { x: 348, y: 345, name: "General Store" },
            general_store_tea: { x: 348, y: 284, name: "Tea Garden" },
            saloon_exit: { x: 330, y: 510, name: "Saloon" },
            georges_exit: { x: 420, y: 458, name: "George and Evelyn" },
            trailer_exit: { x: 535, y: 495, name: "Pam's Trailer" },
            mayors_exit: { x: 437, y: 620, name: "Mayor's House" },
            mayors_Stairs: { x: 500, y: 590, name: "Mayor's House?", text_offset: {x:0,y:-.11} },
            mayors_secret: { x: 500, y: 640, name: "Mayor's Maze", text_offset: {x:0,y:.06} },
            sewer_exit: { x: 24, y: 360 , name:"Sewers" },
            sam_exit: { x: 72, y: 629, text_offset: { x: 0, y: -.09 }, name: "Sam/Jodi" },
            emily_exit: { x: 148, y: 645, name: "Emily/Haley" },
            joja_mart_exit: { x: 708, y: 365, name: "Joja/Cinema" },
            community_exit: { x: 388, y: 135, name:"Community Center" },
            smithy_exit: { x: 699, y: 593, name: "Smithy" },
            museum_exit: { x: 746, y: 648, name: "Museum"},
            sewers_bugs_entry: { x: 23, y: 140, name: "Sewer Bug Lair" },
            sewers_bugs_exit: { x: 23, y: 90, name: "Bug Lair" },
            sewers_forest_exit: { x: 116, y: 77, name: "Sewers", text_offset: {x:0,y:-.09} }
        },
        
        farm: {
            farmhouse_entry: { x: 417, y: 429 },
            farmhouse_exit: { x: 417, y: 391, name: "Farmhouse" },
            farmcave_entry: { x: 101, y: 345 },
            farmcave_exit: { x: 101, y: 308, name: "Farmcave" },
            tunnel_entry: { x: 244, y: 247, name: "Bus Tunnel Entry" },
            tunnel_exit: { x: 244, y: 194, name: "Bus Tunnel" }
        },
        
        mountain: {
            maru_entry: { x: 106, y: 1014, name: "Maru Entry" },
            carpenter_entry: { x: 170, y: 1081 },
            treehouse_entry: { x: 237, y: 793, name: "Treehouse Entry" },
            linus_entry: { x: 453, y: 797,  text_offset: { x: .08, y: 0 } },
            mines_entry: { x: 854, y: 759,name: "Mines Entry" },
            adventurers_entry: { x: 1199, y: 817, name: "Guild Entry" },
            quarry_mine_entry: { x: 1637, y: 957, name: "Quarry Mines Entry" },
            spa_entry: { x: 196, y: 569, name: "Railroad" },
            swamp_entry: { x: 1094, y: 119, name: "Swamp Entry" }
        },

        mountain_indoors: { 
            maru_exit: { x: 106, y: 1014, name: "Maru" },
            carpenter_exit: { x: 170, y: 1081, name: "Carpenter" },
            treehouse_exit: { x: 237, y: 793, name: "Leo's Treehouse" },
            linus_exit: { x: 453, y: 797, name: "Linus' tent", text_offset: { x: .08, y: 0 } },
            mines_exit: { x: 854, y: 759, name: "The Mines" },
            adventurers_exit: { x: 1199, y: 817, name: "Guild" },
            quarry_mine_exit: { x: 1637, y: 957, name: "Quarry Mines" },
            spa_exit: { x: 275, y: 420, name: "Spa Hall", text_offset: { x: -.07, y: 0 } },
            swamp_exit: { x: 1756, y: 588, name: "Swamp" },
            swamphut_entry: { x:1753, y:250, name: "Swamp"},
            swamphut_exit: { x: 1753, y: 184, name: "Swamphut"},
            swamphut_to_wizard: { x: 1753, y: 112, name: "Swamphut"},
            sebas_stairs: {x: 252, y: 1033, name: "Carpenter", text_offset: { x: .11, y: -.13 }},
            sebas_room: {x: 321, y: 1142, name: "Sebastian", text_offset: { x: .11, y: -.13 }},

            spa_female: {x: 498, y: 510,name:"Spa", text_offset: { x: 0, y: +.17 }},
            spa_male: {x: 1080, y: 510,name:"Spa"},
            change_male_exit: {x: 860, y: 510, name: "Male Change Room", text_offset: { x: 0, y: .17 }},
            spa_male_entry: {x: 350, y: 300,name:"Spa Hall", text_offset: { x: 0, y: -.17 }},
            change_male_to_spa: {x: 1080, y: 423,name:"Male Change Room"},
            change_female_exit: {x: 720, y: 510, name: "Female Change Room"},
            spa_female_entry: {x: 200, y: 300,name:"Spa Hall"},
            change_female_to_spa: {x: 498, y: 423,name:"Female Change Room"}
        },

        beach: {
            elliot_entry: { x: 1172, y: 224, name: "Beachhut" },
            fishshop_entry: { x: 713, y: 766 },
            elliot_exit: { x: 1172, y: 152, name: "Elliot" },
            fishshop_exit: { x: 713, y: 702, name: "Fishshop" },
            fishshop_boat: { x: 783, y: 662, name: "Fishshop Backdoor", text_offset:{x:0,y:-0.03} },
        },
        


        forest: {
            wizard_entry: { x: 51, y: 265, name: "Wizard Entry" },
            marnie_entry: { x: 956, y: 149 },
            leah_entry: { x: 1114, y: 326, name: "Leah Entry" },
            sewer_entry: { x: 1006, y: 1046, name: "Forest Sewer Entry" },
            mastery_entry: { x: 1082, y: 754, name: "Mastery Entry" },
        },

        forest_indoors: {
            wizard_exit: { x: 51, y: 265, name: "Wizard" },
            wizard_basement_entry: { x: 330, y: 446, name: "Wizard Basement Entry" },
            wizard_basement_exit: { x: 397, y: 508, name: "Wizard Basement" },
            wizard_swamp: { x: 295, y: 548, name: "Basement to Swamp", text_offset:{x:0,y:0.03} },
            marnie_exit: { x: 956, y: 149, name: "Marnie"},
            leah_exit: { x: 1114, y: 326, name: "Leah" },
            mastery_exit: { x: 1082, y: 754, name: "Masteries" },
        },	

        island_west: {
            farmhouse_island_entry: { x: 750, y: 401,name:"Island Farm"},
            island_cave_entry: { x: 946, y: 347,name:"Island Farm"},
            ship_entry: { x: 621, y: 907 },
            puzzle_entry: { x: 591, y: 108 },
            walnut_room_entry: { x: 194, y: 226,name: "Walnut Door" },
            farmhouse_island_exit: { x: 750, y: 341,name: "Island Farmhouse" },
            island_cave_exit: { x: 946, y: 261,name:"Frog's Cave" },
            ship_exit: { x: 619, y: 842,name:"Ship Nut" },
            puzzle_exit: { x: 591, y: 23,name:"Simon Says"},
            walnut_room_exit: { x: 194, y: 151,name:"Qi's room"}
        },	
    
        island_north: {
            snail_cave_entry: { x: 201, y: 430, name: "Dig Site" },
            snail_tent_entry: { x: 426, y: 422 },
            volcano_entry: { x: 374, y: 195 },
            snail_tent_exit: { x: 424, y: 354, name: "Snail's Tent" },
            snail_cave_exit: { x: 201, y: 354, name: "Mushroom Cave" },
            volcano_exit: { x: 377, y: 110, name: "Volcano" },
            volcano_exit_west: { x: 114, y: 196, name: "Volcano" },
            volcano_west: { x: 107, y: 273, name: "Volcano West Nuts" },
        },									
       
        island_south: {
            boat: { x: 154, y: 888, name:"Boat Repair" },
            pirate_cove_entry: { x: 690, y: 663, name:"South Island Alcove" },
            pirate_cove_exit: { x: 686, y: 598, name: "Pirate's Cove" },
            treehut_entry: { x: 567, y: 94 },
            treehut_exit: { x: 567, y: 37, name: "Island Treehouse" },
            gembird_entry: { x: 677, y: 285 },
            gembird_exit: { x: 677, y: 214, name: "Gembirds" },
        },
        
        desert: {
            sandy_entry: { x: 129, y: 1193 },
            skull_cavern_entry: { x: 188, y: 159 },
            sandy_exit: { x: 129, y: 1109, name: "Sandy" },
            casino_entry: { x: 253, y: 1050, name: "Casino Entrance" },
            casino_exit: { x: 251, y: 972, name: "Casino" },
            skull_cavern_exit: { x: 188, y: 60, name: "Skull Cavern" },
        },
    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown", 0], ["corridor", 0], ["dead_end", null], ["ginger", 0]]
    ],
    progress: [

    ],
    modifiers: [
		[["#ce4069", 0], ["#ff9c54", 0], ["#f3d23b", 0], ["#743683", 0], ["#654321", 0], ["#014f01", 0]],
		[["#4d90d5", 0], ["#74cec0", 0], ["#90c12c", 0], ["#ec8fe6", 0], ["#5a5366", 0], ["#00146b", 0]],
	],
};
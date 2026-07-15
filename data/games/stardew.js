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
            saloon_entry: { x: 330, y: 510, name:"Saloon Entry" },
            josh_entry: { x: 420, y: 458 },
            pam_entry: { x: 535, y: 495 },
            mayors_entry: { x: 437, y: 620 },
            sewer_entry: { x: 256, y: 707, name:"Town Sewer Entry" },
            sam_entry: { x: 72, y: 629, text_offset: { x: 0, y: -.09 } },
            emily_entry: { x: 148, y: 645 },
            joja_mart_entry: { x: 708, y: 365 },
            community_entry: { x: 388, y: 135, name:"Community Center Entry" },
            smithy_entry: { x: 699, y: 593 },
            museum_entry: { x: 746, y: 648 },
            //8.xER
            //town_bus
            //town_forest
            //town_mountain
            //town_beach
            //town_tide
            //town_mount_short_west
            //town_mount_short_east
            //minecart_town_to_q
            //minecart_town_to_bus
            //minecart_town_to_mine
        },

        town_indoors: {
            pharmacy_exit: { x: 258, y: 393, text_offset: { x: -0.12, y: -.07 }, name: "Pharmacy" },
            harvey_entry: { x: 209, y: 336, name: "Pharmacy" },
            harvey_exit: { x: 209, y: 296, name: "Harvey" },
            general_store_exit: { x: 318, y: 404, text_offset: { x: .04, y: +.03 }, name: "General Store"},
            general_store_tea_entry: { x: 348, y: 345, name: "General Store" },
            general_store_tea: { x: 348, y: 284, name: "Sunroom" },
            saloon_exit: { x: 330, y: 510, name: "Saloon" },
            josh_exit: { x: 420, y: 458, name: "George and Evelyn" },
            trailer_exit: { x: 535, y: 495, name: "Pam's Home" },
            mayors_exit: { x: 437, y: 615, name: "Mayor's Manor", text_offset: {x:-0.03,y: -0.02} },
            lewis_basement_entry: { x: 500, y: 590, name: "Mayor's Manor?", text_offset: {x:0,y:-.11} },
            lewis_basement: { x: 500, y: 640, name: "Mayor's Maze", text_offset: {x:0,y:.06} },
            sewer_exit: { x: 24, y: 360 , name:"Sewers" },
            sam_exit: { x: 72, y: 629, text_offset: { x: 0, y: -.09 }, name: "Sam/Jodi" },
            emily_exit: { x: 148, y: 645, name: "Emily/Haley" },
            joja_mart_exit: { x: 708, y: 365, name: "Joja/Cinema" },
            community_exit: { x: 388, y: 135, name:"Community Center" },
            smithy_exit: { x: 699, y: 593, name: "Blacksmith" },
            museum_exit: { x: 746, y: 648, name: "Museum"},
            sewers_bugs_entry: { x: 23, y: 140, name: "Sewer Bug Lair" },
            sewers_bugs_exit: { x: 23, y: 90, name: "Mutant Bug Lair" },
            sewers_forest_exit: { x: 116, y: 77, name: "Sewers", text_offset: {x:0,y:-.09} }
        },
        
        farm: {
            farmhouse_entry: { x: 417, y: 429 },
            farmhouse_exit: { x: 417, y: 391, name: "Farmhouse" },
            farmcave_entry: { x: 101, y: 345 },
            farmcave_exit: { x: 101, y: 308, name: "Farmcave" },
            tunnel_entry: { x: 244, y: 247, name: "Bus Tunnel Entry" },
            tunnel_exit: { x: 244, y: 194, name: "Bus Tunnel" }
            //8.xER
            //cellar_entry: { x: 244, y: 194, name: "Cellar Entry"}
            //cellar_exit: { x: 244, y: 194, name: "Cellar"}
            //farm_backwoods: { x: 244, y: 194}
            //farm_bus: { x: 244, y: 194}
            //farm_forest: { x: 244, y: 194}
            //farm_greenhouse_entry: { x: 244, y: 194, name: "Greenhouse Entry"}
            //farm_greenhouse_exit: { x: 244, y: 194, name: "Greenhouse"}
            //backwood_farm: { x: 244, y: 194, name: "Backwood Top"}
            //backwood_mountain: { x: 244, y: 194, name: "Backwood Top"}
            //backwood_bus: { x: 244, y: 194, name: "Backwood Road"}
            //bus_farm: { x: 244, y: 194, name: "Bus Stop"}
            //bus_town: { x: 244, y: 194, name: "Bus Stop"}
            //bus_desert: { x: 244, y: 194, name: "Bus Stop"}
            //bus_road: { x: 244, y: 194, name: "Bus Stop"}
            //minecart_bus_to_q: { x: 244, y: 194, name: "Bus"}
            //minecart_bus_to_town: { x: 244, y: 194, name: "Bus"}
            //minecart_bus_to_mine: { x: 244, y: 194, name: "Bus"}
            //farm_totem_exit: { x: 244, y: 194}
            //farm_obelisk_exit: { x: 244, y: 194}
            //return_scepter_exit: { x: 244, y: 194}

            //move to new map
            //earth_obelisk: { x: 244, y: 194}
            //water_obelisk: { x: 244, y: 194}
            //desert_obelisk: { x: 244, y: 194}
            //island_obelisk: { x: 244, y: 194}
            //return_scepter
            //farm_totem
            //mountain_totem
            //beach_totem
            //desert_totem
            //island_totem
        },
        
        mountain: {
            maru_entry: { x: 106, y: 1014, name: "Maru Entry" },
            carpenter_entry: { x: 170, y: 1081 },
            treehouse_entry: { x: 237, y: 793, name: "Treehouse Entry" },
            linus_entry: { x: 453, y: 797,  text_offset: { x: .08, y: 0 } },
            mines_entry: { x: 854, y: 759,name: "Mines Entry" },
            guild_entry: { x: 1199, y: 817, name: "Guild Entry" },
            quarry_mine_entry: { x: 1637, y: 957, name: "Quarry" },
            spa_entry: { x: 196, y: 569, name: "Railroad" },
            swamp_entry: { x: 1094, y: 119, name: "Swamp Entry" }
            //8.xER (new tab for minecarts? or swamp?)
            //mountain_backwood
            //mountain_rail
            //mountain_town
            //mountain_shortcut_west
            //mountain_shortcut_east
            //minecart_q_to_bus
            //minecart_q_to_town
            //minecart_q_to_mine
            //minecart_mine_to_q
            //minecart_mine_to_bus
            //minecart_mine_to_town
            //rail_mountain
            //mountain_totem_exit
            //earth_obelisk_exit
        },

        mountain_indoors: {
            maru_exit: { x: 106, y: 1014, name: "Maru" },
            carpenter_exit: { x: 170, y: 1081, name: "Carpenter" },
            treehouse_exit: { x: 237, y: 793, name: "Leo's House" },
            linus_exit: { x: 453, y: 797, name: "Linus' tent", text_offset: { x: .08, y: 0 } },
            mines_exit: { x: 854, y: 759, name: "The Mines" },
            advent_guild_exit: { x: 1199, y: 817, name: "Guild" },
            quarry_mine_exit: { x: 1637, y: 957, name: "Quarry Mines" },
            bathhouse_exit: { x: 275, y: 420, name: "Spa Hall", text_offset: { x: -.07, y: 0 } },
            swamp_exit: { x: 1756, y: 588, name: "Swamp" },
            swamphut_entry: { x:1753, y:250, name: "Swamp"},
            swamphut_exit: { x: 1753, y: 184, name: "Swamphut"},
            swamphut_to_wizard: { x: 1753, y: 112, name: "Swamphut"},
            swampwarp_warp: { x: 1250, y: 220, name: "Swampwarp"},
            swampwarp_rail: { x: 1250, y: 290, name: "Swampwarp"},
            sebastian_stairs: {x: 252, y: 1033, name: "Carpenter", text_offset: { x: .11, y: -.13 }},
            sebastian_room: {x: 321, y: 1142, name: "Sebastian", text_offset: { x: .11, y: -.13 }},

            bath_women: {x: 498, y: 510,name:"Public Bath", text_offset: { x: 0, y: +.17 }},
            bath_men: {x: 1080, y: 510,name:"Public Bath"},
            change_men_exit: {x: 860, y: 510, name: "Mens Lockers", text_offset: { x: 0, y: .17 }},
            bathhouse_men_entry: {x: 350, y: 300,name:"Bath Hall", text_offset: { x: 0, y: -.17 }},
            change_men_to_spa: {x: 1080, y: 423,name:"Mens Lockers"},
            change_women_exit: {x: 720, y: 510, name: "Womens Lockers"},
            bathhouse_women_entry: {x: 200, y: 300,name:"Bath Hall", text_offset: { x: 0, y: 0.03 }},
            change_women_to_spa: {x: 498, y: 423,name:"Womens Lockers"}
        },

        beach: {
            elliot_entry: { x: 1172, y: 224, name: "Beachhut" },
            fishshop_entry: { x: 713, y: 766 },
            elliot_exit: { x: 1172, y: 152, name: "Elliot" },
            fishshop_exit: { x: 713, y: 702, name: "Fishshop" },
            fishshop_to_boat: { x: 783, y: 662, name: "Fishshop Backdoor", text_offset:{x:0,y:-0.05} },
            //8.xER
            //beach_town
            //beach_short_forest
            //beach_short_tide
            //boat_ticket
            //water_obelisk_exit
            //beach_totem_exit
        },
        


        forest: {
            wizard_entry: { x: 51, y: 265, name: "Wizard Entry" },
            marnie_entry: { x: 956, y: 149 },
            leah_entry: { x: 1114, y: 326, name: "Leah Entry" },
            sewer_entry: { x: 1006, y: 1046, name: "Forest Sewer Entry" },
            mastery_entry: { x: 1082, y: 754, name: "Mastery Entry" },
            //8.xER
            //forest_farm
            //forest_town
            //forest_short_beach
            //forest_secret
            //secret_forest
        },

        forest_indoors: {
            wizard_exit: { x: 51, y: 265, name: "Wizard" },
            wizard_basement_entry: { x: 230, y: 265, name: "Wizard Basement Entry", text_offset: { x: 0.06, y: 0 } },
            wizard_basement_exit: { x: 230, y: 380, name: "Wizard Basement" },
            wizard_swamp: { x: 170, y: 490, name: "Basement to Swamp" },
            marnie_exit: { x: 956, y: 149, name: "Marnie"},
            leah_exit: { x: 1114, y: 326, name: "Leah" },
            mastery_exit: { x: 1082, y: 754, name: "Masteries" },
        },	

        island_west: {
            farmhouse_island_entry: { x: 750, y: 401,name:"Island Farm" },
            gourmand_entry: { x: 946, y: 347,name:"Island Farm" },
            shipwwreck_entry: { x: 621, y: 907 },
            crystal_entry: { x: 591, y: 108 },
            walnut_room_entry: { x: 194, y: 226,name: "Walnut Door" },
            farmhouse_island_exit: { x: 750, y: 341,name: "Island Farmhouse" },
            gourmand_exit: { x: 946, y: 261,name:"Gourmand Frog" },
            shipwreck_exit: { x: 619, y: 842,name:"Shipwreck" },
            crystal_exit: { x: 591, y: 23,name:"Simon Says"},
            walnut_room_exit: { x: 194, y: 151,name:"Qi's room"}
            //8.xER
            //isle_west_south
            //parrot_farm_volcano

            //parrot_farm_dig
            //parrot_farm_jungle
            //parrot_farm_dock

            //farm_obelisk
        },	
    
        island_north: {
            snail_cave_entry: { x: 201, y: 430, name: "Dig Site" },
            fieldoffice_entry: { x: 426, y: 422 },
            volcano_entry: { x: 374, y: 195 },
            fieldoffice_exit: { x: 424, y: 354, name: "Snail Field Office" },
            snail_cave_exit: { x: 201, y: 354, name: "Island North Cave" },
            volcano_exit: { x: 377, y: 110, name: "Volcano" },
            volcano_exit_river: { x: 114, y: 196, name: "Volcano River" },
            volcano_secret_beach: { x: 107, y: 273, name: "Volcano Beach" },
            //8.xER
            //isle_north_south
            //isle_north_south_nut
            //parrot_dig_volcano
            //parrot_dig_farm
            //parrot_dig_jungle
            //parrot_dig_dock
            //parrot_volcano_farm
            //parrot_volcano_dig
            //parrot_volcano_jungle
            //parrot_volcano_dock
            //volcano_f5_hole
            //volcano_f5_hole_exit
        },									
       
        island_south: {
            boat_tunnel: { x: 154, y: 888, name:"Boat Repair" },
            pirate_cove_entry: { x: 690, y: 663, name:"South Island Alcove" },
            pirate_cove_exit: { x: 686, y: 598, name: "Pirate Cove" },
            islandhut_entry: { x: 567, y: 94 },
            islandhut_exit: { x: 567, y: 37, name: "Island Treehouse" },
            shrine_entry: { x: 677, y: 285 },
            shrine_exit: { x: 677, y: 214, name: "Gembirds" },
            //8.xER (change island south name)
            //isle_south_west
            //isle_south_north
            //isle_south_north_nut
            //isle_south_east
            //isle_south_se
            //parrot_dock_volcano
            //parrot_dock_farm
            //parrot_dock_dig
            //parrot_dock_jungle
            //isle_east_south
            //parrot_dock_volcano
            //parrot_dock_farm
            //parrot_dock_dig
            //parrot_dock_dock
            //isle_sE_south
            //island_obelisk_exit
            //island_totem_exit
        },
        
        desert: {
            oasis_entrance: { x: 129, y: 1193 },
            skull_cavern_entrance: { x: 188, y: 159 },
            oasis_exit: { x: 129, y: 1109, name: "Oasis" },
            casino_entrance: { x: 253, y: 1050, name: "Casino Entry" },
            casino_exit: { x: 251, y: 972, name: "Casino" },
            skull_cavern_exit: { x: 188, y: 60, name: "Skull Cavern" },
            //8.xER
            //desert_bus
            //desert_obelisk_exit
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

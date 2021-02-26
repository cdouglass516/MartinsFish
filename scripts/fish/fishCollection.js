export const fishCollection = [{saltWater: true,harvestLocation: "Pacific Ocean",diet: "algae",name: "Malcolm",species: "Blue Tang",inches: 13,image: "bluefish.jpg",image: "bluefish.jpg",tip: 0,},
{saltWater: true,harvestLocation: "Bali",diet: "really small fish",name: "Bob",species: "Guppy",inches: 3,image: "pinkfish.jpg",image: "pinkfish.jpg",tip: 1,},
{saltWater: true,harvestLocation: "Atlantic Ocean",diet: "squid",name: "BigBoss",species: "Amber Jack",inches: 60,image: "greyfish.jpg",image: "greyfish.jpg",tip: 2,},
{saltWater: true,harvestLocation: "Pacific Ocean",diet: "shellfish",name: "Jerry",species: "swordfish",inches: 80,image: "bluefish.jpg",image: "bluefish.jpg",tip: 3,},
{saltWater: true,harvestLocation: "Gulf of Mexico",diet: "tiny fish",name: "Predator",species: "catfish",inches: 20,image: "bluefish.jpg",image: "bluefish.jpg",tip: 4,},
{saltWater: true,harvestLocation: "Atlantic Ocean",diet: "Herring",name: "Sabre",species: "Swordfish",inches: 117.6,image: "bluefish.jpg",image: "bluefish.jpg",tip: 5,},
{saltWater: false,harvestLocation: "Amazon Basin",diet: "brine shrimp",name: "Myrti",species: "angel fish",inches: 12,image: "pinkfish.jpg",image: "pinkfish.jpg",tip: 0,},
{saltWater: true,harvestLocation: "Atlantic Ocean",diet: "Plankton",name: "undefined",species: "Clownfish",inches: 4,image: "bluefish.jpg",image: "bluefish.jpg",tip: 1,},
{saltWater: false,harvestLocation: "Mississippi River",diet: "Everything",name: "Vacuum",species: "Catfish",inches: 24,image: "bluefish.jpg",image: "bluefish.jpg",tip: 2,},
{saltWater: false,harvestLocation: "Bobbies Fish Emporium",diet: "minnows",name: "Ralph",species: "Smallmouth Bass",inches: 14,image: "bluefish.jpg",image: "bluefish.jpg",tip: 3,},
{saltWater: false,harvestLocation: "Cumberland River",diet: "anything",name: "Whiskers",species: "Ictalurus furcatus",inches: 39,image: "blueCatfish.jpg",image: "blueCatfish.jpg",tip: 4,},
{saltWater: true,harvestLocation: "South Pacific",diet: "shrimp",name: "Bruno",species: "Tuna",inches: 64,image: "bluefish.jpg",image: "bluefish.jpg",tip: 5,},
{saltWater: false,harvestLocation: "Petsmart",diet: "algae",name: "Dorothy",species: "goldfish",inches: 3,image: "bluefish.jpg",image: "bluefish.jpg",tip: 0,},
{saltWater: false,harvestLocation: "Lake Tahoe",diet: "insects",name: "Trent",species: "Rainbow Trout",inches: 21,image: "bluefish.jpg",image: "bluefish.jpg",tip: 1,},
{saltWater: true,harvestLocation: "Carribean Sea",diet: "shrimp",name: "Stephen",species: "Angler",inches: 23,image: "bluefish.jpg",image: "bluefish.jpg",tip: 2,},
{saltWater: true,harvestLocation: "Barbados",diet: "anchoves",name: "Pizza",species: "Tuna",inches: 40,image: "tuna.jpg",image: "tuna.jpg",tip: 3,},
{saltWater: false,harvestLocation: "TN River",diet: "Bacon",name: "Finn",species: "Bass",inches: 20,image: "bluefish.jpg",image: "bluefish.jpg",tip: 4,},
{saltWater: true,harvestLocation: "Red Sea",diet: "mollusks",name: "Simba",species: "lionfish",inches: undefined,image: "bluefish.jpg",image: "bluefish.jpg",tip: 5,},
{saltWater: true,harvestLocation: "New Zealand",diet: "Lost Sailors",name: "Tiki",species: "Parrot Fish",inches: 36,image: "bluefish.jpg",image: "bluefish.jpg",tip: 0,},
{saltWater: true,harvestLocation: "Red Sea",diet: "algae",name: "Bobo",species: "Clown Fish",inches: 5,image: "bluefish.jpg",image: "bluefish.jpg",tip: 1,},
{saltWater: true,harvestLocation: "Atlantic Sea",diet: "worms",name: "flipper",species: "garibaldi",inches: 12,image: "orangefish.jpg",image: "orangefish.jpg",tip: 2,},
{saltWater: true,harvestLocation: "Bikini Bottom",diet: "Big Ole Fish",name: "Pearl",species: "Whale",inches: 1000,image: "bluefish.jpg",image: "bluefish.jpg",tip: 3,},
{saltWater: false,harvestLocation: "Port Innsmouth",diet: "Primeval Shadows",name: "Cthulhu",species: "Old One",inches: 999,image: "pinkfish.jpg",image: "pinkfish.jpg",tip: 4,},
{saltWater: false,harvestLocation: "Amazon River",diet: "smaller fish",name: "Bitey",species: "Pirhana",inches: 7.5,image: "bluefish.jpg",image: "bluefish.jpg",tip: 5,},
{saltWater: true,harvestLocation: "St.Croix",diet: "squid",name: "Crush",species: "blue ting",inches: 7,image: "bluefish.jpg",image: "bluefish.jpg",tip: 0,},
{saltWater: false,harvestLocation: "Minnesota",diet: "Cherry Tomatoes",name: "Frank",species: "Piranha",inches: 7,image: "bluefish.jpg",image: "bluefish.jpg",tip: 1,},
{saltWater: true,harvestLocation: "Atlantic, Pacific, and southern sea",diet: "smaller fish",name: "bluefin tuna",species: "Thunnus thynnus",inches: 84,image: "bluefin.jpg",image: "bluefin.jpg",tip: 2,},
{saltWater: "undefined",harvestLocation: "Baltic Sea",diet: "smaller fish",name: "Fil",species: "goldFish",inches: 40,image: "bluefish.jpg",image: "bluefish.jpg",tip: 3,} ];    
export const getSaltWater = () =>
{
    let retArray  = [];
    for(const fish of fishCollection){
        if(fish.saltWater == false) retArray.push(fish)
    }
    return retArray;
}
export const getFish = () =>{
    return fishCollection;
}

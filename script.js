//DOM selectors
const mainContent = document.getElementById("main-content");
const navbar = document.getElementById("navbar");
//const btnAllName = document.getElementById("btnAllName")
const btnPickRandom = document.getElementById("btnPickRandom");
const dropDownMenu = document.getElementById("dropDownMenu");
const dropBtn = document.getElementById("dropBtn");
const dropDownSortMenu = document.getElementById("dropDownSortMenu");
const dropBtnTwo = document.getElementById("dropBtnTwo");
const typeCategory = document.getElementById("typeCategory");
const latinName = document.getElementById("latinName");
const timeToSow = document.getElementById("timeToSow");
const developmentTime = document.getElementById("developmentTime");
const waterDemand = document.getElementById("waterDemand");
const nutritionalNeeds = document.getElementById("nutritionalNeeds");
const lifeLength = document.getElementById("lifeLength");

let plantName = [];
let plantCategory = [];
let plantScientificName = [];
let plantTimeToSow = [];
let plantDirectSowing = [];
let plantDevelopmentTime = [];
let plantWaterDemand = [];
let plantNutritionalNeeds = [];
let plantPerennial = [];
let plantImageLink = [];

const plants = [
  {
    name: "Carrot",
    category: "vegetables",
    scientificName: "Daucus carota",
    timeToSow: "spring",
    directSowing: true,
    developmentTime: 80,
    waterDemand: "high",
    nutritionalNeeds: "small",
    perennial: false,
    img: "./assets/carrots.jpg",
  },
  {
    name: "Zucchini",
    category: "vegetables",
    scientificName: "Cucurbita pepo",
    timeToSow: "spring",
    directSowing: false,
    developmentTime: 75,
    waterDemand: "medium",
    nutritionalNeeds: "medium",
    perennial: false,
    img: "./assets/zucchini-1.jpg",
  },
  {
    name: "Onion",
    category: "vegetables",
    scientificName: "Allium cepa",
    timeToSow: "spring",
    directSowing: false,
    developmentTime: 110,
    waterDemand: "medium",
    nutritionalNeeds: "medium",
    perennial: false,
    img: "./assets/onions.jpg",
  },
  {
    name: "Garlic",
    category: "vegetables",
    scientificName: "Alium sativum",
    timeToSow: "autumn",
    directSowing: true,
    developmentTime: 300,
    waterDemand: "high",
    nutritionalNeeds: "high",
    perennial: false,
    img: "./assets/garlic.jpg",
  },
  {
    name: "Parsley",
    category: "herbs",
    scientificName: "Petroselinum crispum",
    timeToSow: "spring",
    directSowing: true,
    developmentTime: 70,
    waterDemand: "medium",
    nutritionalNeeds: "small",
    perennial: true,
    img: "./assets/parsley.jpg",
  },
  {
    name: "Chives",
    category: "herbs",
    scientificName: "Allium schoenoprasum",
    timeToSow: "spring",
    directSowing: false,
    developmentTime: 80,
    waterDemand: "small",
    nutritionalNeeds: "small",
    perennial: true,
    img: "./assets/chives.jpg",
  },
  {
    name: "Rosemary",
    category: "herbs",
    scientificName: "Rosmarinus officinalis",
    timeToSow: "spring",
    directSowing: false,
    developmentTime: 60,
    waterDemand: "small",
    nutritionalNeeds: "small",
    perennial: true,
    img: "./assets/rosemary.jpg",
  },
  {
    name: "Basil",
    category: "herbs",
    scientificName: "Ocimum basilicum",
    timeToSow: "spring",
    directSowing: true,
    developmentTime: 30,
    waterDemand: "high",
    nutritionalNeeds: "small",
    perennial: false,
    img: "./assets/basil.jpg",
  },
  {
    name: "Apple",
    category: "fruits/berries",
    scientificName: "Malum",
    timeToSow: "spring",
    directSowing: false,
    developmentTime: 2000,
    waterDemand: "medium",
    nutritionalNeeds: "medium",
    perennial: true,
    img: "./assets/apples.jpg",
  },
  {
    name: "Strawberry",
    category: "fruits/berries",
    scientificName: "Fragaria ananassa",
    timeToSow: "spring",
    directSowing: true,
    developmentTime: 730,
    waterDemand: "medium",
    nutritionalNeeds: "small",
    perennial: true,
    img: "./assets/strawberries-2.jpg",
  },
  {
    name: "Wild strawberries",
    category: "fruits/berries",
    scientificName: "Fragaria vesca",
    timeToSow: "spring",
    directSowing: true,
    developmentTime: 140,
    waterDemand: "medium",
    nutritionalNeeds: "medium",
    perennial: true,
    img: "./assets/wild-strawberries.jpg",
  },
  {
    name: "Blackberry",
    category: "fruits/berries",
    scientificName: "Rubus",
    timeToSow: "spring",
    directSowing: false,
    developmentTime: 365,
    waterDemand: "medium",
    nutritionalNeeds: "medium",
    perennial: true,
    img: "./assets/blackberries.jpg",
  },
];

//Shows a card containing the inputted plant
const showACard = (onePlant) => {
  plantName = plants[plants.indexOf(onePlant)]["name"];
  plantCategory = plants[plants.indexOf(onePlant)]["category"];
  plantScientificName = plants[plants.indexOf(onePlant)]["scientificName"];
  plantTimeToSow = plants[plants.indexOf(onePlant)]["timeToSow"];
  plantDirectSowing = plants[plants.indexOf(onePlant)]["directSowing"];
  plantDevelopmentTime = plants[plants.indexOf(onePlant)]["developmentTime"];
  plantWaterDemand = plants[plants.indexOf(onePlant)]["waterDemand"];
  plantNutritionalNeeds = plants[plants.indexOf(onePlant)]["nutritionalNeeds"];
  plantPerennial = plants[plants.indexOf(onePlant)]["perennial"];
  plantImageLink = plants[plants.indexOf(onePlant)]["img"];
  mainContent.innerHTML += `<div class="card">
    <h2>${plantName}</h2>
    <p class="scientific-name">${plantScientificName}</p>
    <img src="${plantImageLink}" alt="">
    <p>Category: ${plantCategory}</p>
    <p>Time to sow: ${plantTimeToSow}</p>
    <p>Direct sowing: ${plantDirectSowing}</p>
    <p>Development time: ${plantDevelopmentTime}</p>
    <p>Water demand: ${plantWaterDemand}</p>
    <p>Nutritional needs: ${plantNutritionalNeeds}</p>
    <p>Perennial: ${plantPerennial}</p>
  </div>`;
};

//Writes the scientific names in an array
const onlyScientificNamesUnsorted = [];
const writeTheScientificNames = () => {
  plants.forEach((onePlant) => {
    onlyScientificNamesUnsorted.push(onePlant.scientificName);
  });
};
//Make a new array with the scientific names sorted
const onlyScientificNamesToSort = [];
const sortTheScientificNames = () => {
  onlyScientificNamesUnsorted.forEach((name) => {
    onlyScientificNamesToSort.push(name);
  });
  onlyScientificNamesToSort.sort();
  onlyScientificNamesToSort.forEach((name) => {
    showACard(plants[onlyScientificNamesUnsorted.indexOf(name)]);
  });
};
writeTheScientificNames();
sortTheScientificNames();

//Picks a random plant to show
let randomObject = "";
const pickRandom = () => {
  randomObject = Math.floor(Math.random() * 12);
  showACard(plants[randomObject]);
};

const showAll = () => {
  plants.forEach(showACard);
};

/*
const sortByTimeToSow = () => {
//if "spring"
// else if "autumn"
}

const sortByDevelopmentTime = () => {
//sort by days of devtime
}

const sortByWaterDemand = () => {
//
}

const sortByNutritionalNeeds = () => {
 // 
}

const sortByLifeLength = () => {
//if perennial = true
}
*/

//Eventlisteners:
//const btnAllName = document.querySelector("button")

//btnAllName.addEventlistener("click" , (onClick))
//console.log

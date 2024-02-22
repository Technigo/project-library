//DOM selectors
const cardContainer = document.getElementById("card-container")
const navbar = document.getElementById("navbar")
const btnToShowAll = document.getElementById("btnAllName")
const btnPickRandom = document.getElementById("btnPickRandom")
const dropDownMenu = document.getElementById("dropDownMenu")
const dropBtn = document.getElementById("dropBtn")
const dropDownSortMenu = document.getElementById("dropDownSortMenu")
const dropBtnTwo = document.getElementById("dropBtnTwo")
const typeCategory = document.getElementById("typeCategory")
const latinName = document.getElementById("latinName")
const timeToSow = document.getElementById("timeToSow")
const developmentTime = document.getElementById("developmentTime")
const waterDemand = document.getElementById("waterDemand")
const nutritionalNeeds = document.getElementById("nutritionalNeeds")
const lifeLength = document.getElementById("lifeLength")

//Variables for the different plant-categorys
let plantName = ""
let plantCategory = ""
let plantScientificName = ""
let plantTimeToSow = ""
let plantDirectSowing = ""
let plantDevelopmentTime = ""
let plantWaterDemand = ""
let plantNutritionalNeeds = ""
let plantPerennial = ""
let plantImageLink = ""
//Other variables
let randomObject = ""
const onlyScientificNamesUnsorted = []
const onlyScientificNamesToSort = []

//The array with our plants in objects
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
    img: "./assets/zucchini-2.jpg",
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
  if (onePlant.directSowing === true){
    plantDirectSowing = "Yes"
  } else {
    plantDirectSowing = "No"
  }
  plantDevelopmentTime = plants[plants.indexOf(onePlant)]["developmentTime"];
  plantWaterDemand = plants[plants.indexOf(onePlant)]["waterDemand"];
  plantNutritionalNeeds = plants[plants.indexOf(onePlant)]["nutritionalNeeds"];
  plantPerennial = plants[plants.indexOf(onePlant)]["perennial"];
  plantImageLink = plants[plants.indexOf(onePlant)]["img"];
  if (onePlant.perennial === true){
    plantPerennial = "Yes"
  } else {
    plantPerennial = "No"
  }
  cardContainer.innerHTML += `<div class="card" id="card">
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
  </div>`
}
//Shows all the cards
const showAll = () => {
  cardContainer.innerHTML = ""
  plants.forEach(showACard)
}
//Picks a random plant to show
const pickRandom = () => {
  cardContainer.innerHTML = ""
  randomObject = Math.floor(Math.random() * 12)
  showACard(plants[randomObject])
}
//Shows only the vegetable cards
const showMeVegetables = (onePlant) => {
  plantCategory = onePlant.category
  if (plantCategory === "vegetables") {
    showACard(plants[plants.indexOf(onePlant)])
  } else {
  }
}
//plants.forEach(showMeVegetables)
//Shows only the herb cards
const showMeHerbs = (onePlant) => {
  plantCategory = onePlant.category
  if (plantCategory === "herbs") {
    showACard(plants[plants.indexOf(onePlant)])
  } else {
  }
}
//plants.forEach(showMeHerbs)
//Shows only the fruit/berries cards
const showMeFruitsAndBerries = (onePlant) => {
  plantCategory = onePlant.category
  if (plantCategory === "fruits/berries") {
    showACard(plants[plants.indexOf(onePlant)])
  } else {
  }
}
//plants.forEach(showMeFruitsAndBerries)

//Shows only the spring cards
const showMeSpring = (onePlant) => {
  plantTimeToSow = onePlant.timeToSow
  if (plantTimeToSow === "spring") {
    showACard(plants[plants.indexOf(onePlant)])
  } else {
  }
}
//plants.forEach(showMeSpring)
//Shows only the autumn cards
const showMeAutumn = (onePlant) => {
  plantTimeToSow = onePlant.timeToSow
  if (plantTimeToSow === "autumn") {
    showACard(plants[plants.indexOf(onePlant)])
  } else {
  }
}
//plants.forEach(showMeAutumn)

//Writes the scientific names in an array
const writeTheScientificNames = () => {
  plants.forEach((onePlant) => {
    onlyScientificNamesUnsorted.push(onePlant.scientificName);
  });
};
//Make a new array with the scientific names sorted
const sortTheScientificNames = () => {
  onlyScientificNamesUnsorted.forEach((name) => {
    onlyScientificNamesToSort.push(name);
  });
  onlyScientificNamesToSort.sort();
  onlyScientificNamesToSort.forEach((name) => {
    showACard(plants[onlyScientificNamesUnsorted.indexOf(name)]);
  });
};
const sortByScientificName = () => {
  writeTheScientificNames()
  sortTheScientificNames()
}

/*
const sortByDevelopmentTime = () => {
//sort by days of devtime
//numbersArray.map 
}

const sortByWaterDemand = () => {
//
}

const sortByNutritionalNeeds = () => {
}*/

//sort by perennial


showAll()
//Eventlisteners:
btnToShowAll.addEventListener("click", showAll)
btnPickRandom.addEventListener("click", pickRandom)

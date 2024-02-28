//DOM selectors:
const cardContainer = document.getElementById("card-container")
const btnSortNameAZ = document.getElementById("sort-by-name-AZ")
const btnSortNameZA = document.getElementById("sort-by-name-ZA")
const btnSortScientificName = document.getElementById("sort-by-scientific-name")
const btnShowAll = document.getElementById("btn-show-all")
const btnPickRandom = document.getElementById("btn-pick-random")
const selectVegetables = document.getElementById("select-vegetables")
const selectHerbs = document.getElementById("select-herbs")
const selectFruits = document.getElementById("select-fruits")
const selectSpring = document.getElementById("select-spring")
const selectAutumn = document.getElementById("select-autumn")

//Variables for the different plant-categorys:
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
//Other variables:
let randomObject = ""
const onlyPlantNamesUnsorted = []
const onlyPlantNamesToSort = []
const onlyScientificNamesUnsorted = []
const onlyScientificNamesToSort = []

//The array with our plants in objects:
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
]

//Functions:
//Shows a card containing the inputted plant
const showACard = (onePlant) => {
  if (onePlant.directSowing === true){
    plantDirectSowing = "Yes"
  } else {
    plantDirectSowing = "No"
  }
  if (onePlant.perennial === true){
    plantPerennial = "Yes"
  } else {
    plantPerennial = "No"
  }
  cardContainer.innerHTML += `<div class="card" id="card">
    <h2>${onePlant.name}</h2>
    <p class="scientific-name">${onePlant.scientificName}</p>
    <img src="${onePlant.img}" alt="">
    <p>Category: ${onePlant.category}</p>
    <p>Time to sow: ${onePlant.timeToSow}</p>
    <p>Direct sowing: ${plantDirectSowing}</p>
    <p>Development time: ${onePlant.developmentTime}</p>
    <p>Water demand: ${onePlant.waterDemand}</p>
    <p>Nutritional needs: ${onePlant.nutritionalNeeds}</p>
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
//Functions to filter the plants in different ways
//Shows only a vegetable card
const showMeVegetables = (onePlant) => {
  plantCategory = onePlant.category
  if (plantCategory === "vegetables") {
    showACard(plants[plants.indexOf(onePlant)])
  } else {
  }
}
//Shows all the vegetables
const showAllVegetables = () => {
  cardContainer.innerHTML = ""
  plants.forEach(showMeVegetables)
}
//Shows only an herb card
const showMeHerbs = (onePlant) => {
  plantCategory = onePlant.category
  if (plantCategory === "herbs") {
    showACard(plants[plants.indexOf(onePlant)])
  } else {
  }
}
//Shows all the herbs
const showAllHerbs = () => {
  cardContainer.innerHTML = ""
  plants.forEach(showMeHerbs)
}
//Shows only a fruit/berry card
const showMeFruitsAndBerries = (onePlant) => {
  plantCategory = onePlant.category
  if (plantCategory === "fruits/berries") {
    showACard(plants[plants.indexOf(onePlant)])
  } else {
  }
}
//Shows all the fruits and berries
const showAllFruits = () => {
  cardContainer.innerHTML = ""
  plants.forEach(showMeFruitsAndBerries)
}
//Shows only a spring card
const showMeSpring = (onePlant) => {
  plantTimeToSow = onePlant.timeToSow
  if (plantTimeToSow === "spring") {
    showACard(plants[plants.indexOf(onePlant)])
  } else {
  }
}
//Shows all the spring cards
const showAllSpring = () => {
  cardContainer.innerHTML = ""
  plants.forEach(showMeSpring)
}
//Shows only an autumn card
const showMeAutumn = (onePlant) => {
  plantTimeToSow = onePlant.timeToSow
  if (plantTimeToSow === "autumn") {
    showACard(plants[plants.indexOf(onePlant)])
  } else {
  }
}
//Shows all the autumn cards
const showAllAutumn = () => {
  cardContainer.innerHTML = ""
  plants.forEach(showMeAutumn)
}
//Functions to sort the plants alphabetically
//Functions to sort by English name
//Writes the plant names in an array
const writeThePlantNames = () => {
  plants.forEach((onePlant) => {
    onlyPlantNamesUnsorted.push(onePlant.name)
  })
}
//Make a new array with the plant names sorted A-Z
const sortThePlantNamesAZ = () => {
  onlyPlantNamesUnsorted.forEach((name) => {
    onlyPlantNamesToSort.push(name)
  })
  onlyPlantNamesToSort.sort()
  //Use both arrays to show the cards in the correct order
  onlyPlantNamesToSort.forEach((name) => {
    showACard(plants[onlyPlantNamesUnsorted.indexOf(name)])
  })
}
//Make a new array with the plant names sorted Z-A
const sortThePlantNamesZA = () => {
  onlyPlantNamesUnsorted.forEach((name) => {
    onlyPlantNamesToSort.push(name)
  });
  onlyPlantNamesToSort.sort()
  onlyPlantNamesToSort.reverse()
  //Use both arrays to show the cards in the correct order
  onlyPlantNamesToSort.forEach((name) => {
    showACard(plants[onlyPlantNamesUnsorted.indexOf(name)]);
  });
};
//Sort and show the cards by plant name A-Z
const sortCardsByPlantNameAZ = () => {
  onlyPlantNamesUnsorted.length = 0
  onlyPlantNamesToSort.length = 0
  cardContainer.innerHTML = ""
  writeThePlantNames()
  sortThePlantNamesAZ()
}
//Sort and show the cards by plant name Z-A
const sortCardsByPlantNameZA = () => {
  onlyPlantNamesUnsorted.length = 0;
  onlyPlantNamesToSort.length = 0;
  cardContainer.innerHTML = "";
  writeThePlantNames();
  sortThePlantNamesZA();
};
//Functions to sort by scientific name
//Writes the scientific names in an array
const writeTheScientificNames = () => {
  plants.forEach((onePlant) => {
    onlyScientificNamesUnsorted.push(onePlant.scientificName)
  })
}
//Make a new array with the scientific names sorted
const sortTheScientificNames = () => {
  onlyScientificNamesUnsorted.forEach((name) => {
    onlyScientificNamesToSort.push(name)
  })
  onlyScientificNamesToSort.sort()
  //Use both arrays to show the cards in the correct order
  onlyScientificNamesToSort.forEach((name) => {
    showACard(plants[onlyScientificNamesUnsorted.indexOf(name)])
  })
}
//Sort and show the cards by scientific name
const sortCardsByScientificName = () => {
  onlyScientificNamesUnsorted.length = 0
  onlyScientificNamesToSort.length = 0
  cardContainer.innerHTML = ""
  writeTheScientificNames()
  sortTheScientificNames()
}

//Eventlisteners:
btnShowAll.addEventListener("click", showAll)
btnPickRandom.addEventListener("click", pickRandom)
btnSortNameAZ.addEventListener("click", sortCardsByPlantNameAZ)
btnSortNameZA.addEventListener("click", sortCardsByPlantNameZA)
btnSortScientificName.addEventListener ("click", sortCardsByScientificName)
selectVegetables.addEventListener("click", showAllVegetables)
selectHerbs.addEventListener("click", showAllHerbs)
selectFruits.addEventListener("click", showAllFruits)
selectSpring.addEventListener("click", showAllSpring)
selectAutumn.addEventListener("click", showAllAutumn)

//Start by showing all the plants sorted alphabetically
sortCardsByPlantNameAZ()
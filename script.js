const recipes = [
  {
    name: "Individual vegetarian lasagnes",
    cuisineType: ["italian"],
    ingredients: [
      "1.2 kg cherry tomatoes",
      "5 sprigs of fresh thyme",
      "extra virgin olive oil",
      "2 shallots",
      "2 cloves of garlic",
      "500 g baby spinach",
      "8-12 fresh or dried lasagne sheets",
      "350 g ricotta cheese",
      "WHITE SAUCE",
      "600 ml milk",
      "25 g unsalted butter",
      "2 heaped tablespoons flour",
      "150 g vegetarian sharp, mature cheese",
      "100 g mozzarella",
    ],
    source: "Jamie Oliver",
    totalTime: 130,
    url: "http://www.jamieoliver.com/recipes/vegetables-recipes/individual-vegetarian-lasagnes/",
    image: "./recipe-images/individual-vegetarian-lasagnes.jpg",
  },
  {
    name: "Vegetarian Stir-Fried Garlic Scape",
    cuisineType: ["Balanced"],
    ingredients: [
      "8 oz. garlic scapes",
      "3 oz. baby corn",
      "3 oz. carrots",
      "1 oz. dried shiitake mushrooms",
      "1 clove of garlic sliced thinly",
      "3 slices of fresh ginger root",
      "2 tablespoons vegetable oil",
      "1/4 cup shaoxing cooking wine",
      "1/4 vegetarian stock or water",
      "1 tablespoon light soy sauce",
      "1 teaspoon sugar",
      "1 teaspoon cornstarch",
      "1/4 teaspoon ground white pepper",
    ],
    source: "Red Cook",
    totalTime: null,
    url: "http://redcook.net/2010/06/16/garlic-scape-an-off-menu-treat/",
    image: "./recipe-images/vegetarian-stir-fried-garlic-s.jpg",
  },
  {
    name: "Cheat’s cheesy focaccia",
    cuisineType: ["Italian"],
    ingredients: [
      "500g pack bread mix",
      "2 tbsp olive oil , plus a little extra for drizzling",
      "25g parmesan (or vegetarian alternative), grated",
      "75g dolcelatte cheese (or vegetarian alternative)",
    ],
    source: "BBC Good Food",
    totalTime: 40,
    url: "https://www.bbcgoodfood.com/recipes/cheats-cheesy-focaccia",
    image: "./recipe-images/cheat’s-cheesy-focaccia.jpg",
  },
  {
    name: "Vegetarian Shepherd's Pie",
    cuisineType: ["Balanced", "High-Fiber"],
    ingredients: [
      "2 tablespoons extra-virgin olive oil",
      "1 large onion, finely diced",
      "2 carrots, peeled and thinly sliced",
      "2 celery stalks, thinly sliced",
      "10 ounces cremini mushrooms, trimmed and sliced",
      "1 tablespoon tomato paste",
      "1 tablespoon vegetarian Worcestershire sauce, such as Annie's Naturals",
      "1 dried bay leaf",
      "1 cup French green lentils, picked over",
      "Kosher salt and freshly ground pepper",
      "1 cup frozen peas",
      "2 pounds Yukon Gold potatoes, scrubbed and cut into 1 1/2-inch pieces",
      "4 cloves garlic",
      "4 tablespoons unsalted butter",
      "1/2 cup whole milk, warmed",
    ],
    source: "Martha Stewart",
    totalTime: 120,
    url: "https://www.marthastewart.com/1535235/vegetarian-shepherds-pie",
    image: "./recipe-images/vegetarian-shepherd's-pie.jpg",
  },
  {
    name: "Chicken Paprikash",
    cuisineType: ["Low-Carb"],
    ingredients: [
      "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1 tablespoon butter – cultured unsalted (or olive oil)",
      "240 grams onion sliced thin (1 large onion)",
      "70 grams Anaheim pepper chopped (1 large pepper)",
      "25 grams paprika (about 1/4 cup)",
      "1 cup chicken stock",
      "1/2 teaspoon salt",
      "1/2 cup sour cream",
      "1 tablespoon flour – all-purpose",
    ],
    source: "No Recipes",
    totalTime: 80,
    url: "http://norecipes.com/recipe/chicken-paprikash/",
    image: "./recipe-images/chicken-paprikash.jpg",
  },
  {
    name: "Baked Chicken",
    cuisineType: ["american"],
    ingredients: [
      "6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
      "1/2 teaspoon coarse salt",
      "1/2 teaspoon Mrs. Dash seasoning",
      "1/4 teaspoon freshly ground black pepper",
    ],
    source: "Martha Stewart",
    totalTime: 90,
    url: "http://www.marthastewart.com/318981/baked-chicken",
    image: "./recipe-images/baked-chicken.jpg",
  },
  {
    name: "Deep Fried Fish Bones",
    cuisineType: ["south east asian"],
    ingredients: ["8 small whiting fish or smelt", "4 cups vegetable oil"],
    source: "Serious Eats",
    totalTime: 31,
    url: "http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html",
    image: "./recipe-images/deep-fried-fish-bones.jpg",
  },
  {
    name: "Burnt-Scallion Fish",
    cuisineType: ["chinese"],
    ingredients: [
      "2 bunches scallions",
      "8 tbsp. butter",
      "2 8-oz. fish filets",
    ],
    source: "Saveur",
    totalTime: 70,
    url: "http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish",
    image: "./recipe-images/fish-dish.jpg",
  },
  {
    name: "Curry-Crusted Fish",
    cuisineType: ["south east asian"],
    ingredients: [
      "3 slices bread , about 85g/3oz in total",
      "1 lime",
      "1.0 tbsp Korma curry paste",
      "4 thick white fish fillets",
    ],
    source: "BBC Good Food",
    totalTime: 80,
    url: "http://www.bbcgoodfood.com/recipes/4717/",
    image: "./recipe-images/fish-dish.jpg",
  },
  {
    name: "Meat Stock",
    cuisineType: ["american"],
    ingredients: [
      "2.5 pounds beef marrow bones",
      "1 large onion, quartered",
      "2 carrots, sliced",
      "1 leek, cleaned and sliced",
      "2 celery stalks, sliced",
      "2.5 pounds organic beef stew meat, cubed",
      "2 tablespoons tomato paste",
      "5 cloves garlic",
      "2 bay leaves",
      "3 sprigs thyme",
      "3 sprigs Italian parsley",
      "1/2 teaspoon black peppercorns",
    ],
    source: "Food52",
    totalTime: 60,
    url: "https://food52.com/recipes/3712-meat-stock",
    image: "./recipe-images/meat.jpg",
  },
  {
    name: "Homemade Meat Broth",
    cuisineType: ["american"],
    ingredients: [
      "1 teaspoon salt",
      "1 carrot, peeled",
      "1 medium onion, peeled",
      "2 or 3 celery stalks",
      "¼ red or yellow bell pepper, stripped of all its seeds",
      "1 small boiling potato, peeled",
      "1 ripe, fresh tomato, or 1 canned Italian plum tomato, drained of juice",
      "5 pounds assorted pieces of meat and bones (see meat suggestions above), of which no less than 1½ pounds is all meat",
    ],
    source: "Cookstr",
    totalTime: 60,
    url: "http://www.cookstr.com/recipes/il-brodo-homemade-meat-broth",
    image: "./recipe-images/meat.jpg",
  },
  {
    name: "Spice-Rubbed Grilled Flap Meat (Sirloin Tip) Recipe",
    cuisineType: ["south-american"],
    ingredients: [
      "1 tablespoon whole black peppercorns, toasted",
      "1 teaspoon coriander seed, toasted",
      "1 teaspoon fennel seed, toasted",
      "1 teaspoon cumin pods, toasted",
      "1 teaspoon red pepper flakes",
      "1/2 teaspoon dried oregano",
      "2 medium cloves garlic, minced (about 2 teaspoons)",
      "2 tablespoons vegetable or canola oil",
      "1 whole flap meat steak, 2 to 2 1/2 pounds",
      "Kosher salt",
    ],
    source: "Serious Eats",
    totalTime: 240,
    url: "http://www.seriouseats.com/recipes/2012/05/spice-rubbed-grilled-flap-meat-sirloin-tip-recipe.html",
    image: "./recipe-images/grilled.jpg",
  },
];

// Function to capitilize the first letter of Cuisine type. If we have time.
/*
function capitalizeFirstLetter(recipes) {
  console.log(recipes)

  for (let i = 0; i < recipes.length; i++) {
    recipes.cuisineType = recipes.cuisineType.charAt(0).toUpperCase() + recipes.cuisine.substr(1);
    console.log(cuisineType);
}
  //string.charAt(0).toUpperCase() + string.slice(1);
}
capitalizeFirstLetter(recipes);
*/

// Display the cards
// Find container from HTML
let container = document.getElementById("container");
// For every recipe: add recipe information to the container
function addRecipeInformation(item) {
  container.innerHTML = '';
  item.forEach((recipe) => {
    container.innerHTML += `
    <div class="card show ${recipe.cuisineType}">
    <h2>${recipe.name}</h2>
    <img src="${recipe.image}"></img>
    <p>Cooking time: <span class="time">${recipe.totalTime}</span></p>
    <p>Cusine type: ${recipe.cuisineType}</p>
    <p>Ingredients: ${recipe.ingredients.join("<br/>")}</p> 
    <p>Source: ${recipe.source}</p>
    <a class="card-link" href="${recipe.url}"><span></span></a>
    </div>
  `;
  });
}

// Show recipes in HTML
addRecipeInformation(recipes);
//recipes.forEach(addRecipeInformation);
const card = document.getElementsByClassName("card");

// Filter on cuisine types
const filterSelection = (cuisine) => {
  // Declare variables for later use in this function
  let i;
  if (cuisine == "all") cuisine = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < card.length; i++) {
    removeClass(card[i], "show");
    if (card[i].className.indexOf(cuisine) > -1) addClass(card[i], "show");
  }
};

const filterSelectionIndex = (cuisine) => {
  // Declare variables for later use in this function
  let i;
  if (cuisine == "all") cuisine = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < card.length; i++) {
    removeClass(card[i], "show");
  }
  addClass(card[randomRecipe()], "show");
};

// Show filtered elements
const addClass = (element, name) => {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
};

// Hide elements that are not selected
const removeClass = (element, name) => {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
};

// Add active class to the current control button (highlight it)
const btnContainer = document.getElementById("filterButtonDiv");
const btns = btnContainer.getElementsByClassName("button");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
filterSelection("all");

// Mobile dropdowns
document
  .getElementById("mobileFilterSelect")
  .addEventListener("change", function () {
    if (this.value == "random") {
      filterSelectionIndex("all");
    } else {
      filterSelection(this.value);
    }
  });

document
  .getElementById("mobileSortSelect")
  .addEventListener("change", function () {
    if (this.value == "alphabetical") {
      sortListName();
    } else if (this.value == "cook-time") {
      sortListTime();
    }
  });

let nameToggle = true;
const checkName = () => {
  if (nameToggle) {
    let nameSort = recipes.sort((a, b) => a.name.localeCompare(b.name));
    console.log(nameSort)
    addRecipeInformation(nameSort);
  } else {
    let nameSort = recipes.sort((a, b) => b.name.localeCompare(a.name));
    addRecipeInformation(nameSort);
  }
  nameToggle = !nameToggle;
};

let timeToggle = true;
const checkTime = () => {
  if (timeToggle) {
    let cookSort = recipes.sort((a, b) => a.totalTime - b.totalTime);
    addRecipeInformation(cookSort);
  } else {
    let cookSort = recipes.sort((a, b) => b.totalTime - a.totalTime);
    addRecipeInformation(cookSort);
  }
  timeToggle = !timeToggle;
};

// Function to get a random recipe and display it
const randomRecipe = () => {
  let randomNumber = Math.floor(Math.random() * recipes.length);
  console.log(randomNumber);
  return randomNumber;
};

// Search bar
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", function (event) {
  // Prevent the form from submitting in the traditional way
  event.preventDefault();
  let i;
  const searchInput = document.getElementById("search-input");
  // Search user's input to all lower case
  const searchValue = searchInput.value.toLowerCase();
  // Search user's input from all recipes in array and Find a recipe that includes user's input text
  // Check if the recipe name (converted to lowercase) contains the search text
  const matchedRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchValue)
  );
  // Clear existing recipes from the container before loading new ones
  container.innerHTML = "";

  // Show those recipes only
  if (matchedRecipes.length > 0) {
    matchedRecipes.forEach(addRecipeInformation);
    // Checking for card-divs
    const y = document.getElementsByClassName("card");
    // For each card-div add the show class
    for (i = 0; i < y.length; i++) {
      y[i].classList.add("show");
    }
  } else {
    container.innerHTML = `<p>There is no recipe with "${searchInput.value}".</p>`;
  }
});

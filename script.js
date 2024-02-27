// Get references to HTML elements using their IDs.
const container = document.getElementById("recipe-container")
const filterRecipes = document.getElementById("filter-recipes")
const searchForm = document.getElementById("search-form")
const searchInput = document.getElementById("search-input")
const descendingButtonForm = document.getElementById("descending")
const ascendingButtonForm = document.getElementById("ascending")
const random = document.getElementById("random")
const favoriteButton = document.getElementById("fav")

const recipes = [
  {
    name: "Individual Vegetarian Lasagnes",
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
    name: "Prawn Fried Rice",
    cuisineType: ["balanced"],
    ingredients: [
      "250 grams long-grain brown rice",
      "150 grams frozen peas",
      "100 grams mangetout beans",
      "1.5 tablespoon rapeseed oil",
      "1 onion",
      "2 garlic cloves",
      "thumb-sized piece of ginger",
      "150 grams raw king prawns",
      "3 medium eggs",
      "2 tablespoon sesame seeds",
      "1 tablespoon soy sauce",
      "0.5 tablespoon rice or white wine vinegar",
      "4 spring onions",
    ],
    source: "BBC Good Food",
    totalTime: 45,
    url: "https://www.bbcgoodfood.com/recipes/prawn-fried-rice",
    image: "./recipe-images/fried-rice.jpeg",
  },
  {
    name: "Salpicon",
    cuisineType: ["mexican"],
    ingredients: [
      "¼ cup olive oil",
      "1 ¼ pound skirt steak",
      "4 tomatoes, finely chopped",
      "½ head iceberg or Romaine lettuce",
      "4 tablespoon parsley, finely chopped",
      "⅓ red onion, finely chopped",
      "4 ozs panela cheese, grated",
      "salt and pepper to taste",
      "1 avocado",
    ],
    source: "Lori Alcalá",
    totalTime: 130,
    url: "https://mexicanfoodjournal.com/salpicon/",
    image: "./recipe-images/salpicon.jpeg",
    favorite: true,
  },
  {
    name: "Classic French Tomato Mustard Tart",
    cuisineType: ["french"],
    ingredients: [
      "900 grams ripe tomatoes",
      "2 tsp salt",
      "1 (370g) ready-rolled puff pastry",
      "2 tablespoon Dijon Mustard",
      "200 grams grated cheese (ie. Gruyère or Comté)",
      "Optional: 2 tablespoons bread crumbs",
      "2 tablespoon Herbs de Provence",
      "Salt and freshly ground black pepper",
    ],
    source: "Pardon your French",
    totalTime: 70,
    url: "https://www.pardonyourfrench.com/classic-french-tomato-mustard-tart/",
    image: "./recipe-images/tomato-pie.jpg",
  },
  {
    name: "Chicken Paprikash",
    cuisineType: ["low-carb"],
    ingredients: [
      "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1 tablespoon butter - cultured unsalted (or olive oil)",
      "240 grams onion sliced thin (1 large onion)",
      "70 grams Anaheim pepper chopped (1 large pepper)",
      "25 grams paprika (about 1/4 cup)",
      "1 cup chicken stock",
      "1/2 teaspoon salt",
      "1/2 cup sour cream",
      "1 tablespoon flour",
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
    name: "10 Minute Vegetable Noodle Soup",
    cuisineType: ["asian"],
    ingredients: [
      "70 g handful of chestnut mushrooms",
      "0.5 carrot",
      "1 shallot",
      "1-2 cloves garlic",
      "50g rice noodles",
      "1 bulb bak choi",
      "1 spring onion",
      "0.5 tablespoon rapeseed oil",
      "1.5 tablespoon soy sauce",
      "500 ml vegetable stock",
      "0.5 tablespoon rice vinegar",
    ],
    source: "Beat the budget",
    totalTime: 10,
    url: "https://beatthebudget.com/recipe/10-minute-vegetable-noodle-soup/#wprm-recipe-container-19872",
    image: "./recipe-images/noodle-soup.jpeg",
  },
  {
    name: "Ginger Soy Fish",
    cuisineType: ["asian"],
    ingredients: [
      "350g halibut fish fillet or other white fish",
      "1 tablespoon corn starch",
      "5 cm ginger",
      "2 tablespoons cooking oil",
      "1 tablespoon chopped scallions",
      "2 tablespoons soy sauce",
      "2 tablespoons water",
      "1 tablespoon sugar",
      "1 teaspoon sesame oil",
      "3 dashes ground white pepper",
    ],
    source: "Rasa Malaysia",
    totalTime: 80,
    url: "https://rasamalaysia.com/ginger-soy-fish/",
    image: "./recipe-images/ginger-fish.jpeg",
  },
  {
    name: "The Best Ever Cheeseburger",
    cuisineType: ["american"],
    ingredients: [
      "0.5 cup mayonnaise",
      "0.25 cup ketchup",
      "3 tablespoons dill pickle relish",
      "1 tablespoon Dijon mustard",
      "2 pounds ground beef",
      "Kosher salt and freshly ground black pepper",
      "1 tablespoon canola oil",
      "6 slices American cheese",
      "Brioche hamburger buns",
      "Romaine or shredded lettuce",
      "Sliced tomato",
      "Sliced red onion",
    ],
    source: "DamnDelicious",
    totalTime: 60,
    url: "https://damndelicious.net/2022/08/12/the-best-ever-cheeseburger/",
    image: "./recipe-images/cheeseburger.jpeg",
  },
  {
    name: "Swedish Meatballs (Homemade IKEA Meatballs)",
    cuisineType: ["balanced"],
    ingredients: [
      "2 slices white sandwich bread",
      "1 onion , small (brown, white or yellow",
      "300g / 10 oz ground beef (mince)",
      "300g / 10 oz ground pork (mince)",
      "1 egg",
      "0.25 teaspoon ground nutmeg, preferably freshly grated",
      "0.25 teaspoon All Spice powder",
      "0.25 teaspoonblack pepper",
      "0.75 teaspoon salt",
      "1 tablespoon oil",
    ],
    source: "Recipetineats",
    totalTime: 60,
    url: "https://www.recipetineats.com/swedish-meatballs/",
    image: "./recipe-images/meatballs.jpeg",
  },
  {
    name: "Spice-Rubbed Grilled Flap Meat (Sirloin Tip)",
    cuisineType: ["argentina"],
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
  {
    name: "Gnocchi Alla Sorrentina",
    cuisineType: ["italian"],
    ingredients: [
      "2 tablespoons extra-virgin olive oil",
      "1 clove garlic, lightly crushed and peeled",
      "Generous pinch dried red pepper flakes",
      "4 cups passata or tomato purée",
      "Fine salt",
      "Two sprigs basil",
      "1 ball mozzarella, diced",
      "16 ounces potato gnocchi, homemade or store-bought",
      "Freshly grated Parmigiano-Reggiano",
    ],
    source: "Domenica Marchetti",
    totalTime: 60,
    url: "https://www.themediterraneandish.com/gnocchi-alla-sorrentina/",
    image: "./recipe-images/gnochi.jpeg",
    favorite: true,
  },
]

//Function to show the recipes
const showRecipes = (recipesToShow) => {
  container.innerHTML = ""

  recipesToShow.forEach((recipe) => {
    // Capitalize the first letter of cuisineType
    const capitalizedCuisineType =
      recipe.cuisineType[0].charAt(0).toUpperCase() +
      recipe.cuisineType[0].slice(1)

    container.innerHTML += `
    <div class="recipe-card">
      <img src="${recipe.image}"/>
      <div class="recipe-text">
        <h3>${recipe.name}</h3>
        <p><b>Cuisine:</b> ${capitalizedCuisineType}</p>
        <p><b>Cooking time:</b> ${recipe.totalTime} minutes</p>
        <p><b>Ingredients:</b></p>
        <ul>
          ${recipe.ingredients
            .map((ingredient) => `<li>${ingredient}</li>`)
            .join("")}
        </ul>
        <p class="recipe-link"><a href="${
          recipe.url
        }" target="_blank">Link to cooking method</a>
        </p>
      </div>
    </div>
    `
  })
}

//Initial rendering of all recipes
showRecipes(recipes)

//Function random
const getRandomValue = () => {
  container.innerHTML = ""

  recipes[Math.floor(Math.random() * recipes.length)]
  const recipe = recipes[Math.floor(Math.random() * recipes.length)]
  container.innerHTML += `
  <div class="recipe-card">
    <img src="${recipe.image}"/>
    <div class="recipe-text">
      <h3>${recipe.name}</h3>
      <p><b>Cuisine:</b> ${recipe.cuisineType}</p>
      <p><b>Cooking time</b>: ${recipe.totalTime} minutes</p>
      <p><b>Ingredients:</b></p>
      <ul>
        ${recipe.ingredients
          .map((ingredient) => `<li>${ingredient}</li>`)
          .join("")}
      </ul>
      <p class="recipe-link"><a href="${
        recipe.url
      }" target="_blank">Link to cooking method</a>
      </div>
  </div>
  `
}

//Function to show favorites
const showFavorites = () => {
  const favRecipes = recipes.filter((recipe) => recipe.favorite === true)
  showRecipes(favRecipes)
}

//Function to sorting descending
const filteredRecipesByDescending = () => {
  recipes.sort((a, b) => b.totalTime - a.totalTime)
  showRecipes(recipes)
}

//Function to sorting ascending
const filteredRecipesByAscending = () => {
  recipes.sort((a, b) => a.totalTime - b.totalTime)
  showRecipes(recipes)
}

//Function to filter on search input based on name or ingredient
const filterRecipesBySearchInput = (searchInputValue) => {
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchInputValue.toLowerCase())
      )
  )
  showRecipes(filteredRecipes)
}

//Function to filter on cuisineType
const filterRecipesByCuisine = (cuisineType) => {
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.cuisineType.includes(cuisineType)
  )
  //Call the showRecipes funciton with the filtered recipes
  showRecipes(filteredRecipes)
}

//Event listeners for the filter dropdown
filterRecipes.addEventListener("change", (event) => {
  const selectedCuisine = event.target.value

  // if selected value = all -> then show all recipes otherwise filter by cuisine type
  if (selectedCuisine === "all") {
    showRecipes(recipes)
  } else {
    filterRecipesByCuisine(selectedCuisine)
  }
})

//Event listener for favorites
favoriteButton.addEventListener("click", (event) => {
  event.preventDefault()
  showFavorites()
})

//Event listener for random
random.addEventListener("click", (event) => {
  event.preventDefault()
  getRandomValue()
})

//Event listener for searchform
searchForm.addEventListener("submit", (event) => {
  event.preventDefault()
  filterRecipesBySearchInput(searchInput.value)
})

//Event listener for sort on descending
descendingButtonForm.addEventListener("click", (event) => {
  event.preventDefault()
  filteredRecipesByDescending()
})

//Event listener for sorting on ascending
ascendingButtonForm.addEventListener("click", (event) => {
  event.preventDefault()
  filteredRecipesByAscending()
})

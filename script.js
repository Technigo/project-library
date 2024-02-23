// Get references to HTML elements using their IDs.
const container = document.getElementById("recipe-container");
const filterRecipes = document.getElementById("filter-recipes");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const descendingButtonForm = document.getElementById("descending");
const ascendingButtonForm = document.getElementById("ascending");
const random = document.getElementById("random");
const favoriteButton = document.getElementById("fav");

const recipes = [
  {
    name: "Individual Vegetarian Lasagnes",
    cuisineType: ["italian"],
    ingredients: [
      `1.2 kg cherry tomatoes`,
      `5 sprigs of fresh thyme`,
      `extra virgin olive oil`,
      `2 shallots`,
      `2 cloves of garlic`,
      `500 g baby spinach`,
      `8-12 fresh or dried lasagne sheets`,
      `350 g ricotta cheese`,
      `WHITE SAUCE`,
      `600 ml milk`,
      `25 g unsalted butter`,
      `2 heaped tablespoons flour`,
      `150 g vegetarian sharp, mature cheese`,
      `100 g mozzarella`,
    ],
    source: "Jamie Oliver",
    totalTime: 130,
    url: "http://www.jamieoliver.com/recipes/vegetables-recipes/individual-vegetarian-lasagnes/",
    image: "./recipe-images/individual-vegetarian-lasagnes.jpg",
  },
  {
    name: "Vegetarian Stir-Fried Garlic Scape",
    cuisineType: ["balanced"],
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
    totalTime: 100,
    url: "http://redcook.net/2010/06/16/garlic-scape-an-off-menu-treat/",
    image: "./recipe-images/vegetarian-stir-fried-garlic-s.jpg",
  },
  {
    name: "Cheat's Cheesy Focaccia",
    cuisineType: ["italian"],
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
    cuisineType: ["balanced", "high-fiber"],
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
      "1 tablespoon flour - all-purpose",
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
    name: "Burnt-Scallion Fish",
    cuisineType: ["asian"],
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
    cuisineType: ["asian"],
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
    cuisineType: "american",
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
    cuisineType: "american",
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
    name: "Spice-Rubbed Grilled Flap Meat (Sirloin Tip)",
    cuisineType: "south-american",
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
    cuisineType: "italian",
    ingredients: [
      "2 tablespoons extra-virgin olive oil, plus more for coating",
      "1 clove garlic, lightly crushed and peeled",
      "Generous pinch dried red pepper flakes",
      "4 cups passata or tomato purée",
      "Fine salt",
      "Two sprigs basil",
      "1 (8-ounce) ball mozzarella, diced",
      "16 ounces potato gnocchi, homemade or store-bought",
      "Freshly grated Parmigiano-Reggiano",
    ],
    source: "Domenica Marchetti",
    totalTime: 60,
    url: "https://www.themediterraneandish.com/gnocchi-alla-sorrentina/",
    image: "./recipe-images/gnochi.jpeg",
    favorite: true,
  },
  {
    name: "Salpicon",
    cuisineType: "mexican",
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
];

//Function to show favorites
const showFavorites = () => {
  const favRecipes = recipes.filter((recipe) => recipe.favorite === true);
  showRecipes(favRecipes);
};

//Function to show the recipes
const showRecipes = (recipesToShow) => {
  container.innerHTML = "";

  recipesToShow.forEach((recipe) => {
    container.innerHTML += `
    <div class="recipe-card">
      <img src="${recipe.image}"/>
      <div class="recipe-text">
        <h3>${recipe.name}</h3>
        <p><b>Cuisine:</b> ${recipe.cuisineType}</p>
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
    `;
  });
};

//Initial rendering of all recipes
showRecipes(recipes);

//Function random
const getRandomValue = () => {
  container.innerHTML = "";

  recipes[Math.floor(Math.random() * recipes.length)];
  const recipe = recipes[Math.floor(Math.random() * recipes.length)];
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
  `;
};

//Function to sorting descending
const filteredRecipesByDescending = () => {
  recipes.sort((a, b) => a.totalTime - b.totalTime);
  showRecipes(recipes);
};

//Function to sorting ascending
const filteredRecipesByAscending = () => {
  recipes.sort((a, b) => b.totalTime - a.totalTime);
  showRecipes(recipes);
};

//Function to filter on search input based on name or ingredient
const filterRecipesBySearchInput = (searchInputValue) => {
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchInputValue.toLowerCase())
      )
  );
  showRecipes(filteredRecipes);
};

//Function to filter on cuisineType
const filterRecipesByCuisine = (cuisineType) => {
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.cuisineType.includes(cuisineType)
  );
  //Call the addRecipes funciton with the filtered recipes
  showRecipes(filteredRecipes);
};

//Event listeners for the filter dropdown
filterRecipes.addEventListener("change", (event) => {
  const selectedCuisine = event.target.value;

  // if selected value = all -> then show all recipes otherwise filter by cuisine type
  if (selectedCuisine === "all") {
    showRecipes(recipes);
  } else {
    filterRecipesByCuisine(selectedCuisine);
  }
});

//Event listener for favorites
favoriteButton.addEventListener("click", (event) => {
  event.preventDefault();
  showFavorites();
});

//Event listener for random
random.addEventListener("click", (event) => {
  event.preventDefault();
  getRandomValue();
});

//Event listener for searchform
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  filterRecipesBySearchInput(searchInput.value);
});

//Event listener for sort on descending
descendingButtonForm.addEventListener("click", (event) => {
  event.preventDefault();
  filteredRecipesByDescending();
});

//Event listener for sorting on ascending
ascendingButtonForm.addEventListener("click", (event) => {
  event.preventDefault();
  filteredRecipesByAscending();
});

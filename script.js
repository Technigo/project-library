// Array of objects
const recipes = [
  {
    name: "Avocado Toast with Egg",
    cuisineType: ["italian"],
    ingredients: [
      "Avocado",
      "Eggs",
      "Whole-grain bread slices",
      "Salt",
      "Black pepper",
      "Red pepper flakes (optional)",
      "Cherry tomatoes (optional, for garnish)",
      "Fresh cilantro or parsley (optional, for garnish)",
    ],
    source: "Jamie Oliver",
    totalTime: 130,
    url: "http://www.jamieoliver.com/recipes/vegetables-recipes/individual-vegetarian-lasagnes/",
    image: "./assets/recipe-images/big-recipy.jpg",
  },
  {
    name: "Citrus Shrimp Salad with Avocado",
    cuisineType: ["Balanced"],
    ingredients: [
      "Shrimp",
      "Avocado",
      "Garlic scapes",
      "Baby corn",
      "Carrots",
      "Dried shiitake mushrooms",
      "Garlic, sliced thinly",
      "Fresh ginger root slices",
      "Vegetable oil",
      "Shaoxing cooking wine",
      "Vegetarian stock or water",
      "Light soy sauce",
      "Sugar",
      "Cornstarch",
      "Ground white pepper",
    ],
    source: "Red Cook",
    totalTime: null,
    url: "http://redcook.net/2010/06/16/garlic-scape-an-off-menu-treat/",
    image: "./assets/recipe-images/avovado-shrimp.jpg",
  },
  {
    name: "Caprese Avocado Toast",
    cuisineType: ["Italian"],
    ingredients: [
      "Bread mix (500g pack)",
      "Olive oil (2 tbsp, plus extra for drizzling)",
      "Parmesan cheese (or vegetarian alternative, 25g, grated)",
      "Dolcelatte cheese (or vegetarian alternative, 75g)",
      "Avocado",
      "Tomatoes",
      "Fresh basil leaves",
      "Balsamic glaze (optional)",
    ],
    source: "BBC Good Food",
    totalTime: 40,
    url: "https://www.bbcgoodfood.com/recipes/cheats-cheesy-focaccia",
    image: "./assets/recipe-images/bruschetta-avocado.jpg",
  },
  {
    name: "Salmon Avocado Salad",
    cuisineType: ["Balanced", "High-Fiber"],
    ingredients: [
      "Extra-virgin olive oil (2 tablespoons)",
      "Onion (1 large, finely diced)",
      "Carrots (2, peeled and thinly sliced)",
      "Celery stalks (2, thinly sliced)",
      "Cremini mushrooms (10 ounces, trimmed and sliced)",
      "Tomato paste (1 tablespoon)",
      "Vegetarian Worcestershire sauce (1 tablespoon, such as Annie's Naturals)",
      "Dried bay leaf (1)",
      "French green lentils (1 cup, picked over)",
      "Kosher salt and freshly ground pepper",
      "Frozen peas (1 cup)",
      "Yukon Gold potatoes (2 pounds, scrubbed and cut into 1 1/2-inch pieces)",
      "Garlic (4 cloves)",
      "Unsalted butter (4 tablespoons)",
      "Whole milk (1/2 cup, warmed)",
      "Smoked salmon (as desired)",
      "Avocado (1, sliced)",
      "Fresh dill (for garnish)",
    ],
    source: "Martha Stewart",
    totalTime: 120,
    url: "https://www.marthastewart.com/1535235/vegetarian-shepherds-pie",
    image: "./assets/recipe-images/salmon-avocado.jpg",
  },
  {
    name: "Cucumber Avocado Salad",
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
    image: "./assets/recipe-images/gurka-avocado.jpg",
  },
  {
    name: "Creamy Avocado Soup",
    cuisineType: ["american"],
    ingredients: [
      "Cucumbers (2, thinly sliced)",
      "Avocado (1, diced)",
      "Cherry tomatoes (1 cup, halved)",
      "Red onion (1/4 cup, finely chopped)",
      "Feta cheese (1/2 cup, crumbled)",
      "Fresh mint leaves (2 tablespoons, chopped)",
      "Extra-virgin olive oil (3 tablespoons)",
      "Lemon juice (1 tablespoon)",
      "Dijon mustard (1 teaspoon)",
      "Honey (1 teaspoon)",
      "Salt and pepper to taste",
    ],
    source: "Martha Stewart",
    totalTime: 90,
    url: "http://www.marthastewart.com/318981/baked-chicken",
    image: "./assets/recipe-images/creamy-avocado-soup.jpg",
  },
  {
    name: "Avocado Bruschetta Toast",
    cuisineType: ["south east asian"],
    ingredients: [
      "Baguette slices (4)",
      "Ripe avocados (2, mashed)",
      "Cherry tomatoes (1 cup, diced)",
      "Garlic cloves (2, minced)",
      "Fresh basil leaves (1/4 cup, chopped)",
      "Balsamic glaze (2 tablespoons)",
      "Extra-virgin olive oil (2 tablespoons)",
      "Salt and pepper to taste",
    ],
    source: "Serious Eats",
    totalTime: 31,
    url: "http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html",
    image: "./assets/recipe-images/bruschetta-ruccola.jpg",
  },
  {
    name: "Avocado Smoothie",
    cuisineType: ["chinese"],
    ingredients: [
      "Ripe avocado (1, peeled and pitted)",
      "Banana (1, peeled)",
      "Greek yogurt (1/2 cup)",
      "Honey (2 tablespoons)",
      "Almond milk (1 cup)",
      "Ice cubes (1 cup)",
    ],
    source: "Saveur",
    totalTime: 70,
    url: "http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish",
    image: "./assets/recipe-images/avocado-smoothie.jpg",
  },
  {
    name: "Green Smoothie Bowl Avocado",
    cuisineType: ["south east asian"],
    ingredients: [
      "Spinach leaves (2 cups, fresh)",
      "Avocado (1, peeled and pitted)",
      "Banana (1, peeled)",
      "Chia seeds (1 tablespoon)",
      "Coconut milk (1/2 cup)",
      "Greek yogurt (1/4 cup)",
      "Honey (1 tablespoon, optional)",
      "Granola (for topping)",
      "Fresh berries (for topping)",
    ],
    source: "BBC Good Food",
    totalTime: 80,
    url: "http://www.bbcgoodfood.com/recipes/4717/",
    image: "./assets/recipe-images/green-smoothie-bowl.jpg",
  },
  {
    name: "Green Smoothie Bowl",
    cuisineType: ["american"],
    ingredients: [
      "Spinach leaves (2 cups, fresh)",
      "Avocado (1, peeled and pitted)",
      "Banana (1, peeled)",
      "Chia seeds (1 tablespoon)",
      "Almond milk (1/2 cup)",
      "Greek yogurt (1/4 cup)",
      "Honey (1 tablespoon, optional)",
      "Granola (for topping)",
      "Fresh berries (for topping)",
    ],
    source: "Food52",
    totalTime: 60,
    url: "https://food52.com/recipes/3712-meat-stock",
    image: "./assets/recipe-images/green-bowl.jpg",
  },
  {
    name: "Avocado Chocolate Mousse",
    cuisineType: ["american"],
    ingredients: [
      "Ripe avocados (2, peeled and pitted)",
      "Cocoa powder (1/4 cup)",
      "Maple syrup (1/4 cup, or to taste)",
      "Vanilla extract (1 teaspoon)",
      "Almond milk (1/4 cup, or as needed)",
      "Dark chocolate (70% cocoa, melted, 1/2 cup)",
      "Fresh berries (for garnish)",
      "Chopped nuts (for garnish)",
      "Whipped cream (optional, for topping)",
    ],
    source: "Cookstr",
    totalTime: 60,
    url: "http://www.cookstr.com/recipes/il-brodo-homemade-meat-broth",
    image: "./assets/recipe-images/chocolate-mousse.jpg",
  },
  {
    name: "Vietnamese Avocado Mousse Ice Cream",
    cuisineType: ["vietnamese"],
    ingredients: [
      "Ripe avocados (2, peeled and pitted)",
      "Sweetened condensed milk (1 cup)",
      "Coconut milk (1 cup)",
      "Heavy cream (1 cup)",
      "Granulated sugar (1/2 cup, or to taste)",
      "Lime juice (1 tablespoon)",
      "Vanilla extract (1 teaspoon)",
      "Salt (1/4 teaspoon)",
      "Chopped toasted nuts (for garnish)",
      "Shredded coconut (for garnish)",
    ],
    source: "Serious Eats",
    totalTime: 240,
    url: "http://www.seriouseats.com/recipes/2012/05/spice-rubbed-grilled-flap-meat-sirloin-tip-recipe.html",
    image: "./assets/recipe-images/avocado-mousse.jpg",
  },
];

const recipyStoryLoader = (recipy) => {
  const recipyStory = document.getElementById("big-story");

  // Add first recipy to top stories
  recipyStory.innerHTML += `
   <div class="content">
     
     <img
     src=${recipy.image}
     alt="Recipy Image"
     height="auto"
     />
 
     <div class="description">
       <h3>${recipy.name}</h3>
       <hr />
       <p><span>Cuisine:</span> ${recipy.cuisineType
         .map((cuisine) => cuisine)
         .join("")}</p>
       <p><span>Time:</span> 2h 10min</p>
     </div>
   </div>
 
   <div class="ingredients">
     <h3>Ingredients</h3>
     <ul>
     ${recipy.ingredients
       .map((ingredient) => `<li>${ingredient}</li>`)
       .join("")}
     </ul>
   </div>
   `;
};
recipyStoryLoader(recipes[0]);

// Function for loading and displaying recipes
const recipyLoader = (recipes) => {
  console.log(recipes);
  const recipyWrapper = document.getElementById("section__recipes");

  recipyWrapper.innerHTML = "";

  recipes.forEach((recipy) => {
    recipyWrapper.innerHTML += `
    <div class="recipy-wrapper">
      <img
      src=${recipy.image}
        alt="Recipy Image"
        height="auto"
      />
      <h3>${recipy.name}</h3>
        <p><span>Cuisine: Italian</span></p>
        <p><span>Time: 1h 20min</span></p>
      <hr />
      <h3>Ingredients</h3>
      <ul>
      ${recipy.ingredients
        .map((ingredient) => `<li>${ingredient}</li>`)
        .join("")}
      </ul>
    </div>

    `;
  });
};
recipyLoader(recipes);

// Function to filter and display recipes based on cuisine and source
const filterLoader = (recipes) => {
  const getCuisineTypes = () => {
    // Get all unique cusine types
    const cusineSet = new Set();

    recipes.forEach((recipe) => {
      recipe.cuisineType.forEach((cuisineType) => {
        cusineSet.add(cuisineType.toLowerCase());
      });
    });
  };

  // Filter out all the cusines from recipies array
  const filteredCusine = [];

  // Sort cusine from a -> z
  const sortedCusine = filteredCusine.sort();

  // Displaying all the cusine filters
  const filterDropdown = document.getElementById("filterDropdown");
  sortedCusine.forEach((cusine) => {
    filterDropdown.innerHTML += `
    <label>
      <input type="checkbox" name="${cusine}" class="cuisine" value="${cusine}"/>
      ${cusine}
    </label> `;
  });

  // Get the cusineTitle and add eventlistener
  const cusineTitle = document.getElementById("cusine");
  // When clicking open the dropdown
  cusineTitle.addEventListener("click", () => {
    filterDropdown.classList.toggle("active");

    // Get all cusines in the dropdown
    const selectedCusines = document.querySelectorAll(
      '#filterDropdown input[type="checkbox"]'
    );
    // Get the selected values
    let cusineValue = Array.from(selectedCusines).map((cusine) => cusine.value);
    console.log(cusineValue);

    // create array with selected cusines and send it to recipyloader
    let filteredCusines = [];
    recipes.forEach((recipe) => {
      if (recipe.cusineType === cusineValue) {
        console.log("test");
      }
    });

    // recipyLoader(selectedCusines);
  });
};

filterLoader(recipes);

// sort ascending
// random.sort((a, b) => a - b)

// random.sort((a, b) => b - a)

const notTheCs = (name) => {
  // remove all pokemons that starts with C
};
notTheCs(pokemons);

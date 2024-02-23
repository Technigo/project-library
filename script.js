// Array with recipes //
const recipes = [
  {
    name: "Rosemary Garlic Focaccia",
    cuisine: "Italian",
    totalTime: "95",
    servings: "8",
    ingredients: [
      "500 g - Strong white bread flour",
      "2 x 7 g - Dried yeast sachets",
      "1 tbsp - Sugar",
      "3 tbsp - Olive Olive",
      "1 bulb - Garlic, top sliced off",
      "150g - Cherry tomatoes",
      "1 handful - Rosemary sprigs",
    ],
    url: "https://www.funfoodfrolic.com/roasted-onion-garlic-and-rosemary/",
    image: "./recipe-images/Focaccia.jpg",
  },
  {
    name: "Fermented-Soybean Stew",
    cuisine: "Korean",
    totalTime: "40",
    servings: "4",
    ingredients: [
      "4 cups - Dashi (Japanese broth)",
      "¼ cup - Doenjang (Korean fermented soybean paste)",
      "1 tbsp - Gochujang (Korean red chili paste)",
      "1 tbsp - Gochugaru (Korean red chili flakes)",
      "6 - Garlic cloves, minced",
      "2 tbsp - Soy sauce",
    ],
    url: "https://www.epicurious.com/recipes/food/views/doenjang-jjigae-fermented-soybean-stew-my-korea",
    image: "./recipe-images/Korean-Stew.jpg",
  },
  {
    name: "Texas-Style Beef Brisket",
    cuisine: "American",
    totalTime: "990",
    servings: "12",
    ingredients: [
      "6 pounds - Fresh beef brisket",
      "3 tbsp - Worcestershire sauce",
      "2 - Garlic cloves, minced ",
      "2 - Bay leaves ",
      "1/2 cup - Beef broth ",
      "1 tbsp - Chili powder",
      "1 tsp - Celery salt",
    ],
    url: "https://www.tasteofhome.com/recipes/texas-style-beef-brisket/",
    image: "./recipe-images/Beef-Brisket.jpg",
  },
  {
    name: "Ham Hock Rotolo",
    cuisine: "Italian",
    totalTime: "75",
    servings: "4 - 6",
    ingredients: [
      "6 sheets - Fresh egg lasagne ",
      "50 g - Grana Padano",
      "300 g - Spinach",
      "500 g - Mascarpone",
      "200 g Ham Hock",
      "2 - Garlic cloves, crushed",
      "1 - Lemon, zested and juiced",
    ],
    url: "https://www.olivemagazine.com/recipes/meat-and-poultry/spinach-mascarpone-and-ham-hock-rotolo/",
    image: "./recipe-images/Rotolo.jpg",
  },
];

// Function to that creates HTML elements for each recipes within a container //
const recipeContainer = document.getElementById("recipeContainer");

function renderRecipes(recipesToRender) {
  recipeContainer.innerHTML = "";
  recipesToRender.forEach(function (recipe) {
    const recipeHtml = `
          <div class="grid-child">
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <h4>Cuisine: <span>${recipe.cuisine}</span></h4>
            <h4>Servings: <span>${recipe.servings}</span></h4>
            <h4>Time: <span>${recipe.totalTime} min</span></h4>
            <h5>Ingredients</h5>
            <span>${recipe.ingredients.join("<br>")}</span>
            <a href="${
              recipe.url
            }" class="recipe-link"><button class="show-more-btn">Show more</button></a>
          </div>
        `;
    recipeContainer.innerHTML += recipeHtml;
  });
}

// Function to filter recipes by cuisine type //
const filterButtons = document.querySelectorAll(".filter .buttons button");

function filterRecipesByCuisine(cuisine) {
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.cuisine.toLowerCase() === cuisine.toLowerCase()
  );
  renderRecipes(filteredRecipes);

  filterButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  if (cuisine !== "all") {
    this.classList.add("active");
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const cuisine = button.textContent.toLowerCase();
    if (cuisine === "all") {
      renderRecipes(recipes);

      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      this.classList.add("active");
    } else {
      filterRecipesByCuisine.call(button, cuisine);
    }
  });
});

// Function to filter recipes by cookingtime, ascending & descending //
const ascendingBtn = document.querySelector(
  ".sort .buttons button:nth-child(2)"
);
const descendingBtn = document.querySelector(
  ".sort .buttons button:nth-child(1)"
);

function sortByTimeAscending() {
  const sortedRecipes = recipes
    .slice()
    .sort((a, b) => a.totalTime - b.totalTime);
  renderRecipes(sortedRecipes);

  ascendingBtn.classList.remove("active");
  descendingBtn.classList.remove("active");

  this.classList.add("active");
}

function sortByTimeDescending() {
  const sortedRecipes = recipes
    .slice()
    .sort((a, b) => b.totalTime - a.totalTime);
  renderRecipes(sortedRecipes);

  ascendingBtn.classList.remove("active");
  descendingBtn.classList.remove("active");

  this.classList.add("active");
}

// Button that randomizes a recipe //
function getRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  const randomRecipe = recipes[randomIndex];
  renderRecipes([randomRecipe]);
}

// Event listeners //
document
  .getElementById("randomizeButton")
  .addEventListener("click", getRandomRecipe);
ascendingBtn.addEventListener("click", sortByTimeAscending);
descendingBtn.addEventListener("click", sortByTimeDescending);

// Initial render
renderRecipes(recipes);

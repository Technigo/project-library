import { recipes } from "./recipes.js";
import { loadRecipeStory, loadRecipes } from "./loaders.js";
import { filterRecipes } from "./filters.js";
const cuisineDropdown = document.getElementById("cuisine");
const authorDropdown = document.getElementById("author");

// Toogle the dropdown
cuisineDropdown.addEventListener("click", (e) => {
  filterRecipes(recipes, e);
});

authorDropdown.addEventListener("click", (e) => {
  filterRecipes(recipes, e);
});

// Load the initial list of dogs when the page loads
loadRecipeStory(recipes[0]);
loadRecipes(recipes);

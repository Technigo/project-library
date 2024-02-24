import { recipes } from "./recipes.js";
import { loadRecipeStory, loadRecipes } from "./loaders.js";
import { filterRecipes } from "./filters.js";
const cuisineDropdown = document.getElementById("cuisine");
const authorDropdown = document.getElementById("author");

// Toogle the dropdown
cuisineDropdown.addEventListener("click", (e) => {
  const targetId = e.target.id;

  // Om jag clickar på cuisine så ska author stängas.
  if (targetId === "cuisine") {
    document.getElementById("filterAuthor").classList.remove("active");
    loadRecipes(recipes);
  }
  filterRecipes(recipes, targetId);
});

authorDropdown.addEventListener("click", (e) => {
  const targetId = e.target.id;
  if (targetId === "author") {
    document.getElementById("filterCuisine").classList.remove("active");
    loadRecipes(recipes);
  }
  filterRecipes(recipes, targetId);
});

// Load the initial list of dogs when the page loads
loadRecipeStory(recipes[0]);
loadRecipes(recipes);

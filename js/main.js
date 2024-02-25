import { recipes } from "./recipes.js";
import { loadRecipeStory, loadRecipes } from "./loaders.js";
import { filterRecipes } from "./filters.js";
import { handleSort } from "./sort.js";
const cuisineDropdown = document.getElementById("cuisine");
const authorDropdown = document.getElementById("author");
const sortButtons = document.querySelectorAll(".sort-wrapper button");

// Toogle the filter dropdown
cuisineDropdown.addEventListener("click", (e) => {
  const targetId = e.target.id;

  // Close all dropdowns if target is not cuisine
  if (targetId === "cuisine") {
    document.getElementById("filterAuthor").classList.remove("active");
    loadRecipes(recipes);
  }
  filterRecipes(recipes, targetId);
});

authorDropdown.addEventListener("click", (e) => {
  const targetId = e.target.id;

  // Close all dropdowns if target is not author
  if (targetId === "author") {
    document.getElementById("filterCuisine").classList.remove("active");
    loadRecipes(recipes);
  }
  filterRecipes(recipes, targetId);
});

// Add eventlistners to sort buttons
sortButtons.forEach((sortButton) => {
  sortButton.addEventListener("click", (e) => {
    const targetId = e.target.id;
    handleSort(recipes, targetId);
  });
});

// Load the initial list of dogs when the page loads
loadRecipeStory(recipes[0]);
loadRecipes(recipes);

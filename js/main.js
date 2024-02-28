import { recipes } from "./recipes.js";
import { loadRecipeStory, loadRecipes } from "./loaders.js";
import { filterRecipes } from "./filters.js";
import { handleSort } from "./sort.js";
import { handleSearchForm } from "./search.js";
const cuisineDropdown = document.getElementById("cuisine");
const authorDropdown = document.getElementById("author");
const sortDropdown = document.getElementById("sortDropdown");
const sortOptions = Array.from(sortDropdown.options);
const searchForm = document.getElementById("searchForm");

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

// Event listner for sort options
sortOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    handleSort(recipes, e);
  });
});

// Event listner for search form
searchForm.addEventListener("submit", (e) => handleSearchForm(recipes, e));

// Load the initial list of recipes when the page loads
loadRecipeStory(recipes[0]);
loadRecipes(recipes);

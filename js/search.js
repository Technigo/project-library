import { loadRecipes } from "./loaders.js";

let searchInput = document.getElementById("searchInput");
const searchContainer = document.getElementById("search-container");

const handleSearchForm = (recipes, e) => {
  e.preventDefault();

  const searchKey = searchInput.value.toLowerCase();

  const results = recipes.filter((recipe) => {
    return Object.values(recipe).some((value) => {
      console.log(value);
      if (Array.isArray(value)) {
        return value.some((item) => item.toLowerCase().includes(searchKey));
      } else if (typeof value === "string") {
        return value.toLowerCase().includes(searchKey);
      }
      return false;
    });
  });

  if (!results) {
    console.log("Nothing found");
    return false;
  } else {
    loadRecipes(results);
  }
};

export { handleSearchForm };

import { loadRecipes } from "./loaders.js";

const handleSort = (recipes, targetId) => {
  let sortedRecipes = recipes.map((recipe) => recipe);

  switch (targetId) {
    case "sortDesc":
      sortedRecipes = sortedRecipes.sort((a, b) => b.totalTime - a.totalTime);
      break;
    case "sortAsc":
      sortedRecipes = sortedRecipes.sort((a, b) => a.totalTime - b.totalTime);
      break;
    default:
      break;
  }

  return loadRecipes(sortedRecipes);
};

export { handleSort };

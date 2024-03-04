import { loadRecipes } from "./loaders.js";

const handleSort = (recipes, e) => {
  const sortValue = e.target.value;
  let sortedRecipes = recipes.map((recipe) => recipe);

  switch (sortValue) {
    case "all":
      loadRecipes(recipes);
      break;
    case "sortDesc":
      sortedRecipes = sortedRecipes.sort((a, b) => b.totalTime - a.totalTime);
      break;
    case "sortAsc":
      sortedRecipes = sortedRecipes.sort((a, b) => a.totalTime - b.totalTime);
      break;
    case "sortAtoZ":
      // localeCompare helps resolve compatibility issues between browsers.
      sortedRecipes.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "sortZtoA":
      sortedRecipes.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "sortLessThan10":
      sortedRecipes = sortedRecipes.filter(
        (recipe) => recipe.ingredients.length <= 10
      );
      break;
    default:
      break;
  }

  return loadRecipes(sortedRecipes);
};

export { handleSort };

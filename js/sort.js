import { loadRecipes } from "./loaders.js";

const handleSort = (recipes, sortValue) => {
  let sortedRecipes = recipes.map((recipe) => recipe);

  switch (sortValue) {
    case "sortDesc":
      sortedRecipes = sortedRecipes.sort((a, b) => b.totalTime - a.totalTime);
      break;
    case "sortAsc":
      sortedRecipes = sortedRecipes.sort((a, b) => a.totalTime - b.totalTime);
      break;
    case "sortAtoZ":
      sortedRecipes = sortedRecipes.sort((a, b) => b.name < a.name);
      break;
    case "sortZtoA":
      sortedRecipes = sortedRecipes.sort((a, b) => b.name > a.name);
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

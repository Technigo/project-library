// Get references to HTML elements using their IDs
const recipeStory = document.getElementById("big-story");
const recipeWrapper = document.getElementById("section__recipes");

const toHoursAndMinutes = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  let result = "";

  if (hours > 0) {
    result += `${hours}h `;
  }
  if (minutes > 0) {
    result += `${minutes}m`;
  }
  return result.trim();
};

const makeFirstLetterUppercase = (words) => {
  const result = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(", ");

  return result;
};

// Function to load and display the list of recipe
const loadRecipeStory = (recipe) => {
  // Add first recipe to top stories
  recipeStory.innerHTML += `
   <div class="content">
     
     <img
     src=${recipe.image}
     alt="recipe Image"
     height="auto"
     />
 
     <div class="description">
       <h3>${recipe.name}</h3>
       <hr />
       <p><span>Cuisine:</span> ${makeFirstLetterUppercase(
         recipe.cuisineType
       )}</p>
       <p><span>Time: </span>${toHoursAndMinutes(recipe.totalTime)}</p>
     </div>
   </div>
 
   <div class="ingredients">
     <h3>Ingredients</h3>
     <ul>
     ${recipe.ingredients
       .map((ingredient) => `<li>${ingredient}</li>`)
       .join("")}
     </ul>
   </div>
   `;
};

// Function for loading and displaying recipes
const loadRecipes = (recipes) => {
  recipeWrapper.innerHTML = "";

  recipes.forEach((recipe) => {
    recipeWrapper.innerHTML += `
    <div class="recipe-wrapper">
      <img
      src=${recipe.image}
        alt="recipe Image"
        height="auto"
      />
      <h3>${recipe.name}</h3>
        <p><span>Cuisine: ${makeFirstLetterUppercase(
          recipe.cuisineType
        )}</span></p>
        <p><span>Time: ${toHoursAndMinutes(recipe.totalTime)}</span></p>
        <p>${recipe.author}</p>
      <hr />
      <h3>Ingredients</h3>
      <ul>
      ${recipe.ingredients
        .map((ingredient) => `<li>${ingredient}</li>`)
        .join("")}
      </ul>
    </div>

    `;
  });
};

export { loadRecipes, loadRecipeStory };

// Get references to HTML elements using their IDs
const recipeStory = document.getElementById("big-story");
const recipeWrapper = document.getElementById("section__recipes");

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
       <p><span>Cuisine:</span> ${recipe.cuisineType
         .map((cuisine) => cuisine)
         .join("")}</p>
       <p><span>Time:</span> 2h 10min</p>
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
        <p><span>Cuisine: ${recipe.cuisineType}</span></p>
        <p><span>Time: 1h 20min</span></p>
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

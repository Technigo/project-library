// Get references to HTML elements using their IDs
const recipeStory = document.getElementById("big-story");
const recipeWrapper = document.getElementById("section__recipes");
const cuisineDropdown = document.getElementById("cuisine");
const authorDropdown = document.getElementById("author");
const filterAuthors = document.getElementById("filterAuthors");
const filterCuisines = document.getElementById("filterCuisines");
const filterDropdown = document.querySelector(".filterDropdown");

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

// Function to fetch options for filtering recipies
const fetchFilterOptions = (targetId) => {
  // Need to adjust cuisine -> Cuisine
  // Om jag klickar på author så använder jag target id för att trigga dropdown
  const newTargetId = targetId.charAt(0).toUpperCase() + targetId.slice(1);
  const filterDropdown = document.getElementById("filter" + newTargetId);

  const getTypes = (targetId) => {
    const typeSet = new Set();

    if (targetId === "cuisine") {
      recipes.forEach((recipe) => {
        recipe.cuisineType.forEach((cuisineType) => {
          typeSet.add(cuisineType.toLowerCase());
        });
      });
      // Toogle the dropdown
      filterDropdown.classList.toggle("active");
    } else if (targetId === "author") {
      recipes.forEach((recipe) => {
        typeSet.add(recipe.author.toLowerCase());
      });
      // Toogle the dropdown
      filterDropdown.classList.toggle("active");
    }

    return [...typeSet].sort();
  };

  const loadFilters = (types) => {
    // Clean the dropdown
    filterDropdown.innerHTML = "";

    types.forEach((type) => {
      filterDropdown.innerHTML += `
      <label>
        <input type="checkbox" name="${targetId}" class="${targetId}" value="${type}"/>
        ${type}
      </label> `;
    });
  };

  loadFilters(getTypes(targetId));
};

// Function to filter and display recipes based on cuisine and author
const filterRecipes = (e) => {
  // Get the id from the dropdown
  const targetId = e.target.id;

  // Need to get the checkboxes
  fetchFilterOptions(targetId);
};

// Function to display the list of favorite dogs

// Apply the filter when the user changes the dropdown selection
cuisineDropdown.addEventListener("click", filterRecipes);
authorDropdown.addEventListener("click", filterRecipes);
// Load the initial list of dogs when the page loads
loadRecipeStory(recipes[0]);
loadRecipes(recipes);

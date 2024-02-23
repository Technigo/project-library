// Get references to HTML elements using their IDs
const recipeStory = document.getElementById("big-story");
const recipeWrapper = document.getElementById("section__recipes");
const cuisineDropdown = document.getElementById("cuisine");
const authorDropdown = document.getElementById("author");
const filterAuthors = document.getElementById("filterAuthors");
const filterCuisines = document.getElementById("filterCuisines");
// const filterDropdown = document.querySelector(".filterDropdown");

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

// Function that will fetch and display the current filter options in the dropdown
const fetchFilterOptions = (targetId) => {
  console.log("This is the fetch filter option");
  // Convert targetId 'cuisine' to "Cuisine" before attaching
  const titleTarget = targetId.charAt(0).toUpperCase() + targetId.slice(1);

  // Get the filter dropdown element
  const filterDropdown = document.getElementById("filter" + titleTarget);

  // Toggle the visibility of the filter dropdown when clicking on the title
  filterDropdown.classList.toggle("active");

  // Function to get all cuisines or authors in the recipe array
  const getTargetValues = (targetId) => {
    console.log("Get all cuisines or authors in the recipe array");
    const targetValues = new Set();

    recipes.forEach((recipe) => {
      if (targetId === "cuisine") {
        recipe.cuisineType.forEach((cuisine) =>
          targetValues.add(cuisine.toLowerCase())
        );
      } else if (targetId === "author") {
        targetValues.add(recipe.author.toLowerCase());
      }
    });
    return [...targetValues].sort(); // Convert Set to array and sort
  };

  // Function to generate checkboxes based on unique values: Need targetId (cuisine) and the targetValues
  const generateCheckboxes = (targetId, targetValues) => {
    console.log("Display checkboxes for the clicked titleTarget");
    return targetValues
      .map(
        (value, index) =>
          `<label>
        <input type="checkbox" id="${targetId}-${index}" name="${targetId}" class="${targetId}" value="${value}"/>
        ${value}
      </label> `
      )
      .join("");
  };

  // Get target values for the specifies filter category
  const targetValues = getTargetValues(targetId);
  const checkboxesHTML = generateCheckboxes(targetId, targetValues);
  filterDropdown.innerHTML = checkboxesHTML;
};

// Implement the filterRecipes Function
const filterRecipes = (recipes, e) => {
  console.log("This is the filter recipes.");
  // Get the id from the dropdown
  const targetId = e.target.id;

  // Get the checkboxes corresponding to the targetId (cuisine or author)
  fetchFilterOptions(targetId);

  console.log("Getting checkboxes in the filter function using the target id");
  const checkboxes = document.querySelectorAll(`.${targetId}`);
  console.log(checkboxes);
};

// Apply the filter when the user changes the dropdown selection
cuisineDropdown.addEventListener("click", (e) => filterRecipes(recipes, e));
authorDropdown.addEventListener("click", (e) => filterRecipes(recipes, e));

// Load the initial list of dogs when the page loads
loadRecipeStory(recipes[0]);
loadRecipes(recipes);

// const filterCuisines = document.getElementById("filterCuisines");
// const filterSource = document.getElementById("filterSource");

// const appendClosingButton = () => {
//   filterCuisines.innerHTML += `
//   <button id="close-dropdown">Close</button>
//   `;

//   const closingButton = document.getElementById("close-dropdown");

//   closingButton.addEventListener("click", () => {
//     filterCuisines.classList.toggle("active");
//   });
// };

// const displayCuisineCheckboxes = (recipes) => {
//   const cuisineTitle = document.getElementById("cuisine");

//   const getCuisineTypes = () => {
//     // Get all unique cusine types
//     const cuisineSet = new Set();

//     recipes.forEach((recipe) => {
//       recipe.cuisineType.forEach((cuisineType) => {
//         cuisineSet.add(cuisineType.toLowerCase());
//       });
//     });

//     // Sort cusine from a -> z
//     return [...cuisineSet].sort();
//   };

//   // Function that will display all the cuisine types in dropdown
//   const createCuisineCheckboxes = (cuisineTypes) => {
//     cuisineTypes.forEach((cuisine) => {
//       filterCuisines.innerHTML += `
//         <label>
//           <input type="checkbox" name="cuisine" class="cuisine" value="${cuisine}"/>
//           ${cuisine}
//         </label> `;
//     });
//   };

//   // Get cuisine types and display cuisine checkboxes
//   const cuisinesTypes = getCuisineTypes();
//   createCuisineCheckboxes(cuisinesTypes);

//   // Append closing button
//   appendClosingButton();

//   // Eventlistner for cuisine dropdown
//   cuisineTitle.addEventListener("click", () => {
//     filterCuisines.classList.toggle("active");
//   });
// };

const recipyStoryLoader = (recipy) => {
  const recipyStory = document.getElementById("big-story");

  // Add first recipy to top stories
  recipyStory.innerHTML += `
   <div class="content">
     
     <img
     src=${recipy.image}
     alt="Recipy Image"
     height="auto"
     />
 
     <div class="description">
       <h3>${recipy.name}</h3>
       <hr />
       <p><span>Cuisine:</span> ${recipy.cuisineType
         .map((cuisine) => cuisine)
         .join("")}</p>
       <p><span>Time:</span> 2h 10min</p>
     </div>
   </div>
 
   <div class="ingredients">
     <h3>Ingredients</h3>
     <ul>
     ${recipy.ingredients
       .map((ingredient) => `<li>${ingredient}</li>`)
       .join("")}
     </ul>
   </div>
   `;
};
recipyStoryLoader(recipes[0]);

// Function for loading and displaying recipes
const recipyLoader = (recipes) => {
  const recipyWrapper = document.getElementById("section__recipes");

  recipyWrapper.innerHTML = "";

  recipes.forEach((recipy) => {
    recipyWrapper.innerHTML += `
    <div class="recipy-wrapper">
      <img
      src=${recipy.image}
        alt="Recipy Image"
        height="auto"
      />
      <h3>${recipy.name}</h3>
        <p><span>Cuisine: ${recipy.cuisineType}</span></p>
        <p><span>Time: 1h 20min</span></p>
      <hr />
      <h3>Ingredients</h3>
      <ul>
      ${recipy.ingredients
        .map((ingredient) => `<li>${ingredient}</li>`)
        .join("")}
      </ul>
    </div>

    `;
  });
};
recipyLoader(recipes);

const cuisineLoader = () => {
  displayCuisineCheckboxes(recipes);
  const filterCuisines = document.querySelectorAll(".cuisine");
  // Funktion to filter recipes by cuisine
  const filterRecipesByCuisine = () => {
    const selectedCuisines = Array.from(filterCuisines)
      .filter((cuisine) => cuisine.checked)
      .map((cuisine) => cuisine.value);

    // Filter recipes based on selected cuisines
    const filteredRecipes = recipes.filter((recipy) =>
      recipy.cuisineType.some((cuisine) =>
        selectedCuisines.includes(cuisine.toLowerCase())
      )
    );

    recipyLoader(filteredRecipes.length ? filteredRecipes : recipes);
  };

  // Add eventlistner to each checkbox
  filterCuisines.forEach((cuisine) => {
    cuisine.addEventListener("change", filterRecipesByCuisine);
  });
};

const authorLoader = (recipes) => {
  console.log("tes");
};

// Function to filter and display recipes based on cuisine and source
const filterLoader = (recipes) => {
  cuisineLoader(recipes);
  authorLoader(recipes);
};

filterLoader(recipes);

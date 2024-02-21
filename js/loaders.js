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
        <p>${recipy.author}</p>
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

const getSelectedFilter = (filterName, selectedFilters, recipes) => {
  const filteredRecipes = recipes.filter((recipe) => {
    if (filterName === "cuisine") {
      return recipe.cuisineType.some((cuisine) =>
        selectedFilters.includes(cuisine.toLowerCase())
      );
    } else {
      return selectedFilters.includes(recipe.author.toLowerCase());
    }
  });

  recipyLoader(filteredRecipes.length ? filteredRecipes : recipes);
};

const filterLoader = () => {
  // get all the checkboxes
  displayCuisineCheckboxes(recipes);
  displayAuthorCheckboxes(recipes);
  const filterCuisines = document.querySelectorAll(".cuisine");
  const filterAuthors = document.querySelectorAll(".author");

  // Funktion to filter recipes by cuisine
  const filterRecipesByCuisine = (filterName) => {
    console.log(filterName);
    const selectedFilters = Array.from(
      filterName === "cuisine" ? filterCuisines : filterAuthors
    )
      .filter((filter) => filter.checked)
      .map((filter) => filter.value);

    getSelectedFilter(filterName, selectedFilters, recipes);
  };

  let filterName = "";

  // Add eventlistners
  filterCuisines.forEach((cuisine) => {
    cuisine.addEventListener("click", (e) => {
      filterName = e.target.name;
      filterRecipesByCuisine(filterName);
    });
  });

  filterAuthors.forEach((author) => {
    author.addEventListener("click", (e) => {
      filterName = e.target.name;
      filterRecipesByCuisine(filterName);
    });
  });
};

// Function to filter and display recipes based on cuisine and author
// const filterLoader = (recipes) => {
//   cuisineLoader(recipes);
//   authorLoader(recipes);
// };

filterLoader();

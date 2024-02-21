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

const filterLoader = () => {
  displayCuisineCheckboxes(recipes);
  displayAuthorCheckboxes(recipes);
  const filterCuisines = document.querySelectorAll(".cuisine");
  const filterAuthors = document.querySelectorAll(".author");

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

  const filterRecipesByAuthor = () => {
    const selectedAuthors = Array.from(filterAuthors)
      .filter((author) => author.checked)
      .map((author) => author.value);

    console.log(selectedAuthors);

    // Filter recipes based on selected cuisines
    const filteredRecipes2 = recipes.filter((recipy) =>
      selectedAuthors.includes(recipy.author.toLowerCase())
    );

    recipyLoader(filteredRecipes2.length ? filteredRecipes2 : recipes);
  };

  // Add eventlistners
  filterCuisines.forEach((cuisine) => {
    cuisine.addEventListener("change", filterRecipesByCuisine);
  });

  filterAuthors.forEach((author) => {
    author.addEventListener("change", filterRecipesByAuthor);
  });
};

// Function to filter and display recipes based on cuisine and author
// const filterLoader = (recipes) => {
//   cuisineLoader(recipes);
//   authorLoader(recipes);
// };

filterLoader();

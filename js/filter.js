const filterCuisines = document.getElementById("filterCuisines");
const filterSource = document.getElementById("filterSource");

const appendClosingButton = () => {
  filterCuisines.innerHTML += `
  <button id="close-dropdown">Close</button>
  `;

  const closingButton = document.getElementById("close-dropdown");

  closingButton.addEventListener("click", () => {
    filterCuisines.classList.toggle("active");
  });
};

const displayCuisineCheckboxes = (recipes) => {
  const cuisineTitle = document.getElementById("cuisine");

  const getCuisineTypes = () => {
    // Get all unique cusine types
    const cuisineSet = new Set();

    recipes.forEach((recipe) => {
      recipe.cuisineType.forEach((cuisineType) => {
        cuisineSet.add(cuisineType.toLowerCase());
      });
    });

    // Sort cusine from a -> z
    return [...cuisineSet].sort();
  };

  // Function that will display all the cuisine types in dropdown
  const createCuisineCheckboxes = (cuisineTypes) => {
    cuisineTypes.forEach((cuisine) => {
      filterCuisines.innerHTML += `
        <label>
          <input type="checkbox" name="cuisine" class="cuisine" value="${cuisine}"/>
          ${cuisine}
        </label> `;
    });
  };

  // Get cuisine types and display cuisine checkboxes
  const cuisinesTypes = getCuisineTypes();
  createCuisineCheckboxes(cuisinesTypes);

  // Append closing button
  appendClosingButton();

  // Eventlistner for cuisine dropdown
  cuisineTitle.addEventListener("click", () => {
    filterCuisines.classList.toggle("active");
  });
};

const RECIPES = [
    {
      name: "Baked chicken",
      category: "chicken",
      img: "https://thenovicechefblog.com/wp-content/uploads/2020/04/Roasted-Chicken-1.jpeg"
    },
    {
      name: "Cheat’s cheesy focaccia",
      category: "vegetarian",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Olive-cherry-tomato-and-feta-focaccia--21e9d78.jpg?quality=90&resize=556,505"
    },
    {
      name: "Chicken paprikash",
      category: "chicken",
      img: "https://www.daringgourmet.com/wp-content/uploads/2018/10/Chicken-Paprikash-6-square.jpg"
    },
    {
      name: "Deep fried fish bones",
      category: "fish",
      img: "https://i.ytimg.com/vi/LUXXeDR6VvI/maxresdefault.jpg"
    },
    {
      name: "Fish dish",
      category: "fish",
      img: "https://www.feastingathome.com/wp-content/uploads/2017/08/Mexican-Street-CornCorn-and-Basil-Chowder-with-Seared-Whitefish-108.jpg"
    },
    {
      name: "Grilled chicken",
      category: "chicken",
      img: "https://www.simplyrecipes.com/thmb/m1LB58rp40jNA5L7_6O3IJkj4Cc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-BBQ-Chicken-LEAD-10-03fd9892eaae4ce1a8a3f4c949657cfd.jpg"
    },
    {
      name: "Individual vegetarian lasagnes",
      category: "vegetarian",
      img: "https://onedishkitchen.com/wp-content/uploads/2022/09/vegetable-lasagna-one-dish-kitchen-square.jpg"
    },
    {
      name: "Meat soup",
      category: "other",
      img: "https://www.budgetbytes.com/wp-content/uploads/2022/04/Vegetable-Beef-Soup-bowl.jpg"
    },
    {
      name: "Vegetarian shepherd's pie",
      category: "vegetarian",
      img: "https://www.theendlessmeal.com/wp-content/uploads/2017/03/Vegan-Shepherds-Pie-2.jpg"
    }
];
const faveRecipes = [];

const container = document.getElementById("container");
const favorites = document.getElementById("favorites");
const filterDropdown = document.getElementById("filterDropdown");

const loadRecipes = (recipeArray) => {
    container.innerHTML = "";
    recipeArray.forEach((recipe) => {
      container.innerHTML += `
      <div class="card">
        <p>${recipe.name}</p>
        <img src="${recipe.img}" alt="${recipe.name}" style="width:100%; height:auto;">
        <button onclick="addToFaves('${recipe.name}')">Add to favorites</button>
      </div>
      `;
    });
};

const filterRecipes = () => {
    const value = filterDropdown.value;
    if (value === "all") {
      loadRecipes(RECIPES);
    } else {
      const filteredList = RECIPES.filter((recipe) => recipe.category === value);
      loadRecipes(filteredList);
    }
};

const addToFaves = (recipe) => {
    faveRecipes.push(recipe);
    loadFaves();
};

const loadFaves = () => {
    favorites.innerHTML = "";
    faveRecipes.forEach((recipe) => {
      favorites.innerHTML += `<p>${recipe}</p>`;
    });
};

const searchRecipes = () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredList = RECIPES.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
    loadRecipes(filteredList);
};

filterDropdown.addEventListener("change", filterRecipes);
loadRecipes(RECIPES);

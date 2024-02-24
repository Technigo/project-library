<img src="/assets/screenshot.png" alt="Screenshot Hero">

# Digital Library - Avocada

The goal of this project was to create a digital recipe library capable of loading and displaying information like title, cuisine, time, and ingredients for each recipe. Additionally, users should have the ability to filter recipes based on cuisine or author, and sort the recipes alphabetically.

# How I took on this project

1.  ### Check the HTML structure:

    Make sure that filter dropdowns, sort and search components has the necessary elements.

2.  ### JavaScript Structure

    Define array of recipes and create a function for loading recipes.

3.  ### Load Recipes

    Create a function that takes an array of recipes and displays them on the page.

4.  ### Load Filters

    Create a function to load filter options dynamically. This function should take a targetId (cuisine or author) and generate checkboxes based on the unique values in the recipes array.

5.  ### Filter Recipes Function

    Create a function to filter recipes based on the selected checkboxes. This function should be triggered when a checkbox changes state.

6.  ### Event Listeners

    Attach event listeners to the filter dropdown titles(Cusine, Author, etc) to trigger the function that loads filter options.

    Attach event listeners to the checkboxes to trigger the function that filters recipes.

## Problems

    It was a challenge implementing dynamic filtering for cuisine types and authors, involving tasks such as managing checkbox events, updating the recipy filter array, and applying logic to dynamically filter recipes based on multiple selected checkboxes.

    If I had more time I would store the checked values in the localStorage to save the user selection.

## View it live

[Digital Library - Avocada](https://technigo-project-library.netlify.app)

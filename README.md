# project-library

This project is a group project for week 3 in Technigos Web Development Bootcamp.
As a study tool I decided to attempt the project myself as well.

## The problem

Going in to the project we were given an array with object, each a book to be shown in our library. We should add at least one filter, one sorting option and provide a button to show a random book.

- This week we focus on javascript and therefor I chose to load the books by js (I'm guessing this is a requirement). I added a small delay to showcase that they are indeed loading and not there from the start.

- I created selects for the filters and sorting.
- The sorting options are created in html, while the filters are fetched from the object properties.
- I added event listeners with event handelers to execute the sorting and filtering respectively.
- Both sorting and filtering creates new arrays with books, and loads them to the page.
- Sorting and filter works together by pushing the current list toa variable, and checking the same filter isn't already applied.

- To create a random book I randomized a book index and loaded the correspoding book.

- For the search function from the stretch goals, I wanted to compare the search value to each word in each objects values. Therefor a created arrays with the words as items, and then used the include method. I also made it not case sensetive.

- Got design outlines from Technigo example

### Next step

If I have time, I will try

- Get the search function to accept multiple words

- Adding further styling.

## View it live

[![Netlify Status](https://api.netlify.com/api/v1/badges/538806e1-a1ef-42be-a607-91e4a1c03b89/deploy-status)](https://app.netlify.com/sites/sofias-library/deploys)

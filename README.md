# Great books

The assignment was to create a library of books to filter on genre and sort properties from e.g newest, to oldest, by working in JavaScript with the array of objects. 

## The problem 
First we added code to display all the books on our page. Then we started by filtering the books by genre using a drop-down menu. We made this choice over using buttons because having a button for each genre would add too many buttons and it make the page look messy. At this point, we were generating the HTML for the books in more than one place, so we created a renderBook function to avoid duplicating that code.

When doing the sort buttons. we struggled to figure out how to change the background color to reflect the fact that one of the sorting options was active. What we learned is that this can’t be implemented using CSS alone, and needs some JavaScript to set an *active* class on the button.

Overall this was at the start a very confusing assignment where we didn’t really know when to create the elements in JavaScript or in HTML, or whether to style them in CSS och JS. It was an assignment that taught us how dynamic and liquid the borders between each layer are when doing web development. 

### View it live
https://libraryofgreatbooks.netlify.app/
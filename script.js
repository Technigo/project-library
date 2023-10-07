/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    rating: 4.2,
    description:
      "A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.",
    image: "./books-images/the-great-gatsby.jpeg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    rating: 4.5,
    description:
      "Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.",
    image: "./books-images/to-kill-a-mockingbirdlee.jpeg",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Science Fiction",
    rating: 4.4,
    description:
      "A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.",
    image: "./books-images/1984.jpeg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    rating: 4.6,
    description:
      "A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.",
    image: "./books-images/the-hobbit.jpeg",
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    rating: 4.7,
    description:
      "The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.",
    image: "./books-images/harry-potter.jpeg",
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    year: 1950,
    genre: "Fantasy",
    rating: 4.15,
    description:
      "The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.",
    image: "./books-images/narnia.jpg",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure",
    rating: 4.1,
    description:
      "An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.",
    image: "./books-images/moby-dick.jpeg",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    genre: "Fantasy",
    rating: 4.55,
    description:
      "The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.",
    image: "./books-images/the-lord-of-rings.jpeg",
  },
  {
    title: "The Shining",
    author: "Stephen King",
    year: 1977,
    genre: "Horror",
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: "./books-images/the-shining.jpeg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Fiction",
    rating: 4.25,
    description:
      "A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.",
    image: "./books-images/pride-and-prejudice.jpeg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
    rating: 4,
    description:
      "Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.",
    image: "./books-images/the-catcher-in-the-rye.jpeg",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    genre: "Mystery",
    rating: 3.8,
    description:
      "A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.",
    image: "./books-images/the-da-vinci-code.jpeg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fiction",
    rating: 4.25,
    description:
      "A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.",
    image: "./books-images/the-alchemist.jpeg",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    genre: "Science Fiction",
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: "./books-images/the-hunger-games.jpeg",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    year: 2005,
    genre: "Mystery",
    rating: 4.1,
    description:
      "A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.",
    image: "./books-images/the-girl-with-the-dragon-tattoo.jpeg",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006,
    genre: "Dystopian",
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: "./books-images/the-road.jpeg",
  },
  {
    title: "The Hitchhiker's Guide",
    author: "Douglas Adams",
    year: 1979,
    genre: "Science Fiction",
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: "./books-images/the-hitchhiker.jpeg",
  },
  {
    title: "The Giver",
    author: "Lois Lowry",
    year: 1993,
    genre: "Dystopian",
    rating: 4.12,
    description:
      "A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.",
    image: "./books-images/the-giver.jpeg",
  },
];

// creating a new array for each of high, low, latest and oldested books
const rating = [];
const publishedYear = [];
const genre = [];

const container = document.getElementById("container");
const addToCart = document.getElementById("addToCart");
const filterDropDown = document.getElementById("filterDropDown");
const sortingHighButton = document.getElementById("sorting-high-to-low-button");
const sortingLowButton = document.getElementById("sorting-low-to-high-button");

// const sortingButton = document.getElementById("sorting-button");


// Function to display all of the book list
const loadBooks = (books) => {
  container.innerHTML = "";
  books.forEach((book) => {
    container.innerHTML += `
    <div class="card">
      <p class="book-title">${book.title}</p>
      <p>⭐️ ${book.rating}</p>
      <img src="${book.image}" alt="${book.title}">
    </div>
      `;
  });
};

// ...

// function sort(sortOption) {
//   const sortBook = [...books];
//   switch (sortOption) {
//     case "high-to-low":
//       console.log("Sorting High to Low");
//       sortBook.sort(
//         (highRating, lowRating) => lowRating.rating - highRating.rating
//       );
//       break;
//     case "low-to-high":
//       sortBook.sort(
//         (highRating, lowRating) => highRating.rating - lowRating.rating
//       );
//       break;
//     case "a-z":
//       sortBook.sort((a, z) => a.title.toLowerCase() - z.title.toLowerCase()); //lowercase method used to avoid case sensitiveness
//       break;
//     case "z-a":
//       sortBook.sort((a, z) => z.title.toLowerCase() - a.title.toLowerCase());
//       break;
//         default:
//           break;

//   }
//   loadBooks(sortBook);
// }

// Function to filter and display books based on genre
const filterBooks = () => {
  const value = filterDropDown.value; // Change filterDropDown to filter

  if (value === "all") {
    loadBooks(books);
  } else {
    const filterList = books.filter(
      (filteredBook) => filteredBook.genre === value
    );
    loadBooks(filterList);
  }
};

//Function to sort the books
// function sortBooks()

//function to sort the book as per rating
function sortByHighRating() {
  // container.innerHTML = "";
  // creating a new copy of the books array
  const sortedBooks = [...books];
  sortedBooks.sort((popular, least) => least.rating - popular.rating);
  loadBooks(sortedBooks); // update the displayed books with the sorted array

  console.log(sortedBooks);
}

//function to sort the book as per rating
function sortByLowRating() {
  // container.innerHTML = "";
  // creating a new copy of the books array
  const sortBooks = [...books];
  sortBooks.sort((popular, least) => popular.rating - least.rating);
  loadBooks(sortBooks); // update the displayed books with the sorted array

  console.log(sortBooks);
}

// console.log(sort);

// Apply the filter when the user changes the dropdown
filterDropDown.addEventListener("change", filterBooks);

sortingHighButton.addEventListener("click", sortByHighRating);
sortingLowButton.addEventListener("click", sortByLowRating);

// sortingButton.addEventListener("click", () => {
//   const sortOption = document.querySelector('input[name="sort-options"]:checked').value;
// // const sortField = document.querySelector('input[name="sort-field"]:checked').value;
// console.log(sortOption);
//  sort(sortOption);
// });



// stephan's https://github.com/Stefanpenk/FooCoding/blob/master/JavaScript2/Week2/app.js

// check stackover flow and chatgpt for search option first

// HTML elements
const searchInput = document.getElementById('search-input'); // Assuming you have an HTML input element with id 'search-input'
const searchResults = document.getElementById('search-results'); // Assuming you have an HTML element where you want to display search results

// Function to handle search
function handleSearch() {
   
  const searchTerm = searchInput.value.toLowerCase();

  // Use the map function to filter and create an array of matching books
  const matchingBooks = books
    .filter((book) => {
      const { title, author, genre } = book;
      return (
        title.toLowerCase().includes(searchTerm) ||
        author.toLowerCase().includes(searchTerm) ||
        genre.toLowerCase().includes(searchTerm)
      );
    })
    .map((book) => {
      // Create an HTML element for each matching book 
      return `
        <div id="search-list">
          <h5 class="search-result">${book.title}</h5>
          <p class="search-result"><strong>Author:</strong> ${book.author}</p>
          <p class="search-result">${book.genre}</p>
        </div>
      `;
    });
  // Display the matching books in the searchResults element

  if (matchingBooks.length === 0){
    searchResults.innerHTML = `<p class="search-result">Book is not available </p>`;
  } else {
    searchResults.innerHTML = matchingBooks.join('');
  }
}

// Add an event listener to the search input to trigger the search
searchInput.addEventListener('input', handleSearch);
// Add an event listener to the search input to clear it when it becomes empty
searchInput.addEventListener('input', function () {
  if (searchInput.value.trim() === '') {
    searchInput.value = ''; // Clear the search input
  }
});

// loadBooks(books); // Call loadBooks with the initial list of books



// make a add to cart button
// const addToCartBtns=document.querySelectorAll("addToCart")
// console.log(addToCartBtns[0])
// for(let i=1; i<addToCart.length; i++) {
//   addToCartBtns[i].addEventListener("click", ()=> {
//     console.log("button clicked")
//     let productName="";
//     if(localStorage.getItem(`${productName}`))
//     {
//       alert("Product already exists in your Cart!");
//       return false;}
//       else {
//         alert(`Added ${productName}`);
//       }
//   })
// }


// ADD TO CART

const cart= []

// create a cart function
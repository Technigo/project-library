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
// HTML elements
const container = document.getElementById("container");
const filterDropDown = document.getElementById("filterDropDown");
const sortingSelect = document.getElementById("sortingSelect");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Function to generate the HTML for a book card
function createBookCard(book) {
  return `
    <div class="card">
    <img src="${book.image}" alt="${book.title}">
    <div class ="book-info">
      <p class="book-item" id="book-title">${book.title}  ⭐️ ${book.rating}</p>
      <p class="book-item"><b>Author: </b>${book.author}</p>
      <p class="book-item"><b>Genre: </b>${book.genre}</p>
      <p class="book-item"><b>Year: </b>${book.year}</p>
      <p class="book-item"><b> Description:</b> ${book.description}</p>
      </div>
    </div>
  `;
}

// Function to display all of the book list
function loadBooks(booksToDisplay) {
  container.innerHTML = "";
  booksToDisplay.forEach((book) => {
    container.innerHTML += createBookCard(book);
  });
}

// Function to filter and display books based on genre
function filterBooks() {
  const value = filterDropDown.value;

  if (value === "all") {
    loadBooks(books);
  } else {
    const filterList = books.filter(
      (filteredBook) => filteredBook.genre === value
    );
    loadBooks(filterList);
  }
}

// Function to sort books based on selected option
function sortBooks() {
  const value = sortingSelect.value;

  let sortedBooks = [...books];

  switch (value) {
    case "highToLowRating":
      sortedBooks.sort((low, high) => high.rating - low.rating);
      break;
    case "lowToHighRating":
      sortedBooks.sort((low, high) => low.rating - high.rating);
      break;
    case "azTitle":
      sortedBooks.sort((a, z) => a.title.localeCompare(z.title)); // localCompare method compares two strings
      break;
    case "zaTitle":
      sortedBooks.sort((a, z) => z.title.localeCompare(a.title));
      break;
    default:
      break;
  }

  loadBooks(sortedBooks);
}

// Function to handle search
function handleSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === "") {
    // Handle the case when the search input is empty
    return;
  }

  const matchingBooks = books.filter((book) => {
    const { title, author, genre } = book;
    return (
      title.toLowerCase().includes(searchTerm) ||
      author.toLowerCase().includes(searchTerm) ||
      genre.toLowerCase().includes(searchTerm)
    );
  });
  if (matchingBooks.length > 0) {
    loadBooks(matchingBooks);
  } else {
    // Display a custom message at the top-right corner that automatically disappears after 2 seconds
    const messageElement = document.createElement("div");
    messageElement.textContent = "Book is not available";
    messageElement.classList.add("custom-message");
    document.body.appendChild(messageElement);

    setTimeout(function () {
      // Remove the custom message element after 2 seconds
      document.body.removeChild(messageElement);
    }, 1000); // 1000 milliseconds = 1 seconds
  }
}

// Event listeners
filterDropDown.addEventListener("change", filterBooks);
sortingSelect.addEventListener("change", sortBooks);
searchInput.addEventListener("input", handleSearch);

// Initial load of books
loadBooks(books);

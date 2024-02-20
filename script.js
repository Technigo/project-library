const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    rating: 4.2,
    description:
      "A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.",
    image: "./books-images/the-great-gatsby.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    rating: 4.5,
    description:
      "Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.",
    image: "./books-images/to-kill-a-mockingbird.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Science Fiction",
    rating: 4.4,
    description:
      "A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.",
    image: "./books-images/1984.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Fiction",
    rating: 4.25,
    description:
      "A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.",
    image: "./books-images/pride-and-prejudice.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
    rating: 4,
    description:
      "Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    rating: 4.6,
    description:
      "A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.",
    image: "./books-images/the-hobbit.jpg",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    rating: 4.7,
    description:
      "The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.",
    image: "./books-images/harry-potter-and-the-sorcerer.jpg",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure",
    rating: 4.1,
    description:
      "An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.",
    image: "./books-images/moby-dick.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    year: 1954,
    genre: "Fantasy",
    rating: 4.55,
    description:
      "The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.",
    image: "./books-images/the-lord-of-the-rings.jpg",
  },
  {
    title: "The Shining",
    author: "Stephen King",
    year: 1977,
    genre: "Horror",
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    year: 1950,
    genre: "Fantasy",
    rating: 4.15,
    description:
      "The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.",
    image: "./books-images/the-chronicles-of-narnia.jpg",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    genre: "Mystery",
    rating: 3.8,
    description:
      "A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fiction",
    rating: 4.25,
    description:
      "A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    genre: "Science Fiction",
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    year: 2005,
    genre: "Mystery",
    rating: 4.1,
    description:
      "A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006,
    genre: "Dystopian",
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
    genre: "Science Fiction",
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Giver",
    author: "Lois Lowry",
    year: 1993,
    genre: "Dystopian",
    rating: 4.12,
    description:
      "A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.",
    image: "./books-images/unknown.jpg",
  },
];

///////////////////////////// DOM selectors /////////////////////////////

const flexContainer = document.getElementsByClassName("flex-container")[0];
const randomBtn = document.getElementById("random-button");
const allGenresBtn = document.getElementById("all-genres");
const fictionBtn = document.getElementById("fiction");
const sciFiBtn = document.getElementById("science-fiction");
const fantasyBtn = document.getElementById("fantasy");
const adventureBtn = document.getElementById("adventure");
const horrorBtn = document.getElementById("horror");
const mysteryBtn = document.getElementById("mystery");
const dystopianBtn = document.getElementById("dystopian");
const newestBtn = document.getElementById("sort-newest");
const oldestBtn = document.getElementById("sort-oldest");
const filterButtons = document.querySelectorAll(".filter");
const sortButtons = document.querySelectorAll(".sort");
const dropdownFilter = document.querySelector("#filter-dropdown");
const dropdownSort = document.querySelector("#sort-dropdown");

/////////////////////////// Global Variables ///////////////////////////

let nowDispBooks = [];

////////////////////////////// Functions ///////////////////////////////

// Create a book card divs
const createBookCard = (book) => {
  let bookDiv = document.createElement("div");
  bookDiv.setAttribute("class", "book-display");
  bookDiv.innerHTML = `
    <img src="${book.image}" alt="${book.title}" />
    <h2>${book.title}</h2>
    <hr>
    <h5>Author: ${book.author}</h5>
    <h5>Published: ${book.year}</h5>
    <h5>Genre: ${book.genre}</h5>
    <h5>Rating: ${book.rating}</h5>
    <h4>Description</h4>
    <p>${book.description}</p>`;
  flexContainer.appendChild(bookDiv);
};

// Display all of the book cards
const displayBooks = (bookArr) => {
  bookArr.forEach((book) => {
    createBookCard(book);
  });
};

// Function that removes all book cards
const removeBooks = () => {
  const bookDelete = flexContainer.getElementsByClassName("book-display");
  Array.from(bookDelete).forEach((book) => {
    book.remove();
  });
};

// Display all books when page is loaded
window.onload = (event) => {
  displayBooks(books);
  allGenresBtn.classList.add("clicked-filter");
  nowDispBooks = books;
};

// Function that lets us filter by genre of book
const filterByGenre = (arr, genre) => {
  return arr.filter((book) => book.genre === genre);
};

// Fuction that filters depending on which filter button is clicked
const handleGenreFilterClick = (genre) => {
  removeBooks();
  filterButtons.forEach((btn) => btn.classList.remove("clicked-filter"));
  // Because one of the genres is Science Fiction, we need to replace the space between the words with a -
  const formattedGenre = genre.toLowerCase().replace(/\s+/g, "-");
  const clickedButton = document.getElementById(`${formattedGenre}`);
  clickedButton.classList.add("clicked-filter");
  const filteredBooks = filterByGenre(books, genre);
  displayBooks(filteredBooks);
  nowDispBooks = filteredBooks;
};

// Function to get a random number
const getRandomNum = (min, max) => {
  // prettier-ignore
  let getRandom = Math.floor((Math.random() * (max - min + 1) + min));
  return getRandom;
};

//////////////// Buttons and dropdown menus to filter and sort ////////////////

// Event listener that filters depending on which dropdown option is selected
dropdownFilter.addEventListener("change", () => {
  removeBooks();
  let selectedGenre = dropdownFilter.options[dropdownFilter.selectedIndex].text;
  if (selectedGenre === "All") {
    displayBooks(books);
    nowDispBooks = books;
  } else {
    const filteredBooks = filterByGenre(books, selectedGenre);
    displayBooks(filteredBooks);
    nowDispBooks = filteredBooks;
  }
});

// Event listener that sorts based on which dropdown option is selected
dropdownSort.addEventListener("change", () => {
  removeBooks();
  let sortedBooks = [];
  let selectedSort = dropdownSort.options[dropdownSort.selectedIndex].text;
  if (selectedSort === "Newest") {
    sortedBooks = nowDispBooks.sort((a, b) => b.year - a.year);
  } else if (selectedSort === "Oldest") {
    sortedBooks = nowDispBooks.sort((a, b) => a.year - b.year);
  }
  displayBooks(sortedBooks);
});

// Button for All genres
allGenresBtn.addEventListener("click", (event) => {
  removeBooks();
  filterButtons.forEach((btn) => btn.classList.remove("clicked-filter"));
  allGenresBtn.classList.add("clicked-filter");
  displayBooks(books);
  nowDispBooks = books;
});

// Button for Fiction
fictionBtn.addEventListener("click", (event) => {
  handleGenreFilterClick("Fiction");
});

// Button for Science Fiction
sciFiBtn.addEventListener("click", (event) => {
  handleGenreFilterClick("Science Fiction");
});

// Button for Fantasy
fantasyBtn.addEventListener("click", (event) => {
  handleGenreFilterClick("Fantasy");
});

// Button for Adventure
adventureBtn.addEventListener("click", (event) => {
  handleGenreFilterClick("Adventure");
});

// Button for Horror
horrorBtn.addEventListener("click", (event) => {
  handleGenreFilterClick("Horror");
});

// Button for Mystery
mysteryBtn.addEventListener("click", (event) => {
  handleGenreFilterClick("Mystery");
});

// Button for Dystopian
dystopianBtn.addEventListener("click", (event) => {
  handleGenreFilterClick("Dystopian");
});

// Button for Newest
newestBtn.addEventListener("click", (event) => {
  removeBooks();
  sortButtons.forEach((btn) => btn.classList.remove("clicked-sort"));
  newestBtn.classList.add("clicked-sort");
  const newBooks = nowDispBooks.sort((a, b) => b.year - a.year);
  displayBooks(newBooks);
});

// Button for Oldest
oldestBtn.addEventListener("click", (event) => {
  removeBooks();
  sortButtons.forEach((btn) => btn.classList.remove("clicked-sort"));
  oldestBtn.classList.add("clicked-sort");
  const oldBooks = nowDispBooks.sort((a, b) => a.year - b.year);
  displayBooks(oldBooks);
});

// Button for Random book
randomBtn.addEventListener("click", (event) => {
  removeBooks();
  const randomNumber = getRandomNum(0, books.length - 1);
  filterButtons.forEach((btn) => btn.classList.remove("clicked-filter"));
  sortButtons.forEach((btn) => btn.classList.remove("clicked-sort"));
  createBookCard(books[randomNumber]);
});

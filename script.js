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

// DOM
const bookListing = document.querySelector(".book-listing");
const filterAuthor = document.getElementById("select-filter-author");
const filterGenre = document.getElementById("select-filter-genre");
const sorting = document.getElementById("select-sort");
const randomBookContainer = document.querySelector(".random-book-container");
const randomBookBtn = document.querySelector(".random-book-btn");
const searchField = document.getElementById("search-field");
const searchBtn = document.getElementById("search-btn");
const optionsForm = document.querySelector("form");
const optionsBtn = document.getElementById("options-btn");
const close = document.querySelector(".close");
const topBtn = document.querySelector(".top-btn");
const header = document.querySelector("header");

// Global variables
const summarytext = "About the book";
const errorText = `<p>Could not find any books like that...</p>`;
let authors = [];
let genres = [];
let activeList = books;
let activeFilter = "";
let activeSort = "";

// Scroll to element
const scrollToElement = element =>
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });

// Toggle hide/show
const toggleHide = element => {
  element.classList.toggle("hidden");
};

// Reset
const reset = () => {
  activeList = books;
  getBooks(activeList);
  activeFilter = "";
  activeSort = "";
};

// Handle search
async function getSearchResults(searchterm) {
  const searchResults = books.filter(book => {
    return Object.values(book).join(" ").toLowerCase().includes(searchterm);
  });
  if (searchResults.length > 0) {
    getBooks(searchResults);
    scrollToElement(bookListing);
  } else {
    bookListing.innerHTML = errorText;
  }
}

// Search
const search = event => {
  event.preventDefault();
  const searchValue = searchField.value.toLowerCase();
  getSearchResults(searchValue);
  searchField.value = "";
};

// Get random book from array
const getRandomBook = () => {
  const randomIndex = Math.floor(Math.random() * books.length);
  // Check if there's already a random book visible, with the same title
  while (
    randomBookContainer.innerHTML !== "" &&
    books[randomIndex].title ===
      randomBookContainer.querySelector("h2").textContent
  ) {
    randomIndex++;
  }
  return books[randomIndex];
};

// Create the DOM element for random book
const createRandomBook = () => {
  randomBookContainer.innerHTML = "";
  const book = getRandomBook();
  const article = document.createElement("article");
  article.classList.add("book-item");
  article.innerHTML = `
  <h4 class="random-book-badge">Try this!</h4>
  <img
    class="book-image"
    src="${book.image}"
    alt="${book.title}" />
  <div class="book-specs">
    <h2 class="title">${book.title}</h2>
    <h3 class="author">${book.author}</h3>
    <time
      class="year"
      datetime=${book.year}
      >${book.year}</time>
    <p class="genre">${book.genre}</p>
    <p class="rating">${book.rating} ${book.stars}</p>
    <details>
      <summary>${summarytext}</summary>
      <span class="description">
      ${book.description}
      </span>
    </details>
  </div>`;
  randomBookContainer.append(article);
  scrollToElement(randomBookContainer);
};

// Sort book listing
const sortListing = event => {
  randomBookContainer.innerHTML = "";
  let sortedBooks = [];
  activeSort = event;
  switch (event.target.value) {
    case "by-author":
      sortedBooks = activeList.toSorted((a, b) =>
        a.author > b.author ? 1 : -1
      );
      getBooks(sortedBooks);
      break;
    case "by-year":
      sortedBooks = activeList.toSorted((a, b) => (a.year > b.year ? 1 : -1));
      getBooks(sortedBooks);
      break;
    case "by-title-az":
      sortedBooks = activeList.toSorted((a, b) => (a.title > b.title ? 1 : -1));
      getBooks(sortedBooks);
      break;
    case "by-title-za":
      sortedBooks = activeList.toSorted((a, b) => (a.title > b.title ? -1 : 1));
      getBooks(sortedBooks);
      break;
    case "by-rating":
      sortedBooks = activeList
        .toSorted((a, b) => a.rating - b.rating)
        .reverse();
      getBooks(sortedBooks);
      break;
  }
  activeList = sortedBooks;
  return sortedBooks;
};

// Check if same filter is already applied
const checkFilter = filter => {
  if (activeFilter.includes(filter) && activeSort) {
    activeList = books;
    return sortListing(activeSort);
  } else if (activeFilter.includes(filter) === filter) {
    return books;
  } else {
    return activeList;
  }
};

// Filter books
const filterBooks = event => {
  let filteredBooks = [];
  randomBookContainer.innerHTML = "";
  activeList = checkFilter(event.target.id);
  switch (event.target.id) {
    case "select-filter-author":
      activeFilter += event.target.id;
      filteredBooks = activeList.filter(
        book => book.author === event.target.value
      );
      break;
    case "select-filter-genre":
      activeFilter += event.target.id;
      filteredBooks = activeList.filter(
        book => book.genre === event.target.value
      );
      break;

    default:
      break;
  }
  console.log(activeFilter);
  activeList = filteredBooks;

  if (filteredBooks.length > 0) {
    getBooks(filteredBooks);
  } else {
    bookListing.innerHTML = errorText;
    setTimeout(() => {
      reset();
      optionsForm.reset();
    }, 3000);
  }
};

// Function to extract authors to filter
const getAuthors = () => {
  books.forEach(book => authors.push(book.author));
  return authors.sort().filter((author, i) => author !== authors[i - 1]);
};

// Put authors in filter
const createAuthorFilter = () => {
  authors = getAuthors();
  const fragment = document.createDocumentFragment();
  authors.forEach(name => {
    const option = document.createElement("option");
    option.textContent = name;
    fragment.appendChild(option);
  });
  filterAuthor.appendChild(fragment);
};

// Function to extract genre to filter
const getGenres = () => {
  books.forEach(book => {
    genres.push(book.genre);
  });
  return genres.sort().filter((name, i) => name !== genres[i - 1]);
};

// Put genre in filter
const createGenreFilter = () => {
  genres = getGenres();
  const fragment = document.createDocumentFragment();
  genres.forEach(name => {
    const option = document.createElement("option");
    option.textContent = name;
    fragment.appendChild(option);
  });
  filterGenre.appendChild(fragment);
};

// ratings
const showRating = () => {
  books.forEach(book => {
    book.stars = "";
    if (book.rating < 2) {
      book.stars = "⭐️";
    } else if (book.rating < 3) {
      book.stars = "⭐️⭐️";
    } else if (book.rating < 4) {
      book.stars = "⭐️⭐️⭐️";
    } else if (book.rating < 5) {
      book.stars = "⭐️⭐️⭐️⭐️";
    } else book.stars = "⭐️⭐️⭐️⭐️⭐️";
  });
};

// Put books from object into DOM
async function getBooks(bookArray) {
  bookListing.innerHTML = "";
  let fragment = document.createDocumentFragment();
  showRating();
  bookArray.forEach(book => {
    const article = document.createElement("article");
    article.classList.add("book-item");
    article.innerHTML += `
  <img
    class="book-image"
    src="${book.image}"
    alt="${book.title}" />
  <div class="book-specs">
    <h2 class="title">${book.title}</h2>
    <h3 class="author">${book.author}</h3>
    <time
      class="year"
      datetime=${book.year}
      >${book.year}</time
    >
    <p class="genre">${book.genre}</p>
    <p class="rating">${book.rating} ${book.stars}</p>
    <details>
      <summary>${summarytext}</summary>
      <span class="description">
      ${book.description}
      </span>
    </details>
  </div>`;
    fragment.appendChild(article);
  });
  bookListing.append(fragment);
}

// Load content
const loadContent = () => {
  getBooks(books);
  createAuthorFilter();
  createGenreFilter();
};

loadContent();

// Event listeners
sorting.addEventListener("change", sortListing);
filterAuthor.addEventListener("change", filterBooks);
filterGenre.addEventListener("change", filterBooks);
randomBookBtn.addEventListener("click", createRandomBook);
searchBtn.addEventListener("click", search);
optionsForm.addEventListener("reset", reset);
optionsBtn.addEventListener("click", () => toggleHide(optionsForm));
close.addEventListener("click", () => toggleHide(optionsForm));
topBtn.addEventListener("click", () => scrollToElement(header));

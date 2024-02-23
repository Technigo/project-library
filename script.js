//book arrays provided by Technigo
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

// basic requirements
// DOM elements
const libraryContainer = document.getElementById("library-container");
const dropdownGenre = document.getElementById("filter-genre");
const sortButton = document.getElementById("sorting-button");
const randomBookButton = document.getElementById("random-book");
const randomBookContainer = document.getElementById("random-book-container");

// display books (with an optional genre filter)
const showBookContent = (arrayOfBooks, genreFilter = "all") => {
  // takes an array of book objects and an optional genre filter as parameters
  libraryContainer.innerHTML = ""; //clears the content of the library container

  // Filter books based on the genre if the filter is not 'all'
  const filteredBooks =
    genreFilter === "all"
      ? arrayOfBooks
      : arrayOfBooks.filter(
          (book) => book.genre.toLowerCase() === genreFilter.toLowerCase()
        );

  //Display filtered books
  filteredBooks.forEach((book) => {
    // iterates over each book
    libraryContainer.innerHTML += `<div class=card>
     <img id="covers" src=${book.image}>
     <h2>${book.title}</h2>
     <p>by ${book.author} | ${book.year}</p>
     <div class="description">
      <p>${book.description}</p>
     </div>
     <div class="genre-rating">
      <p>${book.genre}</p>
      <p>Rating ${book.rating}</p>
     </div>
    </div>`;
  });
};

// Event listener for dropdown change
dropdownGenre.addEventListener("change", (event) => {
  const selectedGenre = event.target.value; // Get the selected genre
  showBookContent(books, selectedGenre); // Display books based on the selected genre
});

//call the function - displays all books initially
showBookContent(books);

//filter by genre
const filterGenre = () => {};

//sorting function
let sortAscending = true;

const sortBooksByTitle = () => {
  books.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    return sortAscending
      ? titleA.localeCompare(titleB)
      : titleB.localeCompare(titleA);
  });

  sortAscending = !sortAscending;
  showBookContent(books);
  sortButton.src = sortAscending
    ? "icons/absteigend-sortieren.png"
    : "icons/aufsteigend-sortieren.png";
};

//random button calculations
const randomBook = () => {
  const randomIndex = Math.floor(Math.random() * books.length);
  const selectedBook = books[randomIndex];

  //to display the random book
  randomBookContainer.innerHTML = ` 
		<div class="card random">
    <h2>This is a randomly selected book</h2>
			<img id="covers" src="${selectedBook.image}">
			<h2>${selectedBook.title}</h2>
			<p>by ${selectedBook.author} | ${selectedBook.year}</p>
			<div class="description">
			 <p>${selectedBook.description}</p>
      </div>
      <div class="genre-rating">
       <p>${selectedBook.genre}</p>
			 <p>Rating ${selectedBook.rating}</p>
      </div>
		</div>`;
};

//Eventlistener
sortButton.addEventListener("click", sortBooksByTitle);
randomBookButton.addEventListener("click", randomBook);

// filter by year
// function that takes minYear and mayYear as parameters to specify a range
const filterByYear = (minYear, maxYear) => {
  const filteredBooks = books.filter(
    (book) => book.year >= minYear && book.year <= maxYear
  );
  showBookContent(filteredBooks);
};

// Event listener added to the dropdown with the id "filter-year"
document.getElementById("filter-year").addEventListener("change", (event) => {
  //function that determines the range of years based on the selected options (cases)
  const selectedYear = event.target.value;
  let minYear, maxYear;

  switch (selectedYear) {
    case "19th":
      minYear = 1801;
      maxYear = 1900;
      break;
    case "20th":
      minYear = 1901;
      maxYear = 2000;
      break;
    case "post20th":
      minYear = 2001;
      maxYear = new Date().getFullYear();
      //new Date() creates a new date object representing the current date/time.
      //getFullYear returnes the current year as a four digit number (e.g. 2024)
      //maxYear = makes sure that the filter includes books up to current year
      break;
    default:
      minYear = 0;
      maxYear = new Date().getFullYear();
      break;
  }
  //call the function
  filterByYear(minYear, maxYear);
});

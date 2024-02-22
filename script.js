//Books arry that contain each book as an object
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
    image: "./books-images/the-catcher-in-the-rye.jpg",
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
    image: "./books-images/the-shining.jpeg",
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
    image: "./books-images/the-da-vinci-code.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fiction",
    rating: 4.25,
    description:
      "A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.",
    image: "./books-images/the-alchemist.jpg",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    genre: "Science Fiction",
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: "./books-images/the-hunger-games.jpg",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    year: 2005,
    genre: "Mystery",
    rating: 4.1,
    description:
      "A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.",
    image: "./books-images/the-girl-with-the-dragon-tattoo.jpg",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006,
    genre: "Dystopian",
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: "./books-images/the-road.webp",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
    genre: "Science Fiction",
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: "./books-images/the-hitchhikers-guide-to-the-galaxy.webp",
  },
  {
    title: "The Giver",
    author: "Lois Lowry",
    year: 1993,
    genre: "Dystopian",
    rating: 4.12,
    description:
      "A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.",
    image: "./books-images/the-giver.webp",
  },
];

/////////////////////Dom Objects/////////////////////
const searchInput = document.getElementById("search-txt");
const searchBtn = document.getElementById("search-btn");
const filterBtns = document.querySelectorAll(".filter-btn");
const allBooksBtn = document.getElementById("all-genres-btn");
const genreBtns = document.getElementsByClassName("genre-btn");
const ascendingBtn = document.getElementById("ascending");
const descendingBtn = document.getElementById("descending");
const subHeading = document.querySelector("h2");
const cardCollection = document.getElementById("card-grid");
const randomBtn = document.getElementById("random");

/////////////////////Functions/////////////////////
//Function that accepts a books array and show books
const showBooks = (arr) => {
  subHeading.textContent = "Sit back, relax and enjoy reading 📖";
  cardCollection.innerHTML = "";
  arr.forEach((obj) => {
    cardCollection.innerHTML += `<div class="card">
      <div class="img-container">
        <img src=${obj.image} alt="book ${obj.title}">
      </div>
      <h3>${obj.title}</h3>
      <p>Author: ${obj.author}</p>
      <p>Year: ${obj.year}</p>
      <p>Genre: ${obj.genre}</p>
      <p>Rating: ${obj.rating}</p>
      <p>
        Description: ${obj.description}
      </p>
    </div>`;
  });
};

//Function that add event listeners to sorting buttons so it sorts based on a given array and display the books
const triggerSortBtns = (arr) => {
  ascendingBtn.addEventListener("click", () => {
    const ascendingBooks = [...arr].sort((a, b) => a.rating - b.rating);
    showBooks(ascendingBooks);
  });
  descendingBtn.addEventListener("click", () => {
    const descendingBooks = [...arr].sort((a, b) => b.rating - a.rating);
    showBooks(descendingBooks);
  });
};

/////////////////////Event Listners/////////////////////
//Add event listner to all books button (one single button that display all books), function wise is the same as below
allBooksBtn.addEventListener("click", () => {
  filterBtns.forEach((button) => button.classList.remove("active"));
  allBooksBtn.classList.add("active");
  showBooks(books);
  triggerSortBtns(books);
});

// Add event listner to genre buttons
// 1. Remove any active highlights in the filter section;
// 2. filter books based on the button value, i.e. genre;
// 3. show the filtered books;
// 4. override the event listner on sort buttons to trigger actions based on filtered books
for (let btn of genreBtns) {
  btn.addEventListener("click", (event) => {
    filterBtns.forEach((button) => button.classList.remove("active"));
    let filteredBooks = books.filter((obj) => obj.genre === event.target.value);
    btn.classList.add("active");
    showBooks(filteredBooks);
    triggerSortBtns(filteredBooks);
  });
}

// Add Event Listener to random generator button
// 1. Generate a random number;
// 2. Use the random number as an index to access the books array
// 3. Display a random book
randomBtn.addEventListener("click", () => {
  filterBtns.forEach((button) => button.classList.remove("active"));
  let randomNum = Math.floor(Math.random() * 18);
  showBooks([books[randomNum]]);
});

// Add Event Listner to search button:
// 1. Compare the search result with all the books' titles within our data library;
// 2. Show the result of matched books
// 3. Manipulate the h2 so it customise the message we want to delivery for different types of search result (empty or non-empty)
searchBtn.addEventListener("click", () => {
  const searchResult = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  showBooks(searchResult);
  if (searchResult.length !== 0) {
    subHeading.textContent = `
    Your search result "${searchInput.value}" matches the following books:`;
  } else {
    subHeading.textContent = `
    Sorry your search "${searchInput.value}" is not in our library yet. Please try to search for something else.`;
  }
});

//Call the function - display all the books when landing and add event listener to sorting buttons to sort based on all the books
showBooks(books);
triggerSortBtns(books);

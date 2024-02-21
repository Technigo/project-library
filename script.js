/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  },
   {
    title: "Looking for Alaska",
    author: 'John Green',
    year: 2005,
    genre: 'Fiction',
    rating: 4.35,
    description:
      "The story follows Miles Halter's journey as he navigates the complexities of teenage life, friendship, love, and loss at a boarding school in Alabama, particularly his obsession with the enigmatic Alaska Young.",
    image: './books-images/lookingforalaska.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg'
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: './books-images/harry-potter-and-the-sorcerer.jpg'
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    rating: 4.1,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: './books-images/moby-dick.jpg'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    year: 1897,
    genre: 'Fantasy',
    rating: 4.3,
    description:
      "A story following Professor Van Helsing as he tries to stop the centuries-old vampire Count Dracula, as he seeks to spread his undead curse across Victorian England.",
    image: './books-images/dracula.jpg'
  },
  {
    title: 'King of Scars',
    author: 'Leigh Bardugo',
    year: 2019,
    genre: 'Fantasy',
    rating: 3.8,
    description:
      'Tells the tale of Nikolai Lantsov as he grapples with newfound powers and political intrigue in a kingdom plagued by dark magic.',
    image: './books-images/kingofscars.jpg'
  },
  {
    title: 'Never Let Me Go',
    author: 'Kazuo Ishiguro',
    year: 2005,
    genre: 'Science Fiction',
    rating: 4.25,
    description:
      'Follows the poignant lives of clones raised for organ donation as they navigate love, friendship, and the meaning of their existence.',
    image: './books-images/neverletmego.jpg'
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
    genre: 'Fantasy',
    rating: 4.3,
    description:
      "Delves into themes of creation, ambition, and the consequences of playing god through the story of Victor Frankenstein and his monstrous creation.",
    image: './books-images/frankenstein.jpg'
  },
  {
    title: 'A Little Princess',
    author: 'Frances Hodgson Burnett',
    year: 1905,
    genre: 'Fiction',
    rating: 4.1,
    description:
      'A gripping story following Sara Crewe, a young girl who maintains her dignity and kindness despite facing adversity and hardship after her father´s fortune is lost.',
    image: './books-images/alittleprincess.jpg'
  },
  {
    title: 'Winnie the Pooh',
    author: 'A. A. Milne',
    year: 1926,
    genre: 'Adventure',
    rating: 4,
    description:
      "In the Hundred Acre Wood, Winnie the Pooh and his friends embark on whimsical adventures filled with friendship, discovery, and a touch of silliness.",
    image: './books-images/winniethepooh.jpg'
  },

  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    year: 1890,
    genre: 'Fiction',
    rating: 4.12,
    description:
      'Examines the corrupting influence of vanity and hedonism as a portrait ages while its subject remains youthful.',
    image: './books-images/doriangray.jpg'
  },
  {
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  }
]


const container = document.getElementById("container");
const allBooksButton = document.getElementById("all");
const filterButton = document.getElementsByClassName("filter-btn");
const sortButton = document.getElementsByClassName("sort-btn");
const azButton = document.getElementById("az");
const zaButton = document.getElementById("za");
const yearNewButton = document.getElementById("yearnew");
const yearOldButton = document.getElementById("yearold");
const ratingHighButton = document.getElementById("ratinghigh");
const ratingLowButton = document.getElementById("ratinglow");
const searchInput = document.getElementById("search-input");


//Boxes created to showcase all books
let createBookBoxes = (book) => {
  return `
  <div class="boxes">
    <img class="book-image" src="${book.image}">
    <div class="book-info">
    <h4 class="box-item" id="book-rating">⭐ ${book.rating}</h4>
    <h2 class="box-item" id="book-title">${book.title}</h2>
    <h3 class="box-item" id="book-author">by ${book.author}</h3>
    <p class="box-item"><b>Genre: </b>${book.genre}</p>
    <p class="box-item"><b>Year: </b>${book.year}</p>
    <p class="box-item"><b>Description: </b>${book.description}</p>
    </div>
  </div>
  `
}

let showBooks = (booksToDisplay) => {
  container.innerHTML = "";
  booksToDisplay.forEach((bookList) => {
    container.innerHTML += createBookBoxes(bookList);
  })
}


//Filter function added to filter via buttons

for (let button of filterButton) {
  button.addEventListener("click", (event) => {
    let filteredBooks = books.filter((object) => object.genre === event.target.value);
    showBooks(filteredBooks);
  });
}

allBooksButton.addEventListener("click", () => {
  showBooks(books);
});


//Sorting function added to sort via buttons

azButton.addEventListener("click", (event) => {
  const azBooks = books.sort((a, b) => (a.title > b.title ? 1 : -1));
  showBooks(azBooks);
});

zaButton.addEventListener("click", (event) => {
  const zaBooks = books.sort((a, b) => (a.title > b.title ? -1 : 1));
  showBooks(zaBooks);
});

yearNewButton.addEventListener("click", (event) => {
  const newBooks = books.sort((a, b) => b.year - a.year);
  showBooks(newBooks);
});

yearOldButton.addEventListener("click", (event) => {
  const oldBooks = books.sort((a, b) => a.year - b.year);
  showBooks(oldBooks);
});

ratingHighButton.addEventListener("click", (event) => {
  const highRating = books.sort((a, b) => b.rating - a.rating);
  showBooks(highRating);
});

ratingLowButton.addEventListener("click", (event) => {
  const lowRating = books.sort((a, b) => a.rating - b.rating);
  showBooks(lowRating);
});


//Search function

let searchResult = () => {
const searchTerm = searchInput.value.trim().toLowerCase();
const matchingBooks = books.filter((books) => {
    const { title, author, genre, } = books;
    return (
      title.toLowerCase().includes(searchTerm) ||
      author.toLowerCase().includes(searchTerm) ||
      genre.toLowerCase().includes(searchTerm)
    );
  });
  if (matchingBooks.length > 0) {
    showBooks(matchingBooks);
}
}
searchInput.addEventListener("input", searchResult);

// First show of books
showBooks(books)
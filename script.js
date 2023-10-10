// An array of book objects with information about each book.
const Books = [
  {
    title: "The Great Gatsby",
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: "Fiction",
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_hr.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    img: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg"
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    img: 'https://m.media-amazon.com/images/I/81WunXo0giL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    img: 'https://i.pinimg.com/1200x/29/62/e3/2962e38e1eb9c401fad44a2cd592a0e1.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    img: 'https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    img: "https://m.media-amazon.com/images/I/71-++hbbERL.jpg"
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    img: 'https://www.asiabooks.com/media/catalog/product/cache/a5ac216be58c0cbce1cb04612ece96dc/9/7/9780261102354c_2.png'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    img: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/a0c39048873339.58a470c427a06.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    img: 'https://images.booksense.com/images/007/315/9780062315007.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    img: 'https://m.media-amazon.com/images/I/81UOA8fDGaL._AC_UF894,1000_QL80_.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    img: 'https://m.media-amazon.com/images/I/51IT08MkJ0L._AC_UF894,1000_QL80_.jpg'
  },
];

// References to HTML elements using their IDs.
const allBooks = document.getElementById("allBooks");
const filterDropdown = document.getElementById("filterDropdown");
const sortingSelect = document.getElementById("sortingSelect");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
//const listTitle = document.getElementByid("listTitle");
const shoppingCart = document.getElementById("shoppingCart");
const showShoppingCartButton = document.getElementById("showShoppingCartButton");


// Creating a variable that can store the books in the shopping cart.
const booksInshoppingCart = [];

// Function to load and display the list of books and shopping cart.
const loadBooks = (BooksArray) => {
  allBooks.innerHTML = "";
  shoppingCart.innerHTML = "";

  BooksArray.forEach((Books) => {
    allBooks.innerHTML += `
    <div class="card">
    <p id="title">${Books.title}</p>
    <p id="small">By ${Books.author}</p>
    <p id="rating">★: ${Books.rating}/5</p>
    <img src=${Books.img} art=${Books.title}>
    <p id="description">Plot: ${Books.description}</p>
    <button id="onClick">Add To Shopping Cart</button>
    </div>
      `;
  });
};



// Function to filter and display books based on their genre and get selected value from the filter dropdown.
const filterBooks = () => {
  const value = filterDropdown.value;

// Show all books or filter based on genre and load the filtered list.
  if (value === "all") {
    loadBookss(Books);
  } else {
    const filteredList = Books.filter((Books) => Books.genre === value);
    loadBooks(filteredList);
  }
};


// Function to sort books based on options
function sortBooks() {
  const value = sortingSelect.value;
  let sortedBooks = [...Books];

  switch (value) {
    case "highToLowRating":
      sortedBooks.sort((low, high) => high.rating - low.rating);
      break;
    case "lowToHighRating":
      sortedBooks.sort((low, high) => low.rating - high.rating);
      break;
    case "azTitle":
      sortedBooks.sort((a, z) => a.title.localeCompare(z.title));
      break;
    case "zaTitle":
      sortedBooks.sort((a, z) => z.title.localeCompare(a.title));
      break;
    default:
      break;
  }
  loadBooks(sortedBooks);
}

// Function to handle the search
function handleSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === "") {
    return;
  }

  const matchingBooks = Books.filter((Books) => {
    const { title, author, genre } = Books;
    return (
      title.toLowerCase().includes(searchTerm) ||
      author.toLowerCase().includes(searchTerm) ||
      genre.toLowerCase().includes(searchTerm)
    );
  });
  if (matchingBooks.length > 0) {
    loadBooks(matchingBooks);
  } else {
    // Display a message at the top-right corner that disappears after 1.5 seconds
    const messageElement = document.createElement("div");
    messageElement.textContent = "Sorry, I don't have that book :(";
    messageElement.classList.add("message");
    document.body.appendChild(messageElement);

    setTimeout(function () {
      // Remove the message after 1.5 seconds
      document.body.removeChild(messageElement);
    }, 1500);
  }
}


// Function that will add books to shopping cart.
const addToShoppingCart = (Books) => {
  
  const parsedBooks = JSON.parse(decodeURIComponent(Books));
  // If statement will output a message if the book is or isn't in the cart. It will also add the book to the shopping cart if it isn't there.
  if (booksInShoppingCart.some((shoppingCart) => shoppingCart.name === parsedBooks.name)) {
    alert(`${parsedBooks.name} is already in the cart!`);
  } else {
    booksInShoppingCart.push(parsedBooks);
    alert(`${parsedBooks.name} added to shopping cart!`);
  }
}

// Function creates list of books in shopping cart.
const loadShoppingCart = () => {
  allBooks.innerHTML = ""
 
const shoppingCartButton = document.getElementById("onClick");
shoppingCartButton.onclick = addToShoppingCart;
  
  // This will make sure the program display the books in the shopping cart.
  booksInShoppingCart.forEach((Books) => {
    shoppingCart.innerHTML += `
    <div class="card">
    <p id="title">${Books.title}</p>
    <p id="small">By ${Books.author}</p>
    <p id="rating">★: ${Books.rating}/5</p>
    <img src=${Books.img} art=${Books.title}>
    <p id="description">Plot: ${Books.description}</p>
    </div>`
  });
};

// Function that will toggle between shopping cart and all books.
const toggleShoppingCart = () => {
  allBooks.classList.toggle("shoppingCart");
  
  // This will change the button depending on if you're showing all of the books or the shopping cart.
const buttonText = allBooks.classList.contains("shoppingCart") ? "Show all books" : "🛒 My Shopping Cart"
showShoppingCartButton.textContent = buttonText;

  if (allBooks.classList.contains("shoppingCart")) {
    loadShoppingCart();
    // Then change the title to "Your Shopping Cart".
    listTitle.innerHTML = "🛒 Your Shopping Cart 🛒";
  } else {
    loadBooks(Books);
    // Then change the title to "All Books"
    listTitle.innerHTML = "All Books";
  }
}



// Apply the filter when the user changes the dropdown selection.
filterDropdown.addEventListener("change", filterBooks);
sortingSelect.addEventListener("change", sortBooks);
searchInput.addEventListener("input", handleSearch);
showShoppingCartButton.addEventListener("click", toggleShoppingCart);

// Load the initial list of books when the page loads.
loadBooks(Books);

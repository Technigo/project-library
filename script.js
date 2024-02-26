const userSearch = document.getElementById("userSearch")
const filters = document.getElementById("filters")
const genre = document.getElementById("genre")
const sort = document.getElementById("sort")
const library = document.getElementById("library")

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
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    rating: 4,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/unknown.jpg'
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
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: "./books-images/harry-potter-and-the-sorcerer.jpg"
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
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Dystopian',
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/unknown.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'Science Fiction',
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/unknown.jpg'
  }
]


/*wrong position of libaray.innerHTML 
const printBooks=()=>{
  books.forEach(book=>{
    library.innerHTML +=`
    <div class="bookItem1" id="bookItem1">  
    </div>
    `
    bookItem1.innerHTML +=`
    <div class="bookChild">
      <img src="${book.image}" class="bookImage" alt="gatsby" />
      <h3 id="bookTitle"></h3>
    </div>

    <div class="bookChild">
      <p id="bookGenre"></p>
      <p id="bookRating"></p>
    </div>

    <div class="bookChild">
      <p id="bookAuthor"></p>
      <p id="bookYear"></p>
      <p id="bookDescription"></p>
    </div>
    `
    bookTitle.innerHTML = book.title
    bookGenre.innerHTML = "Genre: " + book.genre
    bookRating.innerHTML = "Rating: " +book.rating
    bookAuthor.innerHTML = "Author: " + book.author
    bookYear.innerHTML = "Year: " +book.year
    bookDescription.innerHTML = "Description:<br />" + book.description

  })
}   
printBooks() */

//Show all books
const printBooks = (booksArray) => {
  library.innerHTML = '';
  booksArray.forEach(book => {
    library.innerHTML  += `
      <div class="bookItem">
        <div class="bookChild">
        <img src="${book.image}" class="bookImage" alt="${book.title}" />
          <h3 class="bookTitle">${book.title}</h3>
        </div>

        <div class="bookChild">
          <p class="bookGenre">Genre: ${book.genre}</p>
          <p class="bookRating">Rating: ${book.rating}</p>
        </div>

        <div class="bookChild">
          <p class="bookAuthor">Author: ${book.author}</p>
          <p class="bookYear">Year: ${book.year}</p>
          <p class="bookDescription">Description:<br />${book.description}</p>
        </div>
      </div>
    `;
  });
};
printBooks(books);

// Filter
genre.innerHTML +=`
  <div class="sortTitle" id="sortTitle" >Filter on genre</div>
  <div class="genreButton" id="genreButton">
    <div class="genreChoice" id="genreChoice">
      <button id="all" value="all">All</button>
      <button id="fiction" value="Fiction">Fiction</button>
      <button id="fantasy" value="Fantasy" >Fantasy</button>
      <button id="adventure" value="Adventure">Adventure</button>
    </div>
    <select id="more">
      <option value="More" disabled selected>More</option>
      <option id="sciFi" value="Science Fiction">Science Fiction</option>
      <option id="horror" value="Horror">Horror</option>
      <option id="mystery" value="Mystery">Mystery</option>
      <option id="dystopian" value="Dystopian">Dystopian</option>
    </select>
  </div>
`
// use a event.target.value instead of creating each filter.
let filterSelectedBooks=[];
const filterBook=()=>{
  document.getElementById("genreChoice").addEventListener("click",(event)=>{
    const filteredBooks = event.target.value
    if (filteredBooks==="all"){
      document.getElementById("all").addEventListener("click",()=>{
        filterSelectedBooks = books
        printBooks(filterSelectedBooks)  
      })
    } else {
      filteredSelectedBooks = books.filter((book)=>book.genre===filteredBooks)
      printBooks(filteredSelectedBooks) 
    }
  })
    
  // Filter with "more" selector
  document.getElementById("more").addEventListener("change",(event)=>{
    const genreFilter = event.target.value;
    filterSelectedBooks = books.filter((book)=>book.genre===genreFilter);
    printBooks(filterSelectedBooks); 
  }) 
}
filterBook();


/* too many codes here. nonono if more filters need to be added. 
  document.getElementById("all").addEventListener("click",()=>{
  const allBooks = books
  printBooks(allBooks)  
})

document.getElementById("fiction").addEventListener("click",()=>{
  const fictionBooks = books.filter((book)=>book.genre==="Fiction")
  printBooks(fictionBooks)  
})

document.getElementById("fantasy").addEventListener("click",()=>{
  const fantasyBooks = books.filter((book)=>book.genre==="Fantasy")
  printBooks(fantasyBooks)  
}) 

document.getElementById("adventure").addEventListener("click",()=>{
  const adventureBooks = books.filter((book)=>book.genre==="Adventure")
  printBooks(adventureBooks)  
}) */



//Search
userSearch.innerHTML+=`
  <input type="text" id="userInput" placeholder="  Search your next book">
  <button id="searchButton">Go</button>
`
const searchBooks=()=>{
  let userInput =""
  userInput = document.getElementById("userInput")
  document.getElementById("searchButton").addEventListener("click",(event)=>{
    const userBookInput = userInput.value.toUpperCase();
    const searchResult =books.filter((book)=>Object.values(book).join("").toUpperCase().includes(userBookInput));
    printBooks(searchResult);
  })
}
searchBooks();


//Sort
sort.innerHTML +=`
  <div class="sortTitle" id="sortTitle" >Sort</div>
  <div class="sortButton" id="sortButton">
    <button id="rating" value="rating" >rating ↑↓</button>
    <button id="year" value="rating">year ↑↓</button>
    <button id="title" value="title">A-Z ↑↓</button>
  </div>
`
const sortByRating =()=>{
  let isDescending = false;
  
  // Defnine a new array for sorting purpose so books order is not touched. Good explaination here.https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig OR use toSorted() since toSorted will not affect the original array.
  const ratingBooks = [...books];
  document.getElementById("rating").addEventListener("click",()=>{
    console.log(filterSelectedBooks);
    isDescending = !isDescending;
    if(isDescending){
      ratingBooks.sort((a,b)=>(b.rating-a.rating))
      printBooks(ratingBooks) 
    } else {
      ratingBooks.sort((a,b)=>(a.rating-b.rating))
      printBooks(ratingBooks)  
    }
  })
}
sortByRating();

const sortByYear=()=>{
  let isDescending = false;
  document.getElementById("year").addEventListener("click",()=>{
    isDescending = !isDescending;
    if(isDescending){
      const yearBooks = books.toSorted((a,b)=>(b.year-a.year))
      printBooks(yearBooks)
    } else {
      const yearBooks = books.toSorted((a,b)=>(a.year-b.year))
      printBooks(yearBooks)
    }
  }) 
}
sortByYear();

const sortByTitle=()=>{
  let isAscending = false;
  document.getElementById("title").addEventListener("click",()=>{
    isAscending = !isAscending;
    if(isAscending){
      const titleBooks = books.toSorted((a,b)=>a.title.localeCompare(b.title))
      printBooks(titleBooks)
    } else {
      const titleBooks = books.toSorted((a,b)=>b.title.localeCompare(a.title))
      printBooks(titleBooks)
    }
  }) 
}
sortByTitle();

//Random and filter by century
surprise.innerHTML +=`
  <div class="surpriseTitle" id="surpriseTitle">Surprise</div>
  <div id="surpriseButton">
    <button id="random" value="random" >A random book</button>
    <select id="more1">
        <option value="More1" disabled selected>More</option>
        <option id="century" value="2000">21st Century Books</option>
        <option id="century" value="1900">20th Century Books</option>
        <option id="century" value="1800">19th Century Books</option>
    </select>
  </div>
`
const randomize=()=>{
  document.getElementById("random").addEventListener("click",()=>{
    const randomIndex = Math.floor(Math.random(books)*books.length);
    const randomBooks =books[randomIndex]
    printBooks([randomBooks]); 
  })
}
randomize();

const soryByCentury=()=>{
  document.getElementById("more1").addEventListener("change",(event)=>{
    const century = parseInt(event.target.value);
    const centuryNew = parseInt(event.target.value)+100;
    const centuryBooks = books.filter((book)=>book.year>=century && book.year<=centuryNew) 
    printBooks(centuryBooks) 
  })
}
soryByCentury();

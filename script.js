const books = [{
	title: 'The Great Gatsby',
	author: 'F. Scott Fitzgerald',
	year: 1925,
	genre: 'Fiction',
	rating: 4.2,
	description: 'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
	image: './books-images/the-great-gatsby.jpg'
},
{
	title: 'To Kill a Mockingbird',
	author: 'Harper Lee',
	year: 1960,
	genre: 'Fiction',
	rating: 4.5,
	description: 'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
	image: './books-images/to-kill-a-mockingbird.jpg'
},
{
	title: '1984',
	author: 'George Orwell',
	year: 1949,
	genre: 'Science Fiction',
	rating: 4.4,
	description: 'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
	image: './books-images/1984.jpg'
},
{
	title: 'Pride and Prejudice',
	author: 'Jane Austen',
	year: 1813,
	genre: 'Fiction',
	rating: 4.25,
	description: 'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
	image: './books-images/pride-and-prejudice.jpg'
},
{
	title: 'The Catcher in the Rye',
	author: 'J.D. Salinger',
	year: 1951,
	genre: 'Fiction',
	rating: 4,
	description: 'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
	image: './books-images/unknown.jpg'
},
{
	title: 'The Hobbit',
	author: 'J.R.R. Tolkien',
	year: 1937,
	genre: 'Fantasy',
	rating: 4.6,
	description: 'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
	image: './books-images/the-hobbit.jpg'
},
{
	title: "Harry Potter and the Sorcerer's Stone",
	author: 'J.K. Rowling',
	year: 1997,
	genre: 'Fantasy',
	rating: 4.7,
	description: 'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
	image: "./books-images/harry-potter-and-the-sorcerer.jpg"
},
{
	title: 'Moby-Dick',
	author: 'Herman Melville',
	year: 1851,
	genre: 'Adventure',
	rating: 4.1,
	description: 'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
	image: './books-images/moby-dick.jpg'
},
{
	title: 'The Lord of the Rings: The Fellowship of the Ring',
	author: 'J.R.R. Tolkien',
	year: 1954,
	genre: 'Fantasy',
	rating: 4.55,
	description: 'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
	image: './books-images/the-lord-of-the-rings.jpg'
},
{
	title: 'The Shining',
	author: 'Stephen King',
	year: 1977,
	genre: 'Horror',
	rating: 4.3,
	description: "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
	image: './books-images/unknown.jpg'
},
{
	title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
	author: 'C.S. Lewis',
	year: 1950,
	genre: 'Fantasy',
	rating: 4.15,
	description: 'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
	image: './books-images/the-chronicles-of-narnia.jpg'
},
{
	title: 'The Da Vinci Code',
	author: 'Dan Brown',
	year: 2003,
	genre: 'Mystery',
	rating: 3.8,
	description: 'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
	image: './books-images/unknown.jpg'
},
{
	title: 'The Alchemist',
	author: 'Paulo Coelho',
	year: 1988,
	genre: 'Fiction',
	rating: 4.25,
	description: 'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
	image: './books-images/unknown.jpg'
},
{
	title: 'The Hunger Games',
	author: 'Suzanne Collins',
	year: 2008,
	genre: 'Science Fiction',
	rating: 4.3,
	description: "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
	image: './books-images/unknown.jpg'
},
{
	title: 'The Girl with the Dragon Tattoo',
	author: 'Stieg Larsson',
	year: 2005,
	genre: 'Mystery',
	rating: 4.1,
	description: 'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
	image: './books-images/unknown.jpg'
},
{
	title: 'The Road',
	author: 'Cormac McCarthy',
	year: 2006,
	genre: 'Dystopian',
	rating: 4,
	description: "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
	image: './books-images/unknown.jpg'
},
{
	title: "The Hitchhiker's Guide to the Galaxy",
	author: 'Douglas Adams',
	year: 1979,
	genre: 'Science Fiction',
	rating: 4.35,
	description: "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
	image: './books-images/unknown.jpg'
},
{
	title: 'The Giver',
	author: 'Lois Lowry',
	year: 1993,
	genre: 'Dystopian',
	rating: 4.12,
	description: 'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
	image: './books-images/unknown.jpg'
}];

const feedback = document.querySelector('.feedback');
const genreSort = document.querySelector('.genreSort');
const nameSort = document.querySelector('.nameSort');
const subSort = document.querySelector('.subSort');
const main = document.querySelector('main');
const result = document.querySelector('.result');
const nav = document.querySelector('nav');
const form = document.getElementById("search-form");
const sub = document.querySelector('.sub');

const buttonContainer = document.createElement("div");
const genreBtnContainer = document.createElement("div");
const sortBtnContainer = document.createElement("div");
const nameBtnContainer = document.createElement("div");
const button = document.createElement("button");

let tempArr = []
let booksLastName
let searchResult = []
let searchstring
let foundWhere
let randomBook = []

// Display books on pageload
function displayBooks() {
	main.innerHTML = ""; //clear existing content
	books.forEach((book) => {
		const bookCard = document.createElement('div');
		bookCard.classList.add('book-card');
		bookCard.innerHTML = ` <img class="cover" src="${book.image}"alt="${book.title}"></img> <h2>${book.title}</h2>
		<hr>
		<p><b>Author:</b> ${book.author}</p>
		<p><b>Genre:</b> ${book.genre}</p>
		<p><b>Year:</b> ${book.year}
		<b>Rating:</b> ${book.rating}</p>
		<hr>
		<p><b>Description:</b> ${book.description}</p> `;
		main.appendChild(bookCard);
		nav.appendChild(buttonContainer);
		nav.appendChild(genreSort)
		genreSort.appendChild(genreBtnContainer);
		nav.appendChild(subSort)
		subSort.appendChild(sortBtnContainer);
		nav.appendChild(nameSort)
		nameSort.appendChild(nameBtnContainer);


	})
}

// handle input for search
const handleSearchInput = (event) => {
	event.preventDefault();
	// Store the value in a variable so we can access it after we
	// clear it from the input
	const userSearch = document.getElementById("user-input").value;
	document.getElementById("user-input").value = "";
	searchstring = userSearch;
	if (searchstring != "") {
		search(userSearch);
	}
}

//get unique rating from the books array
//get unique genres from the book array
const genres = [...new Set(books.map((book) => book.genre))];
const rating = [...new Set(books.map((book) => Math.trunc(book.rating)))];

// function addLastName:
//1. copy author property from books array to findLastName
//2. split name string
//3. identify the last word in the name
//4. push last word(name) into new array temp
//5. copy books array to get all the properties to mutable array BooksLastName
//6. add a new property(lastname) into BooksLastName array and fill it with all the lastnames of the authors
//7. pass new array with lastnames into sorting function

function addLastName() {
	main.innerHTML = ""; //clear existing content
	const findLastname = books.map((book) => book.author);
	for (i = 0; i < findLastname.length; i++) {
		lastN = findLastname[i].split(" ");
		tempN = lastN[lastN.length - 1];
		tempArr.push(tempN);
	}
	booksLastName = books;
	for (i = 0; i < books.length; i++) {
		booksLastName[i].lastname = tempArr[i];
	}
	sortLast(booksLastName);
}

function sortLast(booksLastName) {
	//clear existing content;
	main.innerHTML = "";
	// make new array with sorted results on last name
	const booksByAuthorLastname = booksLastName.slice().sort((a, b) => a.lastname.localeCompare(b.lastname));
	// pass new array into function for filtering books.
	displayFilteredBooks(booksByAuthorLastname);
}

//----------- MAKE THE BUTTONS -----------//


//genre
genres.forEach((genre) => {
	const button = document.createElement("button");
	button.classList.add('button');
	button.textContent = genre;
	button.addEventListener("click", () => filterByGenre(genre));
	genreBtnContainer.appendChild(button);
});

//rating
rating.forEach((rating) => {
	const button = document.createElement("button");
	button.classList.add('button', 'sort');
	button.textContent = rating;
	button.addEventListener("click", () => filterBooksbyRating(rating));
	sortBtnContainer.appendChild(button);
});

//sorting on author and title
const booksByTitle = books.slice().sort((a, b) => a.title.localeCompare(b.title));
const sortButton = document.createElement("button");
sortButton.classList.add('button');
sortButton.textContent = "Title";
nameBtnContainer.appendChild(sortButton);


const booksByAuthor = books.slice().sort((a, b) => a.author.localeCompare(b.author));
const sortAuthorButton = document.createElement("button");
sortAuthorButton.classList.add('button');
sortAuthorButton.textContent = "Firstname";
nameBtnContainer.appendChild(sortAuthorButton);

//sorting on last name
const sortAuthorLastNameButton = document.createElement("button");
sortAuthorLastNameButton.classList.add('button');
sortAuthorLastNameButton.textContent = "Lastname";
nameBtnContainer.appendChild(sortAuthorLastNameButton);

//sort on highest rating
const sortRatingHighButton = document.createElement("button");
sortRatingHighButton.classList.add('button', 'sort');
sortRatingHighButton.textContent = "Decending";
sortBtnContainer.appendChild(sortRatingHighButton);

//lowest rating
const sortRatingLowBtn = document.createElement("button");
sortRatingLowBtn.classList.add('button', 'sort');
sortRatingLowBtn.textContent = "Acending";
sortBtnContainer.appendChild(sortRatingLowBtn);

//random
const randomButton = document.createElement("button");
randomButton.classList.add('button', 'randombtn');
randomButton.textContent = "Random";
genreBtnContainer.appendChild(randomButton);

const clearBtn = document.createElement("button");
clearBtn.classList.add('button', 'sort');
clearBtn.textContent = "Clear search";
sub.appendChild(clearBtn);

const showAllBtn = document.createElement("button");
showAllBtn.classList.add('button', 'sort');
showAllBtn.textContent = "Show all books";
sub.appendChild(showAllBtn);

//---------- FILTER & SORT FUNCTIONS -------------//

//function for sort high to low rating
function sortHigh(a, b) {
	main.innerHTML = ""; //clear existing content;
	const booksByHighRating = books.sort((a, b) => b.rating - a.rating);
	displayFilteredBooks(booksByHighRating);
}

//function for sort low to high rating
function sortLow(a, b) {
	main.innerHTML = ""; //clear existing content;
	const booksByLow = books.sort((a, b) => a.rating - b.rating);
	sortRatingLowBtn.classList.add('.sort-selected');
	displayFilteredBooks(booksByLow);
}

//filterbooks by genre
function filterByGenre(genre) {
	const filteredBooks = books.filter((book) => book.genre === genre);
	displayFilteredBooks(filteredBooks);
}

//filterbooks by rating
function filterBooksbyRating(rating) {
	const bookRating = books.filter((book) => Math.trunc(book.rating) == rating);
	displayFilteredBooks(bookRating);
}

//Search for string in title, description, author, genre
//storing the result in searchresult
function search(searchstring) {
	main.innerHTML = ""; //clear existing content
	for (i = 0; i < books.length; i++) {
		if (books[i].description.toLowerCase().includes(searchstring.toLowerCase())) {
			foundWhere = `Found "${searchstring}"in the description: ${books[i].description}.`
			searchResult.push(books[i]);
		}
		else if (books[i].title.toLowerCase().includes(searchstring.toLowerCase())) {
			foundWhere = `Found "${searchstring}"in the title: ${books[i].title}.`
			searchResult.push(books[i]);
		}
		else if (books[i].author.toLowerCase().includes(searchstring.toLowerCase())) {
			foundWhere = `Found "${searchstring}"in an authors name: ${books[i].author}`
			searchResult.push(books[i]);
		}
		else if (books[i].genre.toLowerCase().includes(searchstring.toLowerCase())) {
			foundWhere = `Found "${searchstring}"in the genre: ${books[i].genre}.`
			searchResult.push(books[i]);
		}

	}

	displaySearch(searchResult);
}

// functions for displaying filter/sort/search results

//display filtered/sorted books
function displayFilteredBooks(a) {
	//clear the existing content
	main.innerHTML = ""; //clear existing content

	a.forEach((book) => {
		const bookCard = document.createElement('div');
		bookCard.classList.add('book-card');

		bookCard.innerHTML = `
		<img class="cover" src="${book.image}"alt="${book.title}"></img> <h2>${book.title}</h2>
		<hr>
		<p><b>Author:</b> ${book.author}</p>
		<p><b>Genre:</b> ${book.genre}</p>
		<p><b>Year:</b> ${book.year}
		<b>Rating:</b> ${book.rating}</p>
		<hr>
		<p><b>Description:</b> ${book.description}</p> `;
		main.appendChild(bookCard);

	});
}

function displaySearch(a) {
	//clear the existing content
	result.innerHTML = "";
	a.forEach((book) => {
		const bookCard = document.createElement('div');
		const feedback = document.createElement('div');
		bookCard.classList.add('book-card');
		bookCard.addEventListener("click", () => clear());
		bookCard.innerHTML = `
			<div class="searchResponse">
		<button class="button clearbtn" onClick="clear()"> X </button>
			</div>
			<img class="cover" src="${book.image}"alt="${book.title}"></img>
			<h2>${book.title}</h2>
			<hr>
			<p><b>Author:</b> ${book.author}</p>
			<p><b>Genre:</b> ${book.genre}</p>
			<p><b>Year:</b> ${book.year}
			<b>Rating:</b> ${book.rating}</p>
			<hr>
			<p><b>Description:</b> ${book.description}</p>
 `;
		result.appendChild(feedback);
		result.appendChild(bookCard);

	});

	//empty the search
	searchResult = [];
	//show all the books under the search
	displayBooks();
}

function clear() {
	searchResult = [];
	displaySearch(searchResult);
};


function getRandom() {
	result.innerHTML = "";
	randomBook = books[(Math.floor(Math.random() * books.length))];
	const bookCard = document.createElement('div');
	const feedback = document.createElement('div');
	bookCard.addEventListener("click", () => clear());
	bookCard.classList.add('book-card');
	bookCard.innerHTML = `
	<div class="searchResponse">
	<button class="button clearbtn" onClick="clear()"> X </button></div>
		<img class="cover" src="${randomBook.image}"alt="${randomBook.title}"></img>
		<h2>${randomBook.title}</h2>
		<hr>
		<p><b>Author:</b> ${randomBook.author}</p>
		<p><b>Genre:</b> ${randomBook.genre}</p>
		<p><b>Year:</b> ${randomBook.year}
		<b>Rating:</b> ${randomBook.rating}</p>
		<hr>
		<p><b>Description:</b> ${randomBook.description}</p>
	`;
	result.appendChild(feedback);
	result.appendChild(bookCard);

}


displayBooks();

//Eventlisteners
form.addEventListener("submit", handleSearchInput);
sub.addEventListener("click", () => clear());
sub.addEventListener("click", () => displayBooks());
sortRatingLowBtn.addEventListener("click", () => sortLow());
sortRatingHighButton.addEventListener("click", () => sortHigh());
sortAuthorLastNameButton.addEventListener("click", () => addLastName());
sortAuthorButton.addEventListener("click", () => displayFilteredBooks(booksByAuthor));
sortButton.addEventListener("click", () => displayFilteredBooks(booksByTitle));
randomButton.addEventListener("click", () => getRandom());


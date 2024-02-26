//Array
const shows = [
  {
    title: 'Breaking Bad',
    creator: 'Vince Gilligan',
    year: 2008,
    genre: 'Crime',
    rating: 9.5,
    description:
      'A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his familys future.',
    image: './shows-images/breakingbad.jpeg'
  },
  {
    title: 'The Wire',
    creator: 'David Simon',
    year: 2002,
    genre: 'Crime',
    rating: 9.3,
    description:
      'The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.',
    image: './shows-images/thewire.jpeg'
  },
  {
    title: 'The Sopranos',
    creator: 'David Chase',
    year: 1999,
    genre: 'Crime',
    rating: 9.2,
    description:
      'New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.',
    image: './shows-images/sopranos.jpeg'
  },
  {
    title: 'Six Feet Under',
    creator: 'Alan Ball',
    year: 2001,
    genre: 'Drama',
    rating: 8.7,
    description:
      'A chronicle of the lives of a dysfunctional family who run an independent funeral home in Los Angeles.',
    image: './shows-images/sixfeetunder.jpg'
  },
  {
    title: 'Better Call Saul',
    creator: 'Vince Gilligan',
    year: 2015,
    genre: 'Crime',
    rating: 9,
    description:
      'The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.',
    image: './shows-images/bettercallsaul.jpeg'
  },
  {
    title: 'The Fresh Prince of Bel-Air',
    creator: 'Andy Borowitz',
    year: 1990,
    genre: 'Comedy',
    rating: 7.9,
    description:
      'A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion.',
    image: './shows-images/freshprince.jpeg'
  },
  {
    title: 'Community',
    creator: 'Dan Harmon',
    year: 2009,
    genre: 'Comedy',
    rating: 8.5,
    description:
      'A suspended lawyer is forced to enroll in a community college with an eccentric staff and student body.',
    image: './shows-images/community.jpeg'
  },
]

//DOM selectors
const cards = document.querySelector(".show-cards");
const filterAll = document.getElementById("all");
const filterDrama = document.getElementById("drama");
const filterComedy = document.getElementById("comedy");
const filterCrime = document.getElementById("crime");
const sortAZ = document.getElementById("az");
const sortRelease = document.getElementById("release");
const sortRating = document.getElementById("rating");
const randomButton = document.getElementById("random");

//Load array content into HTML, this will fill the show cards with their respective information
const loadShows = (shows) => {
  cards.innerHTML = "";
  shows.forEach((show) => {
    cards.innerHTML += `
    <div class="show-cards">
      <img class="card-img" src="${show.image}">
      <h2>${show.title}</h2>
      <p class="card-info">${show.creator}</p>
      <p class="card-info">${show.year}</p>
      <p class="card-info">${show.genre}</p>
      <p class="card-info">${show.rating}</p>
      <p class="description">${show.description}</p>
    </div>
  `;
  });
};

//Load cards when page opens
loadShows(shows);

//Declare lowToHigh variable for sort functin to work
let lowToHigh = true;

//Make buttons return to default styling after clicking
document.querySelectorAll('.buttons').forEach(button => {
  button.addEventListener('click', () => {
    button.blur();
  });
});

//Function to filter by genre
const filterByGenre = (shows, genre) => {
  return shows.filter(show => show.genre.toLowerCase() === genre.toLowerCase());
};

//Functions to sort by rating, year or alphabeticaly
const sortByRating = (shows, ascending = true) => {
  return shows.sort((a, b) => {
    return ascending ? a.rating - b.rating : b.rating - a.rating;
  });
};

const sortByYear = (shows, ascending = true) => {
  return shows.sort((a, b) => {
    return ascending ? a.year - b.year : b.year - a.year;
  });
};

const sortByAZ = (shows, ascending = true) => {
  return shows.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    return ascending ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
  });
};

//Function and EventListener for randomizer
const getRandomShow = () => {
  const randomIndex = Math.floor(Math.random() * shows.length);
  return shows[randomIndex];
};

const updateShowDetails = (show) => {
  const showCardContainer = document.getElementById('show-card-container');
  showCardContainer.innerHTML = `
    <div class="show-cards">
      <img class="card-img" src="${show.image}">
      <h2>${show.title}</h2>
      <p class="card-info">${show.creator}</p>
      <p class="card-info">${show.year}</p>
      <p class="card-info">${show.genre}</p>
      <p class="card-info">${show.rating}</p>
      <p class="description">${show.description}</p>
    </div>
  `;
};

randomButton.addEventListener('click', () => {
  const randomShow = getRandomShow();
  updateShowDetails(randomShow);
});

//EventListeners
filterAll.addEventListener('click', () => {
  loadShows(shows);
});

filterDrama.addEventListener('click', () => {
  const filteredShows = filterByGenre(shows, 'Drama');
  loadShows(filteredShows);
});

filterComedy.addEventListener('click', () => {
  const filteredShows = filterByGenre(shows, 'Comedy');
  loadShows(filteredShows);
});

filterCrime.addEventListener('click', () => {
  const filteredShows = filterByGenre(shows, 'Crime');
  loadShows(filteredShows);
});

sortRating.addEventListener('click', () => {
  sortByRating(shows, !lowToHigh);
  lowToHigh = !lowToHigh;
  loadShows(shows);
});

sortRelease.addEventListener('click', () => {
  sortByYear(shows, !lowToHigh);
  lowToHigh = !lowToHigh;
  loadShows(shows);
});

sortAZ.addEventListener('click', () => {
  sortByAZ(shows, !lowToHigh);
  lowToHigh = !lowToHigh;
  loadShows(shows);
});
//Dom selectors
const destinationDiv = document.getElementById('load-destinations')
const buttonTemp = document.getElementById('button-temp')
const buttonRate = document.getElementById('button-rate')
const dropDown = document.getElementById('filter-dropdown')
const buttonRandom = document.getElementById('button-random')
const searchInput = document.getElementById("search")

//global scope
let lowToHigh = true

//Array with objects with different destinations
const destinations = [
  {
    name: 'Isle of Skye',
    country: 'Scotland',
    language: 'English',
    accessibility: 'Difficult',
    rating: 4.2,
    temperature: 7,
    description:
      'Skye is a world class destination for walkers and climbers. The Cuillin Range and The Trotternish Ridge offer challenging climbs and interesting scrambles.',
    image: './destinations-images/isle-of-skye-scottland.jpg'
  },
  {
    name: 'Taormina',
    country: 'Italy',
    language: 'Italian',
    accessibility: 'Easy',
    rating: 4.2,
    temperature: 25,
    description:
      'Beautifully restored mediaeval buildings, breathtaking views around every corner. Add winding streets strewn with shops, bars and restaurants.',
    image: './destinations-images/Taormina-italy.jpg'
  },
  {
    name: 'Purnululu',
    country: 'Australia',
    language: 'English',
    accessibility: 'Difficult',
    rating: 4.4,
    temperature: 35,
    description:
      'Wander along ancient creek beds and through striking gorges that transform into a golden paradise late in the day.  ',
    image: './destinations-images/purnululu-aus.jpg'
  },
  {
    name: 'Xochimilco lake',
    country: 'Mexico',
    language: 'spanish',
    accessibility: 'easy',
    rating: 4.0,
    temperature: 27,
    description:
      'The colorful, flowery, and highly decorated trajineras are some of the distinctive features of this important place of the Mexican culture.',
    image: './destinations-images/xochimilco-lake-mexico.jpg'
  },
  {
    name: 'Uluru',
    country: 'Australia',
    language: 'English',
    accessibility: 'Difficult',
    rating: 5.0,
    temperature: 39,
    description:
      'Uluru is world famous for its amazing rock paintings. Its a site that has been used as a part of Anangu education for thousands of years.',
    image: './destinations-images/Uluru-australia.jpg'
  },
  {
    name: 'Marble Cathedral',
    country: 'Chile',
    language: 'Spanish',
    accessibility: 'Difficult',
    rating: 4.6,
    temperature: 12,
    description:
      'Drift between pure marble columns, through smooth arches that have been carved out over thousands of years.',
    image: './destinations-images/marble-cathedral-chile.jpg'
  },
  {
    name: 'Danxia Landform',
    country: 'China',
    language: 'Chinese',
    accessibility: 'Moderate',
    rating: 5.0,
    temperature: 7,
    description:
      'Characterized by spectacular red cliffs and a range of erosional landforms, Danxia is famous for its rainbow colors.',
    image: './destinations-images/danxia landform geological park china.jpg'
  },
  {
    name: 'Abisko',
    country: 'Sweden',
    language: 'Swedish',
    accessibility: 'Moderate',
    rating: 4.5,
    temperature: -7,
    description:
      'Abisko host some of the most amazing Northern Lights viewing, as well as the vibrant Swedish Lapland culture.',
    image: './destinations-images/abisko-northenlights-sweden.jpg'
  },
  {
    name: 'Larung gar',
    country: 'Tibet',
    language: 'Tibetan',
    accessibility: 'Moderate',
    rating: 4.9,
    temperature: 6,
    description:
      'This town is famous for its Buddhist Academy that holds thousands of students, monks and nuns. The town is a sea of red houses.',
    image: './destinations-images/Larung-gar-Tibet.jpg'
  },
  {
    name: 'Wangxian Valley',
    country: 'China',
    language: 'Chinese',
    accessibility: 'Moderate',
    rating: 4.1,
    temperature: 8,
    description:
      'Wangxian is famous for its houses hanging from its cliff. Integrating landscapes, outdoor rafting, culture and folk experience.',
    image: './destinations-images/wangxian-valley-china.jpg'
  },
  {
    name: 'Die Rakotzbrück',
    country: 'Germany',
    language: 'German',
    accessibility: 'Easy',
    rating: 3.9,
    temperature: 14,
    description:
      'Wangxian is famous for its houses hanging from its cliff. Integrating landscapes, outdoor rafting, culture and folk experience.',
    image: './destinations-images/die-rakotzbruck-germany.jpg'
  },
  {
    name: 'Hanoi railway',
    country: 'Vietnam',
    language: 'Vietnamese',
    accessibility: 'Easy',
    rating: 4.3,
    temperature: 29,
    description:
      'Wangxian is famous for its houses hanging from its cliff. Integrating landscapes, outdoor rafting, culture and folk experience.',
    image: './destinations-images/hanoi-vietnam.jpg'
  },
  {
    name: 'Hoia Baciu forest',
    country: 'Romania',
    language: 'Romanian',
    accessibility: 'Moderate',
    rating: 3.9,
    temperature: 24,
    description:
      'Wangxian is famous for its houses hanging from its cliff. Integrating landscapes, outdoor rafting, culture and folk experience.',
    image: './destinations-images/crooked-forest-romania.jpg'
  },
  {
    name: 'Reine',
    country: 'Norway',
    language: 'Norwegian',
    accessibility: 'Moderate',
    rating: 3.8,
    temperature: 5,
    description:
      'Wangxian is famous for its houses hanging from its cliff. Integrating landscapes, outdoor rafting, culture and folk experience.',
    image: './destinations-images/reine-norway.jpg'
  },
  {
    name: 'Fly Geyser',
    country: 'USA',
    language: 'English',
    accessibility: 'Easy',
    rating: 4.5,
    temperature: 25,
    description:
      'This geyser was created nearly 100 years ago when an attempt to drill for a well accidentally struck geothermal boiling water.',
    image: './destinations-images/fly-geyser-nevada-usa.jpg'
  },
]

//Function that loads the content of the objects into the HTML
const loadDestinations = (destinations) => {
    // Cleans the div before each load
    destinationDiv.innerHTML = ""
    destinations.forEach((dest) => {
    destinationDiv.innerHTML += `
    <div class="container">
      <div class="text-above"><h4>${dest.name}<br><span>${dest.country}</span></div>
      <div class="img-container"><img src="${dest.image}"></div>
      <ul>. 
        <li>Language: ${dest.language}</li>
        <li>Accessibility: ${dest.accessibility}</li>
        <li>Temperature: ${dest.temperature}ºC</li>
        <li>Rating: ${dest.rating}/5</li>
      </ul>
      <div class="description-text"><p>${dest.description}</p></div>
      </div>
    `
    })
}
// Calling the function as soon as the website opens
loadDestinations(destinations)

//function that shift b
const tempToggle = () => {
  lowToHigh = !lowToHigh
  sortByTemp()
}

const sortByTemp = () => {
  if (lowToHigh) {
  destinations.sort((destA, destB) => {
      return destB.temperature - destA.temperature
  })
  } else {
    destinations.sort((destA, destB) => {
      return destA.temperature - destB.temperature
    })
}
destinationDiv.classList.replace('filtered-destinations', 'load-destinations')
loadDestinations(destinations)
}

const rateToggle = () => {
  lowToHigh = !lowToHigh
  sortByRate()
}

const sortByRate = () => {
  if (lowToHigh) {
    destinations.sort((destA, destB) => {
      return destB.rating - destA.rating
   })
  } else {
    destinations.sort((destA, destB) => {
      return destA.rating - destB.rating
    })
  }
  destinationDiv.classList.replace('filtered-destinations', 'load-destinations')
  loadDestinations(destinations)
} 

const filterCountry = () => {
const countryValue = dropDown.value
  if (countryValue === 'all'){
    loadDestinations(destinations)
    destinationDiv.classList.replace('filtered-destinations', 'load-destinations')
    return
  }
  const filteredList = destinations.filter((dest) => {
    const matchesType = dest.country === countryValue
    return matchesType 
  })
  destinationDiv.classList.replace('load-destinations', 'filtered-destinations')
  loadDestinations(filteredList)
}

//Function for random-button, together with bubb
const filterRandom = () => {
  let randomDestination = Math.floor(Math.random()*destinations.length);
  destinationDiv.classList.replace('load-destinations', 'filtered-destinations')
  loadDestinations([destinations[randomDestination]]) 
  setTimeout(()=> destinationDiv.innerHTML += `<div class="random-text">
  <h4>Hey! This is a great spot for remote web developing, don't you think?</h4>
  </div>
  `, 700)
}

// Function for searchbar, returns destinations based on name, country and language.
const handleSearch = () => {
  const searchValue = searchInput.value.toLowerCase()
    const searchResult = destinations.filter((dest) => {
      return (
        dest.name.toLowerCase().includes(searchValue) ||
        dest.country.toLowerCase().includes(searchValue) ||
        dest.language.toLowerCase().includes(searchValue)
      )
    })
    loadDestinations(searchResult)
  }
  
//EventListners 
buttonRandom.addEventListener('click', filterRandom)
buttonTemp.addEventListener('click', tempToggle)
buttonRate.addEventListener('click', rateToggle)
dropDown.addEventListener('change', filterCountry)
searchInput.addEventListener('input', handleSearch)


/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/
const destinationDiv = document.getElementById('load-destinations')
const buttonTemp = document.getElementById('button-temp')
const buttonRate = document.getElementById('button-rate')
const dropDown = document.getElementById('filter-dropdown')



const destinations = [
  {
    name: 'Isle of Skye',
    country: 'scotland',
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
    country: 'italy',
    language: 'Italian',
    accessibility: 'Easy',
    rating: 4.2,
    temperature: 25,
    description:
      'Beautifully restored mediaeval buildings, breathtaking views around every corner and a giddy network of winding streets strewn with shops, bars and restaurants.',
    image: './destinations-images/Taormina-italy.jpg'
  },
  {
    name: 'Purnululu',
    country: 'australia',
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
    country: 'mexico',
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
    country: 'australia',
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
    country: 'chile',
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
    country: 'china',
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
    country: 'sweden',
    language: 'Swedish',
    accessibility: 'Moderate',
    rating: 4.5,
    temperature: -7,
    description:
      'Abisko host some of the most amazing Northern Lights viewing, as well as the vibrant Swedish Lapland culture.',
    image: './destinations-images/abisko-national-park-sweden.jpg'
  },
  {
    name: 'Larung gar',
    country: 'tibet',
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
    country: 'china',
    language: 'Chinese',
    accessibility: 'Moderate',
    rating: 4.1,
    temperature: 8,
    description:
      'Wangxian is famous for its houses hanging from its cliff. Integrating landscapes, outdoor rafting, culture and folk experience.',
    image: './destinations-images/wangxian-valley-china.jpg'
  },
]

//Skapa funktion som laddar array in i html
const loadDestinations = (destinations) => {
    destinationDiv.innerHTML = ""
    destinations.forEach((object) => {
    destinationDiv.innerHTML += `
    <div class="container">
      <div class="text-above"><h4>${object.name}<br><span>${object.country}</span></div>
      <div class="img-container"><img src="${object.image}"></div>
      <ul>. 
        <li>Language: ${object.language}</li>
        <li>Accessibility: ${object.accessibility}</li>
        <li>Temperature: ${object.temperature}ºC</li>
        <li>Rating: ${object.rating}/5</li>
      </ul>
      <div class="description-text"><p>${object.description}</p></div>
      </div>
    `
    })
}
// hämtar alla resmål när man laddar sidan
loadDestinations(destinations)

//sätt högst upp under DOM
let lowToHigh = true

const tempToggle = () => {
  lowToHigh = !lowToHigh
  sortByTemp()
}

const sortByTemp = () => {
  if (lowToHigh) {
  destinations.sort((a, b) => {
      return b.temperature - a.temperature
  })
  } else {
    destinations.sort((a, b) => {
      return a.temperature - b.temperature
    })
}
loadDestinations(destinations)
}

const rateToggle = () => {
  lowToHigh = !lowToHigh
  sortByRate()
}

const sortByRate = () => {
  if (lowToHigh) {
    destinations.sort((a, b) => {
      return b.rating - a.rating
   })
  } else {
    destinations.sort((a, b) => {
      return a.rating - b.rating
    })
  }
  loadDestinations(destinations)
  console.log()
} 

//const scotland = destinations.filter((object) => object.country === "scotland")

//const country = destinations.filter((object) => object.country === `${country}`)
/*
const filterCountry = () => {
  destinations.country.filter((country) => country === dropDown.value )
  loadDestinations(destinations)
}*/

const filterCountry = () => {
const countryValue = dropDown.value
  if (countryValue === 'all'){
    loadDestinations(destinations)
    return
  }
  const filteredList = destinations.filter((object) => {
    const matchesType = object.country.includes(countryValue)
    return matchesType 
  })
  destinationDiv.classList.replace('filtered-destinations')
  loadDestinations(filteredList)
}

// alla addEventListeners tillsammans på botten sen
buttonTemp.addEventListener("click", tempToggle)
buttonRate.addEventListener("click", rateToggle)
dropDown.addEventListener("change", filterCountry)






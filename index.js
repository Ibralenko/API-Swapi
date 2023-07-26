const peopleUrl = 'https://swapi.dev/api/people';
const filmsUrl = 'https://swapi.dev/api/films';
const starshipsUrl = 'https://swapi.dev/api/starships';
const vehiclesUrl = 'https://swapi.dev/api/vehicles';
const speciesUrl = 'https://swapi.dev/api/species'
const planetsUrl = 'https://swapi.dev/api/planets'

fetch(peopleUrl)
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error(error))

fetch(filmsUrl)
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error(error))

fetch(starshipsUrl)
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error(error))

fetch(vehiclesUrl)
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error(error))

fetch(speciesUrl)
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error(error))

fetch(planetsUrl)
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error(error))
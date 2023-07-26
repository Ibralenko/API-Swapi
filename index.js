const numberInput = document.querySelector('#number');
const info = document.querySelector('.info')
const peopleUrl = 'https://swapi.dev/api/people';
const filmsUrl = 'https://swapi.dev/api/films/';
const starshipsUrl = 'https://swapi.dev/api/starships/';
const vehiclesUrl = 'https://swapi.dev/api/vehicles/';
const speciesUrl = 'https://swapi.dev/api/species'
const planetsUrl = 'https://swapi.dev/api/planets'

function createPeoplePage(name,birth, gender, mass, eye, hair, skin){
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-post')
  info.append(containerPost)
  containerPost.innerHTML =
  `
  <h2 class="title">${name}</h2>
  <p class="text">Birth year: ${birth}</p>
  <p class="text">Gender: ${gender}</p>
  <p class="text">Mass: ${mass}</p>
  <p class="text">Eye color: ${eye}</p>
  <p class="text">Hair color: ${hair}</p>
  <p class="text">Mass: ${skin}</p>
  `
}

function getSelectValue(id) {
  const selectedValue = document.getElementById("select-list").value;
  if (selectedValue === "People") {
    fetch(peopleUrl + `/${id}`)
      .then(response => response.json())
      .then(json => createPeoplePage(json.name,json.birth_year, json.gender, json.mass,json.eye_color,json.hair_color,json.skin_color))
      .catch(error => console.error(error))
  } if (selectedValue === "Films") {
    fetch(filmsUrl + `/${id}`)
      .then(response => response.json())
      .then(json => createPeoplePage(json.title, json.director, json.species))
      .catch(error => console.error(error))
  } if (selectedValue === "Starships") {
    fetch(starshipsUrl + `/${id}`)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
  } if (selectedValue === "Vehicles") {
    fetch(vehiclesUrl + `/${id}`)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
  } if (selectedValue === "Spacies") {
    fetch(speciesUrl + `/${id}`)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
  } if (selectedValue === "Planets") {
    fetch(planetsUrl + `/${id}`)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
  }
}


const numberInput = document.querySelector('#number');
const info = document.querySelector('.info')
const peopleUrl = 'https://swapi.dev/api/people';
const filmsUrl = 'https://swapi.dev/api/films/';
const starshipsUrl = 'https://swapi.dev/api/starships/';
const vehiclesUrl = 'https://swapi.dev/api/vehicles/';
const speciesUrl = 'https://swapi.dev/api/species'
const planetsUrl = 'https://swapi.dev/api/planets'

function createPage(title, year,){
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-post')
  container.append(containerPost)
  containerPost.innerHTML =
  `
  <h2 class="title">${title}</h2>
  <p class="text">${year}</p>
  <p class="text">${year}</p>
  `
}

function getSelectValue(id) {
  const selectedValue = document.getElementById("select-list").value;
  if (selectedValue === "People") {
    fetch(peopleUrl + `/${id}`)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
  } if (selectedValue === "Films") {
    fetch(filmsUrl + `/${id}`)
      .then(response => response.json())
      .then(json => console.log(json))
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


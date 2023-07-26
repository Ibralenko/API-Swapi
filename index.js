const numberInput = document.querySelector('#number');
const info = document.querySelector('.info')
const errordiv = document.querySelector('.error')
const form = document.querySelector('.form')
const peopleUrl = 'https://swapi.dev/api/people/';
const filmsUrl = 'https://swapi.dev/api/films/';
const starshipsUrl = 'https://swapi.dev/api/starships/';
const vehiclesUrl = 'https://swapi.dev/api/vehicles/';
const speciesUrl = 'https://swapi.dev/api/species/'
const planetsUrl = 'https://swapi.dev/api/planets/'


function blockBtn() {
  numberInput.value === '' ? document.querySelector('.btn').disabled = true : document.querySelector('.btn').disabled = false
}
blockBtn()

function checkInput() {
  if (numberInput.value <= 0 || numberInput.value >= 11) {
    alert('Enter number from 1 to 10')
  }
}

function createPeoplePage(name, birth, gender, mass, eye, hair, skin) {
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-info')
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


function createFilmsPage(title, episode, director, producer) {
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-post')
  info.append(containerPost)
  containerPost.innerHTML =
    `
  <h2 class="title">${title}</h2>
  <p class="text">Episode: ${episode}</p>
  <p class="text">Director: ${director}</p>
  <p class="text">Producer: ${producer}</p>
  `
}

function createStarshpsPage(name, model, manufacturer, length) {
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-post')
  info.append(containerPost)
  containerPost.innerHTML =
    `
  <h2 class="title">${name}</h2>
  <p class="text">Model: ${model}</p>
  <p class="text">Manufacturer : ${manufacturer}</p>
  <p class="text">Length: ${length}</p>
  `
}


function createSpeciesPage(name, classification, designation, language) {
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-post')
  info.append(containerPost)
  containerPost.innerHTML =
    `
  <h2 class="title">${name}</h2>
  <p class="text">Classification: ${classification}</p>
  <p class="text">Designation : ${designation}</p>
  <p class="text">Language: ${language}</p>
  `
}

function createPlanetsPage(name, diameter, population, climate) {
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-post')
  info.append(containerPost)
  containerPost.innerHTML =
    `
  <h2 class="title">${name}</h2>
  <p class="text">diameter: ${diameter}</p>
  <p class="text">population : ${population}</p>
  <p class="text">climate : ${climate}</p>
  `
}



function getSelectValue(id) {
  const selectedValue = document.getElementById("select-list").value;
  if (selectedValue === "People") {
    fetch(peopleUrl + `${id}`)
      .then(response => response.json())
      .then(errordiv.innerHTML = `Идет загрузка...`)
      .then(json => createPeoplePage(json.name, json.birth_year, json.gender, json.mass, json.eye_color, json.hair_color, json.skin_color))
      .catch(error => console.error(error))
      .finally(console.log('Запрос выполнен'))
  } if (selectedValue === "Films") {
    fetch(filmsUrl + `/${id}`)
      .then(response => response.json())
      .then(json => createFilmsPage(json.title, json.episode_id, json.director, json.producer))
      .catch(error => console.error(error))
      .finally(console.log('Запрос выполнен'))
  } if (selectedValue === "Starships") {
    fetch(starshipsUrl + `${id}`)
      .then(response => response.json())
      .then(json => createStarshpsPage(json.name, json.model, json.manufacturer, json.length))
      .catch(error => console.error(error))
      .finally(console.log('Запрос выполнен'))
  } if (selectedValue === "Vehicles") {
    fetch(vehiclesUrl + `${id}`)
      .then(response => response.json())
      .then(json => createStarshpsPage(json.name, json.model, json.manufacturer, json.length))
      .catch(error => console.error(error))
  } if (selectedValue === "Spacies") {
    fetch(speciesUrl + `${id}`)
      .then(response => response.json())
      .then(json => createSpeciesPage(json.name, json.classification, json.designation, json.language))
      .catch(error => console.error(error))
      .finally(console.log('Запрос выполнен'))
  } if (selectedValue === "Planets") {
    fetch(planetsUrl + `${id}`)
      .then(response => response.json())
      .then(json => createPlanetsPage(json.name, json.diameter, json.population, json.climate))
      .catch(error => console.error(error))
      .finally(console.log('Запрос выполнен'))
  }
  form.reset()
}


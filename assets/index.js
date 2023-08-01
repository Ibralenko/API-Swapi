const numberInput = document.querySelector('#number');
const info = document.querySelector('.info')
const loadingDiv = document.querySelector('.loading')
const errorDiv = document.querySelector('.error')
const form = document.querySelector('.form')
const btn = document.querySelector('.btn')
const PEOPLE_URl = 'https://swapi.dev/api/people/';
const FILMS_URL = 'https://swapi.dev/api/films/';
const STARSHIPS_URL = 'https://swapi.dev/api/starships/';
const PLANETS_URL = 'https://swapi.dev/api/planets/'


function disableBtn() {
  numberInput.value === '' ? document.querySelector('.btn').disabled = true : document.querySelector('.btn').disabled = false
}
disableBtn()

function checkInput() {
  if (numberInput.value <= 0 || numberInput.value >= 11) {
    alert('Enter number from 1 to 10')
  }
}

const loader = () => {
  loadingDiv.innerHTML = `Идет загрузка...`
  loadingDiv.style.display = 'block';
}

const hiddenLoader = () => {
  loadingDiv.style.display = 'none';
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
  containerPost.classList.add('container-info')
  info.append(containerPost)
  containerPost.innerHTML =
    `
  <h2 class="title">Film: ${title}</h2>
  <p class="text">Episode: ${episode}</p>
  <p class="text">Director: ${director}</p>
  <p class="text">Producer: ${producer}</p>
  `
}

function createStarshipsPage(name, model, manufacturer, length) {
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-info')
  info.append(containerPost)
  containerPost.innerHTML =
    `
  <h2 class="title">Starship: ${name}</h2>
  <p class="text">Model: ${model}</p>
  <p class="text">Manufacturer : ${manufacturer}</p>
  <p class="text">Length: ${length}</p>
  `
}



function createPlanetsPage(name, diameter, population, climate) {
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-info')
  info.append(containerPost)
  containerPost.innerHTML =
    `
  <h2 class="title">Planet: ${name}</h2>
  <p class="text">diameter: ${diameter}</p>
  <p class="text">population : ${population}</p>
  <p class="text">climate : ${climate}</p>
  `
}


async function getPeopleData(id) {
  try {
    loader()
    const response = await fetch(PEOPLE_URl + `${id}`)
    const data = await response.json()
    createPeoplePage(data.name, data.birth_year, data.gender, data.mass, data.eye_color, data.hair_color, data.skin_color)
    hiddenLoader()
  }
  catch (error) {
    console.log(error)
  }
  finally {
    console.log('Запрос выполнен')
  }
}


async function getFilmsData(id) {
  try {
    loader()
    const response = await fetch(FILMS_URL + `${id}`)
    const data = await response.json()
    createFilmsPage(data.title, data.episode_id, data.director, data.producer)
    hiddenLoader()
  }
  catch (error) {
    console.log(error)
  }
  finally {
    console.log('Запрос выполнен')
  }
}

async function getStarshipsData(id) {
  try {
    loader()
    const response = await fetch(STARSHIPS_URL + `${id}`)
    const data = await response.json()
    createStarshipsPage(data.name, data.model, data.manufacturer, data.length)
    hiddenLoader()
  }
  catch (error) {
    console.log(error)
  }
  finally {
    console.log('Запрос выполнен')
  }
}


async function getPlanetsData(id) {
  try {
    loader()
    const response = await fetch(PLANETS_URL + `${id}`)
    const data = await response.json()
    createPlanetsPage(data.name, data.diameter, data.population, data.climate)
    hiddenLoader()
  }
  catch (error) {
    console.error(error)
  }
  finally {
    console.log('Запрос выполнен')
  }
}

function getSelectValue() {
  const selectedValue = document.getElementById("select-list").value;
  if (selectedValue === "People") {
    getPeopleData(numberInput.value)
  } else if (selectedValue === "Films") {
    getFilmsData(numberInput.value)
  } else if (selectedValue === "Starships") {
    getStarshipsData(numberInput.value)
  } else if (selectedValue === "Planets") {
    getPlanetsData(numberInput.value)
  }
  form.reset()
  disableBtn()
}

btn.addEventListener('click', event => {
  event.preventDefault()
  info.textContent = ''
  getSelectValue(numberInput.value)
})
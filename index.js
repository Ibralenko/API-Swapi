const numberInput = document.querySelector('#number')
const peopleUrl = 'https://swapi.dev/api/people';
const filmsUrl = 'https://swapi.dev/api/films';
const starshipsUrl = 'https://swapi.dev/api/starships';
const vehiclesUrl = 'https://swapi.dev/api/vehicles';
const speciesUrl = 'https://swapi.dev/api/species'
const planetsUrl = 'https://swapi.dev/api/planets'

function getSelectValue() {
  const selectedValue = document.getElementById("select-list").value;
  if (selectedValue === "People") {
    fetch(peopleUrl)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
  } if (selectedValue === "Films") {
    fetch(filmsUrl)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
  } if (selectedValue === "Starships") {
    fetch(starshipsUrl)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
  } if (selectedValue === "Vehicles") {
    fetch(vehiclesUrl)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
  } if (selectedValue === "Spacies") {
    fetch(speciesUrl)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
  } if (selectedValue === "Planets") {
    fetch(planetsUrl)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
  }
}

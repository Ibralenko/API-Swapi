fetch('https://swapi.dev/api/', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: text,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(json => createPost(json.title, json.body))
    .catch(error => console.error(error));
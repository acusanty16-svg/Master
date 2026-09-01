fetch("https://rickandmortyapi.com/api/character")
  .then((respuesta) => respuesta.json())
  .then((respuesta) => {
    for (const item of respuesta.results) {
      document.body.innerHTML += `
            <div>
                <h2>${item.name}</h2>
                <h3>${item.origin.name}</h3>
                <img src="${item.image}" alt"${item.name}"
            </div>
        
        `;
    }
  })
  .catch((error) => {
    document.body.innerHTML = `<h2>Hubo un error con la base de datos</h2>`;
  });

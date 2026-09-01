import Header from "./components/Header/Header";
import characters from "./components/Character/Character";

document.body.prepend(Header);
const getCharacters = async () => {
  const res = await fetch("https://thronesapi.com/api/v2/Characters");
  const data = await res.json();
  return data;
};

const obtenerCharacters = await getCharacters();
characters(obtenerCharacters);

const renderCharacter = (formateoCharacter) => {
  document.querySelector(".character-container").innerHTML = `
        <img src="${formateoCharacter.imagenUrl}" alt="${formateoCharacter.titulo}">
        <h2>${formateoCharacter.nombre} ${formateoCharacter.apellido}</h2>
        <h3>(${formateoCharacter.titulo})</h3>
  `;
};

const select = document.getElementById("character-list");
select.addEventListener("change", (e) => {
  const idSeleccionado = parseInt(e.target.value);
  const personaje = obtenerCharacters.find((c) => c.id === idSeleccionado);

  const formateoCharacter = {
    nombre: personaje.firstName,
    apellido: personaje.lastName,
    titulo: personaje.title,
    imagenUrl: personaje.imageUrl,
  };

  renderCharacter(formateoCharacter);
});

import Header from "./components/Header/Header";
import Pokemon from "./components/PokemonCard/PokemonCard";
import getPokemon from "./components/Main/Main";

document.addEventListener("DOMContentLoaded", async () => {
  const pokemonData = await getPokemon();

  document.querySelector(".app").innerHTML = `
        ${Header()}
        ${Pokemon(pokemonData)}
    `;
});

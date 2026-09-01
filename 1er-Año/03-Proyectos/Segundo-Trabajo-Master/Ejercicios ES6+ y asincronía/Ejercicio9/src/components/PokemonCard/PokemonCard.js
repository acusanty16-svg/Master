import "./PokemonCard.css";
const Pokemon = (data) => {
  if (!data) return `<div class="pokemon">Cargando...</div>`;

  const { name, sprites, types } = data;
  const imagen = sprites.other["official-artwork"].front_default;
  const typesHtml = types
    .map((t) => `<div class="type ${t.type.name}">${t.type.name}</div>`)
    .join("");
  return `
    <div class="pokemon">
      <div class="pokemon-card">
        <img src="${imagen}" alt="${name}" class="pokemon-image" />
        <h2 class="pokemon-name">${name}</h2>
        <div class="pokemon-types">${typesHtml}</div>
      </div>
    </div>
  `;
};

export default Pokemon;

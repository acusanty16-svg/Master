import "./ArtistCard.css";

// Tarjeta de artista. Muestra su genero y, al pulsarla, navega a sus canciones.
const ArtistCard = (artist) => {
  let genreTitle = "Sin genero";
  if (artist.genre) {
    genreTitle = artist.genre.title;
  }
  return `
    <article class="card artist-card" data-view="/artists/${artist._id}">
      <img class="card-image" src="${artist.image}" alt="${artist.name}" />
      <div class="card-body">
        <h3 class="card-title">${artist.name}</h3>
        <span class="badge">${genreTitle}</span>
      </div>
    </article>
  `;
};

export default ArtistCard;
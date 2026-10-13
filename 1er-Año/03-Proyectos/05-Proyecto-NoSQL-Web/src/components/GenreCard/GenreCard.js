import "./GenreCard.css";

// Tarjeta de genero. Al pulsarla (data-view) navega a la lista de artistas de ese genero.
const GenreCard = (genre) => `
  <article class="card genre-card" data-view="/genres/${genre._id}">
    <img class="card-image" src="${genre.coverImage}" alt="${genre.title}" />
    <div class="card-body">
      <h3 class="card-title">${genre.title}</h3>
      <p class="card-description">${genre.description}</p>
    </div>
  </article>
`;

export default GenreCard;
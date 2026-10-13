import "./SongCard.css";

// Tarjeta de cancion. Muestra portada, titulo y artista, con un boton para escucharla.
const SongCard = (song) => {
  let artistName = "";
  if (song.artist) {
    artistName = song.artist.name;
  }
  return `
    <article class="card song-card">
      <img class="card-image" src="${song.coverImage}" alt="${song.title}" />
      <div class="card-body">
        <h3 class="card-title">${song.title}</h3>
        <p class="card-subtitle">${artistName}</p>
        <a
          class="play-btn"
          href="${song.audioUrl}"
          target="_blank"
          rel="noopener noreferrer"
          title="Escuchar en YouTube"
        >&#9654;</a>
      </div>
    </article>
  `;
};

export default SongCard;
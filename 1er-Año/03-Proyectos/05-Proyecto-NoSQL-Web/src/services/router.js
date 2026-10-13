// Enrutador de la aplicacion (enrutado por hash).
// Interpreta la ruta de la URL (#/seccion/id), pide los datos a la API
// y renderiza la vista correspondiente dentro de #main-container.
import * as api from "./api";
import GenreCard from "../components/GenreCard/GenreCard";
import ArtistCard from "../components/ArtistCard/ArtistCard";
import SongCard from "../components/SongCard/SongCard";

const container = () => document.querySelector("#main-container");

// Convierte el hash de la URL en un array de segmentos, por ejemplo:
// "#/genres/123" -> ["genres", "123"]
const parseHash = () => {
  const hash = window.location.hash.replace(/^#/, "") || "/";
  return hash.split("/").filter(Boolean);
};

// Genera la cuadricula de tarjetas o un mensaje si no hay elementos.
const grid = (items, card) => {
  if (items.length === 0) {
    return `<p class="main-state">No hay elementos para mostrar</p>`;
  }
  return `<div class="grid">${items.map(card).join("")}</div>`;
};

// Dibuja la vista actual a partir de la ruta activa.
const render = async () => {
  const main = container();
  if (!main) return;

  const [section, id] = parseHash();

  try {
    if (!section) {
      main.innerHTML = `
        <section class="hero">
          <h2>Explora la musica por generos</h2>
          <p>Una aplicacion web donde los generos, los artistas y sus canciones estan conectados a una base de datos MongoDB.</p>
          <div class="hero-links">
            <a class="hero-btn" href="#/genres">Generos</a>
            <a class="hero-btn" href="#/artists">Artistas</a>
            <a class="hero-btn" href="#/songs">Canciones</a>
          </div>
        </section>
      `;
      return;
    }

    if (section === "genres" && !id) {
      const genres = await api.getGenres();
      main.innerHTML = `<h2 class="main-title">Generos</h2>${grid(genres, GenreCard)}`;
      return;
    }

    if (section === "genres" && id) {
      const artists = await api.getArtistsByGenre(id);
      let title = "Artistas del genero";
      if (artists.length > 0) {
        title = artists[0].genre.title;
      }
      main.innerHTML = `
        <h2 class="main-title">${title}</h2>
        <p class="main-back"><a href="#/genres">&larr; Volver a generos</a></p>
        ${grid(artists, ArtistCard)}
      `;
      return;
    }

    if (section === "artists" && !id) {
      const artists = await api.getArtists();
      main.innerHTML = `<h2 class="main-title">Artistas</h2>${grid(artists, ArtistCard)}`;
      return;
    }

    if (section === "artists" && id) {
      const songs = await api.getSongs();
      const filtered = songs.filter((song) => String(song.artist._id) === id);
      let title = "Canciones del artista";
      if (filtered.length > 0) {
        title = filtered[0].artist.name;
      }
      main.innerHTML = `
        <h2 class="main-title">${title}</h2>
        <p class="main-back"><a href="#/artists">&larr; Volver a artistas</a></p>
        ${grid(filtered, SongCard)}
      `;
      return;
    }

    if (section === "songs") {
      const songs = await api.getSongs();
      main.innerHTML = `<h2 class="main-title">Canciones</h2>${grid(songs, SongCard)}`;
      return;
    }

    main.innerHTML = `<p class="main-state">Ruta no encontrada. <a href="#/">Volver al inicio</a></p>`;
  } catch {
    main.innerHTML = `<p class="main-state main-state-error">No se pudo conectar con el backend. Asegurate de que el servidor esta corriendo en localhost:8080</p>`;
  }
};

// Inicializa la navegacion: escucha los clics en tarjetas con data-view,
// reacciona a los cambios de hash y renderiza la vista inicial.
export const initRouter = () => {
  document.addEventListener("click", (event) => {
    const card = event.target.closest("[data-view]");
    if (card) {
      window.location.hash = card.dataset.view;
    }
  });
  window.addEventListener("hashchange", render);
  render();
};
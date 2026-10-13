import "./Header.css";

// Cabecera fija de la aplicacion con el titulo y el menu de navegacion.
const Header = () => `
  <header class="header">
    <h1 class="header-title">MusicGenres</h1>
    <nav class="header-nav">
      <ul>
        <li><a href="#/">Inicio</a></li>
        <li><a href="#/genres">Generos</a></li>
        <li><a href="#/artists">Artistas</a></li>
        <li><a href="#/songs">Canciones</a></li>
      </ul>
    </nav>
  </header>
`;

export default Header;
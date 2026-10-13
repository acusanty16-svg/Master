import "./Footer.css";

// Pie de pagina. Muestra el aviso de copyright con el ano actual.
const Footer = () => {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <p>MusicGenres - Copyright ${year}</p>
    </footer>
  `;
};

export default Footer;
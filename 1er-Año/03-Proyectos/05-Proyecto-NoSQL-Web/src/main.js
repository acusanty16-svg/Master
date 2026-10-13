// Punto de entrada de la aplicacion web.
// Se encarga de montar la estructura fija (cabecera y pie) dentro de #app
// y de arrancar el enrutador, que rellenara el <main> segun la ruta.
import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { initRouter } from "./services/router";

document.addEventListener("DOMContentLoaded", () => {
  // Estructura base de la pagina: cabecera + contenedor principal + pie.
  document.querySelector("#app").innerHTML = `
    ${Header()}
    <main id="main-container" class="main">
      <p class="main-state">Cargando...</p>
    </main>
    ${Footer()}
  `;
  // Arrancamos el enrutador (lee el hash actual y escucha cambios de ruta).
  initRouter();
});
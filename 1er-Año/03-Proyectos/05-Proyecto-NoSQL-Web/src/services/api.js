// Capa de acceso a datos: centraliza las llamadas HTTP a la API REST.
// Todas las rutas pasan por el prefijo /api, que Vite redirige al backend (localhost:8080).
const API = "/api";

// Realiza una peticion GET y devuelve el JSON. Lanza un error si la respuesta no es correcta.
const fetchJson = async (path) => {
  const response = await fetch(`${API}${path}`);
  if (!response.ok) {
    throw new Error(`Error ${response.status} en ${path}`);
  }
  return response.json();
};

// Obtiene la lista de generos.
export const getGenres = () => fetchJson("/genres");

// Obtiene la lista de artistas.
export const getArtists = () => fetchJson("/artist");

// Obtiene la lista de canciones.
export const getSongs = () => fetchJson("/songs");

// Obtiene los artistas que pertenecen a un genero concreto (por su id).
export const getArtistsByGenre = (id) => fetchJson(`/genres/${id}`);
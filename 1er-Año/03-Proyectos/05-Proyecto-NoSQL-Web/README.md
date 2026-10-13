# 05 — Proyecto NoSQL · Web

Aplicación web (SPA) construida con **JavaScript** y **Vite** que consume la API REST del proyecto [05-Proyecto-NoSQL-API](../05-Proyecto-NoSQL-API). Permite explorar géneros musicales, los artistas de cada género y las canciones de cada artista.

---

## Descripción

Es una *Single Page Application* ligera, sin frameworks, que renderiza vistas en función del **hash** de la URL. La navegación se resuelve con un enrutador propio y los datos se obtienen del backend mediante `fetch`.

---

## Vistas

| Ruta | Contenido |
|------|-----------|
| `#/` | Página de inicio con accesos rápidos. |
| `#/genres` | Listado de géneros. |
| `#/genres/:id` | Artistas pertenecientes a un género. |
| `#/artists` | Listado de artistas. |
| `#/artists/:id` | Canciones de un artista. |
| `#/songs` | Listado completo de canciones. |

---

## Estructura

```
05-Proyecto-NoSQL-Web/
├── index.html                 # Documento raíz
├── vite.config.js             # Configuración de Vite (proxy hacia la API)
├── public/
│   └── favicon.svg
└── src/
    ├── main.js                # Punto de entrada: monta Header, main y Footer
    ├── style.css              # Estilos globales
    ├── components/
    │   ├── Header/            # Cabecera y menú de navegación
    │   ├── Footer/            # Pie de página
    │   ├── GenreCard/         # Tarjeta de género
    │   ├── ArtistCard/        # Tarjeta de artista
    │   └── SongCard/          # Tarjeta de canción
    └── services/
        ├── api.js             # Llamadas a la API (fetch)
        └── router.js          # Enrutador por hash y renderizado
```

---

## Comunicación con la API

El archivo `vite.config.js` define un **proxy**: todas las peticiones a `/api` se redirigen a `http://localhost:8080` (el backend), eliminando el prefijo `/api`.

```
Navegador  →  /api/genres  →  Vite (proxy)  →  http://localhost:8080/genres
```

---

## Puesta en marcha

1. **Levanta primero la API** del proyecto `05-Proyecto-NoSQL-API` (debe estar escuchando en `http://localhost:8080`).

2. Instala las dependencias de la web:

   ```bash
   npm install
   ```

3. Arranca el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre en el navegador la URL que indique Vite (por defecto `http://localhost:5173`).

> Se necesitan **dos terminales**: una para la API y otra para la web.

---

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo con recarga en caliente. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión compilada. |

---

## Tecnologías

- **JavaScript (ES Modules)**
- **Vite**
- **HTML5** y **CSS3**

---

*Primer año del Máster en Desarrollo de Software — Proyecto 05 (frontend)*

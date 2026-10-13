# 05 — Proyecto NoSQL · API

API REST desarrollada con **Node.js**, **Express** y **MongoDB** (a través de **Mongoose**) para gestionar un catálogo musical compuesto por **géneros**, **artistas** y **canciones** relacionados entre sí.

---

## Descripción

El proyecto implementa un backend por capas (rutas → controladores → modelos) que expone operaciones **CRUD** sobre tres colecciones de MongoDB. La característica principal es el uso de **referencias entre documentos**:

- Un **artista** pertenece a un **género**.
- Una **canción** referencia a un **artista** y a un **género**.

Gracias a `populate()`, las respuestas incluyen la información relacionada en lugar de solo el identificador.

---

## Estructura

```
05-Proyecto-NoSQL-API/
├── TrabajoDeMaster/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                     # Conexión a MongoDB
│   │   ├── models/                       # Esquemas de Mongoose
│   │   │   ├── genre.music.model.js
│   │   │   ├── artist.music.model.js
│   │   │   └── song.music.model.js
│   │   ├── controllers/                  # Lógica de cada recurso
│   │   │   ├── genre.music.controller.js
│   │   │   ├── artist.music.controller.js
│   │   │   └── song.music.controller.js
│   │   ├── routes/                       # Definición de endpoints
│   │   │   ├── genre.music.route.js
│   │   │   ├── artist.music.route.js
│   │   │   └── song.music.route.js
│   │   └── seed.*.js                     # Scripts de carga inicial de datos
│   ├── index.js                          # Punto de entrada del servidor
│   ├── paraAntonio.js                    # Nota explicativa del proyecto
│   └── package.json
├── EvidenciasInsomnia/                   # Capturas de las peticiones probadas
└── README.md
```

---

## Endpoints

La API se sirve en `http://localhost:8080`.

### Géneros · `/genres`

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/genres` | Devuelve todos los géneros. |
| `GET` | `/genres/:id` | Devuelve los **artistas** que pertenecen a ese género. |

### Artistas · `/artist`

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/artist` | Devuelve todos los artistas (con su género). |
| `GET` | `/artist/:id` | Devuelve un artista por su id. |
| `POST` | `/artist` | Crea un artista. |
| `PUT` | `/artist/:id` | Actualiza un artista. |
| `DELETE` | `/artist/:id` | Elimina un artista. |

### Canciones · `/songs`

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/songs` | Devuelve todas las canciones (con artista y género). |
| `GET` | `/songs/:id` | Devuelve una canción por su id. |
| `POST` | `/songs` | Crea una canción. |
| `PUT` | `/songs/:id` | Actualiza una canción. |
| `DELETE` | `/songs/:id` | Elimina una canción. |

> Al crear o actualizar un artista o una canción hay que enviar los `_id` de las referencias (género y/o artista).

---

## Puesta en marcha

1. Instala las dependencias:

   ```bash
   cd TrabajoDeMaster
   npm install
   ```

2. Asegúrate de tener **MongoDB** en marcha en `mongodb://localhost:27017/MusicGenres`.

3. Carga los datos iniciales **en este orden** (las referencias dependen unas de otras):

   ```bash
   npm run seed:genres    # 1) géneros
   npm run seed:artists   # 2) artistas (necesitan géneros)
   npm run seed:songs     # 3) canciones (necesitan artistas y géneros)
   ```

4. Arranca el servidor:

   ```bash
   npm run dev    # con recarga automática (node --watch)
   # o
   npm start
   ```

El servidor quedará disponible en `http://localhost:8080`.

---

## Tecnologías

- **Node.js**
- **Express 5**
- **MongoDB** + **Mongoose**
- **Insomnia** (pruebas de la API)

---

## Evidencias

La carpeta `EvidenciasInsomnia/` contiene capturas de todas las peticiones (crear, consultar, actualizar y eliminar) realizadas sobre la API en Insomnia, organizadas por recurso (*Artists*, *Genres* y *Songs*).

---

*Primer año del Máster en Desarrollo de Software — Proyecto 05 (backend)*

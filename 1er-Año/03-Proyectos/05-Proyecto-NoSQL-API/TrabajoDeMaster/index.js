const express = require("express");
const server = express();
server.use(express.json());

const connect = require("./src/config/db");
connect();

const artistRouter = require("./src/routes/artist.music.route");
server.use("/artist", artistRouter);

const genreRouter = require("./src/routes/genre.music.route");
server.use("/genres", genreRouter);

const songRouter = require("./src/routes/song.music.route");
server.use("/songs", songRouter);

server.use((req, res) => {
  return res.status(404).json({ message: "Ruta no encontrada" });
});
server.listen(8080, () => {
  console.log("Servidor levantado: http://localhost:8080");
});

//Antonio, para esta parte he hecho lo mismo que tu has hecho en clase y en el mismo orden para que la base de datos no se rompa, porque me paso varias que veces que si ponia todo un poco mas ordenado y por espacios, se solapa y no lee algo sin antes estar creado entonces peligroso. Cada una de las llamadas tienen su respectivo Router que referencia los controllers que a su vez referencian a los modelos creados

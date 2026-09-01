const express = require("express");
const server = express();
server.use(express.json());

//Importamos nuestra función de conexión con la base de datos
const connect = require("./src/config/db");
connect();
// Rutas
const showsRouter = require("./src/routes/shows.routes");
server.use("/shows", showsRouter);

//Definimos una ruta no encontrada
server.use((req, res) => {
  return res.status(404).json({ message: "Ruta no encontrada" });
});

//Nos conectamos con nuestro "Cluster" de MongoDB local
server.listen(8080, () => {
  console.log("Servidor local levantado: http://localhost:8080");
});

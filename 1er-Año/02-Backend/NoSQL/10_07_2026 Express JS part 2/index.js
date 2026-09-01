const express = require("express");
const server = express();
const { v4 } = require("uuid");

server.use(express.json());
const usuarios = [
  {
    id: v4(),
    nombre: "Antonio",
    ciudad: "Madrid",
  },
  {
    id: v4(),
    nombre: "Jorge",
    ciudad: "Granada",
  },
  {
    id: v4(),
    nombre: "Sara",
    ciudad: "Madrid",
  },
];

//usuarios?ciudad =Madrid
server.get("/usuarios", (req, res) => {
  const { ciudad } = req.query;
  if (ciudad) {
    const usuariosFiltrados = usuarios.filter(
      (usuario) => usuario.ciudad === ciudad,
    );
    return res.status(200).json(usuariosFiltrados);
  } else {
    return res.status(200).json(usuarios);
  }
});

server.get("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  const usuario = usuarios.find((usuario) => usuario.id === id);
  if (usuario) {
    return res.status(200).json(usuario);
  } else {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
});

server.post("/usuarios", (req, res) => {
  const nuevoUsuario = {
    id: v4(),
    nombre: req.body.nombre,
    ciudad: req.body.ciudad,
  };
  usuarios.push(nuevoUsuario);
  return res.status(201).json(nuevoUsuario);
});

server.delete("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  const indice = usuarios.findIndex((usuario) => usuario.id === id);
  if (indice === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  usuarios.splice(indice, 1);
  return res.status(200).json({ message: "Usuario borrado" });
});

server.listen(8080, () => {
  console.log("Puerto levantado en http://localhost:8080");
});

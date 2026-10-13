const express = require("express");
const artistRouter = express.Router();

const {
  getAllArtists,
  getArtistById,
  createArtist,
  deleteArtist,
  updateArtist,
} = require("../controllers/artist.music.controller");

artistRouter.get("/", getAllArtists);
artistRouter.get("/:id", getArtistById);
artistRouter.post("/", createArtist);
//Antonio, Aqui pasa algo inusual al crear el artista, porque tengo que referenciar el genero al cual pertenece, porque sin él el modelaje del nuevo artista no seria posible y habria error porque referencia al genero al todos los artistas, entonces es necesario referenciar el id del genero
artistRouter.delete("/:id", deleteArtist);
artistRouter.put("/:id", updateArtist);

module.exports = artistRouter;

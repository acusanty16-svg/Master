const express = require("express");
const songRouter = express.Router();

const {
  getAllSongs,
  getSongById,
  createSong,
  deleteSong,
  updateSong,
} = require("../controllers/song.music.controller");

songRouter.get("/", getAllSongs);
songRouter.get("/:id", getSongById);
songRouter.post("/", createSong);
//Antonio, para crear una cancion es necesario que ancle el id tanto del artist como del genero o si no se aplica el error correspondiente al no tener la informacion necesaria dentro del modelaje de la nueva cancion
songRouter.delete("/:id", deleteSong);
songRouter.put("/:id", updateSong);

module.exports = songRouter;

const express = require("express");
const genresRouter = express.Router();

const {
  getAllGenres,
  getArtistByGenre,
} = require("../controllers/genre.music.controller");

genresRouter.get("/", getAllGenres);
genresRouter.get("/:id", getArtistByGenre);
//Antonio la referencia de este es un poco extraña, pero es como lo hiciste una vez en clase con ciudad?Madrid y filtrabas la ciudad, bueno pues aqui es un poco parecido porque tengo que referenciar al artist?genre y poner el id del genero para saber cuantos artistas tiene

module.exports = genresRouter;

const Genre = require("../models/genre.music.model");
const Artist = require("../models/artist.music.model");

const getAllGenres = async (req, res) => {
  try {
    //Esta funcion reune a todos los generos
    const genres = await Genre.find();
    return res.status(200).json(genres);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al obtener los generos", error: error.message });
  }
};

const getArtistByGenre = async (req, res) => {
  //Esta funcion me parece super divertida, porque al referenciar a los artistas con su genero es posible ver tanto lo informacion del artista como el genero al que pertenece
  try {
    const { id } = req.params;
    const genre = await Genre.findById(id);
    if (!genre) {
      return res
        .status(404)
        .json({ message: "No se encuentra el genero con ese id" });
    }
    const artist = await Artist.find({ genre: id }).populate("genre");
    return res.status(200).json(artist);
    //Casi todo el codigo es igual al que hemos visto en clase, pero la magia y la diferencia ocurre aqui, porque al recibir un genero en especifico, no vamos a devolver el json del genero, sino que devolveremos todos los artistas que tenga de referencia el mismo genero que se ha introducido
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al obtener el genero", error: error.message });
  }
};

module.exports = { getAllGenres, getArtistByGenre };

const Song = require("../models/song.music.model");

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find().populate("artist").populate("genre");
    //Antonio, mira este es el mismo ejemplo que he planteado para que todo tenga conexión entre si, y si cambias un elemento o recibes un elemento con descripcion o llamado song, automaticamente se ajustara tanto el artista como el genero
    return res.status(200).json(songs);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error obteniendo la cancion", error: error.message });
  }
};

const getSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Song.findById(id).populate("artist").populate("genre");
    //El mismo codigo que hemos planteado durante todo el proyecto, pero con la diferencia en que aqui tenemos que popular la informacion, tanto del artista como del genero
    if (!song) {
      return res
        .status(404)
        .json({ message: "No se encuentra la cancion con ese id" });
    }
    return res.status(200).json(song);
  } catch (error) {
    res.status(500).json({
      message: "Error obteniendo el id de la cancion",
      error: error.message,
    });
  }
};

const createSong = async (req, res) => {
  try {
    const newSong = new Song(req.body);
    await newSong.save();
    return res.status(201).json(newSong);
  } catch (error) {
    res.status(500).json({
      message: "Error en la creación de la cancion",
      error: error.message,
    });
  }
};

const deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      return res
        .status(404)
        .json({ message: "No se encuentra la cancion con ese id" });
    }
    return res.status(200).json({ message: "Cancion eliminada correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar una cancion", error: error.message });
  }
};

const updateSong = async (req, res) => {
  try {
    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .populate("artist")
      .populate("genre");
    //Y aqui esta el otro elemento diferente que es lo mismo que en los anteriores controladores pero la diferencia esta en la informacion que mostramos dentro de los elementos conjuntos
    if (!updatedSong) {
      return res
        .status(404)
        .json({ message: "No se encuentra la cancion con ese id" });
    }
    return res.status(200).json(updatedSong);
  } catch (error) {
    res.status(500).json({
      message: "Error actualizando la cancion",
      error: error.message,
    });
  }
};

module.exports = {
  getAllSongs,
  getSongById,
  createSong,
  deleteSong,
  updateSong,
};

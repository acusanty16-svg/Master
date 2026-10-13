const Artist = require("../models/artist.music.model");

const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find().populate("genre");
    return res.status(200).json(artists);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error obteniendo el artista", error: error.message });
  }
};

const getArtistById = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findById(id).populate("genre");
    if (!artist) {
      return res
        .status(404)
        .json({ message: "No se encuentra el artista con ese id" });
    }
    return res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({
      message: "Error obteniendo el id del artista",
      error: error.message,
    });
  }
};

const createArtist = async (req, res) => {
  try {
    const newArtist = new Artist(req.body);
    await newArtist.save();
    return res.status(201).json(newArtist);
  } catch (error) {
    res.status(500).json({
      message: "Error en la creación del artista",
      error: error.message,
    });
  }
};
/*
const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findByIdAndDelete(id);
    if (!artist) {
      return res
        .status(404)
        .json({ message: "No se encuentra el artista con ese id" });
    }
    return res.status(200).json({ message: "Artista eliminado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el artista", error: error.message });
  }
};
Antonio, esta es una forma de eliminar los artistas como nos has enseñado en clase, pero al saber que es mucho rollo lo dejo comentado y procedo con la forma mas facilita*/

const deleteArtist = async (req, res) => {
  try {
    const artist = await Artist.findByIdAndDelete(req.params.id);
    if (!artist) {
      return res
        .status(404)
        .json({ message: "No se encuentra el artista con ese id" });
      //Esto lo agregue extra al codigo que nos enseñaste porque sino metia bien el id igual siempre me daba artista eliminado correctamente y asi se controla un poco mas el error
    }
    return res.status(200).json({ message: "Artista eliminado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar un artista", error: error.message });
  }
};

const updateArtist = async (req, res) => {
  try {
    const updatedArtist = await Artist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    ).populate("genre");
    if (!updatedArtist) {
      return res
        .status(404)
        .json({ message: "No se encuentra el artista con ese id" });
    }
    return res.status(200).json(updatedArtist);
  } catch (error) {
    res.status(500).json({
      message: "Error actualizando el artista",
      error: error.message,
    });
  }
};

module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  deleteArtist,
  updateArtist,
};

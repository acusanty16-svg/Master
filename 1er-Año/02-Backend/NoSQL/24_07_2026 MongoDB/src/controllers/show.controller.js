const Show = require("../models/show.model");

const getAllShows = async (req, res) => {
  try {
    const shows = await Show.find();
    return res.status(200).json(shows);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error obteniendo la serie", error: error.message });
  }
};

const getShowById = async (req, res) => {
  try {
    const { id } = req.params;
    const show = await Show.findById(id);
    if (!show) {
      return res
        .status(404)
        .json({ message: "No se encuentra la serie con ese id" });
    }
    return res.status(200).json(show);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo la serie por id",
      error: error.message,
    });
  }
};

const createShow = async (req, res) => {
  try {
    const newShow = new Show(req.body);
    await newShow.save();
    return res.status(201).json(newShow);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creando la serie", error: error.message });
  }
};

const updateShow = async (req, res) => {
  try {
    const updatedShow = await Show.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedShow) {
      return res
        .status(404)
        .json({ message: "Error actualizando la serie", error: error.message });
    }
    return res.status(200).json(updatedShow);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error actualizando la serie", error: error.message });
  }
};
/*
const deleteShow = async (req, res) => {
  try {
    const deletedShow = await Show.findByIdAndDelete(req.params.id);
    if (!deletedShow) {
      return res
        .status(404)
        .json({ message: "Error borrando la serie", error: error.message });
    }
    return res.status(200).json(deletedShow);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error actualizando la serie", error: error.message });
  }
};
*/
const deleteShow = async (req, res) => {
  try {
    await Show.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Serie borrada correctamente" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error actualizando la serie", error: error.message });
  }
};
module.exports = {
  getAllShows,
  getShowById,
  createShow,
  updateShow,
  deleteShow,
};

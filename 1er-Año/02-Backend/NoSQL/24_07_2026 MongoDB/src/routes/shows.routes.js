const express = require("express");
const showsRouter = express.Router();

const {
  getAllShows,
  getShowById,
  createShow,
  updateShow,
  deleteShow,
} = require("../controllers/show.controller");

showsRouter.get("/", getAllShows);
showsRouter.get("/:id", getShowById);
showsRouter.post("/", createShow);
showsRouter.put("/:id", updateShow);
showsRouter.delete("/:id", deleteShow);

module.exports = showsRouter;

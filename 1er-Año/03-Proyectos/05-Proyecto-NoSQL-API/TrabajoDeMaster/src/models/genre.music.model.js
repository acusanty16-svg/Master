const mongoose = require("mongoose");

const GENRES = [
  "Pop",
  "Rock",
  "Hip-Hop",
  "Rap",
  "Reggaeton",
  "Trap",
  "Latin",
  "Afrobeats",
  "EDM",
  "K-Pop",
];
//Hago un tipo enum, pero no lo referencia en el genero como tal porque no me interesa que salga dentro de su json, porque seria ser repetitivo decir que estas en el genero pop por ejemplo, y que en su referencia te salga lo mismo, me parece un poco redundante
const showScheme = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    coverImage: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    //Este Schema es muy parecido a los tuyos de clase, sin decir que no son iguales jeje
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Genre = mongoose.model("Genre", showScheme);
module.exports = Genre;

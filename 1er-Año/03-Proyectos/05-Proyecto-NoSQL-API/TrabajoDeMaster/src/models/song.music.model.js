const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    coverImage: { type: String, required: true, trim: true },
    audioUrl: { type: String, required: true, trim: true },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: true,
    },

    //Hola, Antonio. Mira esto tuve que consultarlo por otra fuente porque queria relacionar cada uno de los elementos de las canciones al artista seleccionado que a su vez esta seleccionado por el genero, un poco rollo, pero esta fue la unica forma que encontre para hacerlo...

    genre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Genre",
      required: true,
    },
    description: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Song = mongoose.model("Song", songSchema);

module.exports = Song;

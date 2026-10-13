const mongoose = require("mongoose");

const showScheme = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    genre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Genre",
      required: true,
      //Antonio, para aqui si que tuve que necesitar ayuda de la IA, porque queria referenciar los artistas con su correspondiente genero para que al filtrarlos tuviera un poco mas de sentido todo y que un artista tuviera un genero especifico y lo demas es exactamente igual a como lo pusiste en clase. Cabe recalcar que no he hecho un enum o algun dato a priori, porque no me interesa en este campo
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Artist = mongoose.model("Artist", showScheme);
module.exports = Artist;

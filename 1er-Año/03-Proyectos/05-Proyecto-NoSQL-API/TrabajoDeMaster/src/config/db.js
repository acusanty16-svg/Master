const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/MusicGenres");
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.log("Error al conectar la base de datos", error.message);
  }
};

module.exports = connect;
//La conexion a mongo es la misma que has hecho en clase sin ningun tipo de cambio

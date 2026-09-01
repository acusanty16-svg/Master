const mongoose = require("mongoose");

const Show = require("./src/models/show.model");

const showsData = [
  {
    title: "Breaking Bad",
    genre: "Drama",
    season: 5,
    year: 2008,
    rating: 9.5,
    watched: true,
  },
  {
    title: "The Office",
    genre: "Comedy",
    season: 9,
    year: 2005,
    rating: 9.0,
    watched: true,
  },
  {
    title: "Stranger Things",
    genre: "Sci-fi",
    season: 4,
    year: 2016,
    rating: 8.7,
    watched: true,
  },
  {
    title: "Planet Earth",
    genre: "Documentary",
    season: 2,
    year: 2006,
    rating: 9.4,
    watched: true,
  },
  {
    title: "Mindhunter",
    genre: "Thriller",
    season: 2,
    year: 2017,
    rating: 8.6,
    watched: false,
  },
  {
    title: "Better Call Saul",
    genre: "Drama",
    season: 6,
    year: 2015,
    rating: 9.0,
    watched: true,
  },
  {
    title: "Friends",
    genre: "Comedy",
    season: 10,
    year: 1994,
    rating: 8.9,
    watched: true,
  },
  {
    title: "Black Mirror",
    genre: "Sci-fi",
    season: 6,
    year: 2011,
    rating: 8.7,
    watched: false,
  },
  {
    title: "Our Planet",
    genre: "Documentary",
    season: 1,
    year: 2019,
    rating: 9.2,
    watched: true,
  },
  {
    title: "True Detective",
    genre: "Thriller",
    season: 4,
    year: 2014,
    rating: 8.9,
    watched: false,
  },
];

module.exports = showsData;

const seedDataBase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/tvshowsdb");
    console.log("Conectando con la base de datos");
    await Show.deleteMany();
    console.log("Borrando coleccion de series");
    const inserted = await Show.insertMany(showsData);
    console.log(`Insertando ${inserted.length} series en la base de datos`);
  } catch (error) {
    console.error("Error ejecutando la semilla ", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("Desconectando de la base de datos");
  }
};

seedDataBase();

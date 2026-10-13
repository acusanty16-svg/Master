const mongoose = require("mongoose");
const Genre = require("./models/genre.music.model");

const IMAGES = {
  pop: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Taylor_Swift_Concert_Red_Tour.jpg/960px-Taylor_Swift_Concert_Red_Tour.jpg",
  rock: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/A_rock_band_in_Iran_-_Mortaz_Band_-_Canon_Photography-_Mostafa_Meraji_10.jpg/960px-A_rock_band_in_Iran_-_Mortaz_Band_-_Canon_Photography-_Mostafa_Meraji_10.jpg",
  hiphop:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hip_hop_dance.jpg/960px-Hip_hop_dance.jpg",
  rap: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Twizm_Whyte_Piece_hip-hop_music_artist.jpg/960px-Twizm_Whyte_Piece_hip-hop_music_artist.jpg",
  reggaeton:
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Pao_%26_Jim_reggaeton.jpg",
  trap: "https://upload.wikimedia.org/wikipedia/commons/a/ac/T.I._%40_Bumbershoot.jpg",
  latin:
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Shakira_in_concert.jpg",
  afrobeats:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Afrobeats_Molo_strings.jpg/960px-Afrobeats_Molo_strings.jpg",
  edm: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/DJ_at_an_Electronic_Music_Festival_%28Unsplash%29.jpg/960px-DJ_at_an_Electronic_Music_Festival_%28Unsplash%29.jpg",
  kpop: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/BTS_in_concert_at_Wembley_Stadium%2C_2_June_2019_01.jpg/960px-BTS_in_concert_at_Wembley_Stadium%2C_2_June_2019_01.jpg",
};

const GENRES = [
  {
    title: "Pop",
    coverImage: IMAGES.pop,
    description: "Musica popular comercial con melodias pegajosas",
  },
  {
    title: "Rock",
    coverImage: IMAGES.rock,
    description: "Genero con guitarra electrica, bateria y bajo como base",
  },
  {
    title: "Hip-Hop",
    coverImage: IMAGES.hiphop,
    description: "Cultura y musica urbana con ritmos y rimas",
  },
  {
    title: "Rap",
    coverImage: IMAGES.rap,
    description: "Musica basada en la voz rítmica sobre una base",
  },
  {
    title: "Reggaeton",
    coverImage: IMAGES.reggaeton,
    description: "Genero urbano latino con ritmo de dembow",
  },
  {
    title: "Trap",
    coverImage: IMAGES.trap,
    description: "Subgenero del rap con beats electronicos oscuros",
  },
  {
    title: "Latin",
    coverImage: IMAGES.latin,
    description: "Generos musicales de America Latina y Espana",
  },
  {
    title: "Afrobeats",
    coverImage: IMAGES.afrobeats,
    description: "Musica africana contemporanea con ritmos bailables",
  },
  {
    title: "EDM",
    coverImage: IMAGES.edm,
    description: "Musica electronica pensada para festivales y pistas",
  },
  {
    title: "K-Pop",
    coverImage: IMAGES.kpop,
    description: "Pop surcoreano con coreografias y produccion cuidada",
  },
];

const seed = async () => {
  //Para esta seed he hecho exactamente lo mismo que has hecho en clase para practicar y crear la semilla e ir jugando con "Insomnia"
  try {
    await mongoose.connect("mongodb://localhost:27017/MusicGenres");
    await Genre.deleteMany();
    const inserted = await Genre.insertMany(GENRES);
    console.log(`Insertando ${inserted.length} generos en la base de datos`);
  } catch (error) {
    console.log("Error creando los generos:", error.message);
  } finally {
    await mongoose.disconnect();
  }
};

seed();

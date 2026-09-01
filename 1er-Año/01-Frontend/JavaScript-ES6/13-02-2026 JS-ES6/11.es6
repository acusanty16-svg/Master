const peliculas = [
  {
    titulo: "Inception",
    anio: 2010,
    duracion: "148 min",
    nota: 8.8,
    generos: ["Ciencia ficción", "Acción", "Suspenso"],
  },
  {
    titulo: "El Padrino",
    anio: 1972,
    duracion: "175 min",
    nota: 2.2,
    generos: ["Crimen", "Drama"],
  },
  {
    titulo: "Spider-Man: Across the Spider-Verse",
    anio: 2023,
    duracion: "140 min",
    nota: 8.7,
    generos: ["Animación", "Acción", "Aventura"],
  },
  {
    titulo: "Parasite",
    anio: 2019,
    duracion: "132 min",
    nota: 3.5,
    generos: ["Comedia negra", "Drama", "Thriller"],
  },
  {
    titulo: "Interstellar",
    anio: 2014,
    duracion: "169 min",
    nota: 4.7,
    generos: ["Ciencia ficción", "Drama", "Aventura"],
  },
];

const soloTitulos = peliculas.map((peliculas) => peliculas.titulo);
console.log(soloTitulos);

const frasesCartelera = peliculas.map(
  (peliculas) =>
    `${peliculas.titulo} del año ${peliculas.anio} tiene un ${peliculas.nota} de puntuacion, y dura ${peliculas.duracion}`,
);
console.log(frasesCartelera);

const peliculasModificadas = peliculas.map((peliculas) => ({
  title: peliculas.titulo,
  year: peliculas.anio,
  reviews: peliculas.nota / 2,
  category: peliculas.nota >= 8.5 ? "Cinema" : "Ok",
}));

console.log(peliculasModificadas);

const peliculasSobresalientes = peliculas.filter(
  (peliculas) => peliculas.nota >= 8,
);
console.log(peliculasSobresalientes);

const peliculasAnimadas = peliculas.filter((peliculas) =>
  peliculas.generos.includes("Animación"),
);

const peliculasSobresalientesDramaticas = peliculas.filter(
  (peliculas) => peliculas.generos.includes("Drama") && peliculas.nota >= 5,
);
console.log(peliculasSobresalientesDramaticas);

const parasite = peliculas.find((peliculas) => peliculas.titulo === "Parasite");
console.log(parasite);

const todasMejoresQueOcho = peliculas.every((peliculas) => peliculas.nota > 8);
const algunasMejoresQueOcho = peliculas.some((peliculas) => peliculas.nota > 8);
console.log(todasMejoresQueOcho);
console.log(algunasMejoresQueOcho);

//Reduce

const duracionTotalPeliculas = peliculas.reduce(
  (acumulador, peliculas) => acumulador + peliculas.nota,
  0,
);
console.log(duracionTotalPeliculas);

const peliculasSobresalientesRed = peliculas.reduce((acc, peliculas) => {
  if (peliculas.nota >= 8) {
    acc.push(peliculas);
  }
  return acc;
}, []);

console.log(peliculasSobresalientesRed);

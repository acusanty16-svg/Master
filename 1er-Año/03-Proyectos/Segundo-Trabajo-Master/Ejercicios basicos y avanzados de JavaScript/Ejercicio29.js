// Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

console.log("---SOLUCIÓN EJERCICIO 29---");

const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];
//En este ejercicio opté por crear un objeto con las décadas como claves y los valores como arrays de películas.

const peliculasPorDecada = {
  1970: [],
  1980: [],
  1990: [],
  2000: [],
  2010: [],
};
//seguidamente, decidí usar un bucle for para recorrer el array de películas y agruparlas por década.
for (const item of starWarsMovies) {
  if (item.releaseYear >= 1970 && item.releaseYear < 1980) {
    peliculasPorDecada[1970].push(item);
  } else if (item.releaseYear >= 1980 && item.releaseYear < 1990) {
    peliculasPorDecada[1980].push(item);
  } else if (item.releaseYear >= 1990 && item.releaseYear < 2000) {
    peliculasPorDecada[1990].push(item);
  } else if (item.releaseYear >= 2000 && item.releaseYear < 2010) {
    peliculasPorDecada[2000].push(item);
  } else if (item.releaseYear >= 2010 && item.releaseYear < 2020) {
    peliculasPorDecada[2010].push(item);
  }
}
//Finalmente, imprimí el objeto final por consola.
console.log("---PELICULAS DECADAS ---");
console.log(peliculasPorDecada);

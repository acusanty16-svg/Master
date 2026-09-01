// Escribe una función que calcule el promedio de duración de una lista de películas.

// Recibe un array de películas, cada una con su duración en minutos.

// La función debe devolver el promedio de duración de todas las películas.

console.log("---SOLUCIÓN EJERCICIO 34---");

const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];
// para este ejercicio he nombrado una variable sumaPeliculas que va a ser el sumatorio de la duración de las peliculas y seguidamente he hecho un for donde se sume la duracion de las mismas y finalmente he imprimido por consola el promedio que es solamente es sumatorio de las peliculas y el tamaño de las mismas
const averageMovieDuration = (movies) => {
    let sumaPeliculas = 0;
  for(let i = 0; i < movies.length; i++){
    const peliculas=movies[i].duration
    sumaPeliculas+=peliculas
  }
  console.log("el promedio de las peliculas es: "+sumaPeliculas/movies.length)
}
averageMovieDuration(movies)
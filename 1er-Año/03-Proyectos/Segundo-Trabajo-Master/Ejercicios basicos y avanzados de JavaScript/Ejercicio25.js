// Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.

// Imprime ambos conteos por consola.
console.log("---SOLUCIÓN EJERCICIO 25---")


const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

const newMovies=[]
const oldMovies=[]
let contadorNew=0;
let contadorOld=0;

for(let i=0; i<movies.length; i++){
    if(movies[i].releaseYear<=2000){
        oldMovies.push(movies[i])
        contadorOld++
    }else{
        newMovies.push(movies[i])
        contadorNew++
    }
}
console.log("---PELICULAS NUEVAS---")
console.log("Total: "+contadorNew)
console.table(newMovies)
console.log()
console.log("---PELICULAS ANTIGUAS---")
console.log("Total: "+contadorOld)
console.table(oldMovies)

//Aquí simplemente agregué el bucle del array completo y le puse dos condiciones para que me guardara en una tabla el numero de peliculas de antes del 2000(no había ninguna pelicula del 2000 especificamente, pero igual lo he puesto menor o igual por si en un futuro tuvieramos que agregar alguna pelicula)
// Dada una lista de álbumes de música, utiliza un bucle para sumar todas las duraciones solo de los álbumes de rock y luego imprime el total de estas duraciones por consola.

console.log("---SOLUCIÓN EJERCICIO 28---");

const albums = [
  { title: "Led Zeppelin IV", genre: "Rock", duration: 42.19 },
  { title: "The Dark Side of the Moon", genre: "Rock", duration: 42.49 },
  { title: "Back in Black", genre: "Rock", duration: 42.11 },
  { title: "Hotel California", genre: "Rock", duration: 43.08 },
  { title: "Abbey Road", genre: "Rock", duration: 47.23 },
  { title: "Thriller", genre: "Pop", duration: 42.19 },
  { title: "A Night at the Opera", genre: "Rock", duration: 43.08 },
  { title: "The Wall", genre: "Rock", duration: 81.0 },
  { title: "Born to Run", genre: "Rock", duration: 39.26 },
  { title: "The Joshua Tree", genre: "Rock", duration: 50.11 },
];

let duracionTotal = 0;
for (let i = 0; i < albums.length; i++) {
  if (albums[i].genre === "Rock") {
    albums[i].duration++;
    duracionTotal += albums[i].duration;
  }
}

console.log(
  "El total de la duracion de las canciones de Rock es: " + duracionTotal,
);
//En esto ejercicio pensé en que podría hacerlo de dos maneras, la primera es como está en la parte superior, donde en una variable guardo el resultado de la duración de las canciones, pero aqui tendría una limitación y es que no se cuales son las canciones que estan dentro de la lista, y claro, podría hacer un console log de albums[i].genre y ya esta, pero sería doble codigo, así que pense en hacer un array y almacenarlo todo y así poder imprimirlo por consola

const guardarArray = [];

for (const item of albums) {
  if (item.genre === "Rock") {
    guardarArray.push(item);
  }
}
console.log("---EL TOTAL EN DURACIÓN DE LAS CANCIONES Y SUS ARTISTAS---");
console.table(guardarArray);
//y luego si quiero mostrar la informacion total y unir los dos parametros podría hacer un console log del primer campo y la tabla del segundo y así tendría un mejor resultado
console.log(
  "El total de la duracion de las canciones de Rock es: " + duracionTotal,
);

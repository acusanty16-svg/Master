// Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

console.log("---SOLUCIÓN EJERCICIO 30---");

const generos = {
  Metal: [],
  Rock: [],
  Pop: [],
  Country: [],
  Grunge: [],
};
//Igual que el ejercicio anterior, opté por crear un objeto con elementos listados en el const tracks. Sin embargo, existe otra forma de realizar este ejercicio. Porque aquí no tengo un rango numerico y por esto puedo usar algo más rapido para completar el ejercicio
const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];
//Esta es la primera forma de resolver el ejercicio, en donde opté por usar un bucle for para recorrer el array de canciones y clasificarlas por género.
for (const item of tracks) {
  if (item.genre === "Metal") {
    generos.Metal.push(item);
  } else if (item.genre === "Rock") {
    generos.Rock.push(item);
  } else if (item.genre === "Pop") {
    generos.Pop.push(item);
  } else if (item.genre === "Country") {
    generos.Country.push(item);
  } else if (item.genre === "Grunge") {
    generos.Grunge.push(item);
  }
}
//Finalmente, imprimí el objeto final por consola.
console.log("---GENEROS ---");
console.log(generos);

//Esta es la segunda forma de resolver el ejercicio, en donde opté por usar un bucle for para recorrer el array de canciones y clasificarlas por género.
const generos2 = {
  Metal: [],
  Rock: [],
  Pop: [],
  Country: [],
  Grunge: [],
};

for (const item of tracks) {
  if (generos2[item.genre]) {
    generos2[item.genre].push(item);
  }
}
//Como aquí ya tenenemos los generos establecido y no necesito hacer un rango pues simplemente hago un forof y asigno dentro de un if el item.genre al generos[item.genre] y seguidamente hago un push de item. y la final sacó por consola el objeto generos2.
console.log("---GENEROS ---");
console.log(generos2);
//Y, creo que esas son las dos maneras en que realice el ejercicio.

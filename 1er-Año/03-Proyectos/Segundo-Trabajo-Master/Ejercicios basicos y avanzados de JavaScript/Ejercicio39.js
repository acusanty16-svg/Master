// Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.

// Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.

// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

// Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en JavaScript.
console.log("---SOLUCIÓN EJERCICIO 39---");

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
let contador = 0;
const guardarRepeticiones = {};

for (const item of users) {
  for (const key in item.favoritesSounds) {
    if (guardarRepeticiones[key]) {
      guardarRepeticiones[key]++;
    } else {
      guardarRepeticiones[key] = 1;
    }
    contador++;
  }
}
console.log(guardarRepeticiones);
console.log(contador);

//Pues en este ejercicio tuve cierta ayuda con un amigo que los dos conocemos (gemini) porque intente hacerlo de una forma super enrevesada y queria preguntarte si era posible hacerlo de esta forma-lo voy a dejar comentado solamente por curiosidad:

// for (const item of users) {
//     for (const item2 of item.favoritesSounds) {
//         for (const item3 in item2.volume) {
//            contador++
//         }
//     }
// }
// console.log(contador)
//Es que pensaba que tenia que recorrer el objeto tres veces para poder hacer un contador de la variable "volume"

// Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

// Es decir, la media de volumen de todos los volumenes juntos.

console.log("---SOLUCIÓN EJERCICIO 38---");

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
//En este ejercicio he puesto un let suma = 0; para guardar todos los datos del volumen de los sonidos favoritos de los usuarios, seguidamente he puesto un bucle forof para recorrer todos los usuarios y un bucle forin para recorrer todos los sonidos favoritos de los usuarios. Y, al final con los datos guardados simplemente he hecho la media de todos los sonidos favoritos de los usuarios.
let suma = 0;
for (const item of users) {
  for (const key in item.favoritesSounds) {
    suma += item.favoritesSounds[key].volume;
  }
}
console.log(
  "La media de todos los sonidos favoritos es: " + suma / users.length,
);

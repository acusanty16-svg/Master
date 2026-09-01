// 1.1
const miSuperheroeFavorito = "Hulk";
// 1.2
const numeroFavorito = 50;

// 1.3
const altura = 5;
const longitud = 10;

// 1.4
const suma = altura + longitud;

// 1.5
console.log("---5TO PUNTO EJERCICIO 1---")
console.log("Superhéroe:", miSuperheroeFavorito);
console.log("Número favorito:", numeroFavorito);
console.log("Altura:", altura);
console.log("Longitud:", longitud);
console.log("Resultado de la suma:", suma);
console.log()

//pero, si quisiera hacerlo con menos codigo y mas ordenado, creo que lo haria asi: 

console.log("Misma información pero con un toque diferente.")
const superInformacion={
    nombre:"Hulk",
    numeroFavorito:50,
    altura:5,
    longitud:10,
    suma:longitud+altura
}

//y, ahora solo tendria que hacer un console log y llamar al objeto. y esto me permite tener cambiar todos los argumentos dentro de un objeto 
console.log("Superhéroe: "+superInformacion.nombre)
console.log("Y aquí podría poner los mismos resultados pero llamando desde el objeto superInformación")
//Y, sucesivamente haría lo mismo con los otros elementos dentro del objeto
// Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

console.log("---SOLUCIÓN EJERCICIO 15---")
const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];
//Decidí guardar las palabras dentro de un array porque era mas comprensible hacerlo de esa manera para usarlas despues
const guardarPalabra=[];
for (const item of products) {
    if(item.includes("Camiseta")){
        guardarPalabra.push(" "+item)
    }
}
console.log("Las camisetas dentro del array son: "+guardarPalabra)
console.log()

//Y, al final solamente tenia que usar el for tomando de referencia el array de products y simplemente llamarlo con un console.log
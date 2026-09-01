console.log("---SOLUCIÓN EJERCICIO 2---");
console.log("Solución 2.1");

const pointsList = [32, 54, 21, 64, 75, 43];
const copia = [...pointsList];
console.log(copia);
//En este ejercicio lo unico que hacemos es selccionar todos los elementos dentro del array, pero nos ahorra un monton de trabajo

console.log("Solución 2.2");

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const copia1 = { ...toy };
console.log(copia1);
//y aqui se hace lo mismo pero la diferencia es que esto es un objeto entonces para llamarlo se llama con su correspondiente llave

console.log("Solución 2.3");
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const copiarDosElementos = [...pointsList1, ...pointsLis2];
console.log(copiarDosElementos);
//En este caso lo que mas nos importa es hacer lo mismo que hemos hecho con anterioridad pero uniendolos con una coma en medio y se podria hacer los mismo con 20 elementos mas y 20 comas en medio del console.log()

console.log("Solución 2.4");
const toy1 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const merged = { ...toy1, ...toyUpdate };
console.log(merged);
//y como estamos hablando de un objeto tenemos que usar las llaves para poder reproducirlo

console.log("Solución 2.5");
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const [primero, segundo, , ...resto] = colors;
const resultado = [primero, segundo, ...resto];
console.log(resultado);

//gracias al destructuring se puede dejar el index 2 en vacio y despues se puede anidar el resto de elementos y simplemente los reproducimos con un consolo.log()

console.log("---SOLUCIÓN EJERCICIO 4---");
console.log("Solución 4.1");

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const mayores18 = ages.filter((age) => age > 18);
console.log(mayores18);
//mi funcion permite ver quienes son mayores de 18 y permiten entrar dentro del array

console.log("Solución 4.2");
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const pares = ages1.filter((age) => age % 2 === 0);
console.log(pares);
//aqui solo tenemos que aplicar el modulo y salen los pares como en java y otros lenguajes

console.log("Solución 4.3");
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const gameMorePlayed = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends",
);
console.log(gameMorePlayed);
//En este ejercicio descubri algo por casualidad, si quisiera formatear alguna variable dentro del array de objetos, en vez de poner el estrictamente igual podria poner solamente igual y lo formateo todo jeje

console.log("Solución 4.4");
const streamers1 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const includesu = streamers1.filter((streamer) => streamer.name.includes("u"));
console.log(includesu);
//Aqui he decidido poner el filter y dentro de la variable del streamer name he puesto que si tiene la u dentro de el.

console.log("Solución 4.5");
const includesThings = streamers
  .filter((streamer) => streamer.gameMorePlayed.includes("League"))
  .map((streamer) => {
    if (streamer.age > 35) {
      return {
        ...streamer,
        gameMorePlayed: streamer.gameMorePlayed.toUpperCase(),
      };
    }
    return streamer;
  });

console.log(includesThings);
//En este caso he decidio hacer el planteamiento del problema, donde hago en primera instancia un filtrado de los streamers que cumplen la condicion de leage en su nombre y despues lo mapeo con una condicion mayor de 35 de edad para tener un mayus en la palabra

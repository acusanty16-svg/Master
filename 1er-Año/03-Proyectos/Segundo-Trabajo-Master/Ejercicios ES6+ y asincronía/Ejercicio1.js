console.log("---SOLUCIÓN EJERCICIO 1---");
console.log("Solución 1.1");
const game = {
  title: "The Last of Us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title } = game;
console.log(title);
const { gender } = game;
console.log(gender);
const { year } = game;
console.log(year);
//se puede hacer de las formas, si se espera sacar uno por uno o dependiendo de los elementos que queramos dentro del objeto
//const {title, gender, year} = game; se podria de hacer de la segunda forma y lo mismo sacandolo por consola
console.log(title, gender, year);

console.log("Solución 1.2");
const fruits = ["Banana", "Strawberry", "Orange"];

const [fruits1, fruits2, fruits3] = fruits;
console.log(fruits1, fruits2, fruits3);
//se ahorra un montonazo de codigo de esta forma, claro esto es un ejercicio bastante sencillo, pero en la practica real, tendriamos que seleccionar el elemento dentro del objeto y despues reproducirlo por consola, y para tres elementos serian 6 lineas de codigo y aqui solo usamos dos...

console.log("Solución 1.3");
const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction();
console.log(name, race);
//Este ejercicio es un poco de lo mismo que hemos hecho con anterioridad

console.log("Solución 1.4");
const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const {
  name: nameCar,
  itv: [año1, año2, año3],
} = car;
console.log(nameCar, año1, año2, año3);

//por el prettier es que se ve asi jejej. y se puede hacer de dos formas la primera es como lo tengo arriba pero tambien se podrian declarar de forma individual y sacarlos por consola separadamente
//const {name: nameCar}
//const {itv:[año1,año2,año3]}

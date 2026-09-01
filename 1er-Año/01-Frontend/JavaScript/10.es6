const firstName = "Peter";
const surname = "Parker";

const fullName = `${firstName} ${surname}`;

const template = `
    <div>
        <p>Hola</p>
        <h3>Esto es un template string</h3>
    </div>
`;
/*
```html
<div>
        <p>Hola</p>
        <h3>Esto es un template string</h3>
    </div>

```;
*/
//Destructuring

const alumnos = ["Sandra", "Joan", "Manuel"];

/*const sandra = alumnos[0];
const joan = alumnos[1];
const manuel = alumnos[2];*/

//Desctructuring S6 array
const [sandra, joan, manuel] = alumnos;
console.log(joan);

//Desctructuring S6 objetos

const batman = {
  name: "Batman",
  city: "Gotham",
  family: false,
};
/*
const name = batman.name;
const city = batman.city;
const family = batman.family;
*/

//con destructuring

const { name, city, family } = batman;
const albums = [
  {
    title: "Discovery",
    artist: "Daft Punk",
    year: 2001,
    genre: "Electronic",
  },
  {
    title: "Rumours",
    artist: "Fleetwood Mac",
    year: 1977,
    genre: "Rock",
  },
  {
    title: "Kind of Blue",
    artist: "Miles Davis",
    year: 1959,
    genre: "Jazz",
  },
  {
    title: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    year: 2015,
    genre: "Hip Hop",
  },
  {
    title: "Future Nostalgia",
    artist: "Dua Lipa",
    year: 2020,
    genre: "Pop",
  },
];

const [daftPunk, fleetwoodMac] = albums;

console.log(daftPunk);
console.log(fleetwoodMac);

//Spread Operator

const primerArray = ["Primero", "Segundo", "Tercero"];
const segundoArray = ["Cuarto", "Quinto", "Sexto"];

//const nuevoArray = primerArray.concat(segundoArray);
//console.log(nuevoArray);

//Con spread Operator

const nuevoArray = ["Cero", ...primerArray, ...segundoArray, "Septimo"];
console.log(nuevoArray);

let toDoList = [];
toDoList = [...toDoList, "limpiar la cocina"];
toDoList = [...toDoList, "Pasear al perro"];
toDoList = [...toDoList, "Estudiar ITP"];

console.log(toDoList);

const dareDevil = {
  name: "Daredevil",
  realName: "Matt Murdock",
  city: "New York",
};

const dareDevilMoreInfo = {
  zone: "Hell Kitchen",
  age: "38",
};

const newDareDevil = { ...dareDevil, ...dareDevilMoreInfo, job: "Lawyer" };
console.log(newDareDevil);

//con funciones

const mostrarClase = (...alumnos) => {
  const clase = alumnos;
  console.log(clase);
};
mostrarClase("Alex", "Angel", "Jose", "Manuel");

const sumarNumerosIndefinidos = (...numeros) => {
  let suma = 0;
  for (const numero of numeros) {
    suma += numero;
  }
  console.log(suma);
};

sumarNumerosIndefinidos(1, 2, 3, 4, 5, 6, 7, 3, 2, 3, 4, 6, 4, 3, 2);

//Chorrada
console.log([..."🗜️"]);

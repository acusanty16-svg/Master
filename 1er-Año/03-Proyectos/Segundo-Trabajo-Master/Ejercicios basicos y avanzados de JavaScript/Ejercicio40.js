// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
// Haz varios ejemplos y compruébalos.
console.log("---SOLUCIÓN EJERCICIO 40---");
console.log("---1ER PUNTO EJERCICIO 40---");

function findArrayIndex(array, text) {
  return array.indexOf(text);
}
const enviarMensaje = (array, text) => {
  const indice = findArrayIndex(array, text);
  if (indice >= 0) {
    console.log("Hemos encontrado a " + text + " en la posición " + indice);
    console.log();
  } else {
    console.log("No hemos encontrado a " + text + " en el array");
    console.log();
  }
};
//En este punto del ejercicio he optado por hacer la funcion findArrayIndex para que me devuelva el indice y luego poder usar la funcion enviarMensaje y al final solo ejecutarla por consola

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

enviarMensaje(mainCharacters, "Leia");
enviarMensaje(mainCharacters, "Han Solo");
enviarMensaje(mainCharacters, "Hola");
enviarMensaje(mainCharacters, "Antonio");
enviarMensaje(mainCharacters, "Obi-Wan");
// Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
// Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

console.log();
console.log("---2DO PUNTO EJERCICIO 40---");

const removeItem = (array, text) => {
  const indice = findArrayIndex(array, text);
  if (indice >= 0) {
    array.splice(indice, 1);
  }
  //Aqui esta preguntando si el elemento existe en el array, si existe lo elimina, si no existe, no lo elimina
  return array;
};
console.log(removeItem(mainCharacters, "Leia"));
console.log(removeItem(mainCharacters, "Han Solo"));
console.log(removeItem(mainCharacters, "Hola"));
console.log(removeItem(mainCharacters, "Antonio"));
console.log(removeItem(mainCharacters, "Obi-Wan"));
console.log();

//Aquí creé la funcion removeItem, pero tambien me parecia interesante poder crear la funcion addItem para asi poder jugar con el array que tenemos
console.log("---PUNTO ADICIONAL EJERCICIO 40---");
const addItem = (array, text) => {
  const indice = findArrayIndex(array, text);
  if (indice === -1) {
    array.push(text);
    console.log("Se ha añadido con exito");
    //Aqui opte por preguntar si este elemento existia dentro del array, porque si no existia, lo añadía, si existia, no lo añadía.
  } else {
    console.log("No se ha añadido, porque ya existe");
  }
  return array;
};
console.log(addItem(mainCharacters, "Leia"));
console.log(addItem(mainCharacters, "Han Solo"));
console.log(addItem(mainCharacters, "Hola"));
console.log(addItem(mainCharacters, "Antonio"));
console.log(addItem(mainCharacters, "Obi-Wan"));
console.log();

//Y bueno, ya que estabamos estuve pensando si existen 20 leias dentro del array, y si quisiera eliminarlas todas tendria que hacer un bucle while para deshacerme de todas con una simple funcion, pero como ya tengo la funcion de addItem que me restringue si ya existe dentro del array tengo que crearme otra forzandolo

const forceAddItem = (array, text) => {
  array.push(text);
  return array;
};
console.log(forceAddItem(mainCharacters, "Leia"));
console.log(forceAddItem(mainCharacters, "Leia"));
console.log(forceAddItem(mainCharacters, "Leia"));
console.log(forceAddItem(mainCharacters, "Leia"));
console.log(forceAddItem(mainCharacters, "Leia"));
console.log(forceAddItem(mainCharacters, "Han Solo"));
console.log(forceAddItem(mainCharacters, "Han Solo"));
console.log(forceAddItem(mainCharacters, "Han Solo"));
console.log(forceAddItem(mainCharacters, "Han Solo"));
console.log(forceAddItem(mainCharacters, "Han Solo"));
console.log(forceAddItem(mainCharacters, "Han Solo"));
console.log(forceAddItem(mainCharacters, "Obi-Wan"));
console.log(forceAddItem(mainCharacters, "Obi-Wan"));
console.log(forceAddItem(mainCharacters, "Obi-Wan"));
console.log(forceAddItem(mainCharacters, "Obi-Wan"));
console.log(forceAddItem(mainCharacters, "Obi-Wan"));
console.log(forceAddItem(mainCharacters, "Obi-Wan"));
console.log();

console.log("---PUNTO ADICIONAL 2, EJERCICIO 40---");
const removeAllItemsWhile = (array, text) => {
  while (findArrayIndex(array, text) >= 0) {
    removeItem(array, text);
  }
  return array;
};

console.log(removeAllItemsWhile(mainCharacters, "Leia"));
console.log(removeAllItemsWhile(mainCharacters, "Han Solo"));
console.log(removeAllItemsWhile(mainCharacters, "Hola"));
console.log(removeAllItemsWhile(mainCharacters, "Antonio"));
console.log(removeAllItemsWhile(mainCharacters, "Obi-Wan"));
console.log();

//claro esto seria super divertido de hacer en un juego real o en una aplicacion real con un swtich y si se puediera con un scanner o algo parecido para preguntarle a la persona como quisiera guardar datos, y bueno podria pensarse en hacer una pequeña base de datos con nombre agenda o algo por el estilo para guardar elementos, o eliminarlos o buscarlos o listarlos, etc.

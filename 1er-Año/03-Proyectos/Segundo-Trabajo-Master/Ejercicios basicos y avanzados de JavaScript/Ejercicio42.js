// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

// Retorna el array resultante.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const swap = (array, text1, text2) =>{
    let temporal = array[text1]
    array[text1]=array[text2]
    array[text2] = temporal
    return array
}
console.log(swap(fantasticFour, 1, 3))

//En la primera parte del juego puedo creé una variable temporal en donde guardo el primer texto del array, y luego le digo que la posicion del texto 1 pasará a ser la posicion del segundo y despues que la posicion del segundo sera el temporal del primer espacion y al final retorno el array completo. 

const remove = (array, text) =>{
  let indice = array.indexOf(text)
  if(indice !== -1){
    array.splice(indice, 1)
  }
  return array
}
//tambien me parecía super interesante poder añadir o eliminar algun elemento dentro de los cuatro fantasticos, y simplemente me creé un metodo en donde llamo al indice del array y lo elimino si está dentro del array (-1) y elimino solo un elemento, porque si no elimino todo lol
console.log(remove(fantasticFour, "La antorcha humana"))

const add = (array, text) =>{
  if(!array.includes(text)){
    array.push(text)
  }
  return array
}
//En este caso hice lo que he hemos hecho anteriormente con el .includes para saber si el elemento 
console.log(add(fantasticFour, "La antorcha humana"))
console.log(swap(fantasticFour, 0, 3))
console.log(swap(fantasticFour, 1, 2))


//Y simplemente llamo a las funciones y las ejecuto y al final he dejado el juego como estaba al principio
//Solucion 1er punto de Ejercicio1
const primerPunto = document.querySelector(".showme");
console.log(primerPunto)

//Solucion 2do punto Ejercicio1
const segundoPunto = document.querySelector("#pillado")
console.log(segundoPunto)

//Solucion 3er punto Ejercicio1
const todasP = document.querySelectorAll("p")
console.log(todasP)

//Solucion 4to punto Ejercicio1
const todosLosPokemon = document.querySelectorAll(".pokemon")
console.log(todosLosPokemon)

//Solucion 5to punto Ejercicio1
const todosAtributoData = document.querySelectorAll('[data-function="testMe"]')
console.log(todosAtributoData)

//Solucion 6to Ejercicio1
const todosLosPersonajes = document.querySelectorAll('[data-function="testMe"]')
const tercerPersonaje = todosLosPersonajes[2]
console.log(tercerPersonaje)
//En este ultimo ejercicio tuve que usar todos los elementos y guardar en una constante el nombre o personaje que queria y reproducirlo por consolo porque si no no me iba dejar sacarlo por consola, por el error undefined
//Bueno tambien se podria hacer de esta operacion de la siguiente forma, pero el resultado es el mismo
console.log(todosLosPersonajes[2])
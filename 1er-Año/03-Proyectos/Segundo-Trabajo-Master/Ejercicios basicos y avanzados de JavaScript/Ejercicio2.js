//1. Modifica el siguiente código JavaScript para actualizar la edad de Luke Skywalker a 25 años
console.log("---1ER PUNTO EJERCICIO 2---")
const jedi = {nombre: "Luke Skywalker", edad: 19};

//podría hacerlo de dos formas
//1ra forma

jedi.edad=25
console.log(jedi)

//2da forma

const cambiarEdad= "edad"
jedi[cambiarEdad]=25

console.log(jedi)
console.log()

//2. Crea tres variables con la siguiente información:
console.log("---2DO PUNTO EJERCICIO 2---")
const princesa={
nombre: "Leia",
apellido: "Organa",
edad: 20,
ciudad:"Alderaan"
}

//Es un poco más complicado dentro de un objeto, pero se entiende un poco mejor y es más dinámico.
//"Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan."

console.log("Soy "+princesa.nombre+" "+princesa.apellido+", tengo "+princesa.edad+" años y soy una princesa de "+princesa.ciudad)
console.log()

//3. Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".
// Imprime el resultado por consola utilizando console.log.

console.log("---3ER PUNTO EJERCICIO 2---")

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const sumaTotal= sable1.precio+sable2.precio
console.log("El precio total de los sables es: "+sumaTotal)
console.log()

// 4. Actualizando el precio final de las naves:

// Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos.
// Actualiza el precio final (precioFinal) de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precio base (precioBase).
console.log("---4TO PUNTO EJERCICIO 2---")


let precioBaseGlobal = { nombre:"Precio Base Global", precio:10000}
console.log("El precio de la Base Global es: "+precioBaseGlobal.precio+" creditos")
precioBaseGlobal.precio=25000
console.log("El nuevo precio de la Base Global es: "+precioBaseGlobal.precio+" creditos")


 const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
 const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

 const precioFinal=(nave1.precioFinal+nave2.precioFinal)+precioBaseGlobal.precio
 console.log("El precio final de "+nave1.nombre+" + "+nave2.nombre+" + "+precioBaseGlobal.nombre+" es: "+precioFinal+" creditos.")
 console.log()

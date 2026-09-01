// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

// Recuerda no usar frutas duplicadas.

console.log("---SOLUCIÓN EJERCICIO 22---")

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
let contadorFrutas=0;
//Aquí he puesto el contador que voy a guardar en el array fruits. Se podría decir que es como hacer un fruitsIndex, para que tome el valor de la comida que voy a reemplazar
for(let i=0; i<foodSchedule.length; i++ ){
    if(!foodSchedule[i].isVegan){
        foodSchedule[i].name=fruits[contadorFrutas]
        foodSchedule[i].isVegan=true
        contadorFrutas++
    }
}
console.log(foodSchedule)
//Y, al final simplemente, cambio el nombre que tiene y el valor de false lo cambio a true, y si quisiera saber cuantos cambios ha habido dentro de la operacion podría hacer, con el mismo contador un console.log
console.log("El numero de cambios que ha habido en el proceso son: "+contadorFrutas)
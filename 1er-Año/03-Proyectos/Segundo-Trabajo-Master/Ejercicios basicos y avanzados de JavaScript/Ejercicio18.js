// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.

// Imprime en un console log el array resultante.

// Puedes usar este array:
console.log("---SOLUCIÓN EJERCICIO 18---")

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const guardarPlaces=[];
for (const item of placesToTravel) {
    if(item.id!==11 && item.id!==40){
        guardarPlaces.push(item)
    }
}
console.log(guardarPlaces)

//dejo anexo las dos formas que he pensado en hacerlo, la primera es creando un array y guardando los nuevos datos en el. 

for(let i=0; i<placesToTravel.length; i++){
    if(placesToTravel[i].id===11 || placesToTravel[i].id===40){
        placesToTravel.splice(i,1)
        i--
    }
}
console.log(placesToTravel)

//En la segunda la IA me ayudo a entender porque era necesario poner el i-- porque si no no cogeria todos los elementos dentro del array, entonces, para que funcione correctamente, era necesario poner eso, y lo demas es el fori normal y añadiendo un splice 
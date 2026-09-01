//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
//4.1 - Saca a "Tendo" por consola atacando su posición.
//4.2 - Coloca en el último lugar de este array a "Cervasio".
//4.3 - Cambia el primer elemento de este array por "Bambina".
//4.4 - Dale la vuelta a este array.
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// Pista: puedes usar el método length con algo más para ello.

//4.1
console.log("---1ER PUNTO EJERCICIO 4---")
console.log(aldeanos[3])
console.log()
//4.2
console.log("---2DO PUNTO EJERCICIO 4---")
aldeanos.push("Cervasio")
console.log(aldeanos)
console.log()
//4.3
console.log("---3ER PUNTO EJERCICIO 4---")
aldeanos[0]="Bambina"
console.log(aldeanos)
console.log()
//4.4
console.log("---4TO PUNTO EJERCICIO 4---")
aldeanos.reverse()
console.log(aldeanos)
console.log()
//4.5
console.log("---5TO PUNTO EJERCICIO 4---")
aldeanos.splice(4,1,"Canela")
console.log(aldeanos)
console.log()
//4.6
console.log("---6TO PUNTO EJERCICIO 4---")
console.log(aldeanos[aldeanos.length-1])
console.log()

//Me parece que es más ordenado poner el numero del ejercicio y también que tengan cierto orden para poder enviar la información correctamente
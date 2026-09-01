// Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

console.log("---1ER PUNTO EJERCICIO 9---")
console.log("Primer for:")
const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumNumbers(numberList){
    let acumulador=0;
    for (const item of numberList) {
        acumulador+=item
    }

    return acumulador
}
console.log("El resultado de la suma es: "+sumNumbers(numbers))
console.log()
//Decidí hacer el ejercicio utilizando los tres for que hemos visto en clase para que se pueda utilizar el que venga mejor o el que mejor podamos utilizar

console.log("Opción con segundo for: ")
function sumaNumeros(numberList){
    let acumulador=0;
    for (let i = 0; i < numberList.length; i++) {
        acumulador+=numberList[i]
    }
    console.log("El resultado de la suma es: "+acumulador)
}

sumaNumeros(numbers)
console.log()
//En el segundo for, decidi no poner return para que no me retornara nada, pero para guardar el acumulador dentro de la funcion que he creado, necesitaba poner un console.log dentro de la misma, y ya lo llamo desde afuer sin el console.log

console.log("Opción con tercer for: ")
const numerosForEach=[]
function sumaNumeros1 (numberlist){
    let suma=0;
    numberlist.forEach(numero => {
        suma+=numero
    });
    return suma
}
console.log("El resultado de la suma es: "+sumaNumeros1(numbers))
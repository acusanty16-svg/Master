// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

// Puedes usar este array para probarla:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function promedio(numberList){
    let contador=0;
    for (const item of numberList) {
        contador+=item
    }
    console.log("La suma de los numeros es: "+contador)
    console.log("El promedio de los numeros es: "+contador/numberList.length)
}
promedio(numbers)

//No he agregado ningún tipo de cambio y lo único diferente de lo que has hecho en clase es poner la información dentro de un console.log para que se vea un poco más ordenado el cambio, pero todo lo demás es igual a lo que tenias en el ejemplo que has hecho en clase
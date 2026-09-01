// Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

// Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

console.log("---1ER PUNTO EJERCICIO 11---")
const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
    let sumaStrings=0;
    let sumaNumeros=0;
    for (const item of list) {
        if(item.length){
    sumaStrings+=item.length
        }else{
    sumaNumeros+=item
        }
    }
  
  console.log("La suma de las letras, dentro del array es: "+sumaStrings)
  console.log("La suma de los numeros, dentro del array es: "+sumaNumeros)
  const sumaFinal=sumaNumeros+sumaStrings
  console.log("La suma final es: "+sumaFinal)
}
averageWord(mixedElements)
//En este ejercicio tuvé sentimientos encontrados, porque no supé como tomar los elementos, así que le dije al sistema que si algo dentro del objeto tendría .length entonces lo tomara como un String y me lo devolviera en numero, y lo que no lo tuviera era un numero normal y lo sumara
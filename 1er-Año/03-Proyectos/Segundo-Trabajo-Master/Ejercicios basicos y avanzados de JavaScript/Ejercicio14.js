// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

console.log("---SOLUCIÓN EJERCICIO 14---")

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
    contador={}
    for (const item of list) {
        if(contador[item]){
            contador[item]++
        }else{
            contador[item]=1
        }
    }
    return contador
}
const resultadoFinal=repeatCounter(words)
console.log(resultadoFinal)

//Para este ejercicio intenté usar un contador de tipo array pero su estructura es y maneabilidad es mas dificíl, así que opte por usar tipo objeto que guarda mejor los valores y le he dado dos valores. Uno que suma, y otro que deja las palabras con predeterminado 1
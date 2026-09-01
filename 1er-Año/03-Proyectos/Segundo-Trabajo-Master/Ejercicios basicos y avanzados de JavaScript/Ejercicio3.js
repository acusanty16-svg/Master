// En este ejercicio podéis mostrar directamente los resultados por consola o almacenarlos en variables (esto lo podéis hacer en todos los demás, como os resulte más claro).

// 3.1 Multiplica 10 por 5 y muestra el resultado mediante console.
// 3.2 Divide 10 por 2 y muestra el resultado en un console.
// 3.3 Muestra mediante un console el resto de dividir 15 por 9.
// 3.4 Usa el correcto operador de asignación que resultará en o = 15,
// teniendo dos variables p = 10 y j = 5.
// 3.5 Usa el correcto operador de asignación que resultará en i = 50,
// teniendo dos variables c = 10 y m = 5.

//Primero, voy a definir una serie de numeros que se repiten dentro del ejercicio y los usaré para resolver la mayoria de los ejercicios

const numeros=[10,15]
const operadores={
    variableP:10, 
    variableJ:5
}
const operadores1={
    variableC:10,
    variableM:5
}
//Una vez definido todo lo que voy a usar dentro del ejercicio empiezo a operar con cada punto y lo secciono y aplico un console.log al final de cada uno para que el codigo se entienda mucho mejor
const primerPunto=numeros[0]*5
console.log("---1ER PUNTO EJERCICIO 3---")
console.log(primerPunto)
console.log()
console.log("---2DO PUNTO EJERCICIO 3---")
const segundoPunto=numeros[0]/2
console.log(segundoPunto)
console.log()
console.log("---3ER PUNTO EJERCICIO 3---")
const tercerPunto=numeros[1]%9
console.log(tercerPunto)
console.log()
console.log("---4TO PUNTO EJERCICIO 3---")
//En el ejercicio 4 y 5 decidí hacer dos objetos llamados operadores en donde ponia los valores de asignación en la parte superior y así poder trabajar con ellos más facilmente. Y bueno también pensé que sería de más ayuda si estaban de esa forma
let o =operadores.variableJ+operadores.variableP
console.log(o)
console.log()
console.log("---5TO PUNTO EJERCICIO 3---")
let i=operadores1.variableC*operadores1.variableM
console.log(i)
console.log()


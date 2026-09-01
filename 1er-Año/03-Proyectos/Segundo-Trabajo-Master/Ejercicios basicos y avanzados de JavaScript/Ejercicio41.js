// Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

// Que la función use el parametro para simular una tirada de dado y retornar el resultado.

// Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()

console.log("---SOLUCIÓN EJERCICIO 41---");

function rollDice(caras) {
  return Math.floor(Math.random() * caras) + 1;
}
console.log(rollDice(6));
console.log(rollDice(20));
console.log(rollDice(12));
console.log(rollDice(8));
console.log(rollDice(4));
//El Math.random de JS es diferente al de Java, porque aqui se necesita usar el Math.floor para que el numero no sea decimal y luego el Math.random normal en donde sumo el numero 1 para poder obtener el numero que deseo. Sin embargo hay un problema y es que aqui no podria jugar o hacer algo de probabilidad porque solo puedo tirar un dado, entonces sería mas divertido poder, tanto guardar el numero de dados pero tambien poder jugar con uno o mas dados a la vez...




const juego210 = (cantidad, caras) => {
  const guardarTiradas=[]
  let sumaDe210=0;
for(let i=0; i<cantidad; i++){
  let resultadoTirada=rollDice(caras)
  guardarTiradas.push(resultadoTirada)
  sumaDe210+=caras
}
  if(sumaDe210<210){
    console.log("Estas muy cerca de ganar, llevas: "+sumaDe210+". Intenta seguir jugando")
  }else if(sumaDe210>210){
    console.log("Has perdido, suerte para la proxima chavar")
  }else{
    console.log("Eres una maquina y has ganado, tu premio es a la salida")
  }

}
juego210(4,25)
juego210(10, 21)
juego210(15,50)

//He creado un juego llamado sumaDe210, en donde vamos a tener la posibilidad de jugar con un numero de dados y la idea es llegar hasta el 210, y podria jugar las veces que quiera pero si me paso pierdo, y si la persona llega hasta el 210 ganará... Hombre, la idea seria meter un scanner y que la persona siga jugando y tal, pero bueno la logica esta lol. 
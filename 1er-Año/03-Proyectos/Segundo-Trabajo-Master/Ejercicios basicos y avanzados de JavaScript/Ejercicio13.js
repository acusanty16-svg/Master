// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

console.log("---SOLUCIÓN EJERCICIO 13---")
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nombreComparar) {
  for (let i=0; i<nameList.length;i++) {
    if(nameList[i]===nombreComparar){
        console.log("El nombre: "+nombreComparar+" está en la posición: "+i)
        return true;
    }
  }
  console.log("El nombre: "+nombreComparar+" no está dentro de la lista")
  return false;

}
nameFinder(names,"Santiago")

//No sé si pedias el ejercicio de esta forma, pero no entendí otra forma de hacerlo. Ya que no hemos visto como introducir parametros por consola opté por introducir el nombre a comparar manualmente, y dependiendo de si esta dentro del array o si por el contrario se encontraba fuera, tendra su mensaje correspondiente

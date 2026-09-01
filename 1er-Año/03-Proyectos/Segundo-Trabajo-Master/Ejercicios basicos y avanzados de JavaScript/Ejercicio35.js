// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

// Considera el caso de múltiples mutantes con el mismo poder.

console.log("---SOLUCIÓN EJERCICIO 35---");

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation'},
  {name: 'Antonio', power: 'el poder de la amista'},
  {name: 'Jose Villar', power: 'pedir taxis macabros'}
];

//Este ejercicio no lo entendí muy bien lol. Así que lo realice de la siguiente forma. Alguien pregunta el poder del mutante y el sistema le regresa el nombre del mutante, pero si el poder no esta, pues no regresa nada

const findMutantByPower = (mutants, power) => {
    let mutantesEncontrados=[]
    for (const item of mutants) {
        if(item.power === power){
            mutantesEncontrados.push(item.name)
        }
    }
//Hasta este punto la función me guarda el poder del mutante y lo retorna con su nombre, pero ahora necesito enviar un mensaje para saber si el poder se encuentra registrado o no
    if(mutantesEncontrados.length > 0){
        console.log("Se ha encontrado un mutante con el poder "+power+": "+mutantesEncontrados.join(", "))
    }else{
        console.log("No se ha encontrado ningun mutante con el poder: "+power)
    }
}
//Por esa razon he tenido que poner en un if el mensaje del mutante con su poder establecido

findMutantByPower(mutants, "regeneration")
findMutantByPower(mutants, "pedir taxis macabros")
findMutantByPower(mutants, "regeneracion")
findMutantByPower(mutants, "el poder de la amista")
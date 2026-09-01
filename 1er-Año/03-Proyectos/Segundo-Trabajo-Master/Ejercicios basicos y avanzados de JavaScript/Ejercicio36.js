// Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.

// Averigua como hallar el año actual en tus cálculos.
console.log("---SOLUCIÓN EJERCICIO 36---");


const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];
//Para este ejercicio usé dos metodos o funciones que se entrelazaran entre si, porque creo que es un poco mejor hacerlo de esta manera, así si tengo que actualizar algo en el futuro, como el trabajo ya está segmentado puedo arreglarlo con más facilidad

const calculateActorsAges = (actors) => {
    const guardarActores=[]
    for (const item of actors) {
        const edad = calculateEdad(item.born)
        guardarActores.push({
            name: item.name,
            age: edad
        })
        console.log(item.name + " tiene " + edad + " años.");
        console.log()
        
    }
    return guardarActores
}
//Simplemente es un forof que guarda el nombre del actor y la funcion de abajo mete la logica de la edad con el año actual y al final retorna el array guardarActores

const calculateEdad =  (born, añoActual=2026) => {
    const edad = añoActual-born
    return edad;
    //para esta funcion simplemente pido el año de nacimiento porque el año actual esta por defecto y creo una variable que se retorna al momento de usarla
}

calculateActorsAges(actors)
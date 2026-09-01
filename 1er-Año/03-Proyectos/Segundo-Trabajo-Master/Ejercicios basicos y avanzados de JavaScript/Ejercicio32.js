// Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.

// Utiliza este array para probar tu función.

console.log("---SOLUCIÓN EJERCICIO 32---");

const xMen = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1963 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 },
];
const guardarMutantes = [];

function findOldestXMen(xMen) {
  let guardarAño = xMen[0].year;
  for (const item of xMen) {
    if (item.year < guardarAño) {
      guardarAño = item.year;
    }
  }
  return guardarAño;
}
//creo que este ha sido una de los ejercicios más dificiles que he hecho jejeje. porque tuve que crear dos funciones porque hay varios mutantes que nacen el mismo año y en una funcion era necesario que devolviera el año y en otra que los pudiera guardar. Porque si no solo va a renornar a Cyclops.
const guardarMutanteViejo = (mutante) => {
  const mutanteViejo = findOldestXMen(mutante);
  for (const item of mutante) {
    if (item.year === mutanteViejo) {
      guardarMutantes.push(item.name);
    }
  }
};
guardarMutanteViejo(xMen);
console.log(guardarMutantes);

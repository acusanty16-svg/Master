// Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.

// Imprime este nuevo array por consola.
console.log("---SOLUCIÓN EJERCICIO 24---")

const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];
const humanCharacters = [];
const droidCharacters=[];
const wookieeCharacters=[];
const unknownCharacters=[];

for (const item of characters) {
    if(item.species.includes("Human")){
    humanCharacters.push(item)
    }else if(item.species.includes("Droid")){
        droidCharacters.push(item)
    }else if(item.species.includes("Wookiee")){
        wookieeCharacters.push(item)
    }else if(item.species.includes("Unknown")){
        unknownCharacters.push(item)
    }
}
console.table(humanCharacters)
console.log()
console.table(droidCharacters)
console.log()
console.table(wookieeCharacters)
console.log()
console.table(unknownCharacters)
console.log()

//El ejercicio solo nos pedia que guardaramos a los humanos, pero de igual forma he guardado, dependiendo de la especie a su grupo
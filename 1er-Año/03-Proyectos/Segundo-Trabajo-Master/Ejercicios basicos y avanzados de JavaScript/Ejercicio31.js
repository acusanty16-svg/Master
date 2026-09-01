// Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola.
console.log("---SOLUCIÓN EJERCICIO 31---");

const artists = [
  { name: "Kurt Cobain", influences: ["The Beatles", "Pixies", "Lead Belly"] },
  {
    name: "David Bowie",
    influences: ["Little Richard", "Chuck Berry", "The Velvet Underground"],
  },
  {
    name: "Eddie Vedder",
    influences: ["The Who", "Neil Young", "Jim Morrison"],
  },
  {
    name: "Freddie Mercury",
    influences: ["Liza Minnelli", "Jimi Hendrix", "Aretha Franklin"],
  },
  {
    name: "John Lennon",
    influences: ["Elvis Presley", "Chuck Berry", "Buddy Holly"],
  },
];

// En este ejercicio hice el bucle dentro del bucle, donde el primer bucle recorre la lista artistas y en el segundo se recorre la lista de influencias, y ya lo demas es historia, simplemente es mostrarlo por consola y con un console.log() para que se vea mas ordenado.

for (const item of artists) {
  for (const influencia of item.influences) {
    console.log("Artista: " + item.name + " Influencia: " + influencia);
  }
  console.log();
}
console.log("Fin del bucle");

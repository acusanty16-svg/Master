// Usa un bucle para crear 3 arrays de películas filtrados por categorías.

// Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.

console.log("---SOLUCIÓN EJERCICIO 23---")

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  { name: "Eternal Sunshine of the Spotless Mind 2", durationInMinutes: -108 },
];
//Para poner una variable más, solamente en caso de que tuvieramos un scanner, he puesto un dato negativo
const peliculasPequenias=[]
const peliculasMedianas=[]
const peliculasGrandes=[]
const datosIncorrectos=[]

for(let i=0; i<movies.length; i++){

    if(movies[i].durationInMinutes>=0 && movies[i].durationInMinutes<100){
        peliculasPequenias.push(movies[i])
    }else if(movies[i].durationInMinutes>=100 && movies[i].durationInMinutes<200){
        peliculasMedianas.push(movies[i])
    }else if(movies[i].durationInMinutes>=200){
        peliculasGrandes.push(movies[i])
    }else{
        console.log("Dato incorrecto, la pelicula"+movies[i].name+" no ha podido ser procesada")
        datosIncorrectos.push(movies[i])
    }
}

console.log("PEQUEÑAS (< 100 min)");
console.table(peliculasPequenias);

console.log("MEDIANAS (100 - 200 min)");
console.table(peliculasMedianas);

console.log("GRANDES (> 200 min)");
console.table(peliculasGrandes);

console.log("DATOS INCORRECTOS")
console.table(datosIncorrectos)

//Con ayuda de la IA encontre console.table para que el codigo se vea un poco más ordenado. y agregue los datos incorrectos que en futuras intervenciones se podran guardar y contar dentro de este array
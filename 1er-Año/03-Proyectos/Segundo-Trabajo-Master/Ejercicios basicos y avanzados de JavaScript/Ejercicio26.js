// Filtra una lista de canciones para crear una playlist que solo contenga canciones de rock que duren más de 5 minutos.

// Utiliza un bucle para lograrlo e imprime la nueva playlist por consola.
console.log("---SOLUCIÓN EJERCICIO 26---")

const songs = [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
  { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
  { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
  { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
  { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
  { title: 'Crazy Love', genre: 'Pop', duration: 3.52 },
];
const rockPlaylist = [];
let contadorCancionesNuevas=0;

for(let i=0; i<songs.length; i++){
    if(songs[i].duration>5.0 && songs[i].genre==="Rock"){
        rockPlaylist.push(songs[i])
        contadorCancionesNuevas++
    }
}
for (const item of songs) {
    if(item.duration>5.0 && item.genre==="Rock"){
        rockPlaylist.push(item)
        contadorCancionesNuevas++
    }
}
//En este caso filtré dos condiciones dentro del for o el forof-que es los mismo, pero quería demostrar que se puedo usar cualquier bucle-donde la primera es que la duracion fuera mas de 5.0(double) y la segunda que el genero sea estrictamente igual a rock, aunque no hubiera ningua cancion de pop o de algun otro genero que cumpliera con la duracion minima
console.log("---LISTA DE ROCK ANTONIO(ACTUALIZADA)---")
console.log("Canciones actualizadas en la lista: "+contadorCancionesNuevas)
console.table(rockPlaylist)
//Y, en la parte final, simplemente he añadido un contador para que las personas sepan cuantas actualizaciones hemos tenido dentro de la lista de rock, creo que es importante para tener a las personas al tanto de lo nuevo

const main = document.querySelector("main")
// const theThing = {
//     title: "The Thing",
//     director: "John Carpenter",
//     poster: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2958970/header.jpg?t=1764708954"
// }
// const h2 = document.createElement("h2")
// h2.textContent = theThing.title;

// const h3 = document.createElement("h3")
// h3.textContent = theThing.director

// const image = document.createElement("img")
// image.src=theThing.poster
// image.alt=theThing.title

// main.appendChild(h2)
// main.appendChild(h3)
// main.appendChild(image)


// const nombre = "Pepe"
// const apellido = "Pérez"
// const edad= 26

// const frase = `Me llamo ${nombre} ${apellido } y tengo ${edad } años`
// console.log(frase)

// main.innerHTML=`
// <h2>${theThing.title}</h2>
// <h3>${theThing.director}</h3>
// <image src=${theThing.poster} alt=${theThing.title}/>
//  `

const peliculas = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    releaseDate: "2010-07-16",
    runtimeMinutes: 148,
    director: "Christopher Nolan",
    tags: ["Sci-Fi", "Action", "Adventure"],
    sinopsis: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/Inception"
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    year: 1994,
    releaseDate: "1994-09-22",
    runtimeMinutes: 142,
    director: "Frank Darabont",
    tags: ["Drama", "Crime"],
    sinopsis: "Dos hombres encarcelados entablan una amistad a lo largo de varios años.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/The_Shawshank_Redemption"
  },
  {
    id: 3,
    title: "Parasite",
    year: 2019,
    releaseDate: "2019-05-30",
    runtimeMinutes: 132,
    director: "Bong Joon-ho",
    tags: ["Thriller", "Drama", "Comedy"],
    sinopsis: "La codicia y la discriminación de clase amenazan la relación entre dos familias.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/Gisaengchung"
  },
  {
    id: 4,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    releaseDate: "2018-12-14",
    runtimeMinutes: 117,
    director: "Bob Persichetti",
    tags: ["Animation", "Action", "Adventure"],
    sinopsis: "Miles Morales se convierte en el Spider-Man de su universo.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/Spider-Man:_un_nuevo_universo"
  },
  {
    id: 5,
    title: "Pulp Fiction",
    year: 1994,
    releaseDate: "1994-10-14",
    runtimeMinutes: 154,
    director: "Quentin Tarantino",
    tags: ["Crime", "Drama"],
    sinopsis: "Vidas de criminales se entrelazan en historias de violencia y redención.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/Pulp_Fiction"
  },
  {
    id: 6,
    title: "The Dark Knight",
    year: 2008,
    releaseDate: "2008-07-18",
    runtimeMinutes: 152,
    director: "Christopher Nolan",
    tags: ["Action", "Crime", "Drama"],
    sinopsis: "Batman lucha contra el caos desatado por el Joker.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/The_Dark_Knight"
  },
  {
    id: 7,
    title: "Your Name",
    year: 2016,
    releaseDate: "2016-08-26",
    runtimeMinutes: 106,
    director: "Makoto Shinkai",
    tags: ["Animation", "Drama", "Fantasy"],
    sinopsis: "Dos adolescentes que no se conocen conectan de manera especial al descubrir que pueden intercambiar sus cuerpos.",
    posterURL: "https://www.amazon.es/Your-Name-Roman-Makoto-Shinkai/dp/2376320127",
    wikipediaURL: "https://es.wikipedia.org/wiki/Kimi_no_Na_wa."
  },
  {
    id: 8,
    title: "Interstellar",
    year: 2014,
    releaseDate: "2014-11-07",
    runtimeMinutes: 169,
    director: "Christopher Nolan",
    tags: ["Sci-Fi", "Drama", "Adventure"],
    sinopsis: "Viaje espacial para salvar a la humanidad.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/Interstellar"
  },
  {
    id: 9,
    title: "The Godfather",
    year: 1972,
    releaseDate: "1972-03-24",
    runtimeMinutes: 175,
    director: "Francis Ford Coppola",
    tags: ["Crime", "Drama"],
    sinopsis: "La transición de poder en una familia de la mafia.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/El_padrino"
  },
  {
    id: 10,
    title: "Matrix",
    year: 1999,
    releaseDate: "1999-03-31",
    runtimeMinutes: 136,
    director: "Lana Wachowski",
    tags: ["Action", "Sci-Fi"],
    sinopsis: "Un hacker descubre que su mundo es una simulación.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/The_Matrix"
  },
  {
    id: 11,
    title: "Forrest Gump",
    year: 1994,
    releaseDate: "1994-07-06",
    runtimeMinutes: 142,
    director: "Robert Zemeckis",
    tags: ["Drama", "Romance"],
    sinopsis: "La vida de un hombre extraordinario en momentos clave de la historia.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/Forrest_Gump"
  },
  {
    id: 12,
    title: "Mad Max: Fury Road",
    year: 2015,
    releaseDate: "2015-05-15",
    runtimeMinutes: 120,
    director: "George Miller",
    tags: ["Action", "Adventure", "Sci-Fi"],
    sinopsis: "Persecución frenética en un desierto post-apocalíptico.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/Mad_Max:_Fury_Road"
  },
  {
    id: 13,
    title: "Gladiator",
    year: 2000,
    releaseDate: "2000-05-05",
    runtimeMinutes: 155,
    director: "Ridley Scott",
    tags: ["Action", "Adventure", "Drama"],
    sinopsis: "Un general se convierte en gladiador para vengar a su familia.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
    wikipediaURL: "https://es.wikipedia.org/wiki/Gladiator_(pel%C3%ADcula_de_2000)"
  },
  {
    id: 14,
    title: "Back to the Future",
    year: 1985,
    releaseDate: "1985-07-03",
    runtimeMinutes: 116,
    director: "Robert Zemeckis",
    tags: ["Adventure", "Comedy", "Sci-Fi"],
    sinopsis: "Un adolescente viaja a 1955 y debe salvar el futuro de sus padres.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/Back_to_the_Future"
  },
  {
    id: 15,
    title: "Jurassic Park",
    year: 1993,
    releaseDate: "1993-06-11",
    runtimeMinutes: 127,
    director: "Steven Spielberg",
    tags: ["Action", "Adventure", "Sci-Fi"],
    sinopsis: "Dinosaurios clonados escapan en un parque temático.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/Parque_Jur%C3%A1sico"
  },
  {
    id: 16,
    title: "The Silence of the Lambs",
    year: 1991,
    releaseDate: "1991-02-14",
    runtimeMinutes: 118,
    director: "Jonathan Demme",
    tags: ["Crime", "Drama", "Thriller"],
    sinopsis: "Una agente del FBI busca la ayuda de un asesino brillante.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/The_Silence_of_the_Lambs"
  },
  {
    id: 17,
    title: "Everything Everywhere All At Once",
    year: 2022,
    releaseDate: "2022-03-25",
    runtimeMinutes: 139,
    director: "Daniel Kwan",
    tags: ["Action", "Adventure", "Sci-Fi"],
    sinopsis: "Una mujer debe salvar el multiverso conectando con sus otras versiones.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/Everything_Everywhere_All_at_Once"
  },
  {
    id: 18,
    title: "Joker",
    year: 2019,
    releaseDate: "2019-10-04",
    runtimeMinutes: 122,
    director: "Todd Phillips",
    tags: ["Crime", "Drama", "Thriller"],
    sinopsis: "El origen de un villano a través del dolor y la locura.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/Joker_(pel%C3%ADcula)"
  },
  {
    id: 19,
    title: "Coco",
    year: 2017,
    releaseDate: "2017-10-27",
    runtimeMinutes: 105,
    director: "Lee Unkrich",
    tags: ["Animation", "Adventure", "Comedy"],
    sinopsis: "Un niño viaja a la tierra de los muertos para descubrir su legado.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/Coco_(pel%C3%ADcula)"
  },
  {
    id: 20,
    title: "Blade Runner 2049",
    year: 2017,
    releaseDate: "2017-10-06",
    runtimeMinutes: 164,
    director: "Denis Villeneuve",
    tags: ["Sci-Fi", "Drama", "Mystery"],
    sinopsis: "Un blade runner descubre un secreto que podría cambiar el mundo.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
    wikipediaURL: "https://es.wikipedia.org/wiki/Blade_Runner_2049"
  }
];


const ul = document.createElement("ul")

for (const pelicula of peliculas) {
    const li = document.createElement("li")
    
    li.innerHTML = `
    <h2>${pelicula.title}</h2>
    <p>${pelicula.director}</p>
    <p>${pelicula.releaseDate}</p>
    <img src=${pelicula.posterURL}><alt=${pelicula.title}>
    `

    ul.appendChild(li)
}

main.appendChild(ul)

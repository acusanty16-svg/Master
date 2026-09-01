//Para este ejercicio me parecío interesante crear una pagina desde cero solamente usando JS
const header = document.createElement("header")
header.innerHTML=`
    <h1>Musica de Santi</h1>
    <p>Aqui encontraras la mejor seccion de musica de toda la comarca</p>
    <button class="myBtn">Change Theme</button>
`;
document.body.appendChild(header)

//Asi que primeramente creo un main y un header correspondiente, para poder meter dentro de ellos elementos
const main=document.createElement("main")
const ul = document.createElement("ul")
document.body.appendChild(main)
main.appendChild(ul)


//despues de crear esto es hora de poner toda la informacion-con un pequeño cambio en el array que nos has dado en el inicio lol
const albums = [
  {
    title: "De Mysteriis Dom Sathanas",
    band: "Mayhem",
    releaseYear: 1994,
    image: "https://upload.wikimedia.org/wikipedia/en/3/3a/Mayhem_demysteriisdomsathanas.jpg"
  },
  {
    title: "Reign in Blood",
    band: "Slayer",
    releaseYear: 1986,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6b/83/2c/6b832cb7-7234-0fb7-3930-38d9c385dc9a/23UM1IM55794.rgb.jpg/1200x630bf-60.jpg"
  },
  {
    title: "Ride the Lightning",
    band: "Metallica",
    releaseYear: 1984,
    image: "https://upload.wikimedia.org/wikipedia/en/f/f4/Ridetl.png"
  },
  {
    title: "Painkiller",
    band: "Judas Priest",
    releaseYear: 1990,
    image: "https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwb8824c31/images/4/3/8/6/438602.jpg?sw=1000&sh=800&sm=fit&sfrm=png"
  },
  {
    title: "Iron Fist",
    band: "Motörhead",
    releaseYear: 1982,
    image: "https://muzikercdn.com/uploads/products/4257/425716/main_7c8725ab.jpg"
  }
];
ul.innerHTML="";
for (const element of albums) {
  const createLi = document.createElement("li")
  createLi.innerHTML = `
  <h2>${element.title}</h2>
    <img src="${element.image}" alt="${element.title}">
    <h3>${element.band}</h3>
    <p>${element.releaseYear}</p>
    `
    ul.appendChild(createLi)
}
main.appendChild(ul)

//Asi que cree un loop que dentro del body del HTML, y todo lo guarde dentro del main, para que se viera mas ordenado
//Despues viene la parte que creí iba a ser super interesante, y esque al reproducir el evento click todo en la pagina deberia de cambiar
const btnChangeTheme= document.querySelector(".myBtn")
btnChangeTheme.addEventListener("click", ()=>{
    header.classList.toggle("dark")
    main.classList.toggle("dark")
    const h1= header.querySelector("h1")
    const p = header.querySelector("p")
    if(header.classList.contains("dark")){
      h1.textContent="Musica que no es de Santi"
      p.textContent="¡Aquí !!NO!! encontrarás la mejor sección de la comarca"
    }else{
      h1.textContent = "Musica de Santi";
      p.textContent = "Aquí encontrarás la mejor sección de música de toda la comarca";
    }
    ul.innerHTML=""
    const listaMostrar = header.classList.contains("dark") ? antagonists:albums
    for (const element of listaMostrar) {
      const createLi = document.createElement("li")
      createLi.innerHTML = `
    <h2>${element.title}</h2>
      <img src="${element.image}" alt="${element.title}">
      <h3>${element.band || element.artist}</h3>
      <p>${element.releaseYear}</p>
      `
    ul.appendChild(createLi)
    }
})
//Y en este punto del ejercicio si que mi amigo IA me ayudo a organizar algunas cosas, porque muchas veces al intentarlo cometia el error de no eliminar los datos anteriores y claro se superponian los elementos o el programa se paraba si simplemente queria usar dentro del loop un innerHTML para cambiar manualmente algun elemento, por eso fue necesario poner la sentencia if para separar cuando estemos en el toggle dark o en el default y dependiendo del resultado asimismo se ejecutaran distintos programas con distintas personalizaciones de CSS y el ultimo array de objetos es de los antagonistas del heavy metal...
const antagonists = [
  {
    title: "Getz/Gilberto",
    artist: "Stan Getz & João Gilberto",
    releaseYear: 1964,
    image: "https://upload.wikimedia.org/wikipedia/en/9/96/Getz-gilberto.jpg"
  },
  {
    title: "Teenage Dream",
    artist: "Katy Perry",
    releaseYear: 2010,
    image: "https://squarecatvinyl.com/cdn/shop/files/Perry_Katy-TeenageDream.jpg?v=1748368587"
  },
  {
    title: "Music for Airports",
    artist: "Brian Eno",
    releaseYear: 1978,
    image: "https://upload.wikimedia.org/wikipedia/en/4/46/Music_for_Airports.jpg"
  },
  {
    title: "Breathless",
    artist: "Kenny G",
    releaseYear: 1992,
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Kenny_G-Breathless_%28album_cover%29.jpg"
  }
];



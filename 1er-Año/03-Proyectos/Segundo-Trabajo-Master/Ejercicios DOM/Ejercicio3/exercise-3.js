//Solucion 1er punto Ejercicio3
const countries = ['Japón',
     'Nicaragua', 
     'Suiza', 
     'Australia', 
     'Venezuela'];

const contenedorPaises = document.createElement("div")
const paisesH2 = document.createElement("h2")
paisesH2.textContent = "Paises"

contenedorPaises.appendChild(paisesH2)

for (const element of countries) {
    const p = document.createElement("p")
    p.textContent = element;
    contenedorPaises.appendChild(p)
}
document.body.prepend(contenedorPaises)

//Para este ejercicio, tuve que usar ayuda de nuestra amiga la inteligencia artificial, porque queria ubicar el nuevo h2 adelante del todo y todo ubicarlo dentro de un div para que se viera un poco mas ordenado, pero siempre se ponia por debajo de lo que escribia, entonces encontre el evento prepend y con eso solamente fue necesario poner dentro todos los paises y con un forof y listo

//Solucion 2do punto Ejercicio3
const eliminarElemento= document.querySelectorAll(".fn-remove-me")
for (const element of eliminarElemento) {
    element.remove()
}
//si hubiera querido eliminar solamente un elemento tendria que quitar el selectorAll y ya hacer un simple remove, pero bueno si en futuro alguien quiere poner algo que no debe pues este metodo los remueve por completo

//Solucion 3er punto Ejercicio3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ubicarPrint = document.querySelector('[data-function="printHere"]')
const createUl = document.createElement("ul")

for (const element of cars) {
    const createLi = document.createElement("li")
    createLi.textContent = element
    createUl.appendChild(createLi)
}
ubicarPrint.appendChild(createUl)

//Creo que esta es la lista que mas o menos querias ver. seleccionado a todos los elementos del data-function y seguidamente creo el ul para enlazar todos los li dentro del mismo y al final simplemente crear un hijo en data function con todo el forof haciendo el trabajo

//Solucion 4to punto Ejercicio3
const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const element of countries1) {
    const createDivs = document.createElement("div")
    createDivs.innerHTML= `
    <h4>${element.title}</h4>
    <img src="${element.imgUrl}" alt="${element.title}">
    `
    document.body.appendChild(createDivs)
}
//Y este ejercicio es un poco de lo mismo que hemos visto anteriormente, con la diferencia de que aqui no tengo que seleccionar un espacio en especifico dentro del HTML, y eso me permite crear el for dentro del body un poco guarro, pero bueno tampoco es una pagina muy grande, en cualquier caso, si tuviera que hacer hago el querySelector y despues ejecutaria el for 

//Solucion 5to punto Ejercicio3
const deleteByClicking = document.createElement("button")
deleteByClicking.textContent="Delete"
document.body.appendChild(deleteByClicking)

// const selectDelete=document.querySelector("button")
// selectDelete.addEventListener("click", () =>{
//     const imagenes= document.querySelector("img")
//     imagenes.remove()
// })
//Si quisiera solamente eliminar la primera foto, el evento de arriba ya me permitiria hacerlo, pero como tengo que coger la ultima, hay que darle una vueltecilla al juego

// const selectDelete = document.querySelector("button")
// selectDelete.addEventListener("click", () =>{
//     for (const element of document.querySelectorAll("img")) {
//         element.remove()
//     }
// }) esto seria si quisiera eliminar todas las imagenes con un solo click

const selectDelete = document.querySelector("button")
selectDelete.id="select-delete"
selectDelete.addEventListener("click", () =>{
    const imagenes = document.querySelectorAll("img")
    if(imagenes.length>0){
        imagenes[imagenes.length-1].remove()
    }
})
//y, finalmente el codigo en cuestion lol en donde solo he puesto un if para saber si tengo imagenes que eliminar y en segundo caso simplemente elimino la ultima 

//Solucion 6to punto Ejercicio3
const anotherButton = document.createElement("button")
anotherButton.id="another-botton"
anotherButton.textContent = "Eliminar Too"
document.body.appendChild(anotherButton)

const selectDeleteAll = document.querySelector("button")
anotherButton.addEventListener("click", () =>{
    const divs = document.querySelectorAll("div")
    if(divs.length > 0){
        divs[divs.length-1].remove()
    }
})

//En este punto entendí dos razonamientos asi que ejecute los dos razonamientos. En uno, hice un boton para que eliminase los divs del ultimo al primero, que es el que está arriba

for (const element of document.querySelectorAll("div")) {
    const createBotton=document.createElement("button")
    createBotton.textContent = "Eliminar ultima seccion o imagen"
    createBotton.addEventListener("click", () =>{
        const imagenesDiv = element.querySelector("img")
        if(imagenesDiv){
            imagenesDiv.remove()
        }
    })
    element.appendChild(createBotton)
}

//Y en este ultimo razomiento opte por crear un boton que estuviera dentro del div de la imagen pero que fuera capaz de borrar la imagen dentro de ese div. Porque un error que estaba comentiendo era que al ejecutar el click eliminaba un elemento de la parte superior, entonces cambiando la const por element en vez de document selecciono la imagen en donde esta el div. Y bueno cualquier boton funciona para eliminar las imagenes y los divs

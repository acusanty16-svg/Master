//Solucion 1er punto Ejercicio2
const createDiv = document.createElement("div")
createDiv.textContent = ""
document.body.appendChild(createDiv)

//Solucion 2do punto Ejercicio2
const createDivWithP = document.createElement("div")
createDivWithP.textContent = "Hola soy una p"
document.body.appendChild(createDivWithP)

//Solucion 3er punto Ejercicio2
for (let i=0; i<6;i++){
    const create6P= document.createElement("p")
    create6P.textContent=`Hola, soy el parrafo numero: ${i+1}`
    document.body.appendChild(create6P)
}
//Ademas de agregar el loop para crear el parrafo, decidi poner un parrafo dentro del body para poder ver a cada uno de los nuevos hijos

//Solucion 4to punto Ejercicio2
const createP = document.createElement("p")
createP.textContent = "Soy dinamico"
document.body.appendChild(createP)

//Solucion 5to punto Ejercicio2
const fraseGraciosa = document.querySelector(".fn-insert-here")
fraseGraciosa.textContent = "Wubba Lubba dub dub"
//Para este punto, simplemente seleccione el sitio que queria atacar y cambie sus valores sin mas

//Solucion 6to punto Ejercicio2
const apps = [
    {
        nombre: 'Facebook',
        titulo: 'Metaverso Social',
        eslogan: 'Conecta con amigos y el mundo que te rodea',
        datoExtra: 'Fundada en un dormitorio de Harvard en 2004',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png'
    },
    {
        nombre: 'Netflix',
        titulo: 'Cine en Casa',
        eslogan: 'Películas y series ilimitadas y mucho más',
        datoExtra: 'Comenzó como un servicio de alquiler de DVD por correo',
        imagen: 'https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940'
    },
    {
        nombre: 'Instagram',
        titulo: 'Tu Diario Visual',
        eslogan: 'Captura y comparte los mejores momentos',
        datoExtra: 'Famosa por popularizar los filtros fotográficos',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/500px-Instagram_icon.png'
    },
    {
        nombre: 'Snapchat',
        titulo: 'Momentos Efímeros',
        eslogan: 'La forma más rápida de compartir un momento',
        datoExtra: 'Pioneros en el formato de "Stories"',
        imagen: 'https://1000logos.net/wp-content/uploads/2017/08/Snapchat-logo.png'
    },
    {
        nombre: 'Twitter',
        titulo: 'El Pulso del Mundo',
        eslogan: 'Entérate de lo que está pasando ahora mismo',
        datoExtra: 'Ahora conocida oficialmente como X',
        imagen: 'https://static.vecteezy.com/system/resources/previews/028/574/407/non_2x/x-new-twitter-icon-twitter-rebrand-little-bird-to-x-letter-symbol-twitter-x-new-logo-vcetor-elon-musk-change-social-media-logo-novation-set-of-twitter-new-and-old-round-and-square-logo-free-vector.jpg'
    }
];
const createUl=document.createElement("ul")
for (const item of apps) {
    const createLi=document.createElement("li")

    createLi.innerHTML=`
    <h2>${item.nombre}</h2>
    <h3>${item.titulo}</h3>
    <p>${item.eslogan}</p>
    <strong>${item.datoExtra}</strong>
    <img src="${item.imagen}"alt${item.nombre}>
    `
    createUl.appendChild(createLi)
}
document.body.appendChild(createUl)
//Modifique un poco el archivo para poder tener mas informacion y asimismo utlizar el .innerHTML y que la pagina sea un poco mas intuitiva y asimismo he creado un prqueño CSS que mejorará la visibilidad de la propia pagina

//Solucion 7mo punto Ejercicio2
const eliminarElementos = document.querySelectorAll(".fn-remove-me")
for (const item of eliminarElementos) {
    item.remove()
}
//En este ejercicio encontré un poco de problemas porque si queria seleccionar un elemento no me dejaba borrarlo, y luego me di cuenta que como estoy recorriendo una lista de elementos, lo mas logico era usar un forof que me permitiera borrar a cada clase seleccionada

//Solucion 8vo punto Ejercicio2
const seleccionarVoyEnMedio = document.querySelectorAll(".fn-insert-here")
const parrafoVoyEnMedio = document.createElement("p")
parrafoVoyEnMedio.textContent = "voy en medio"

seleccionarVoyEnMedio[1].after(parrafoVoyEnMedio)
//En este ejercicio opté por seleccionar a todos los elementos que se llamaran iguales .fn-insert-here y el verdadero reto fue ponerlo en centro, porque tuve que seleccionarlos todos, despues crear el elemento p y rellenarlo para al final indicar manualmente donde debia ponerlo, y todo eso sin appenChild

//Solucion 9no punto Ejercicio2
const seleccionarTodos = document.querySelectorAll(".fn-insert-here")
    

for (const element of seleccionarTodos) {
    const palabraNueva = document.createElement("p")
    palabraNueva.textContent = "Voy dentro"
    element.appendChild(palabraNueva)
}
//Y para el final de este ejercicio decidí hacer un forof para recorrer todos los elementos .fn-insert-here y ponerles dentro un p y la palabra voy dentro y al final simplemente agregar cada uno de ellos al documento
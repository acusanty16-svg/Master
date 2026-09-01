//Solucion 1er punto Ejercicio4
const createButton = document.createElement("button")
createButton.textContent = "Este es un boton"
createButton.id="btnToClick"
document.body.appendChild(createButton)
//Vi que en el HTML esta un input con clase click, pero eso me permitiria hacer lo que un boton hace, entonces decidí crear un boton yo mismo y reproducir en un console log el evento y toda su informacion.
createButton.addEventListener("click", (event)=>{
    console.log(event)
})

const focus = document.querySelector(".focus")
focus.addEventListener("focus", (ev)=>{
    console.log(ev.target.value)
})
//y para este ejercicio seleccione la clase focus y seguidamente reproducir las valores escritos cada vez que el raton haga click o haga "focus" dentro del textarea demarcado

const input = document.querySelector(".value")
input.addEventListener("input", (ev)=>{
    console.log(ev.target.value)
})
//y para el ultimo ejercicio he decidido seleccionar la clase value que cada vez que se introduzca una letra se elimine alguna vamos a ver la informacion de cada una en un console.log
// Dado el siguiente código usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.

// Ten en cuenta que las categorías no tienen que repetirse.

// Es decir, const categorias = ["comedia", "aventura", "acción", "thriller", "animación"]

// Para filtrar las categorías puedes ayudarte de la función .includes().
console.log("---SOLUCIÓN EJERCICIO 37---");


const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

//En este ejercicio mi propuesta es crear un for que recorra otro for porque al necesitar simplemente las categorias la informacion adicional sobra, entonces solo le he preguntado si el nuevo array no incluye la categoria entonces que guarde la informacion de la categoria dentro del nuevo const nuevoArray que he creado
const nuevoArray=[]
for (const item of movies) {
    for (const item2 of item.categories) {
        if(!nuevoArray.includes(item2)){
        nuevoArray.push(item2)
    }
    }
    
}
console.log("const categorias = ["+nuevoArray+"]")
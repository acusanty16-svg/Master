// Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.

// Imprime el nombre por consola.
console.log("---SOLUCIÓN EJERCICIO 27---")

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

let guardarPersonaje=cartoons[0];
for(let i=0; i<cartoons.length;i++){
    if(cartoons[i].debut<guardarPersonaje.debut){
    guardarPersonaje=cartoons[i]
    }
}
console.log("El personaje mas antiguo es: "+guardarPersonaje.name)
//En este ejemplo hago lo mismo que en los anteriores, pero en este ejemplo guardo dentro del array el numero más pequeño y después que está indicado dentro del if del fori y una vez tenga el más pequeño lo guarde dentro del array.

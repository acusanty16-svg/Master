// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
console.log("---SOLUCIÓN EJERCICIO 21---")

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
  { name: "Arnulfo", years: -16 },
];
//decidí agregar otro nombre y un año que no exista para probar que el metodo que he hecho funciona

for (const item of users) {
    if(item.years>=18){
        console.log(item.name+" es mayor de edad")
    }else if(item.years>0){
        console.log(item.name+" es menor de edad")
    }else{
        console.log(item.name+" tiene edad invalida")
    }
}
console.log()
//Y, efectivamente hay tres opciones porque si introdujera un scanner las personas podrian meter la informacion que quisieran

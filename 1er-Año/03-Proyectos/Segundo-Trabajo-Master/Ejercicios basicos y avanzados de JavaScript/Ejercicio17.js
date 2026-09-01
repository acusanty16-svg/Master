// For...in: Usa un for...in para imprimir por consola los datos del alienígena.

// Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"
console.log("---SOLUCIÓN EJERCICIO 17---")

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};


for (const key in alien) {
    console.log("la propiedad "+key+" tiene como valor: "+alien[key])
}
console.log()

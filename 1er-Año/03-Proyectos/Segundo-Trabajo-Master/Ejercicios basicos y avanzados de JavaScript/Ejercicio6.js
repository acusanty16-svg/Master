// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo
// cuando el resto del numero dividido entre 2 sea 0.

// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
// y cambia el mensaje en la décima vuelta a '¡Dormido!'.

console.log("---1ER PUNTO EJERCICIO 6---")
for(let i=0; i < 10; i++){
    console.log("numero: "+i)
}
console.log()
console.log("---2DO PUNTO EJERCICIO 6---")
for(let i=0; i < 10; i++){
    if(i%2===0){
    console.log("numero: "+i)
    }
}
console.log()
//El segundo punto no lo entendi muy bien, así opté por poner un modulo que me verifique los numeros pares que serían las divisiones y seguidamente poner con un console.log los numeros divididos 
console.log("---3ER PUNTO EJERCICIO 6---")
for(let i=0; i < 11; i++){
    if(i==10){
        console.log("¡Dormido!")
    }else{
    console.log("Intentando dormir 🐑")
    }
}
//Aquí opté por poner un else al final del if, pero si no lo ponia tampoco pasaba nada porque ya tendria implicita la variable que queria poner dentro del bucle



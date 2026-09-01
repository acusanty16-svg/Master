// Desarrolla una función que reciba un país por parámetro y devuelva su capital.

// Utiliza un objeto para almacenar los países y sus capitales.

// La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.

console.log("---SOLUCIÓN EJERCICIO 33---");

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

//Hice el mismo cambio que en el anterior ejercicio porque debo acostumbrarme a las arrow 
const getCapital = (country) => {
  const capital = capitals[country]
  if(capital){
     console.log("La capital de "+country+" es: "+capital)
  }else{
     console.log("la capital no existe")
  }
}
//Sin embargo, este ejercicio era un poco diferente, porque dentro de la funcion debia declarar que es una capital, y seguidamente preguntar si la capital está dentro del pais introducido, y si es así lo imprime, en caso contrario la capital no existe y no esta registrada en el sistema
getCapital("Spain")
getCapital("Colombia")




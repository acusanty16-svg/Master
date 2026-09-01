const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {
    let palabraMasLarga="";
    for (const palabra of stringList) {
        if(palabra.length> palabraMasLarga.length){
      palabraMasLarga=palabra
        }else if(palabra.length===palabraMasLarga.length){
          console.log(palabra+" es igual a "+palabraMasLarga)
        }  
    }
    console.log(palabraMasLarga)
}

findLongestWord(avengers)

//Lo mismo pasa en este ejercicio, como lo has hecho en clase, sería redundante poner más explicaciones
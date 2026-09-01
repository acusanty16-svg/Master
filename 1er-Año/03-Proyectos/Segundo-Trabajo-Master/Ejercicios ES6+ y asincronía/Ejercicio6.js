console.log("---SOLUCIÓN EJERCICIO 6---");
console.log("Solución 6.1");

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const sumaNotas = exams.reduce(
  (accumulador, examenes) => accumulador + examenes.score,
  0,
);
console.log("La sumatoria de todas las notas son: " + sumaNotas);
//aqui he usado el reduce poniendo tres parametros, el acumulador las notas de los examenes y le he dicho que tiene que empezar a sumar en cero

console.log("Solución 6.2");
const sumarAprobados = exams.reduce((acumulador, examen) => {
  if (examen.score >= 5) {
    return acumulador + examen.score;
  }
  return acumulador;
}, 0);
console.log("La sumatoria de los estudiantes aprobados es: " + sumarAprobados);
//Aqui la unica diferencia ha estado en la condicion if que he puesto dentro de la funcion sumarAprobados

console.log("Solución 6.3");
const media = sumaNotas / exams.length;
console.log(media);
//creo que esta es la forma mas sencilla de hacer este punto, simplemente tomo la funcion que habia hecho con anterioridad y la divido entre un .length y listo, pero si se quisiese hacer de una manera un poco mas atrevida, se podria pensar asi:

const mediaReduce = exams.reduce(
  (acumulador, examen) => {
    return {
      suma: acumulador.suma + examen.score,
      cantidad: acumulador.cantidad + 1,
    };
  },
  { suma: 0, cantidad: 0 },
);
const media2 = mediaReduce.suma / mediaReduce.cantidad;
console.log(media2);
//Y esta es la segunda forma un poco mas enrevesada, porque es necesario definir las variables y casi hacer un mapeo para poder implementar el reduce, pero funciona igualmente

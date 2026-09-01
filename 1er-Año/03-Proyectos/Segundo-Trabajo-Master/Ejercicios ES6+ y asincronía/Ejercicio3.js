console.log("---SOLUCIÓN EJERCICIO 3---");
console.log("Solución 3.1");
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const nameUsers = users.map((users) => users.name);
console.log(nameUsers);
//simplemente uso el map para quitar el id de users

console.log("Solución 3.2");
const users1 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const changeAForAnacleto = users1.map((user) => {
  if (user.name.startsWith("A")) {
    return "Anacleto";
  }
  return user.name;
});
console.log(changeAForAnacleto);
//Este si es un poco mas complicado, porque aqui tengo que hacer una funcion donde ponga que si el nombre empieza con A pues cambie la accion, y se podria hacer con startsWith o con un chartArt(0) === "A"

console.log("Solución 3.3");
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
const isVisited = cities.map((ciudad) => {
  if (ciudad.isVisited) {
    return "Ya he visitado " + ciudad.name;
  } else {
    return "No he visitado " + ciudad.name;
  }
});
console.log(isVisited);

//Y en este ejercicio me hice una funcion que devuelve dependiendo el caso si la ciudad ya esta visitada o no

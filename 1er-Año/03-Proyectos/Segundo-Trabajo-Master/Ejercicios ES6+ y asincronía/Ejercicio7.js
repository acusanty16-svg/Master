console.log("---SOLUCIÓN EJERCICIO 7---");
const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhalla", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The Last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  { name: "Legend of Zelda: Breath of the wild", genders: ["RPG"], score: 10 },
];
const todasLasFunciones = videogames
  .filter((videogames) => videogames.genders.includes("RPG"))
  .reduce(
    (acumulador, videogame) => {
      return {
        suma: acumulador.suma + videogame.score,
        cantidad: acumulador.cantidad + 1,
      };
    },
    { suma: 0, cantidad: 0 },
  );
const media = todasLasFunciones.suma / todasLasFunciones.cantidad;
console.log(media);

console.log("---SOLUCIÓN EJERCICIO 5---");

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const input = document.querySelector(".buscador");
input.addEventListener("input", (e) => {
  const texto = e.target.value.toLowerCase();
  const filtrados = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(texto),
  );
  console.log(filtrados);
});
//con el html cambiado simplemente he seleccionado el .buscador y le he puesto el evento: "input" y lo mas inteligente seria poder poner todas las letras en miniscula para que igual el buscador si esta en mayus detecta las letras y busque a los streamers

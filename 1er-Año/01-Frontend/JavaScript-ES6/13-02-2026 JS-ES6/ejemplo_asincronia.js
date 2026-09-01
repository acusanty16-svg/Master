const promesa = new Promise((resolve, reject) => {
  const todoBien = true;

  if (todoBien) {
    resolve("Hemos conseguido resolver la promesa");
  } else {
    reject("Promesa rechazada");
  }
});

promesa
  .then((valor) => {
    console.log("OK: ", valor);
  })
  .catch((error) => {
    console.log("No: ", error);
  });

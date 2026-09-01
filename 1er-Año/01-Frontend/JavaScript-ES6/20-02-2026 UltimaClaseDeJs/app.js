/*const getWeather = () => {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=011f0f1c5b7a41b584594609261303&q=London&aqi=no",
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};*/

const getWeather = async (city) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=011f0f1c5b7a41b584594609261303&q=${city}&aqi=no`,
  );
  const data = await res.json();
  const weatherData = {
    ciudad: data.location.name,
    pais: data.location.country,
    temp: data.current.temp_c,
    icono: data.current.condition.icon,
    humedad: data.current.humidity,
    sensacion: data.current.windchill_c,
  };
  renderWeather(weatherData);
};

const renderWeather = (data) => {
  document.querySelector("main").innerHTML = `
    <h2>${data.ciudad} - ${data.pais}</h2>
    <h3>${data.temp}º</h3>
    <img src="${data.icono}" alt="Representación visual del tiempo">
    <div>
    <p>🌡️${data.sensacion}</p>
    <p>💧${data.humedad}%</p>
  </div>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  navigator.geolocation.getCurrentPosition((pos) => {
    const coord = `${pos.coords.latitude},${pos.coords.longitude}`;
    if (coord) {
      getWeather(coord);
    } else {
      getWeather("Aruba");
    }
  });
});

document.querySelector("#searchBtn").addEventListener("click", () => {
  const valorCiudad = document.querySelector("#city").value;
  getWeather(valorCiudad);
  document.querySelector("#city").value = "";
});

document.querySelector("#city").addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    const valorCiudad = document.querySelector("#city").value;
    getWeather(valorCiudad);
    document.querySelector("#city").value = "";
  }
});

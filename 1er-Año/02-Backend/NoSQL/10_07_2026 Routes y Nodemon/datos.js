const usuario = {
    nombre: "Pepito",
    apellido: "Pérez",
    edad: 29,
    correo: "pepito@perez.com",
    numerosFavoritos: [1,7,45,65],
    profesion: "Guardabosques",
    ciudad: "Madrid"
}

const bandas = ["Miss May I", "Saidan", "Dissection", "Cairiss", "Normandie", "Messa", "Stevie Ray Vaughan"];

const template = `
<html>
    <head>
        <meta charset = "utf-8"/>
    </head>
    <body>
        <style>
            *{
            margin: 0;
            padding: 0;
            box-sizing:border-box;
        }
        body{
            min-height: 100vh;
            background-color: black;
            color:orange;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            font-family: "Arial", sans-serif;
        }
        </style>
        <h1>Bienvenidos a mis servidor html</h1>
        <p>Esto incluye maquetación</p>
    </body>
</html>

`

module.exports = {usuario, bandas, template}

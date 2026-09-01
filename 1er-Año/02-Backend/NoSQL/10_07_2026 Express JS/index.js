const express = require("express");

const server = express();

// GET
//POST
//PUT
//DELETE

server.get("/", (req,res)=>{
    res.send("Hola esto es un servidor")
})

server.get("/hola", (req,res)=>{
    res.send("Bienvenidos a mi servidor")
})

server.get("/frutas", (req,res)=>{
    res.json(["Naranja","Platano","Sandia","Tomate"])
})

server.get("/edad/:age", (req, res)=>{

    if (req.params.age >= 18){
        return res.json({
            info: "Puedes pasar a la discoteca",
            url: req.url,
            age: req.params.age,
        })
    }else if(req.params.age >= 0 && req.params.age <= 17){
        return res.json({
            info: "No Puedes pasar a la discoteca",
            url: req.url,
            age: req.params.age,
        })
    }
    else{
        return res.json({
            info: "Tienes que poner un numero",
            url: req.url,
            age: req.params.age,
        })
    }

})

server.get("/ppt/:eleccion", (req, res)=>{
        const opciones = ["piedra", "papel", "tijera"];

        const cpu = opciones[Math.floor(Math.random() * opciones.length)];

        const jugador = req.params.eleccion;

        if(jugador === "piedra" && cpu === "tijera"){
            return res.json({
                jugador: jugador,
                cpu: cpu,
                resultado: "Gana jugador"
            })
        }else if( jugador === "tijera" && cpu === "papel"){
            return res.json({
                jugador: jugador,
                cpu: cpu,
                resultado: "Gana jugador"
            })
        }else if(jugador === "papel" && cpu === "piedra"){
            return res.json({
                jugador: jugador,
                cpu: cpu,
                resultado: "Gana jugador"
            })
        }else if (jugador === cpu){
            return res.json({
                jugador: jugador,
                cpu: cpu,
                resultado: "Empate"
            })
        }else{
            return res.json({
                jugador: jugador,
                cpu: cpu,
                resultado: "Gana CPU"
            })
        }
    })


server.listen(8080, ()=>{
    console.log("Servidor levantado en http://localhost:8080")
})
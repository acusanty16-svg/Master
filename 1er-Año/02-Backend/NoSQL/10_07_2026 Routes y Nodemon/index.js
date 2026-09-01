const http = require("http")
const {usuario, bandas, template} = require("./datos")

const server = http.createServer((req, res)=>{
    
    /*res.setHeader("Content-Type", "text/plain");
    if(req.url === "/"){
        res.statusCode = 200;
        res.end("Bienvenidos a mi servidor")
    }else if(req.url === "/contacto"){
        res.statusCode = 200;
        res.end("Contactame en hola@hola.com")
    }else{
        res.statusCode = 404;
        res.end("Ruta no encontrada")
    }*/
    if(req.url === "/"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end (template)
    }else if(req.url === "/bandas"){
        res.setHeader("Content-Type","application/json")
        res.statusCode = 200
        res.end(JSON.stringify(bandas))
    }else if(req.url === "/usuario"){
        res.setHeader("Content-Type","application/json")
        res.statusCode = 200
        res.end(JSON.stringify(usuario))
    }else{
        res.setHeader("Content-Type","text/plain")
        res.statusCode = 404;
        res.end("Ruta no encontrada")
    }
})

server.listen(8080, ()=>{
    console.log("Servidor levantado correctamente en http://localhost:8080")
})
//Importamos el modulo http
const http = require("http")

//Creamos un servidor http
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plan')
    res.end("Ya es viernes")

})

//Levantamos el servidor
server.listen(8080, ()=>{
    console.log("Servidor levantado en http://localhost:8080")
})
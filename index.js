const { conexion } = require("./basedatos/conexion");
const express = require("express");
const cors = require("cors");

//1. Inicializar app
console.log('Hello there, app de node');

//2. Conectar a la base de datos
conexion();

//3. Crear servidor de Node, mediante expressJs
const app = express();
const puerto = 3900;

//4. Configurar cors
app.use(cors());

//5. Convertir body a objeto js
app.use(express.json());

//7. Crear rutas
app.get("/probando", (req, res) => {
    console.log('Ejecucion de consola')
    return res.status(200).send(`
        <div>
            <h1> Probando ruta NodeJs </h1>
            <p> Creando api resto con node </p>
        </div>
    `);
});

//6. Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor ejecutandose en el puerto " +puerto);
});
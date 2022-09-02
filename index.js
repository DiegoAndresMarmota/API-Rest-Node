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
app.use(express.json()); //Para recibir datos con content-type app/json
app.use(express.urlencoded({ extended: true })); //recibiendo datos por form-urlencoded

//7.B Crear rutas
const rutas_articulo = require("./rutas/ArticuloRuta");

//Cargo de las rutas
app.use("/api", rutas_articulo);

//7.A Rutas pruebas iniciales
app.get("/probando", (req, res) => {

    console.log('Ejecucion de consola')

    return res.status(200).json([{
        nombre: "Estrella",
        raza: "Felina",
        habilidad: "Daño elemental +10",
    },
    {   nombre: "Luz",
        raza: "Felina",
        habilidad: "Daño de fuego +15",
        },
    ]);
});

app.get("/", (req, res) => {

    return res.status(200).send(
        "<h1>Empezando a crear una api</h1>"
    );
});

//6. Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor ejecutandose en el puerto " + puerto);
});
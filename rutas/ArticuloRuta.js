const express = require("express");
const router = express.Router();

const ArticuloControlador = require("../controladores/ArticuloControl");

//Rutas de pruebas
router.get("/ruta-de-prueba", ArticuloControlador.prueba);
router.get("/curso", ArticuloControlador.prueba);

//Ruta útil
router.post("/crear", ArticuloControlador.crear);


module.exports = router;
const res = require("express/lib/response");

const prueba = (req, res) => {

    return res.status(200).json({
        mensaje: "Acción ejecutada"
    });
}

const curso = (req, res) => {

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
};

const crear = ( req, res ) => {

    //1.Recoger parametros por post a guardar
    let parametros = req.body;
    
    //2.Validar datos

    //3.Crear el objeto a guardar

    //4.Asignar valores a objeto(manual o auto)

    //5.Guardar el articulo en la base de datos

    //6.Devolver resultado

    return res.status(200).json({
        mensaje: "Guardar",
        parametros
    })
}

module.exports = {
    prueba,
    curso,
    crear
}
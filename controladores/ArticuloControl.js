
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

module.exports = {
    prueba,
    curso
}
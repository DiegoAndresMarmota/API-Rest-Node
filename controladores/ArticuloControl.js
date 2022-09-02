const prueba = (req, res) => {
    return res.status(200).json({
        mensaje: "Acción ejecutada"
    });
    }

module.exports = {
    prueba
}
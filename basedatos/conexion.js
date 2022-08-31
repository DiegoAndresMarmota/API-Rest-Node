const mongoose = require("mongoose");

const conexion = async () => {
    
    try {

        await mongoose.connect("mongodb://0.0.0.0:27017/mi_blog");

        //paramentros dentro del objeto, en caso de aviso
        //useNewUrlParser:true
        //useUnifiedTopology:true
        //useCreateIndex:true

        console.log("Conectado satisfactoriamente a la base de datos mi_blog");

    } catch(error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos");
    }
}

module.exports = {
    conexion
}
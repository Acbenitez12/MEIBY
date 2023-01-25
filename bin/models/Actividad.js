const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadSchema = new Schema({
    tipos_de_actividades: [
      {
        0: String,
        1: String,
        2: String,
        3: String
      }
    ]
  });
var Actividad = mongoose.model("Actividad", ActividadSchema);
module.exports =  Actividad;
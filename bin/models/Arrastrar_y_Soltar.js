const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Arrastrar_y_SoltarSchema = new Schema({
    respuestas : String,

})
var Arrastrar_y_Soltar = mongoose.model("Arrastrar_y_Soltar", Arrastrar_y_SoltarSchema);
module.exports =  Arrastrar_y_Soltar;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CrucigramaSchema = new Schema({
    enunciado: String,
    cuadro: String,
})
var Crucigrama = mongoose.model("Crucigrama", CrucigramaSchema);
module.exports =  Crucigrama;
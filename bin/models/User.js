const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombre: String,
    correo: String,
    contraseña: String
})
var User = mongoose.model("User", UserSchema);
module.exports =  User;
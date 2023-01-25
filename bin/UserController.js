const mongoose = require("mongoose");
const  User  = require("./models/User");

class UserController{

    constructor(){
        this.connect();
    }

    async connect(){
       try {
         await mongoose.connect(
                    "mongodb+srv://ochoap949gmailcom:Ejf5bneCURZNTMZc@cluster0.k32awte.mongodb.net/meiby?retryWrites=true&w=majority",
                    { useNewUrlParser: true }
                );
            console.log("Connected databases.");
        } catch (e) {
            console.error(e);
        }
    }

     setUser(usuario, res) {
        User.create(usuario, function(err, newUser) {
            if (err) throw err;
            res.send({ status: 200, nU: newUser });
        });
    }

    getUsuarios(req, res) {
        User.find({}, (err, usuario) => {
            if (err) throw err;
            res.send({ Todos_los_usuarios: usuario });
        });
    }

    getUser(id, res) {
        User.find({ _id: id }, (err, usuario) => {
            if (err) throw err;
            res.send({ User: usuario });
        });
    }

    updateUser(user, res) {

        let { id, correo, contraseña } = usuario;

        User.updateOne(
            { _id: id },
            { $set: { correo: correo, contraseña: contraseña } }
        )
            .then(rawResponse => {
                res.send({ message: "Usuario Actualizado", raw: rawResponse });
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    deleteUser(id, res) {
        User.deleteOne({ _id: id }, function(err) {
            if (err) throw err;
            res.send({ message: "El Usuario  ha sido eliminado" });
        });
    } 

}
exports.user_controller = new UserController();
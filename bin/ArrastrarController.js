const mongoose = require("mongoose");
const  Arrastrar_y_Soltar  = require("./models/Arrastrar_y_Soltar");

class ArrastrarController{

    constructor(){
        this.connect();
    }

    async connect(){
       try {
         await mongoose.connect(
                    "mongodb+srv://ochoap949gmailcom:Ejf5bneCURZNTMZc@cluster0.k32awte.mongodb.net/meiby?retryWrites=true&w=majority",
                    { useNewUrlParser: true }
                );
        } catch (e) {
            console.error(e);
        }
    }

     setArrastrar_y_Soltar (arrastrar, res) {
        Arrastrar_y_Soltar.create(arrastrar, function(err, newArrastrar_y_Soltar) {
            if (err) throw err;
            res.send({ status: 200, nU: newArrastrar_y_Soltar });
        });
    }

    getArrastrarySoltar (req, res) {
        Arrastrar_y_Soltar.find({}, (err, arrastrar) => {
            if (err) throw err;
            res.send({ respuestas : arrastrar });
        });
    }

    getArrastrar_y_Soltar (id, res) {
        Arrastrar_y_Soltar.find({ _id: id }, (err, arrastrar) => {
            if (err) throw err;
            res.send({ Arrastrar_y_Soltar : arrastrar });
        });
    }

    updateArrastrar_y_Soltar(arrastrar, res) {
        let { id, respuestas } = arrastrar;
        Arrastrar_y_Soltar.updateOne(
            { _id: id },
            { $set: { respuestas : respuestas } }
        )
            .then(rawResponse => {
                res.send({ message: "Respuesta Actualizada", raw: rawResponse });
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    deleteArrastrar_y_Soltar (id, res) {
        Arrastrar_y_Soltar.deleteOne({ _id: id }, function(err) {
            if (err) throw err;
            res.send({ message: "la respuesta ha sido eliminado" });
        });
    } 

}
exports.arrastrar_controller = new ArrastrarController();
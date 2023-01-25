const mongoose = require("mongoose");
const  Crucigrama  = require("./models/Crucigrama");

class CrucigramaController{

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

     setCrucigrama(crucigrama, res) {
        Crucigrama.create(crucigrama, function(err, newCrucigrama) {
            if (err) throw err;
            res.send({ status: 200, nU: newCrucigrama });
        });
    }

    getCrucigramas (req, res) {
        Crucigrama.find({}, (err, crucigrama) => {
            if (err) throw err;
            res.send({ Estructura : crucigrama });
        });
    }

    getCrucigrama(id, res) {
        Crucigrama.find({ _id: id }, (err, crucigrama) => {
            if (err) throw err;
            res.send({ Crucigrama: crucigrama });
        });
    }

    updateCrucigrama (crucigrama, res) {

        let { id, cuadro, enunciado } = crucigrama;

        Crucigrama.updateOne(
            { _id: id },
            { $set: { cuadro: cuadro, enunciado: enunciado } }
        )
            .then(rawResponse => {
                res.send({ message: "Crucigrama Actualizado", raw: rawResponse });
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    deleteCrucigrama(id, res) {
        Crucigrama.deleteOne({ _id: id }, function(err) {
            if (err) throw err;
            res.send({ message: "El crucigrama ha sido eliminado" });
        });
    } 

}
exports.crucigrama_controller = new CrucigramaController();
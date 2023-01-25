const mongoose = require("mongoose");
const  Evaluacion  = require("./models/Evaluacion");

class EvaluacionController{

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

     setEvaluacion (evaluacion, res) {
        Evaluacion.create(evaluacion, function(err, newEvaluacion) {
            if (err) throw err;
            res.send({ status: 200, nU: newEvaluacion });
        });
    }

    getEvaluaciones (req, res) {
        Evaluacion.find({}, (err, evaluacion) => {
            if (err) throw err;
            res.send({ calificacion : evaluacion });
        });
    }

    getEvaluacion (id, res) {
        Evaluacion.find({ _id: id }, (err, evaluacion) => {
            if (err) throw err;
            res.send({ Evaluacion: evaluacion });
        });
    }

    updateEvaluacion(evaluacion, res) {

        let { id, calificación } = evaluacion;

        Evaluacion.updateOne(
            { _id: id },
            { $set: { calificacion : calificacion } }
        )
            .then(rawResponse => {
                res.send({ message: "calificación Actualizada", raw: rawResponse });
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    deleteEvaluacion (id, res) {
        Evaluacion.deleteOne({ _id: id }, function(err) {
            if (err) throw err;
            res.send({ message: "La calificación ha sido eliminado" });
        });
    } 

}
exports.evaluacion_controller = new EvaluacionController();
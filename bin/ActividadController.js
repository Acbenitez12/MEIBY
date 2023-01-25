const mongoose = require("mongoose");
const  Actividad  = require("./models/Actividad");

class ActividadController{

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

     setActividad (actividad, res) {
        Actividad.create(actividad, function(err, newActividad) {
            if (err) throw err;
            res.send({ status: 200, nU: newActividad });
        });
    }

    getActividades (req, res) {
        Actividad.find({}, (err, actividad) => {
            if (err) throw err;
            res.send({ tipos_de_actividades: actividad });
        });
    }

    getActividad(id, res) {
        Actividad.find({ _id: id }, (err, actividad) => {
            if (err) throw err;
            res.send({ Actividad: actividad });
        });
    }

    updateActividad (actividad, res) {
        let {  } = actividad;
        Actividad.updateOne(
            { _id: id },
            { $set: {  } }
        )
            .then(rawResponse => {
                res.send({ message: "actividad Actualizada", raw: rawResponse });
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    deleteUser(id, res) {
        Actividad.deleteOne({ _id: id }, function(err) {
            if (err) throw err;
            res.send({ message: "la actividad ha sido eliminado" });
        });
    } 

}
exports.actividad_controller = new ActividadController();
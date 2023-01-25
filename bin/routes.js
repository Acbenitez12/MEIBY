const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

//Rutas de Usuario 

const { user_controller } =
    require("./UserController");

app.post("/usuarios", function(req, res) {
    let { usuario } = req.body;
    user_controller.setUser(usuario, res);
});

app.get("/usuarios", (req, res) => {
    user_controller.getUsuarios(req, res);
});

app.get("/usuarios/:id", function(req, res) {
    let { id } = req.params;
    user_controller.getUser(id, res);
});

app.put("/usuarios/:id", function(req, res) {
    let usuario = req.body.usuario;
    usuario.id = req.params.id;
    user_controller.updateUser(usuario, res);
});

app.delete("/usuarios/:id", function(req, res) {
    let { id } = req.params;
    user_controller.deleteUser(id, res);
});

//Rutas de Actividades

const { actividad_controller } =
    require("./ActividadController");

app.post("/Actividades", function(req, res) {
    let { actividad } = req.body;
    actividad_controller.setActividad (actividad, res);
});

app.get("/Actividades", (req, res) => {
    actividad_controller.getActividades (req, res);
});

app.get("/Actividades/:id", function(req, res) {
    let { id } = req.params;
    actividad_controller.getActividad(id, res);
});

app.put("/Actividades/:id", function(req, res) {
    let actividad = req.body.actividad;
    actividad.id = req.params.id;
    actividad_controller.updateActividad(actividad, res);
});

app.delete("/Actividades/:id", function(req, res) {
    let { id } = req.params;
    actividad_controller.deleteActividad (id, res);
});

//Rutas de Arrastrar_y_Soltar

const { arrastrar_controller } =
    require("./ArrastrarController");

app.post("/Arrastrar_y_Soltar", function(req, res) {
    let { arrastrar } = req.body;
    arrastrar_controller.setArrastrar_y_Soltar(arrastrar, res);
});

app.get("/Arrastrar_y_Soltar", (req, res) => {
    arrastrar_controller.getArrastrarySoltar (req, res);
});

app.get("/Arrastrar_y_Soltar/:id", function(req, res) {
    let { id } = req.params;
    arrastrar_controller.getArrastrar_y_Soltar(id, res);
});

app.put("/Arrastrar_y_Soltar/:id", function(req, res) {
    let arrastrar = req.body.arrastrar;
    arrastrar.id = req.params.id;
    arrastrar_controller.updateArrastrar_y_Soltar(arrastrar, res);
});

app.delete("/Arrastrar_y_Soltar/:id", function(req, res) {
    let { id } = req.params;
    arrastrar_controller.deleteArrastrar_y_Soltar (id, res);
});

//Rutas de Crucigrama

const { crucigrama_controller } =
    require("./CrucigramaController");

app.post("/Crucigrama", function(req, res) {
    let { arrastrar } = req.body;
    crucigrama_controller.setCrucigrama (evaluacion, res);
});

app.get("/Crucigrama", (req, res) => {
    crucigrama_controller.getCrucigramas (req, res);
});

app.get("/Crucigrama/:id", function(req, res) {
    let { id } = req.params;
    crucigrama_controller.getCrucigrama(id, res);
});

app.put("/Crucigrama/:id", function(req, res) {
    let arrastrar = req.body.arrastrar;
    arrastrar.id = req.params.id;
    crucigrama_controller.updateCrucigrama(arrastrar, res);
});

app.delete("/Crucigrama/:id", function(req, res) {
    let { id } = req.params;
    crucigrama_controller.deleteCrucigrama (id, res);
});

//Rutas de Evaluacion 

const { evaluacion_controller } =
    require("./EvaluacionController");

app.post("/evaluacion", function(req, res) {
    let { evaluacion } = req.body;
    evaluacion_controller.setEvaluacion(evaluacion, res);
});

app.get("/evaluacion", (req, res) => {
    evaluacion_controller.getEvaluaciones (req, res);
});

app.get("/evaluacion/:id", function(req, res) {
    let { id } = req.params;
    evaluacion_controller.getEvaluacion (id, res);
});

app.put("/evaluacion/:id", function(req, res) {
    let evaluacion = req.body.evaluacion;
    evaluacion.id = req.params.id;
    evaluacion_controller.updateEvaluacion (evaluacion, res);
});

app.delete("/evaluacion/:id", function(req, res) {
    let { id } = req.params;
    evaluacion_controller.deleteEvaluacion (id, res);
});

exports.app = app 
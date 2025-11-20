var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/preferencias", function (req, res) {
    medidaController.buscarPreferencia(req, res);
});

router.post("/kpis", function (req, res) {
    medidaController.buscarKpis(req, res);
});

router.post("/tentativas", function (req, res) {
    medidaController.buscarTentativas(req, res);
});

router.post("/ranking", function (req, res) {
    medidaController.rankear(req, res);
});

module.exports = router;
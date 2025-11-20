var medidaModel = require("../models/medidaModel");

function buscarPreferencia(req, res) {

    medidaModel.buscarPreferencia().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as preferências.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTentativas(req, res) {
    var id = req.body.idServer;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

    medidaModel.buscarTentativas(id)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as KPI's.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
    }
}


function buscarKpis(req, res) {
    var id = req.body.idServer;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

    medidaModel.buscarKpis(id)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as KPI's.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
    }
}


function rankear(req, res) {

    medidaModel.rankear()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as KPI's.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
    }

module.exports = {
    buscarPreferencia,
    buscarKpis,
    buscarTentativas,
    rankear
}
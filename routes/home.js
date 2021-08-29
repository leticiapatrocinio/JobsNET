const express = require("express")
const router = express.Router()


//const mongoose = require("mongoose")
// require("../models/Cadastro")
// const Cadastro = mongoose.models('cadastro')

router.get('/', (req, res) => {
    res.render("home/index")
    //res.send("Página principal de cadastro")
})

router.get('/fim', (req, res) => {
    res.render("home/final")
    //res.send("Página de encerramento")
})

// router.post('/cadastro', (req, res) => {
//     const novoCadastro = {
//         nome: req.body.nome,
//         cargo: req.body.cargo
//     }

//     new Cadastro(novoCadastro).save().then(() => {
//         console.log("Cadastro salvo com sucesso")
//     }).catch((err) => {
//         console.log("Erro ao salvar catgoria")
//     })
// })

module.exports = router
const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Candidato")
const Candidato = mongoose.model('candidato')

router.get('/register', (req, res) => {
    console.log("pegou")
})
router.post ('/register', (req, res)=> {
        console.log("funfou") 
        const novoCandidato = {
        nome: req.body.nome,
        cargo: req.body.cargo,
        data: req.body.data,
        estado: req.body.estado,
        genero: req.body.genero,
        endereco: req.body.endereco,
        cep: req.body.cep,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        uf: req.body.uf,
        fixo1: req.body.fixo1,
        fixo2: req.body.fixo2,
        celular: req.body.celular,
        contato: req.body.contato,
        email: req.body.email,
        rg: req.body.rg,
        cpf: req.body.cpf,
        veiculo: req.body.veiculo,
        habilitacao: req.body.habilitacao
    }
    new Candidato(novoCandidato).save().then(() =>{
        console.log("Candidato salvo")
    }).catch((err) => {
        console.log("Erro ao salvar candidato"+err)
    })

})

router.get('/', (req, res) => {
    res.render("home/index")
})

router.get('/fim', (req, res) => {
    res.render("home/final")
})


module.exports = router


const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Candidato = new Schema({
    name: { type: String, unique: false, required: true},
    cargo: { type: String, unique: false, required: false},
    data: { type: Date, unique: false, required: true},
    estado_civil: { type: String, unique: false, required: false},
    genero: { type: String, unique: false, required: false},
    endereco: { type: String, unique: false, required: true},
    cep: { type: String, unique: false, required: true},
    bairro: { type: String, unique: false, required: false},
    cidade: { type: String, unique: false, required: false},
    uf: { type: String, unique: false, required: false},
    fixo1: { type: String, unique: false, required: false},
    fixo2: { type: String, unique: false, required: false},
    celular: { type: String, unique: false, required: false},
    contato: { type: String, unique: false, required: false},
    email: { type: String, unique: false, required: false},
    rg: { type: String, unique: false, required: true},
    cpf: { type: String, unique: false, required: true},
    veiculo: { type: String, unique: false, required: false},
    habilitacao: { type: String, unique: false, required: false},
}, {
    timestamps:true
})


module.exports = mongoose.model('candidato', Candidato)
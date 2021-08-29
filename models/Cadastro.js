const mongoose = required("mongoose")
const Schema = mongoose.Schema

const Cadastro = new Schema({
    name: { type: String, unique: false, required: true},
    cargo: { type: String, unique: false, required: true}
}, {
    timestamps:true
})


module.exports = mongoose.model('cadastro', Cadastro)
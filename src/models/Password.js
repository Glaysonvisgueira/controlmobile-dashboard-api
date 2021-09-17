const mongoose = require('mongoose');  

const PasswordSchema = new mongoose.Schema({   
    sigla_dep: { type: String, uppercase: true, required: true, unique: true }, 
    responsavel :  { type: String, required: true}, 
    senha: { type: String, required: true},    
    numeroRequisicao: { type: Number, required: true},       
}, {timestamps: true});

module.exports = mongoose.model('passwords', PasswordSchema);
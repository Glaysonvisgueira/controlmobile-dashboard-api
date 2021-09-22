const mongoose = require('mongoose');  

const DashboardGprotminSchema = new mongoose.Schema({   
    sigla_dep: { type: String, uppercase:true, required: true, unique: true }, 
    cidade: { type: String, uppercase:true, required: true},
    uf: { type: String, uppercase:true, required: true },    
    gprotmin: {
        implantado: { type: Boolean, required: false},
        data_implantacao: {type: Date, required: false,  default: null },
        dados_dashboard: [{}],
        foto_url: {type: String},
        modalidade: { type: String, required: false},
        tipo: { type: String, required: false}
    },  
}, {timestamps: true});

module.exports = mongoose.model('gprotmins', DashboardGprotminSchema);

const mongoose = require('mongoose');  

const DashboardSchema = new mongoose.Schema({   
    sigla_dep: { type: String, uppercase:true, required: true, unique: true }, 
    cidade: { type: String, uppercase:true, required: true},
    uf: { type: String, uppercase:true, required: true },    
    controlmobile: {
        implantado: { type: Boolean, required: true},
        data_implantacao: {type: Date, required: false,  default: null },
        dados_dashboard: [{}],
        foto_url: {type: String},
    },    
}, {timestamps: true});

module.exports = mongoose.model('Dashboads', DashboardSchema);
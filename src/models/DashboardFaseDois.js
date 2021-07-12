const mongoose = require('mongoose');  

const DashboardFaseDoisSchema = new mongoose.Schema({   
    sigla_dep: { type: String, uppercase:true, required: true, unique: true }, 
    cidade: { type: String, uppercase:true, required: true},
    uf: { type: String, uppercase:true, required: true },   
    dados_dashboard: [{}] 
}, {timestamps: true});

module.exports = mongoose.model('dashboard_fase_dois', DashboardFaseDoisSchema);
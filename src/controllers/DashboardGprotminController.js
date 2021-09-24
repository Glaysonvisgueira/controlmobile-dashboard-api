const DashboardGprotmin = require('../models/DashboardGprotmin');

module.exports = {
    async index(request, response){
        const dashboards = await DashboardGprotmin.find().sort({"gprotmin.dados_dashboard": -1, "sigla_dep": 1});
        return response.json(dashboards);
    }
}


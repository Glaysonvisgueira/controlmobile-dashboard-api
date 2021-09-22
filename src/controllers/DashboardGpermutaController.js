const DashboardGpermuta = require('../models/DashboardGpermuta');

module.exports = {
    async index(request, response){
        const dashboards = await DashboardGpermuta.find().sort({"gpermuta.dados_dashboard": -1});
        return response.json(dashboards);
    }
}


const DashboardGprotmin = require('../models/DashboardGprotmin');

module.exports = {
    async index(request, response){
        const dashboards = await DashboardGprotmin.find().sort({"dados_dashboard": -1});
        return response.json(dashboards);
    }
}


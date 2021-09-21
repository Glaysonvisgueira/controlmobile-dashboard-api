const DashboardGprotmin = require('../models/DashboardGprotmin');

module.exports = {
    async index(request, response){
        const dashboards = await DashboardGprotmin.find(); 
        return response.json(dashboards);
    }
}


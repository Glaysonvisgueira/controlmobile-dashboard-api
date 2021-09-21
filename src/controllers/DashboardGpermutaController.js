const DashboardGpermuta = require('../models/DashboardGpermuta');

module.exports = {
    async index(request, response){
        const dashboards = await DashboardGpermuta.find(); 
        return response.json(dashboards);
    }
}


const DashboardFaseDois = require('../models/DashboardFaseDois');

module.exports = {
    async index(request, response){
        const dashboards = await DashboardFaseDois.find().sort({"dados_dashboard": -1}); 
        return response.json(dashboards);
    }, 
    
    async store(request, response){
        dashboard = await DashboardFaseDois.create({
            sigla_dep: "ZED",  
            cidade: "ZÉ DOCA",
            uf: "MA",  
            dados_dashboard: [
                    {
                      "name": "Realizado",
                      "value": 0,
                      "fill": '#43cc46'
                    },
                    {
                      "name": "Pendente",
                      "value": 100,
                      "fill": '#dbdbdb'
                    }
            ],
          })

          return response.json(dashboard);
    } 


    
}


const Dashboard = require('../models/Dashboard');
const axios = require('axios');

module.exports = {
    async index(request, response){
        const dashboards = await Dashboard.find(); //Definir a ordenação: ordem alfabética ou % concluída.
        return response.json(dashboards);
    }, 
    //"2021-06-25T18:06:27.398+00:00"
    async store(request, response){
        dashboard = await Dashboard.create({
            sigla_dep: "SRD",  
            cidade: "SÃO RAIMUNDO NONATO",
            uf: "MA",  
            controlmobile: {
                implantado: false,
                data_implantacao: null,
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
                foto_url: null
    }
          })

          return response.json(dashboard);
    }
}
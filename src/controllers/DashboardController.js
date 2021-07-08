const Dashboard = require('../models/Dashboard');

module.exports = {
    async index(request, response){
        const dashboards = await Dashboard.find().sort({"controlmobile.dados_dashboard": -1}); //Definir a ordenação: ordem alfabética ou % concluída.
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
    },

    async update(request, response){
      sigla_dep = request.params.sigla_dep; 
      newValue = request.body.value;

      const novoValorRealizado = await Dashboard.findByIdAndUpdate("60df0e7a69631d0cc8294fdc", { 
        "novoValorRealizado.controlmobile.dados_dashboard[0].value" : newValue
    }, {new: true});  


    }
}


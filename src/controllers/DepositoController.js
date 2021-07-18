const Deposito = require('../models/Deposito');

module.exports = {
    async index(request, response){
        const depositos = await Deposito.find().sort({ sigla_dep: 1 });
        return response.json(depositos);
    },
    async findDeposito(request, response){
        sigla_deposito = request.params.sigla_deposito;
        const deposito = await Deposito.findOne({
            sigla_dep: sigla_deposito            
        });

        if(!deposito){
            return response.json({"message":"Depósito não encontrado."})
        }

        return response.json(deposito);
    } 
}
const Password = require('../models/Password');

module.exports = {
     async index(request, response){
        const senhas = await Password.find().sort({ sigla_dep: 1 });
        return response.json(senhas);
    }, 
    async store(request, response){
        const dadosSenha = request.query;

        //request.query; para insomnia
        //request.body; para node.js

        dadosSenhaSalvo = await Password.create({
            "sigla_dep": "ZED",
            "responsavel": "GLAYSON",
            "senha": "123",
            "numeroRequisicao": 1	
          })

        return response.json(dadosSenhaSalvo);
    } 
}
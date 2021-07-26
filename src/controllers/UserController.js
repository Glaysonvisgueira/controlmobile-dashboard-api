const User = require('../models/User');

module.exports = {
    async index(request, response){
        const user = await User.find(); //Definir a ordenação: ordem alfabética ou % concluída.
        return response.json(user);
    }
}


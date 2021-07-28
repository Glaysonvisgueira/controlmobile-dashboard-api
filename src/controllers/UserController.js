const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = {
    
    async findUser(request, response){
        
        const { email, password, nome } = request.body.userData;
        const user = await User.findOne({email: email});

        if(user && user.password === password){            
            let userData = {
                id: user._id,
                email: user.email,
                nome: user.nome,
                sobrenome: user.sobrenome,
                isAdmin: user.isAdmin
            }
            let generatedToken = jwt.sign(userData, process.env.JWT_KEY, {expiresIn: '10m'});
            return response.json({                
                success: true,
                token: generatedToken,   
                userData             
            });
        }else{
            return response.json({message: "E-mail não cadastrado."});
        }
    },
     
    async verificarToken(request, response){
        let token = request.headers['authorization'].split(' ')[1];
        jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
            if(!err){
                response.json({
                    success:true,
                    message: 'Token é válido!'
                });
            }else{
                response.status(401).json({
                    success: false,
                    error: err
                })
            }
        })
    }
}


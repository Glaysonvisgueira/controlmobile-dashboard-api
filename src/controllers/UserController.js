const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = {
    
    async findUser(request, response){
        
        const { email, password } = request.body.userData;
        const user = await User.findOne({email: email});

        if(user && user.password === password){            
            let tokenData = {
                id: user._id,
                email: user.email
            }
            let generatedToken = jwt.sign(tokenData, process.env.JWT_KEY, {expiresIn: '1m'});
            response.json({                
                success: true,
                token: generatedToken
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


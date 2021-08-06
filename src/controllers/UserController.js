const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = {

    async login(request, response){
         
        const { email, password, nome } = request.body.userData;
        const user = await User.findOne({email: email}); 

        if (!user) {
            return response.status(404).send({
                message: 'E-mail não encontrado!'
            })
        }

        if (password != user.password) {
            return response.status(400).send({
                message: 'Senha incorreta!'
            })
        }
 
         if(user && user.password === password){            
             let userData = {
                 id: user._id,
                 nome: user.nome 
             }
             let generatedToken = jwt.sign(userData, process.env.JWT_KEY, {expiresIn: '10m'});
             return response.json({                
                 success: true,
                 token: generatedToken,   
                 userData             
             });
         }
     }
      

   /*  async login(request, response) {

        const { email, password } = request.body;
        const user = await User.findOne({ email: email });

        if (!user) {
            return response.status(404).send({
                message: 'E-mail não encontrado!'
            })
        }

        if (password != user.password) {
            return response.status(400).send({
                message: 'Senha incorreta!'
            })
        }

        const token = jwt.sign({ _id: user._id }, 'teste')

        response.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 600000 // 10 minutos
        })

        response.send({
            message: 'success'
        })
    } */,

    async user(request, response) {

        try {
            const cookie = request.cookies['jwt'];

            const claims = jwt.verify(cookie, process.env.JWT_KEY);

            if (!claims) {
                return response.status(401).send({
                    message: 'Não autenticado.'
                })
            };

            const user = await User.findOne({ _id: claims._id });
            const { password, ...data } = await user.toJSON();
            response.send(data);

        } catch (e) {
            return response.status(401).send({
                message: 'Não autenticado.'
            })
        }

    },
    async logout(request, response) {
        response.cookie('jwt', '', { maxAge: 0 });
        response.send({
            message: 'success'
        });
    }

    /* const user ={           
        email: email,
        password: password,
    }
    
    console.log(user) */

    /* const user = await User.findOne({email: email});

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
    } */



}

//https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81


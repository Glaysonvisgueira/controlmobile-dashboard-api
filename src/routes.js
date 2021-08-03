const { Router, response } = require('express');

const DashboardController = require('./controllers/DashboardController');
const DashboardFaseDoisController = require('./controllers/DashboardFaseDoisController');
const DepositoController = require('./controllers/DepositoController');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/dashboards/controlmobile', DashboardController.index);
routes.post('/dashboards/controlmobile', DashboardController.store);
routes.post('/update-dashboards/controlmobile/:sigla_dep', DashboardController.update);

routes.get('/dashboards/fasedois', DashboardFaseDoisController.index);
routes.post('/dashboards/fasedois', DashboardFaseDoisController.store);

routes.get('/depositos', DepositoController.index);
routes.get('/depositos/:sigla_deposito', DepositoController.findDeposito);



routes.post('/login', UserController.login);
routes.post('/logout', UserController.logout);
routes.get('/user', UserController.user);


/* const jwt = require('jsonwebtoken');

routes.post('/login', (req, res, next ) => {
    const { email, password } = req.body.userData;

    if(email === undefined || password === undefined){
        res.status(401).json({
            success: false,
            code: 'DD101_ERROR',
            message: 'Email ou senha inválidos'
        })
    }else{
        let tokenData = {
            id: 101
        }
        let generatedToken = jwt.sign(tokenData, 'somepass', {expiresIn: '1m'});
        res.json({
            success: true,
            token: generatedToken
        });
    };   
})
 */

module.exports = routes;
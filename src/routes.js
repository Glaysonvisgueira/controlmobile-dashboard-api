const { Router, response } = require('express');

const DashboardController = require('./controllers/DashboardController');
const DashboardFaseDoisController = require('./controllers/DashboardFaseDoisController');
const DepositoController = require('./controllers/DepositoController');
const UserController = require('./controllers/UserController');
const PasswordController = require('./controllers/PasswordController');
const DashboardGprotminController = require('./controllers/DashboardGprotminController');
const DashboardGpermutaController = require('./controllers/DashboardGpermutaController');

const routes = Router();

routes.get('/dashboards/controlmobile', DashboardController.index);
routes.post('/dashboards/controlmobile', DashboardController.store);
routes.post('/update-dashboards/controlmobile/:sigla_dep', DashboardController.update);

routes.get('/dashboards/fasedois', DashboardFaseDoisController.index);
routes.post('/dashboards/fasedois', DashboardFaseDoisController.store);
routes.get('/dashboards/gprotmin', DashboardGprotminController.index);
routes.get('/dashboards/gpermuta', DashboardGpermutaController.index);


routes.get('/depositos', DepositoController.index);
routes.get('/depositos/:sigla_deposito', DepositoController.findDeposito);



routes.post('/login', UserController.login);
routes.post('/logout', UserController.logout);
routes.get('/user', UserController.user);

routes.get('/senhas', PasswordController.index);
routes.post('/senhas/cadastrar', PasswordController.store);
routes.get('/senhas/:usuario', PasswordController.findSenhaResponsavel);


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
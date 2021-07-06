const { Router } = require('express');

const DashboardController = require('./controllers/DashboardController');

const routes = Router();

routes.get('/dashboards/controlmobile', DashboardController.index);
routes.post('/dashboards/controlmobile', DashboardController.store);

routes.post('/update-dashboards/controlmobile/:sigla_dep', DashboardController.update);


module.exports = routes;
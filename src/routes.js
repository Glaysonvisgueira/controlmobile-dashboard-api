const { Router } = require('express');

const DashboardController = require('./controllers/DashboardController');

const routes = Router();

routes.get('/dashboards/controlmobile', DashboardController.index);
routes.post('/dashboards/controlmobile', DashboardController.store);


module.exports = routes;
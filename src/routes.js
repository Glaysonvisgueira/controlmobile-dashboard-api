const { Router } = require('express');

const DashboardController = require('./controllers/DashboardController');
const DashboardFaseDoisController = require('./controllers/DashboardFaseDoisController');

const routes = Router();

routes.get('/dashboards/controlmobile', DashboardController.index);
routes.post('/dashboards/controlmobile', DashboardController.store);
routes.post('/update-dashboards/controlmobile/:sigla_dep', DashboardController.update);

routes.get('/dashboards/fasedois', DashboardFaseDoisController.index);
routes.post('/dashboards/fasedois', DashboardFaseDoisController.store);



module.exports = routes;
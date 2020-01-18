// HTTP METHOD: GET, POST, PUT, DELETE

// Tipos de parametros:
// Query Params (apenas no método GET): req.query (filtros, ordenação, paginação...)
// Route Params: request.params (PUT, DELETE | Identificar um recurso na alteração ou remoção)
// Body (POST, PUT | Dados para criação ou alteração de um registro):  

// MongoDB (Não-relacional)

const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs', DevController.update);
routes.delete('/devs', DevController.destroy);
routes.get('/search', SearchController.index);
module.exports = routes;
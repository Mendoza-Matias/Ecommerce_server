const express = require('express')
const routerViews = express.Router()

const controllerViews = require('../controllers/views.controller');

//Vista principal de la aplicacion
routerViews.get('/',controllerViews.principal);


//Vista principal de la aplicacion
routerViews.get('/product/one/:id',controllerViews.oneProduct);

module.exports = routerViews;
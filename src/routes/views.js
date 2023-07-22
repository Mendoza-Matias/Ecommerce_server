const express = require('express')
const routerViews = express.Router()
const validacion = require('../middleware/validarToken');
const controllerViews = require('../controllers/views');

//Vista principal de la aplicacion
routerViews.get('/',controllerViews.principal);


//Vista de registro
routerViews.get('/register',controllerViews.registro);

//Vista del admin
routerViews.get('/adminPanel',validacion,controllerViews.admin );

//Vista de crear productos ------------
routerViews.get('/crearProducto',validacion,controllerViews.crear);


//Vista para editar producto ---------------
routerViews.get('/editarProducto',validacion,controllerViews.editar);

module.exports = routerViews;
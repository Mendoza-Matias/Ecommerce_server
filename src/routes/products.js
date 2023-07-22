//Crud de productos 
const express = require('express');
const routerProducts = express.Router();
const multerConfig = require('../utils/multer');
const controllerProducts = require('../controllers/products');


// Crear un producto ------------

//Implemento Multer en mi midleware encargado de guardar mi informacion en la db
routerProducts.post('/create',multerConfig.single("imagen"),controllerProducts.crear);


//Editar producto ------------------------

routerProducts.put('/editarProducto/:id',multerConfig.single("imagen"),controllerProducts.editar);

//Eliminar producto

routerProducts.delete('/eliminar/:id',controllerProducts.eliminar);


module.exports = routerProducts;


//Crud de productos 
const express = require('express');
const routerProducts = express.Router();
const multerConfig = require('../utils/multer');
const controllerProducts = require('../controllers/products.controller');
const validacion = require('../middleware/validarToken');

//Ver todos los productos
routerProducts.get('/product/all',controllerProducts.principalProductos);

//Ver un solo producto
routerProducts.get('/product/one',controllerProducts.oneProduct);

//Vista del administrador -----------
routerProducts.get('/adminPanel',validacion,controllerProducts.admin);

//Vista de crear productos ------------
routerProducts.get('/crearProducto',validacion,controllerProducts.crear);


//Vista para editar producto ---------------
routerProducts.get('/editarProducto',validacion,controllerProducts.editar);


//Crear producto
//Implemento Multer en mi midleware encargado de guardar mi informacion en la db
routerProducts.post('/create',multerConfig.single("imagen"),controllerProducts.crearProducto);


//Editar producto ------------------------
routerProducts.put('/editarProducto/:id',multerConfig.single("imagen"),controllerProducts.editarProducto);

//Eliminar producto -----------
routerProducts.delete('/eliminar/:id',controllerProducts.eliminarProducto);


module.exports = routerProducts;


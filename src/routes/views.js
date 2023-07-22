const express = require('express')
const router = express.Router()
const middleware = require('../middleware/validarToken');
const Product = require('../models/productsModel');

//Vista principal de la aplicacion
const vistaPrincipal = router.get('/',async(req,res)=>{

    const todosLosProductos = await Product.find();

    try{
        res.status(200).json({productos:todosLosProductos})
    }catch(err){
        res.status(404).json(err)
    }
});



//Vista de registro
const registro = router.get('/register',async(req,res)=>{
    try{
        res.status().json({mensaje:"Registro de usuario"})
    }catch(err){
        res.status(404).json(err)
    }
});

//Vistas con protección
const panelDeAdministrador = router.get('/adminPanel',middleware.validarToken,middleware.panelAdministrador);
const vistaDeCreacion = router.get('/crearProducto',middleware.validarToken,middleware.crearProducto);
const vistaDeEdicion = router.get('/editarProducto',middleware.validarToken,middleware.editarProducto);

module.exports = {
    vistaPrincipal,
    registro,
    panelDeAdministrador,
    vistaDeCreacion,
    vistaDeEdicion
}
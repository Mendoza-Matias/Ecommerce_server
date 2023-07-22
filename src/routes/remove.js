const express = require('express');
const eliminarProducto = express.Router();
const Product = require('../models/productsModel');

eliminarProducto.delete('/eliminarProducto/:id',async(req,res)=>{
    try {

        //Le paso como parametro el id que viene en el request y que tiene que eliminar.
        await Product.findByIdAndRemove(req.params['id'],req.body);
        
        res.status(200).json({mensaje:'Eliminado correctamente'});

    } catch (error) {
        res.status(404).json({mensaje:'No se encuentra el producto para eliminar'})
    }
})


module.exports = eliminarProducto;
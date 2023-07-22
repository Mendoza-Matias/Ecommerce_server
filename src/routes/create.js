const express = require('express');
const crearProducto = express.Router();
const multer = require('multer');
const Product = require('../models/productsModel');


//Implementado multer (Diciendo donde quiero guardar mis archivos)

const guardarImagen = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./src/uploads")
    },
    //NOmbre de mi archivo
    filename:(req,file,cb)=>{
        cb(null,Date.now() + '-' + file.originalname);
    }
});

const uploads = multer ({storage:guardarImagen});

//Implemento Multer en mi midleware encargado de guardar mi informacion en la db
crearProducto.post('/create',uploads.single("imagen"),async(req,res)=>{
    
    //Guardo la informacion de mi producto en mi modelo
    const nuevoProducto = Product ({
        nombre:req.body.nombre,
        precio:req.body.precio,
        tipo:req.body.tipo,
        imagen:req.file.originalname
    })
    
    const guardar = await nuevoProducto.save();
    console.log(guardar);
    
    try {
        res.status(200).json({mensaje:'Producto guardado correctamente'})
    
    } catch (error) {
        res.status(404).json({mensaje:'Producto no guardado'})
    }
})


module.exports = crearProducto;
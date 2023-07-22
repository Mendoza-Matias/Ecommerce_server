const express = require('express');
const editarProducto = express.Router();
const Product = require('../models/productsModel');
const multer = require('multer');

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


//Metodo para editar mi producto
editarProducto.put('/editarProducto/:id',uploads.single('imagen'),async(req,res)=>{

    try {
        //Paso como parametro de la petición para poder buscar el elemento a editar y modifico su cuerpo por medio del formulario.
       const editar = await Product.findByIdAndUpdate(req.params['id'],req.body);
        console.log(editar);

        res.status(201).json({mensaje:'Editado correctamente'})

    } catch (error) {
      
        res.status(404).json({mensaje:'No se encuentra el producto'})
    
    }
})

module.exports = editarProducto
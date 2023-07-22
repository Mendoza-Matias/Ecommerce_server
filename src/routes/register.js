const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

//Registro -----
router.post('/register',async(req,res)=>{

    const correo = await User.findOne({'correo':req.body.correo})

    //Validacion de correo
    if(correo){
        return res.status(203).json({mensaje:'El correo ya existe'})
    }

    const clave = await bcrypt.hash(req.body.clave,10);

    //Guardo la informacion de mi usuario en mi db
    const nuevoUsuario = User({
        nombre:req.body.nombre,
        correo:req.body.correo,
        clave:clave,
        rol:req.body.rol
    })

    await nuevoUsuario.save();

    try{
        res.status(201).json({mensaje:'Usuario registrado'});
    }catch(err){
        res.status(406).json(err)
    }
});

module.exports = {
    registrarUsuario: router
}
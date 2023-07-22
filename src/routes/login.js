const express = require('express');
const router = express.Router();
const config = require('../config/config');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Login del Usuario
router.post('/login',async(req,res)=>{
    
    const correo = await User.findOne({'correo':req.body.correo})
    //Verifico si el correo es correcto
    if(!correo){
        return res.status(404).json({mensaje:'Correo ingresado no encontrado'})
    }

    //Verifico si la clave es correcta
    const validarClave = await bcrypt.compare(req.body.clave,User.clave);

    if(!validarClave){
        return res.status(404).json({mensaje:'Informacion no encontrada'});
    }
    const datos = await User.findOne(req.body)

    //Payload de JWT
    const payload = {
        _id:datos.id,
        rol:datos.rol
    }
    //Genero un token
    const token = jwt.sign(payload,config.SECRET,{expiresIn:'1h'});
    try{
        res.status(200).json({mensaje:'Bienvenido',token:token})
    }catch(err){
        res.status(401).json(err)
    }
});

//export modules
module.exports = {
    loginDeUsuario:router
}

const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');


//Controlador de registro ----------------

const registerUser = async(req,res)=>{

    const correo = await User.findOne({'correo':req.body.correo})

    //Validacion de correo
    if(correo){
        return res.status(203).json({mensaje:'El correo ya existe'})
    }


    const clave = bcrypt.hashSync(req.body.clave,10);

    //Guardo la informacion de mi usuario en mi db
    const nuevoUsuario = User({
        nombre:req.body.nombre,
        correo:req.body.correo,
        clave:clave,
        rol:req.body.rol
    })

    try{
        await nuevoUsuario.save();

        res.status(201).json({mensaje:'Usuario registrado'});
    }catch(err){
        res.status(406).json(err)
    }
};


//Constrolador de Login ---------------------

const loginUser = async(req,res)=>{
    
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
};

module.exports = {
    registerUser,
    loginUser
};
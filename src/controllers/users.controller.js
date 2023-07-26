const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');

//Ver todos los usuarios
const users = async(req,res)=>{

    const todosLosUsuario = await User.find();

    try{
        res.status(200).json({usuarios:todosLosUsuario})
    }catch(err){
        res.status(404).json(err)
    }
};

//Ver solo un usuario
const userOne = async(req,res)=>{

    const unUsuario = await User.findById(req.params['id']);

    try{
        res.status(200).json({usuarios:unUsuario})
    }catch(err){
        res.status(404).json(err)
    }
};


//Controlador de vista de registro
const register = async(req,res)=>{
    try{
        res.status(200).json({mensaje:"Registro de usuario"})
    }catch(err){
        res.status(404).json(err)
    }
};


//Controlador de vista de Login
const login = async(req,res)=>{
    try{
        res.status(200).json({mensaje:"Registro de usuario"})
    }catch(err){
        res.status(404).json(err)
    }
};

//Controlador de registro ----------------
const hashClave = clave => bcrypt.hashSync(clave,bcrypt.genSaltSync(10));

const registerUser = async(req,res)=>{

    const correo = await User.findOne({'correo':req.body.correo})

    //Validacion de correo
    if(correo){
        return res.status(203).json({mensaje:'El correo ya existe'})
    }

    const password = hashClave(req.body.clave);
   

    //Guardo la informacion de mi usuario en mi db
    const nuevoUsuario = User({
        nombre:req.body.nombre,
        correo:req.body.correo,
        clave:password,
        rol:req.body.rol
    })

    try{
        await nuevoUsuario.save();

        res.status(201).json({mensaje:'Usuario registrado'});
    }catch(err){
        res.status(406).json(err)
    }
};

//--------------

//Constrolador de Login ---------------------
const loginUser = async(req,res)=>{
    
    const correo = await User.findOne({'correo':req.body.correo})
    //Verifico si el correo es correcto
    if(!correo){
        return res.status(404).json({mensaje:'Correo ingresado no encontrado'})
    }

    //Verifico si la clave es correcta
    const validarClave = await bcrypt.compare(req.body.clave,correo.clave);

    if(!validarClave){
        return res.status(404).json({mensaje:'Informacion no encontrada'});
    }
    

    //Payload de JWT
    const payload = {
        _id:correo.id,
        rol:correo.rol
    }
    //Genero un token
    const token = jwt.sign(payload,config.SECRET,{expiresIn:'30d'});
    try{
        res.status(200).json({mensaje:'Bienvenido',token:token})
    }catch(err){
        res.status(401).json({mensaje:'Error al ingresar a la cuenta'})
    }
};

module.exports = {
    users,
    userOne,
    register,
    login,
    registerUser,
    loginUser
   
};
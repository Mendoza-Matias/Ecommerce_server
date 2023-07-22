const config = require('../config/config');
const jwt = require('jsonwebtoken');

//validacion para el token del usuario al ir a una ruta privada
const validarToken = (req,res,next) =>{
    //Traigo mi token del req.headers
    const token = req.header('authorization')

    if(!token){
        return res.json({mensaje:'No hay token disponible'})
    }

    try{
       const data = jwt.verify(token,config.SECRET);

       //Si el rol es user no le permito ingresar
       if(data.rol === 'usuario'){
        return res.json({mensaje:'Los usuarios no estan autorizados a ingresar'});
        
       }
       if(data.rol === 'administrador'){
        next();
       }
    }catch(error){
        res.json(error);
    }
}

//Vistas con bloqueo por tokens

    const panelAdministrador = async(req,res) =>{
    try {
        res.json({mensaje:'AdministrarProductos'})
    } catch (error) {
        res.json(error)
    }
    }

    const editarProducto = async(req,res) =>{
    try {
        res.json({mensaje:'EditarProducto'})
    } catch (error) {
        res.json(error)
    }
    }

    const crearProducto = async(req,res) =>{
        try {
            res.json({mensaje:'Crear Producto'})
        } catch (error) {
            res.json(error)
        }
    }

module.exports = {
    validarToken,
    panelAdministrador,
    editarProducto,
    crearProducto,
}
const config = require('../utils/config');
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



module.exports =  validarToken;

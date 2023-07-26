const config = require('../utils/config');
const jwt = require('jsonwebtoken');

//validacion para el token del usuario al ir a una ruta privada
const validarToken = async(req,res,next) =>{
    //Traigo mi token del req.headers
    let token = req.header('Authorization').replace('Bearer ','');
    console.log(token);


    if(!token){
        return res.json({mensaje:"No hay token disponible"})
    }
    
    try{
        const payload = jwt.verify(token,config.SECRET)

        //Validación si es administrador ----- 
        if(payload.rol === 'administrador'){    
            res.status(200).json({mensaje:"Todo ok"})
        }else{
            res.status(403).json({mensaje:"Acceso denegado"})
        }


    }catch(err){
        res.status(400).json({mensaje:"Token invalido"})
    }

    }


module.exports =  validarToken;

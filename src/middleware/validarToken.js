const config = require('../utils/config');
const jwt = require('jsonwebtoken');

//validacion para el token del usuario al ir a una ruta privada
const validarToken = (req,res,next) =>{
    //Traigo mi token del req.headers
    var token = req.header('Authorization');
    
    console.log(token)


    if(!token){
        return res.json({mensaje:'No hay token disponible'})
    }

    jwt.verify(token,config.SECRET,(err,user)=>{
        if(err){
            res.status(400).json({mensaje:'Token invalido'})
            console.log(err)
        }else{
            res.status(200).json({mensaje:'Todo ok'})
        }
    })
}



module.exports =  validarToken;

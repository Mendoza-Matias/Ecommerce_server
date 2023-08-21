const multer = require('multer');
const path = require('path');

//Configuración de multer
const guardarImagen = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./src/uploads")
    },
    //NOmbre de mi archivo
    filename:(req,file,cb)=>{

        cb(null,file.originalname );
    // originalName para ver el nombre del archvio original
    // Luego podes agregar mas informacion al nombre como vos gustes
    // Atencionc con dejar al final espacio para la extension del archivo, si no not e va a leer el archivo
    }
});

const uploads = multer ({storage:guardarImagen});


module.exports = uploads;



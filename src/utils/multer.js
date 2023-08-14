const multer = require('multer');
const path = require('path');

//Configuración de multer
const guardarImagen = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./src/uploads")
    },
    //NOmbre de mi archivo
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer ({storage:guardarImagen});

module.exports = upload;
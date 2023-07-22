const multer = require('multer');

//Configuración de multer
const guardarImagen = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./src/uploads")
    },
    //NOmbre de mi archivo
    filename:(req,file,cb)=>{
        cb(null,Date.now() + '-' + file.originalname);
    }
});

const uploads = multer ({storage:guardarImagen});

module.exports = uploads;
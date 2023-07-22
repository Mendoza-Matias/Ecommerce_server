const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    nombre:{
        type:String,
    },
    correo:{
        type:String
    },
    clave:{
        type: Schema.Types.Mixed
    },
    rol:{
        type:String
    }
});

module.exports = mongoose.model('usuarios',userSchema);
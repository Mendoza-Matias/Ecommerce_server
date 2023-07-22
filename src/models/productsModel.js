const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    nombre:{type:String},
    precio:{type:Number},
    tipo:{type:String},
    imagen:{type:String}
})

module.exports = mongoose.model('producto',productSchema);
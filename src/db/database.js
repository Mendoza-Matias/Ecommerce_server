const mongoose = require('mongoose');
const config = require('../utils/config');

const contectarDb = async () =>{
 try {
    mongoose.connect(config.DB)
    console.log('DB conectada')

 } catch (error) {
    console.log(error);
 }
};

module.exports = contectarDb;
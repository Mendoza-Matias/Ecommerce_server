const dotenv = require('dotenv');
dotenv.config();

//Configuracion.
const config = ({
    PORT: process.env.PORT,
    DB: process.env.DB,
    SECRET: process.env.SECRET
})

module.exports = config;

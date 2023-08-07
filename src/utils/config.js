const dotenv = require('dotenv');
dotenv.config();

//Configuracion.
const config = ({
    PORT: 3000,
    DB:'mongodb+srv://CoderGermancho:coderBackend2023@codercluster.dzpfie2.mongodb.net/?retryWrites=true&w=majority',
    SECRET:"secret"
})

module.exports = config;

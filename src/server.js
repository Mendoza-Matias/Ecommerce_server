const express = require('express');
const config = require('./utils/config');
const database = require('./db/database');
const users = require('./routes/users.routes');
const cors = require('cors');
const products = require('./routes/products.routes');

database();
const app = express();

//Middleware------


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())


//Rutas de Usuario
app.use(users);
//Rutas de productos (CRUD) -----------
app.use(products);




const PORT = config.PORT;
app.listen(PORT,async()=>{
    try {
        console.log('Servidor Funcionando')
    } catch (error) {
        console.log('Hubo un error')
    }
})
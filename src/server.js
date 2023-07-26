const express = require('express');
const config = require('./utils/config');
const database = require('./db/database');
const views = require('./routes/views.routes');
const users = require('./routes/users.routes');
const products = require('./routes/products.routes');

database();
const app = express();

//Middleware------


app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Rutas de Usuario
app.use(users);
//Vistas
app.use(views)
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
const express = require('express');
const config = require('./config/config');
const database = require('./db/database');
const getRoutes = require('./routes/views');
const register = require('./routes/register');
const login = require('./routes/login');
const crearProducto = require('./routes/create');
const editarProducto = require('./routes/edit');
const eliminarProducto = require('./routes/remove');
const path = require('path');
database();
const app = express();

//Middleware------

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
//Registro de usuario
app.use(register.registrarUsuario);
app.use(login.loginDeUsuario);
//Vistas
app.use(getRoutes.vistaPrincipal);
app.use(getRoutes.panelDeAdministrador);
app.use(getRoutes.vistaDeCreacion);
app.use(getRoutes.vistaDeEdicion);
//Crud methods-----------
app.use(crearProducto);
app.use(editarProducto);
app.use(eliminarProducto);

const PORT = config.PORT;

app.listen(PORT,async()=>{
    try {
        console.log('Servidor Funcionando')
    } catch (error) {
        console.log('Hubo un error')
    }
})
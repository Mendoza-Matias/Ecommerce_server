//Usuarios 
const express = require('express');
const routerUsers = express.Router();
const controllersUsers = require('../controllers/users.controller');


//Ver todos los usuarios
routerUsers.get('/user/all',controllersUsers.users);

//Ver un solo usuario
routerUsers.get('/userOne/:id',controllersUsers.userOne);

//Vista de Registro
routerUsers.get('/user/register',controllersUsers.register);

//Vista de Login
routerUsers.get('/user/login',controllersUsers.login)

//Registro de usuarios --------------
routerUsers.post('/register',controllersUsers.registerUser);

//Login de Usuarios --------------
routerUsers.post('/login',controllersUsers.loginUser);

module.exports = routerUsers;

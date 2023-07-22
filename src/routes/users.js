//Usuarios 
const express = require('express');
const routerUsers = express.Router();
const controllersUsers = require('../controllers/users');

//Registro de usuarios --------------
routerUsers.post('/register',controllersUsers.registerUser);

//Login de Usuarios --------------
routerUsers.post('/login',controllersUsers.loginUser);

module.exports = routerUsers;

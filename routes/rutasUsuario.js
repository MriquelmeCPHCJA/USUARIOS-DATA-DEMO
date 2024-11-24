const express = require('express');
const usuariosController = require('../controllers/usuariosControllers.js')

const ruta = express.Router();

ruta.get('/usuarios', usuariosController.consultarUsuarios);

ruta.route('/usuarios/:id')
    .get(usuariosController.consultarUsuarioPorId)

module.exports =  ruta;
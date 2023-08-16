const express = require('express');
const router = express.Router();
const detallesController= require('../controllers/IniciarSesion');

router.get('/', detallesController.renderIniciarSesion);

module.exports = router
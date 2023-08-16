const express = require('express');
const router = express.Router();
const iniciarSesionController= require('../controllers/IniciarSesion');

router.get('/', iniciarSesionController.renderIniciarSesion);
router.post('/', iniciarSesionController.redireccionar)

module.exports = router
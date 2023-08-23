const express = require('express');
const router = express.Router();
const modificarProductosController= require('../controllers/ModificacionDeProductos');

router.get('/', modificarProductosController.rendermodificarProductos);

module.exports = router
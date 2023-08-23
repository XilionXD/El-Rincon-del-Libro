const express = require('express');
const router = express.Router();
const CrearProductosController= require('../controllers/CrearProductos');

router.get('/', CrearProductosController.renderCrearProductos);

module.exports = router
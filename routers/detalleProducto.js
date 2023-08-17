const express = require('express');
const router = express.Router();
const detallesController= require('../controllers/detalleController');

router.get('/', detallesController.renderDetalle);

module.exports = router
const express = require('express');
const router = express.Router();
const bibliotecaController = require('../controllers/BibliotecaController')

router.get('/', bibliotecaController.render);

module.exports = router;


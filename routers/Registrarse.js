const express = require('express');
const router = express.Router();
const RegistrarseController= require('../controllers/registrarseController');

router.get('/', RegistrarseController.renderRegistrarse);
router.post('/', RegistrarseController.redireccionar)

module.exports = router
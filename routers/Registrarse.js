const express = require('express');
const router = express.Router();
const RegistrarseController= require('../controllers/RegistrarseController');

router.get('/', RegistrarseController.renderRegistrarse);
router.post('/', RegistrarseController.redireccionar)

module.exports = router
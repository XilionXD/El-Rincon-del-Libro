const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const CrearProductosController= require('../controllers/CrearProductos');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathimage = path.join(__dirname, '..', 'public', 'images');
        cb(null, pathimage);
    },
    filename: (req, file, cb)=>{
        const fileNewName = 'img-' + Date.now() + path.extname(file.originalname);

        cb(null, fileNewName)
    }
})

const upload = multer({ storage })


router.get('/', CrearProductosController.renderCrearProductos);

router.post('/',upload.single("img"), CrearProductosController.crear);

module.exports = router
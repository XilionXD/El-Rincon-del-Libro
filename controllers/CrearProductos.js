const libros = require('../baseDatos/libros')
const fs = require('fs');

const crearProductosController = {
    renderCrearProductos : (req, res) => {
        res.render('CreacionDeProductos')
    },
    crear: (req, res) =>{
        const nuevoLibro = {
            id: `${Date.now()}`,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            genero: req.body.genero,
            imgPath: req.file ? req.file.path : null,
            autor: req.body.autor,
            precio: parseFloat(req.body.precio),
            editorial: req.body.editorial,
            idioma: req.body.idioma,
            cantidad: parseInt(req.body.cantidad),  
        };

        const elnuevoarray = libros.push(nuevoLibro);

        console.log(elnuevoarray)

        res.redirect("/biblioteca")
    }
}

module.exports = crearProductosController;

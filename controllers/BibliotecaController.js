const arrLibros = require('../baseDatos/libros')

const bibliotecaController = {
    render : (req, res)=>{
        res.render("biblioteca", {datos: arrLibros})
    }
}

module.exports = bibliotecaController;
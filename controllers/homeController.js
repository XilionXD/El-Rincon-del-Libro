const arrLibros = require('../baseDatos/libros')

const homeController = {
    renderHome : (req, res) => {
        res.render('inicio', {datos: arrLibros})
    },
}

module.exports = homeController;
const arrLibros = require('../baseDatos/libros')

const homeController = {
    renderHome : (req, res) => {
        res.render('inicio', {datos: arrLibros})
    },
    search : (req, res) => {
        const { keywords } = req.query;

        const libroBuscado = arrLibros.filter(( libro ) => libro.titulo.toLowerCase().includes(keywords.toLowerCase()));

        res.render('resultado', { resultado : libroBuscado});
    }
}

module.exports = homeController;
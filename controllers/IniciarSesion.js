const IniciarSesionController = {
    renderIniciarSesion : (req, res) => {
        res.render('IniciarSesion')
    },
    redireccionar: (req, res) => 
    res.redirect('/')
}

module.exports = IniciarSesionController;
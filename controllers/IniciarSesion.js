const IniciarSesionController = {
    renderIniciarSesion : (req, res) => {
        res.render('IniciarSesion')
    },
    redireccionar: (req, res) => {
        const formData = req.body; 
        res.redirect("/")}
}

module.exports = IniciarSesionController;
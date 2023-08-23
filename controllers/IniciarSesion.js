const IniciarSesionController = {
    renderIniciarSesion : (req, res) => {
        res.render('IniciarSesion')
    },
    redireccionar: (req, res) => {
        const formData = req.body; 
        res.redirect("CreacionDeProductos")}
}

module.exports = IniciarSesionController;
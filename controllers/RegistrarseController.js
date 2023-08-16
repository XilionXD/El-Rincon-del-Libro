const RegistrarseController = {
    renderRegistrarse : (req, res) => {
        res.render('Registrarse')
    },
    redireccionar: (req, res) => 
    res.redirect('/')
}

module.exports = RegistrarseController;
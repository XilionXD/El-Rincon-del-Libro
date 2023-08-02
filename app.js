const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, './public')))

app.listen(3000, () => console.log('APP corriendo en el puerto:' + 3000))

app.get("/", (req, res) =>{
   res.sendfile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/LogIn", (req, res) =>{
   res.sendfile(path.resolve(__dirname, "./views/Log-In.html"))
})

app.get("/Register", (req, res) =>{
   res.sendfile(path.resolve(__dirname, "./views/Register.html"))
})

app.get("/Carrito-De-Compra", (req, res) =>{
   res.sendfile(path.resolve(__dirname, "./views/CarritoDeCompra.html"))
})

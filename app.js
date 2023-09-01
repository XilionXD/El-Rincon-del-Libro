const express = require('express');
const app = express();

/******* ROUTERS ******/
const homeRouter = require('./routers/inicio');
const iniciarSesionRouter = require('./routers/IniciarSesion');
const registrarseRouter = require('./routers/Registrarse');
const carritodecompraRouter = require('./routers/CarritoDeCompras');
const detalleRouter =require('./routers/detalleProducto')
const crearRouter = require ('./routers/CrearProductos')
const modificarRouter = require('./routers/ModificarProductos');
const bibliotecaRouter = require('./routers/biblioteca.js');

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3000

app.listen(port, () => console.log('APP corriendo en el puerto:' + port))

app.use('/', homeRouter);

app.use('/iniciar-sesion', iniciarSesionRouter);

app.use("/registrarse", registrarseRouter)

app.use("/carrito-de-compra", carritodecompraRouter)

app.use("/detalle-producto", detalleRouter)

app.use("/biblioteca/CreacionDeProductos", crearRouter)

app.use("/ModificarProductos", modificarRouter)

app.use('/biblioteca', bibliotecaRouter)
  
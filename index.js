const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//conexión a bd
const db = require('./config/db');
require('./models/Proyectos');
db.sync()
    .then(() => console.log('Conectado al servidor'))
    .catch((error) => console.log(error));

//crear un app de express
const app = express();

//donde cargar archivos estaticos
app.use(express.static('public'));

//habilitar pug
app.set('view engine', 'pug');

//añadir carpeta vistas
app.set('views',path.join(__dirname,'./views'));

//habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());
app.listen(3000);
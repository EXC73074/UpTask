//importa express
const express = require('express');
//importa el enrutador
const routes = require('./routes');

//crear un app de express
const app = express();

//consumimos el enrutador
app.use('/', routes());

//asignamos el puerto
app.listen(3000);
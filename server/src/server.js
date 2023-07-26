const express = require("express");
const router = require("./routes/index.routes");
const morgan = require("morgan");


const server = express();

server.use(morgan("dev"));
server.use(express.json());
// Configurar cabeceras y cors
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use(router);

module.exports = server;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000;
var direcciones = new Array();
direcciones.push({
    ciudad: 'Cochabamba',
    avenida: 'Avenida',
    vecindario: 'Norte'
});
app.get('/', function (req, res) {
    res.end('Hola mundo desde typescript');
});
app.get('/direcciones', function (req, res) {
    res.writeHead(200, { 'Content-type': 'aplication/json' });
    res.end(JSON.stringify(direcciones));
});
app.listen(port, function () {
    var mensaje = "El servidor esta activo en el puerto " + port;
    return console.log(mensaje);
});

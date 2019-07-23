"use strict";
exports.__esModule = true;
var fs = require("fs");
var LectorArchivo = /** @class */ (function () {
    function LectorArchivo(rutaArchivo) {
        this.rutaArchivo = rutaArchivo;
    }
    LectorArchivo.prototype.setRutaArchivo = function (rutaArchivo) {
        this.rutaArchivo = rutaArchivo;
    };
    LectorArchivo.prototype.getRutaArchivo = function () {
        return this.rutaArchivo;
    };
    LectorArchivo.prototype.leerArchivo = function () {
        var archivo = fs.readFileSync(this.rutaArchivo, 'utf8');
        var lineas = archivo.split('\n');
        lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
        return lineas;
    };
    return LectorArchivo;
}());
exports["default"] = LectorArchivo;

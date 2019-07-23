"use strict";
exports.__esModule = true;
var class_LectorArchivo_1 = require("./class-LectorArchivo");
var Telefono = /** @class */ (function () {
    function Telefono(numero, estaPrendido, bateriaActual) {
        this.numero = numero;
        this.estaPrendido = estaPrendido;
        this.bateriaActual = bateriaActual;
    }
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    Telefono.prototype.isPrendido = function () {
        return this.estaPrendido;
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Telefono.prototype.getBateriaActual = function () {
        return this.bateriaActual;
    };
    Telefono.prototype.loadBateriaActual = function () {
        if (this.bateriaActual < 100)
            this.bateriaActual++;
        else
            console.log("Batería llena");
    };
    Telefono.prototype.unloadBateriaActual = function () {
        if (this.bateriaActual > 0)
            this.bateriaActual--;
        else
            console.log("Batería vacía");
    };
    Telefono.prototype.mandarMensaje = function (txt) {
        if (this.estaPrendido && this.bateriaActual > 0) {
            var lectorArchivo = new class_LectorArchivo_1["default"](txt);
            var sms = lectorArchivo.leerArchivo();
            sms = sms[0].split('|');
            console.log("Numero destino: ", sms[0]);
            console.log("Mensaje enviado: ", sms[1]);
        }
        else
            console.log("Mensaje no enviado");
    };
    Telefono.prototype.hacerLlamada = function (telDestino) {
        if (this.estaPrendido && this.bateriaActual > 0) {
            console.log("Numero destino: ", telDestino.numero);
        }
    };
    return Telefono;
}());
exports["default"] = Telefono;
// let lectorArchivo: LectorArchivo = new LectorArchivo('./SMS.txt');
// let sms: string[] = lectorArchivo.leerArchivo();
// sms = sms[0].split('|');
// console.log(sms);

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var class_Telefono_1 = require("./class-Telefono");
var inicial = 86;
var final = 108;
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio(numero, estaPrendido, bateriaActual) {
        var _this = _super.call(this, numero, estaPrendido, bateriaActual) || this;
        _this.radioOnOff = false;
        _this.frecuenciaActual = inicial;
        _this.volumen = 0;
        return _this;
    }
    TelefonoConRadio.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            if (this.radioOnOff) {
                this.volumen = 0;
                this.radioOnOff = false;
            }
            this.estaPrendido = false;
            console.log("Apagando celular Con Radio...");
        }
        else
            this.estaPrendido = true;
        console.log("Encendiendo celular Con Radio...");
    };
    TelefonoConRadio.prototype.encenderRadio = function () {
        if (this.isPrendido()) {
            if (!this.radioOnOff) {
                this.radioOnOff = true;
                this.volumen = 50;
                console.log("radio encendida");
            }
            else {
                this.radioOnOff = false;
                console.log("radio apagada");
            }
        }
        else
            console.log("Celular apagado, no se puede encender radio");
    };
    TelefonoConRadio.prototype.subirVolumen = function () {
        if (this.isPrendido()) {
            if (this.radioOnOff) {
                if (this.volumen < 100)
                    this.volumen++;
                else
                    console.log("volumen máximo");
            }
            else
                console.log("Radio apagada, no se puede subir volumen");
        }
        else
            console.log("Celular apagado, no se puede subir volumen");
    };
    TelefonoConRadio.prototype.bajarVolumen = function () {
        if (this.isPrendido()) {
            if (this.radioOnOff) {
                if (0 < this.volumen)
                    this.volumen--;
                else
                    console.log("volumen mínimo");
            }
            else
                console.log("Radio apagada, no se puede bajar volumen");
        }
        else
            console.log("Celular apagado, no se puede bajar volumen");
    };
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        if (this.isPrendido())
            if (this.radioOnOff)
                console.log(this.frecuenciaActual.toString());
            else
                console.log("Radio apagada, no se puede ver frecuencia");
        else
            console.log("Celular apagado, no se puede ver frecuencia");
    };
    TelefonoConRadio.prototype.subirFrecuenciaActual = function () {
        if (this.isPrendido())
            if (this.radioOnOff) {
                if (this.frecuenciaActual < 108)
                    this.frecuenciaActual++;
                else
                    this.frecuenciaActual = inicial;
                console.log("frecuencia subida a: ", this.frecuenciaActual);
            }
            else
                console.log("Radio apagada, no se puede cambiar frecuencia");
        else
            console.log("Celular apagado, no se puede subir frecuencia");
    };
    TelefonoConRadio.prototype.bajarFrecuenciaActual = function () {
        if (this.isPrendido())
            if (this.radioOnOff) {
                if (85.9 < this.frecuenciaActual)
                    this.frecuenciaActual--;
                else
                    this.frecuenciaActual = final;
                console.log("frecuencia bajada a: ", this.frecuenciaActual);
            }
            else
                console.log("Radio apagada, no se puede cambiar frecuencia");
        else
            console.log("Celular apagado, no se puede bajar frecuencia");
    };
    return TelefonoConRadio;
}(class_Telefono_1["default"]));
exports["default"] = TelefonoConRadio;

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
var class_Camara_1 = require("./class-Camara");
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    // private flash: boolean;
    function TelefonoConCamara(numero, estaPrendido, bateriaActual) {
        var _this = _super.call(this, numero, estaPrendido, bateriaActual) || this;
        _this.camara = new class_Camara_1["default"]();
        return _this;
        // this.flash = false;
    }
    TelefonoConCamara.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            // if (this.flash) this.flash = false;
            if (this.camara.isFlashOn())
                this.camara.flashOnOff();
            this.estaPrendido = false;
            console.log("Apagando celular Con Camara...");
        }
        else {
            this.estaPrendido = true;
            console.log("Encendiendo celular Con Camara...");
        }
    };
    TelefonoConCamara.prototype.sacarFoto = function () {
        // let entrada: string;
        if (this.isPrendido()) {
            console.log("Celular encendido:", this.isPrendido());
            // this.camaraOnOff = true;
            // console.log("Cámara encendida");
            // if (!this.flash) {
            //     console.log("Flash apagado");
            //     entrada = readlineSync.question("encender flash(S/N)");
            //     while (entrada.toLowerCase() != "s" && entrada.toLowerCase() != "n")
            //         entrada = readlineSync.question("encender flash(S/N)");
            //     if (entrada.toLowerCase() == "s")
            //         this.flash = true;
            // }
            // console.log("enfocando....clic");
            // if (this.flash) 
            //     this.flash = false;
            // this.camaraOnOff = false;
            this.camara.sacarFoto();
        }
        else
            console.log("Celular encendido:", this.isPrendido(), ". NO se puede tomar foto.");
    };
    TelefonoConCamara.prototype.lightOnOff = function () {
        if (this.isPrendido()) {
            // if (!this.flash) {
            //     this.flash = true;
            //     console.log("linterna encendida");
            // } else {
            //     this.flash = false;
            //     console.log("linterna apagada");
            // }
            console.log("Celular encendido:", this.isPrendido());
            this.camara.flashOnOff();
            console.log("linterna encendida:", this.camara.isFlashOn());
        }
        else
            // console.log("Celular apagado, no se puede encender linterna");
            console.log("Celular encendido:", this.isPrendido(), ". NO se puede encender linterna.");
    };
    return TelefonoConCamara;
}(class_Telefono_1["default"]));
exports["default"] = TelefonoConCamara;

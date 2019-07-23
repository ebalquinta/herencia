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
var readlineSync = require("readline-sync");
var class_Telefono_1 = require("./class-Telefono");
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(numero, estaPrendido, bateriaActual) {
        var _this = _super.call(this, numero, estaPrendido, bateriaActual) || this;
        _this.camaraOnOff = false;
        _this.flash = false;
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        var entrada;
        if (this.isPrendido()) {
            this.camaraOnOff = true;
            console.log("Cámara encendida");
            // entrada = readlineSync.question("encender cámara(S/N)");
            // while (entrada.toLowerCase() != "s" || entrada.toLowerCase() != "n")
            //     entrada = readlineSync.question("encender cámara(S/N)");
            // entrada = "";
            if (!this.flash) {
                console.log("Flash apagado");
                entrada = readlineSync.question("encender flash(S/N)");
                while (entrada.toLowerCase() != "s" && entrada.toLowerCase() != "n")
                    entrada = readlineSync.question("encender flash(S/N)");
            }
            // }
            console.log("enfocando....clic");
            if (this.flash)
                this.flash = false;
            this.camaraOnOff = false;
        }
        else
            console.log("Celular apagado, no se puede sacar foto");
    };
    TelefonoConCamara.prototype.light = function () {
        if (this.isPrendido()) {
            if (!this.flash) {
                this.flash = true;
                console.log("linterna encendida");
            }
            else {
                this.flash = false;
                console.log("linterna apagada");
            }
        }
        else
            console.log("Celular apagado, no se puede encender linterna");
    };
    return TelefonoConCamara;
}(class_Telefono_1["default"]));
exports["default"] = TelefonoConCamara;

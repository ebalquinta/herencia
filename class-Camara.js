"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var Camara = /** @class */ (function () {
    function Camara() {
        this.onOff = false;
        this.flash = false;
    }
    Camara.prototype.isOn = function () {
        return this.onOff;
    };
    Camara.prototype.setOnOff = function () {
        if (this.onOff)
            this.onOff = false;
        else
            this.onOff = true;
    };
    Camara.prototype.isFlashOn = function () {
        return this.flash;
    };
    Camara.prototype.flashOnOff = function () {
        if (this.flash)
            this.flash = false;
        else
            this.flash = true;
    };
    Camara.prototype.sacarFoto = function () {
        var entrada;
        if (!this.isOn())
            this.setOnOff();
        console.log("Camara encendida:", this.isOn());
        entrada = readlineSync.question("Tomar foto(S/N)");
        while (entrada.toLowerCase() != "s" && entrada.toLowerCase() != "n")
            entrada = readlineSync.question("Tomar foto(S/N)");
        while (entrada.toLocaleLowerCase() == "s") {
            if (!this.isFlashOn()) {
                console.log("Flash apagado");
                entrada = readlineSync.question("encender flash(S/N)");
                while (entrada.toLowerCase() != "s" && entrada.toLowerCase() != "n")
                    entrada = readlineSync.question("encender flash(S/N)");
                if (entrada.toLowerCase() == "s")
                    this.flash = true;
            }
            console.log("flash:", this.isFlashOn(), ". Enfocando....clic");
            if (this.isFlashOn())
                this.flash = false;
            entrada = readlineSync.question("Tomar otra foto(S/N)");
            while (entrada.toLowerCase() != "s" && entrada.toLowerCase() != "n")
                entrada = readlineSync.question("Tomar otra foto(S/N)");
        }
        this.setOnOff();
        console.log("Camara encendida:", this.isOn());
    };
    return Camara;
}());
exports["default"] = Camara;

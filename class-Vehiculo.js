"use strict";
exports.__esModule = true;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, combustible, anio, dominio) {
        if (marca == undefined) {
            this.marca = "S/D";
        }
        else {
            this.marca = marca;
        }
        if (modelo == undefined) {
            this.modelo = "S/D";
        }
        else {
            this.modelo = modelo;
        }
        if (combustible == undefined) {
            this.combustible = "S/D";
        }
        else {
            this.combustible = combustible;
        }
        if (anio == undefined) {
            this.anio = "S/D";
        }
        else {
            this.anio = anio;
        }
        if (dominio == undefined) {
            this.dominio = "S/D";
        }
        else {
            this.dominio = dominio;
        }
        this.velocidad = 0;
    }
    Vehiculo.prototype.equals = function (auto) {
        if (auto != null)
            return (this.marca == auto.getMarca() && this.modelo == auto.getModelo() &&
                this.combustible == auto.getCombustible() && this.anio == auto.getAnio() &&
                this.dominio == auto.getDominio());
        else
            return false;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setCombustible = function (combustible) {
        this.combustible = combustible;
    };
    Vehiculo.prototype.getCombustible = function () {
        return this.combustible;
    };
    Vehiculo.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.setDominio = function (dominio) {
        this.dominio = dominio;
    };
    Vehiculo.prototype.getDominio = function () {
        return this.dominio;
    };
    Vehiculo.prototype.acelerar = function () {
        if (this.velocidad <= 190)
            this.velocidad += 10;
        else
            console.log("velocidad máxima alcanzada");
    };
    Vehiculo.prototype.desacelerar = function () {
        if (this.velocidad > 0)
            this.velocidad -= 10;
        else
            console.log("velocidad mínima alcanzada");
    };
    Vehiculo.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Vehiculo;
}());
exports["default"] = Vehiculo;

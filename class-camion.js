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
var class_Vehiculo_1 = require("./class-Vehiculo");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, modelo, combustible, anio, dominio, ejes, tara, carga) {
        var _this = _super.call(this, marca, modelo, combustible, anio, dominio) || this;
        _this.ejes = ejes;
        _this.carga = carga;
        _this.tara = tara;
        return _this;
    }
    Camion.prototype.setEjes = function (ejes) {
        this.ejes = ejes;
    };
    Camion.prototype.getEjes = function () {
        return this.ejes;
    };
    Camion.prototype.setCarga = function (carga) {
        this.carga = carga;
    };
    Camion.prototype.getCarga = function () {
        return this.carga;
    };
    Camion.prototype.setTara = function (tara) {
        this.tara = tara;
    };
    Camion.prototype.getTara = function () {
        return this.tara;
    };
    return Camion;
}(class_Vehiculo_1["default"]));
exports["default"] = Camion;

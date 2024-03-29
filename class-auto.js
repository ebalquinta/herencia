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
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modelo, combustible, anio, dominio, descapotable) {
        var _this = _super.call(this, marca, modelo, combustible, anio, dominio) || this;
        _this.descapotable = descapotable;
        return _this;
    }
    Auto.prototype.isDescapotable = function () {
        return this.descapotable;
    };
    return Auto;
}(class_Vehiculo_1["default"]));
exports["default"] = Auto;

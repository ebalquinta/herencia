"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var class_auto_1 = require("./class-auto");
var class_camion_1 = require("./class-camion");
var class_moto_1 = require("./class-moto");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombre, listaVehiculos, direccion) {
        this.nombre = nombre;
        this.listaVehiculos = listaVehiculos;
        if (direccion == undefined) {
            this.direccion = "S/D";
        }
        else {
            this.direccion = direccion;
        }
    }
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    RegistroAutomotor.prototype.getDireccion = function () {
        return this.direccion;
    };
    RegistroAutomotor.prototype.getListaVehiculos = function () {
        return this.listaVehiculos;
    };
    RegistroAutomotor.prototype.buscarVehiculo = function (dominio) {
        var result = -1;
        for (var index = 0; index < this.listaVehiculos.length; index++) {
            if (dominio == this.listaVehiculos[index].getDominio()) {
                result = index;
                break;
            }
        }
        return result;
    };
    RegistroAutomotor.prototype.consultarVehiculo = function (dominio) {
        var resultVehiculo = null;
        if (this.buscarVehiculo(dominio) != -1) {
            console.log("dominio:", dominio, "encontrado: ");
            resultVehiculo = this.listaVehiculos[this.buscarVehiculo(dominio)];
        }
        else
            console.log("dominio:", dominio, "no encontrado");
        return resultVehiculo;
    };
    RegistroAutomotor.prototype.borrarVehiculo = function (dominio) {
        if (this.buscarVehiculo(dominio) != -1) {
            var index = this.buscarVehiculo(dominio);
            this.listaVehiculos.splice(index, 1);
            console.log("dominio:", dominio, "eliminado");
        }
        else {
            console.log("dominio:", dominio, "no encontrado");
        }
    };
    RegistroAutomotor.prototype.updateLine = function (txt, infoVehiculo) {
        var entradaTxt = readlineSync.question(txt);
        if ((entradaTxt == '') || (entradaTxt == ' ') || (entradaTxt == infoVehiculo))
            return infoVehiculo;
        else
            return entradaTxt;
    };
    RegistroAutomotor.prototype.update = function (vehiculo) {
        var updateVehiculo; //= new Vehiculo();
        if (vehiculo instanceof class_camion_1["default"])
            updateVehiculo = new class_camion_1["default"]();
        if (vehiculo instanceof class_auto_1["default"])
            updateVehiculo = new class_auto_1["default"]();
        if (vehiculo instanceof class_moto_1["default"])
            updateVehiculo = new class_moto_1["default"]();
        updateVehiculo.setMarca(this.updateLine("ingrese nueva marca: ", vehiculo.getMarca()));
        updateVehiculo.setModelo(this.updateLine("ingrese nuevo modelo: ", vehiculo.getModelo()));
        updateVehiculo.setCombustible(this.updateLine("ingrese nuevo combustible: ", vehiculo.getCombustible()));
        updateVehiculo.setAnio(this.updateLine("ingrese nuevo anio: ", vehiculo.getAnio()));
        updateVehiculo.setDominio(this.updateLine("ingrese nuevo dominio: ", vehiculo.getDominio()));
        if (vehiculo instanceof class_camion_1["default"]) {
            // (<Camion>updateVehiculo).setEjes(parseInt(this.updateLine("ingrese nueva cantidad de ejes: ", vehiculo.getEjes().toString())));
            updateVehiculo.setEjes(this.updateLine("ingrese nueva cantidad de ejes: ", vehiculo.getEjes()));
            updateVehiculo.setTara(this.updateLine("ingrese nueva tara: ", vehiculo.getTara()));
        }
        return updateVehiculo;
    };
    RegistroAutomotor.prototype.actualizarVehiculo = function (dominio) {
        if (this.buscarVehiculo(dominio) != -1) {
            console.log("dominio ", dominio, " encontrado:");
            var index = this.buscarVehiculo(dominio);
            var resultVehiculo = this.listaVehiculos[index];
            this.listaVehiculos[index] = this.update(resultVehiculo);
            console.log("dominio:", dominio, "actualizado");
        }
        else
            console.log("dominio:", dominio, "no encontrado");
    };
    RegistroAutomotor.prototype.ingresarVehiculo = function (vehiculo) {
        if (this.consultarVehiculo(vehiculo.getDominio()) != null) {
            console.log("vehiculo duplicado, no añadido");
            return false;
        }
        else {
            this.listaVehiculos.push(vehiculo);
            console.log("vehiculo nuevo añadido");
            return true;
        }
    };
    return RegistroAutomotor;
}());
exports["default"] = RegistroAutomotor;

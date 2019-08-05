"use strict";
exports.__esModule = true;
var class_Auto_1 = require("./class-Auto");
var class_LectorArchivo_1 = require("./class-LectorArchivo");
var class_camion_1 = require("./class-camion");
var class_moto_1 = require("./class-moto");
var ArchivoVehiculo = /** @class */ (function () {
    function ArchivoVehiculo(rutaArchivo) {
        this.lectorArchivo = new class_LectorArchivo_1["default"](rutaArchivo);
    }
    // private leerArchivo(rutaArchivo: string): string[] {
    //     let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
    //     let lineas: string[] = archivo.split('\n');
    //     lineas = lineas.map(linea => linea.replace('\r', ''));
    //     return lineas;
    // }
    ArchivoVehiculo.prototype.getListaVehiculos = function () {
        var vehiculos = this.lectorArchivo.leerArchivo();
        var arrVehiculos = new Array(vehiculos.length);
        for (var index = 0; index < vehiculos.length; index++) {
            var txtVehiculo = vehiculos[index].split(",");
            var unVehiculo = void 0;
            switch (txtVehiculo[0]) {
                case "Auto":
                    unVehiculo = new class_Auto_1["default"](txtVehiculo[1], txtVehiculo[2], txtVehiculo[3], txtVehiculo[4], txtVehiculo[5], false);
                    break;
                case "Camion":
                    unVehiculo = new class_camion_1["default"](txtVehiculo[1], txtVehiculo[2], txtVehiculo[3], txtVehiculo[4], txtVehiculo[5], "0", "0", "0");
                    break;
                case "Moto":
                    unVehiculo = new class_moto_1["default"](txtVehiculo[1], txtVehiculo[2], txtVehiculo[3], txtVehiculo[4], txtVehiculo[5], true);
                    break;
                default:
                    break;
            }
            arrVehiculos[index] = unVehiculo;
        }
        return arrVehiculos;
    };
    return ArchivoVehiculo;
}());
exports["default"] = ArchivoVehiculo;

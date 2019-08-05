"use strict";
/*Ejercicio 1
• Usando la clase Auto: Implementar la clase
RegistroAutomotor con métodos para consultar
por un auto en un listado, borrar, actualizar y dar
de alta
• Partir de función ya implementada para leer
archivos*/
exports.__esModule = true;
var class_RegistroAutomotor_1 = require("./class-RegistroAutomotor");
var class_Auto_1 = require("./class-Auto");
var class_ArchivoVehiculo_1 = require("./class-ArchivoVehiculo");
var archivo = new class_ArchivoVehiculo_1["default"]('./info_autos.txt');
var listaVehiculos = archivo.getListaVehiculos();
var registro1 = new class_RegistroAutomotor_1["default"]("Registro 1", listaVehiculos, "Paraguay 500");
console.log(registro1);
// registro1.actualizarVehiculo("DEF456");
// console.log(registro1.consultarAuto("BCD24"));
registro1.borrarVehiculo("BCD2");
registro1.ingresarVehiculo(new class_Auto_1["default"]("Chevrolet", "Corsa", "Nafta", "2002", "CDE345", false));
console.log(registro1);

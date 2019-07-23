"use strict";
exports.__esModule = true;
var class_TelefonoConCamara_1 = require("./class-TelefonoConCamara");
var class_TelefonoConRadio_1 = require("./class-TelefonoConRadio");
// let arrayTelefonos: Telefono[] = [];
var telefono1 = new class_TelefonoConCamara_1["default"](2494333439, false, 40);
var telefono2 = new class_TelefonoConRadio_1["default"](2494333440, true, 10);
console.log("telefono 2:");
telefono2.encenderRadio();
console.log("telefono 1:");
telefono1.sacarFoto();
console.log("telefono 1:", telefono1);
// arrayTelefonos.push(telefono1);
// arrayTelefonos.push(telefono2);
// for (let index = 0; index < arrayTelefonos.length; index++) {
//     let tel: Telefono = arrayTelefonos[index];
//     if (tel instanceof TelefonoConCamara) {
//         (<TelefonoConCamara> tel).sacarFoto();
//     } else if (tel instanceof TelefonoConRadio) {
//         (<TelefonoConRadio> tel).encenderRadio();
//     }  
// }
telefono1.prenderApagar();
telefono1.unloadBateriaActual();
telefono1.sacarFoto();
console.log("telefono2:");
telefono2.prenderApagar();
telefono2.verFrecuenciaActual();
telefono2.encenderRadio();
telefono2.verFrecuenciaActual();
console.log("telefono1:", telefono1);
console.log("telefono2:", telefono2);

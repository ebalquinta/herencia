"use strict";
exports.__esModule = true;
var class_TelefonoConCamara_1 = require("./class-TelefonoConCamara");
var class_TelefonoConRadio_1 = require("./class-TelefonoConRadio");
var telefono1 = new class_TelefonoConCamara_1["default"](2494333439, false, 40);
var telefono2 = new class_TelefonoConRadio_1["default"](2494333440, true, 10);
// console.log("telefono 2:");
// telefono2.encenderRadio();
// console.log("telefono 1:");
// (<TelefonoConCamara> telefono1).sacarFoto();
// console.log("telefono 1:",telefono1);
if (telefono1 instanceof class_TelefonoConRadio_1["default"])
    console.log("telefono con radio");
else
    console.log("no es un telefono con camara");
// telefono1.prenderApagar();
// telefono1.unloadBateriaActual();
// (<TelefonoConCamara> telefono1).sacarFoto();
// console.log("telefono2:");
// telefono2.prenderApagar();
// telefono2.verFrecuenciaActual();
// telefono2.encenderRadio();
// telefono2.verFrecuenciaActual();
// telefono1.mandarMensaje('./SMS.txt');
// console.log("telefono1:",telefono1);
// console.log("telefono2:",telefono2);

import TelefonoConCamara from "./class-TelefonoConCamara";
import Telefono from "./class-Telefono";
import TelefonoConRadio from "./class-TelefonoConRadio";

let telefono1: Telefono = new TelefonoConCamara(2494333439,false,40);
let telefono2: TelefonoConRadio = new TelefonoConRadio(2494333440,true,10);

// console.log("telefono 2:");
// telefono2.encenderRadio();

// console.log("telefono 1:");
// (<TelefonoConCamara> telefono1).sacarFoto();
// console.log("telefono 1:",telefono1);

telefono1.prenderApagar();
// telefono1.unloadBateriaActual();
// (<TelefonoConCamara> telefono1).sacarFoto();

// console.log("telefono2:");
// telefono2.prenderApagar();
// telefono2.verFrecuenciaActual();
// telefono2.encenderRadio();
// telefono2.verFrecuenciaActual();

telefono1.mandarMensaje('./SMS.txt');
console.log("telefono1:",telefono1);
// console.log("telefono2:",telefono2);
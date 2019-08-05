/*Ejercicio 1
• Usando la clase Auto: Implementar la clase
RegistroAutomotor con métodos para consultar
por un auto en un listado, borrar, actualizar y dar
de alta
• Partir de función ya implementada para leer
archivos*/

import RegistroAutomotor from './class-RegistroAutomotor';
import Auto from './class-Auto';
import ArchivoVehiculo from './class-ArchivoVehiculo';
import Vehiculo from './class-Vehiculo';

let archivo: ArchivoVehiculo = new ArchivoVehiculo('./info_autos.txt');
let listaVehiculos: Vehiculo[] = archivo.getListaVehiculos();

let registro1 = new RegistroAutomotor("Registro 1",listaVehiculos,"Paraguay 500");
console.log(registro1);
// registro1.actualizarVehiculo("DEF456");
// console.log(registro1.consultarAuto("BCD24"));
registro1.borrarVehiculo("BCD2");
registro1.ingresarVehiculo(new Auto("Chevrolet","Corsa","Nafta","2002","CDE345",false));
console.log(registro1);

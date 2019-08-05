import Auto from './class-Auto';
import LectorArchivo from './class-LectorArchivo';
import Vehiculo from './class-Vehiculo';
import Camion from './class-camion';
import Moto from './class-moto';

class ArchivoVehiculo {
    private lectorArchivo: LectorArchivo;

    constructor(rutaArchivo: string) {
        this.lectorArchivo = new LectorArchivo(rutaArchivo);
    }

    // private leerArchivo(rutaArchivo: string): string[] {
    //     let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
    //     let lineas: string[] = archivo.split('\n');
    //     lineas = lineas.map(linea => linea.replace('\r', ''));
    //     return lineas;
    // }

    public getListaVehiculos(): Vehiculo[] {
        let vehiculos: string[] = this.lectorArchivo.leerArchivo();
        let arrVehiculos: Vehiculo[] = new Array(vehiculos.length);
        for (let index: number = 0; index < vehiculos.length; index++) {
            let txtVehiculo: string[] = vehiculos[index].split(",");
            let unVehiculo: Vehiculo;
            switch (txtVehiculo[0]) {
                case "Auto":
                    unVehiculo = new Auto(txtVehiculo[1], txtVehiculo[2], txtVehiculo[3], txtVehiculo[4], txtVehiculo[5],false);
                    break;
                case "Camion":
                    unVehiculo = new Camion(txtVehiculo[1], txtVehiculo[2], txtVehiculo[3], txtVehiculo[4], txtVehiculo[5],"0","0","0");
                    break;
                case "Moto":
                    unVehiculo = new Moto(txtVehiculo[1], txtVehiculo[2], txtVehiculo[3], txtVehiculo[4], txtVehiculo[5],true);
                    break;
                default:
                    break;
            }
            arrVehiculos[index] = unVehiculo;
        }
        return arrVehiculos;
    }
}

export default ArchivoVehiculo;
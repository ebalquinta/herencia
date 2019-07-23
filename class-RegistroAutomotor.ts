import Vehiculo from "./class-Vehiculo";
import * as readlineSync from 'readline-sync';

class RegistroAutomotor {
    private nombre: string;
    private direccion: string;
    private listaVehiculos: Vehiculo[];

    constructor(nombre: string, listaVehiculos: Vehiculo[], direccion?: string) {
        this.nombre = nombre;
        this.listaVehiculos = listaVehiculos;
        if (direccion == undefined) {
            this.direccion = "S/D";
        } else {
            this.direccion = direccion;
        }
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public getListaVehiculos(): Vehiculo[] {
        return this.listaVehiculos;
    }

    private buscarVehiculo(dominio: string): number {
        let result: number = -1;
        for (let index: number = 0; index < this.listaVehiculos.length; index++) {
            if (dominio == this.listaVehiculos[index].getDominio()) {
                result = index;
                break;
            }
        }
        return result;
    }

    public consultarVehiculo(dominio: string): Vehiculo {
        let resultVehiculo: Vehiculo = null;
        if (this.buscarVehiculo(dominio) != -1) {
            console.log("dominio:", dominio, "encontrado: ");
            resultVehiculo = this.listaVehiculos[this.buscarVehiculo(dominio)];
        } else
            console.log("dominio:", dominio, "no encontrado");
        return resultVehiculo;
    }

    public borrarAuto(dominio: string): void {
        if (this.buscarVehiculo(dominio) != -1) {
            let index: number = this.buscarVehiculo(dominio);
            this.listaVehiculos.splice(index, 1);
            console.log("dominio:", dominio, "eliminado");
        } else {
            console.log("dominio:", dominio, "no encontrado");
        }
    }

    private updateLine(txt: string, infoVehiculo: string): string {
        let entradaTxt: string = readlineSync.question(txt);
        if ((entradaTxt == '') || (entradaTxt == ' ') || (entradaTxt == infoVehiculo))
            return infoVehiculo;
        else return entradaTxt;
    }

    private update(vehiculo: Vehiculo): Vehiculo {
        let updateVehiculo: Vehiculo = new Vehiculo();
        updateVehiculo.setMarca(this.updateLine("ingrese nueva marca: ", vehiculo.getMarca()));
        updateVehiculo.setModelo(this.updateLine("ingrese nuevo modelo: ", vehiculo.getModelo()));
        updateVehiculo.setCombustible(this.updateLine("ingrese nuevo combustible: ", vehiculo.getCombustible()));
        updateVehiculo.setAnio(this.updateLine("ingrese nuevo anio: ", vehiculo.getAnio()));
        updateVehiculo.setDominio(this.updateLine("ingrese nuevo dominio: ", vehiculo.getDominio()));
        return updateVehiculo;
    }

    public actualizarVehiculo(dominio: string): void {
        if (this.buscarVehiculo(dominio) != -1) {
            console.log("dominio ", dominio, " encontrado:");
            let index = this.buscarVehiculo(dominio);
            let resultAuto: Vehiculo = this.listaVehiculos[index];
            this.listaVehiculos[index] = this.update(resultAuto);
            console.log("dominio:", dominio, "actualizado");
        } else
            console.log("dominio:", dominio, "no encontrado");
    }

    public ingresarVehiculo(vehiculo: Vehiculo): boolean {
        if (this.consultarVehiculo(vehiculo.getDominio()) != null) {
            console.log("auto duplicado, no añadido");
            return false;
        } else {
            this.listaVehiculos.push(vehiculo);
            console.log("auto nuevo añadido");
            return true;
        }
    }
}

export default RegistroAutomotor;
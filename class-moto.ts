import Vehiculo from "./class-Vehiculo";

export default class Moto extends Vehiculo {
    private limitador: boolean;

    public constructor(marca?: string, modelo?: string, combustible?: string, anio?: string, dominio?: string, limitador?: boolean) {
        super(marca, modelo, combustible, anio, dominio);
        this.limitador = limitador;
    }

    public isLimitador(): boolean {
        return this.limitador;
    }
}
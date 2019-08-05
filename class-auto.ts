import Vehiculo from "./class-Vehiculo";

export default class Auto extends Vehiculo {

    private descapotable: boolean;

    public constructor(marca?: string, modelo?: string, combustible?: string, anio?: string, dominio?: string, descapotable?: boolean) {
        super(marca, modelo, combustible, anio, dominio);
        this.descapotable = descapotable;
    }

    public isDescapotable(): boolean {
        return this.descapotable;
    }
}



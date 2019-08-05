import Vehiculo from "./class-Vehiculo";

export default class Camion extends Vehiculo {
    private ejes: string;
    private carga: string;
    private tara: string;

    public constructor(marca?: string, modelo?: string, combustible?: string, anio?: string, dominio?: string, ejes?: string, tara?: string, carga?: string) {
        super(marca, modelo, combustible, anio, dominio);
        this.ejes = ejes;
        this.carga = carga;
        this.tara = tara;
    }

    public setEjes(ejes: string): void {
        this.ejes = ejes;
    }

    public getEjes(): string {
        return this.ejes;
    }

    public setCarga(carga: string): void {
        this.carga = carga;
    }

    public getCarga(): string {
        return this.carga;
    }

    public setTara(tara: string): void {
        this.tara = tara;
    }

    public getTara(): string {
        return this.tara;
    }
}
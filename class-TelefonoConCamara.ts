import * as readlineSync from 'readline-sync';
import Telefono from "./class-Telefono";

export default class TelefonoConCamara extends Telefono {
    private camaraOnOff: boolean;
    private flash: boolean;

    public constructor(numero: number, estaPrendido: boolean, bateriaActual: number) {
        super(numero, estaPrendido, bateriaActual);
        this.camaraOnOff = false;
        this.flash = false;
    }

    public prenderApagar(): void {
        if (this.estaPrendido) {
            if (this.flash) this.flash = false;
            this.estaPrendido = false;
            console.log("Apagando celular Con Camara...");
        } else 
            this.estaPrendido = true;
            console.log("Encendiendo celular Con Camara...");
    }

    public sacarFoto(): void {
        let entrada: string;
        if (this.isPrendido()) {
            this.camaraOnOff = true;
            console.log("Cámara encendida");
            if (!this.flash) {
                console.log("Flash apagado");
                entrada = readlineSync.question("encender flash(S/N)");
                while (entrada.toLowerCase() != "s" && entrada.toLowerCase() != "n")
                    entrada = readlineSync.question("encender flash(S/N)");
                if (entrada.toLowerCase() == "s")
                    this.flash = true;
            }
            console.log("enfocando....clic");
            if (this.flash) 
                this.flash = false;
            this.camaraOnOff = false;
        } else
            console.log("Celular apagado, no se puede sacar foto");
    }

    public lightOnOff(): void {
        if (this.isPrendido()) {
            if (!this.flash) {
                this.flash = true;
                console.log("linterna encendida");
            } else {
                this.flash = false;
                console.log("linterna apagada");
            }
        } else
            console.log("Celular apagado, no se puede encender linterna");
    }
}
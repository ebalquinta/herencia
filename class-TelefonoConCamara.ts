import * as readlineSync from 'readline-sync';
import Telefono from "./class-Telefono";
import Camara from './class-Camara';

export default class TelefonoConCamara extends Telefono {
    // private camaraOnOff: boolean;
    private camara: Camara;
    // private flash: boolean;

    public constructor(numero: number, estaPrendido: boolean, bateriaActual: number) {
        super(numero, estaPrendido, bateriaActual);
        this.camara = new Camara();
        // this.flash = false;
    }

    public prenderApagar(): void {
        if (this.estaPrendido) {
            // if (this.flash) this.flash = false;
            if (this.camara.isFlashOn())
                this.camara.flashOnOff();
            this.estaPrendido = false;
            console.log("Apagando celular Con Camara...");
        } else {
            this.estaPrendido = true;
            console.log("Encendiendo celular Con Camara...");
        }
    }

    public sacarFoto(): void {
        // let entrada: string;
        if (this.isPrendido()) {
            console.log("Celular encendido:", this.isPrendido());
            // this.camaraOnOff = true;
            // console.log("Cámara encendida");
            // if (!this.flash) {
            //     console.log("Flash apagado");
            //     entrada = readlineSync.question("encender flash(S/N)");
            //     while (entrada.toLowerCase() != "s" && entrada.toLowerCase() != "n")
            //         entrada = readlineSync.question("encender flash(S/N)");
            //     if (entrada.toLowerCase() == "s")
            //         this.flash = true;
            // }
            // console.log("enfocando....clic");
            // if (this.flash) 
            //     this.flash = false;
            // this.camaraOnOff = false;
            this.camara.sacarFoto();
        } else
            console.log("Celular encendido:", this.isPrendido(), ". NO se puede tomar foto.");
    }

    public lightOnOff(): void {
        if (this.isPrendido()) {
            // if (!this.flash) {
            //     this.flash = true;
            //     console.log("linterna encendida");
            // } else {
            //     this.flash = false;
            //     console.log("linterna apagada");
            // }
            console.log("Celular encendido:", this.isPrendido());
            this.camara.flashOnOff();
            console.log("linterna encendida:", this.camara.isFlashOn());
        } else
            // console.log("Celular apagado, no se puede encender linterna");
            console.log("Celular encendido:", this.isPrendido(), ". NO se puede encender linterna.");
    }
}
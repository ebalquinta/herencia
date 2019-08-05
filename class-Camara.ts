import * as readlineSync from 'readline-sync';

export default class Camara {
    private flash: boolean;
    private onOff: boolean;

    public constructor() {
        this.flash = false;
        this.onOff = false;
    }

    public isOn(): boolean {
        return this.onOff;
    }

    public setOnOff(): void {
        if (this.onOff)
            this.onOff = false;
        else
            this.onOff = true;
    }

    public isFlashOn(): boolean {
        return this.flash;
    }

    public sacarFoto(): void {
        let entrada: string;
        entrada = readlineSync.question("Tomar foto(S/N)");
        while (entrada.toLowerCase() != "s" && entrada.toLowerCase() != "n")
            entrada = readlineSync.question("Tomar foto(S/N)");
        while (entrada.toLocaleLowerCase() == "s") {
            this.setOnOff();
            console.log("Camara encendida");
            if (!this.isFlashOn) {
                console.log("Flash apagado");
                entrada = readlineSync.question("encender flash(S/N)");
                while (entrada.toLowerCase() != "s" && entrada.toLowerCase() != "n")
                    entrada = readlineSync.question("encender flash(S/N)");
                if (entrada.toLowerCase() == "s")
                    this.flash = true;
            }
            console.log("enfocando....clic");
            if (this.isFlashOn())
                this.flash = false;
            entrada = readlineSync.question("Tomar otra foto(S/N)");
            while (entrada.toLowerCase() != "s" && entrada.toLowerCase() != "n")
                entrada = readlineSync.question("Tomar otra foto(S/N)");
        }
        this.setOnOff();
        console.log("Camara apagada");
    }
}
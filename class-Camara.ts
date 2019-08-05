import * as readlineSync from 'readline-sync';

export default class Camara {
    private onOff: boolean;
    private flash: boolean;

    public constructor() {
        this.onOff = false;
        this.flash = false;
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

    public flashOnOff(): void {
        if (this.flash)
            this.flash = false;
        else
            this.flash = true;
    }

    public sacarFoto(): void {
        let entrada: string;
        if (!this.isOn())
            this.setOnOff();
        console.log("Camara encendida:", this.isOn());
        entrada = readlineSync.question("Tomar foto(S/N)");
        while (entrada.toLowerCase() != "s" && entrada.toLowerCase() != "n")
            entrada = readlineSync.question("Tomar foto(S/N)");
        while (entrada.toLocaleLowerCase() == "s") {
            if (!this.isFlashOn()) {
                console.log("Flash apagado");
                entrada = readlineSync.question("encender flash(S/N)");
                while (entrada.toLowerCase() != "s" && entrada.toLowerCase() != "n")
                    entrada = readlineSync.question("encender flash(S/N)");
                if (entrada.toLowerCase() == "s")
                    this.flash = true;
            }
            console.log("flash:", this.isFlashOn(), ". Enfocando....clic");
            if (this.isFlashOn())
                this.flash = false;
            entrada = readlineSync.question("Tomar otra foto(S/N)");
            while (entrada.toLowerCase() != "s" && entrada.toLowerCase() != "n")
                entrada = readlineSync.question("Tomar otra foto(S/N)");
        }
        this.setOnOff();
        console.log("Camara encendida:", this.isOn());
    }
}
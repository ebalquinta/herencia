import Telefono from "./class-Telefono";
const inicial: number = 86;
const final: number = 108;

export default class TelefonoConRadio extends Telefono {
    private radioOnOff: boolean;
    private volumen: number;
    private frecuenciaActual: number;

    public constructor(numero: number, estaPrendido: boolean, bateriaActual: number) {
        super(numero, estaPrendido, bateriaActual);
        this.radioOnOff = false;
        this.frecuenciaActual = inicial;
        this.volumen = 0;
    }

    public prenderApagar(): void {
        if (this.estaPrendido) {
            if (this.radioOnOff) {
                this.volumen = 0;
                this.radioOnOff = false;
            }
            this.estaPrendido = false;
            console.log("Apagando celular Con Radio...");
        } else 
            this.estaPrendido = true;
            console.log("Encendiendo celular Con Radio...");
    }

    public encenderRadio(): void {
        if (this.isPrendido()) {
            if (!this.radioOnOff) {
                this.radioOnOff = true;
                this.volumen = 50;
                console.log("radio encendida");
            } else {
                this.radioOnOff = false;
                console.log("radio apagada");
            }
        } else
            console.log("Celular apagado, no se puede encender radio");
    }

    public subirVolumen(): void {
        if (this.isPrendido()) {
            if (this.radioOnOff) {
                if (this.volumen < 100)
                    this.volumen++;
                else
                    console.log("volumen máximo");
            } else
                console.log("Radio apagada, no se puede subir volumen");
        } else
            console.log("Celular apagado, no se puede subir volumen");
    }

    public bajarVolumen(): void {
        if (this.isPrendido()) {
            if (this.radioOnOff) {
                if (0 < this.volumen)
                    this.volumen--;
                else
                    console.log("volumen mínimo");
            } else
                console.log("Radio apagada, no se puede bajar volumen");
        } else
            console.log("Celular apagado, no se puede bajar volumen");
    }

    public verFrecuenciaActual(): void {
        if (this.isPrendido())
            if (this.radioOnOff)
                console.log(this.frecuenciaActual.toString());
            else
                console.log("Radio apagada, no se puede ver frecuencia");
        else
            console.log("Celular apagado, no se puede ver frecuencia");
    }

    public subirFrecuenciaActual(): void {
        if (this.isPrendido())
            if (this.radioOnOff) {
                if (this.frecuenciaActual < 108)
                    this.frecuenciaActual++;
                else
                    this.frecuenciaActual = inicial;
                console.log("frecuencia subida a: ", this.frecuenciaActual);
            } else
                console.log("Radio apagada, no se puede cambiar frecuencia");
        else
            console.log("Celular apagado, no se puede subir frecuencia");

    }

    public bajarFrecuenciaActual(): void {
        if (this.isPrendido())
            if (this.radioOnOff) {
                if (85.9 < this.frecuenciaActual)
                    this.frecuenciaActual--;
                else
                    this.frecuenciaActual = final;
                console.log("frecuencia bajada a: ", this.frecuenciaActual);
            } else
                console.log("Radio apagada, no se puede cambiar frecuencia");
        else
            console.log("Celular apagado, no se puede bajar frecuencia");

    }
}
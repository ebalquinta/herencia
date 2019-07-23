import LectorArchivo from './class-LectorArchivo';

export default class Telefono {
    protected numero: number;
    protected estaPrendido: boolean;
    protected bateriaActual: number;

    public constructor(numero: number, estaPrendido: boolean, bateriaActual: number) {
        this.numero = numero;
        this.estaPrendido = estaPrendido;
        this.bateriaActual = bateriaActual;
    }

    public getNumero(): number {
        return this.numero;
    }

    public isPrendido(): boolean {
        return this.estaPrendido;
    }

    public prenderApagar(): void {
        if (this.estaPrendido) this.estaPrendido = false;
        else this.estaPrendido = true;
    }

    public getBateriaActual(): number {
        return this.bateriaActual;
    }

    public loadBateriaActual(): void {
        if (this.bateriaActual < 100)
            this.bateriaActual++;
        else
            console.log("Batería llena");
    }

    public unloadBateriaActual(): void {
        if (this.bateriaActual > 0)
            this.bateriaActual--;
        else 
            console.log("Batería vacía");
    }

    public mandarMensaje(txt: string): void {
        if (this.estaPrendido && this.bateriaActual > 0) {
            let lectorArchivo: LectorArchivo = new LectorArchivo(txt);
            let sms: string[] = lectorArchivo.leerArchivo();
            sms = sms[0].split('|');
            console.log("Numero destino: ", sms[0]);
            console.log("Mensaje enviado: ", sms[1]);
        } else
            console.log("Mensaje no enviado");
    }

    public hacerLlamada(telDestino: Telefono): void {
        if (this.estaPrendido && this.bateriaActual > 0) {
            console.log("Numero destino: ", telDestino.numero);

        }
    }
}

// let lectorArchivo: LectorArchivo = new LectorArchivo('./SMS.txt');
// let sms: string[] = lectorArchivo.leerArchivo();
// sms = sms[0].split('|');
// console.log(sms);

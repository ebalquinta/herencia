import * as fs from 'fs';

class LectorArchivo {
    private rutaArchivo: string;

    constructor(rutaArchivo: string) {
        this.rutaArchivo = rutaArchivo;
    }

    public setRutaArchivo(rutaArchivo: string): void {
        this.rutaArchivo = rutaArchivo;
    }

    public getRutaArchivo(): string {
        return this.rutaArchivo;
    }

    public leerArchivo(): string[] {
        let archivo: string = fs.readFileSync(this.rutaArchivo, 'utf8');
        let lineas: string[] = archivo.split('\n');
        lineas = lineas.map(linea => linea.replace('\r', ''));
        return lineas;
    }
}

export default LectorArchivo;
import { producto } from "./producto";
import { generarId } from "./funcion-id/ids";

export class proovedor {
    private nombre: string;
    private id: number;
    private telefono: number;
    private inventario: producto[];

    constructor(nombre: string, telefono: number) {
        this.nombre = nombre;
        this.id = generarId();
        this.telefono = telefono;
        this.inventario = this.crearInventario();
    }

    private crearInventario(): producto[] {
        return [
            new producto("Alimento para perro 3kg", 3, 3000),
            new producto("Alimento para perro 15kg", 15, 10000),
            new producto("Alimento para gatos 3kg", 3, 3000),
            new producto("Alimento para gatos 7kg", 7, 7000),
            new producto("Correa para perro", 1, 3000),
            new producto("Correa para gato", 1, 2500)
        ]
    }
    //Getters
    getNombre(): string {
        return this.nombre
    }
    getId(): number {
        return this.id;
    }

    getTelefono(): number {
        return this.telefono;
    }

    getInventario(): producto[] {
        return this.inventario;
    }

    //Setters
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setTelefono(telefono: number): void {
        this.telefono = telefono
    }
}
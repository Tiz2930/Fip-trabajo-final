export class producto {
    private nombre: string;
    private cantidad: number;
    private precio: number;

    constructor(nombre: string, cantidad: number, precio: number) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    //Getters

    getNombre(): string {
        return this.nombre;
    }

    getPrecio(): number {
        return this.precio
    }
}
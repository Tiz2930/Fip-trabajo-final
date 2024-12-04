import { veterinaria } from './veterinaria'; 


export class redVeteriniaria {

    private nombre: string;
    private veterinarias: veterinaria[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    agregarVeterinaria(nombre: string, ubicacion: string): void {
        const nuevaVeterinaria = new veterinaria(nombre, ubicacion);
        this.veterinarias.push(nuevaVeterinaria);
    }

    eliminarVeterinaria(nombre: string): void {
        const i = this.veterinarias.findIndex(veteri => veteri.getNombre().toLocaleLowerCase() === nombre.toLocaleLowerCase());

        if (i > -1) {
            this.veterinarias.splice(i, 1);
        } else {
            console.log("El nombre ingresado no pertenece a ninguna veterinaria");
        }
    }
    mostrarVeterinaria(): void {
        if (this.veterinarias.length === 0) {
            console.log("No hay veterinarias registradas");
            return
        }
        this.veterinarias.forEach((veterinaria, i) => {
            console.log(`${i + 1} - ${veterinaria.getNombre()} (${veterinaria.getUbicacion()})`);
        })
    }

    //Getters

    getNombre(): string {
        return this.nombre;
    }

    getVeterinarias(): veterinaria[] {
        return this.veterinarias;
    }

    //Setters

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
}
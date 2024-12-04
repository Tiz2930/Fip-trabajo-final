export class paciente {
    private nombre: string;
    private especie: string;
    private idDueño: number;
    private edad: number;

    constructor(nombre: string, especie: string, idDueño: number, edad: number) {
        this.nombre = nombre;
        this.especie = especie;
        this.idDueño = idDueño;
        this.edad = edad;
        this.clasificarEspecie();
    }

    //Metodos
    clasificarEspecie(): void {
        if (this.especie.toLowerCase() !== "perro" && this.especie.toLowerCase() !== "gato") {
            this.especie = "Exótico";
        }
    }

    obtenerInformacion(): string {
        return `Nombre: ${this.nombre}, Especie: ${this.especie}, Edad: ${this.edad} años, ID del Dueño: ${this.idDueño}`;
    }

    //Getters

    getNombre(): string {
        return this.nombre
    }

    getEspecie(): string {
        return this.especie
    }

    getEdad(): number {
        return this.edad
    }

    getidDueño(): number {
        return this.idDueño
    }

    //Setters

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setEspecie(especie: string): void {
        this.especie = especie;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }
}
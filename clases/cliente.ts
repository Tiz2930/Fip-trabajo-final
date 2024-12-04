import { paciente } from "./paciente";
import { veterinaria } from "./veterinaria";
import { generarId } from "./funcion-id/ids";

export class cliente {
    private nombre: string;
    private readonly id: number;
    private vip: boolean = false;
    private telefono: number;
    private visitasTotal: number = 0;
    private veterinaria: veterinaria;
    private pacientes: paciente[] = [];

    constructor(nombre: string, telefono: number, veterinaria: veterinaria) {
        this.nombre = nombre;
        this.id = generarId();
        this.telefono = telefono;
        this.veterinaria = veterinaria
    }

    public realizarVisita(paciente: paciente) {
        this.visitasTotal += 1;
        console.log(this.getNombre() + "realizo un visita con" + paciente.getNombre());


        if (this.visitasTotal === 5) {
            this.vip = true;
            console.log("El cliente" + this.nombre + "ahora es VIP");

        }
    }
    public agregarPaciente(nombre: string, especie: string, edad: number): void {
        const nuevoPaciente = new paciente(nombre, especie, edad, this.getId());
        this.pacientes.push(nuevoPaciente);
        this.veterinaria.agregarPaciente(nuevoPaciente);
    }

    mostrarPaciente(): void {
        this.pacientes.forEach(paciente => {
            console.log(`Nombre: ${paciente.getNombre()}, Edad: ${paciente.getEdad()}, Especie: ${paciente.getEspecie()}, ID del dueño: ${paciente.getidDueño()}`);
        });
    }

    eliminarPaciente(nombre: string): void {
        const i = this.pacientes.findIndex((paciente) => paciente.getNombre() === nombre);

        const pacienteAEliminar = this.pacientes[i]

        if (i > -1) {
            this.pacientes.splice(i, 1);
            this.veterinaria.eliminarPaciente(pacienteAEliminar);
            console.log("Paciente eliminado");
        } else {
            console.log("El nombre ingresado no pertenece a ningun paciente");
        }
    }

    //Getters
    getNombre(): string {
        return this.nombre
    }

    getId(): number {
        return this.id
    }

    getVip(): boolean {
        return this.vip
    }

    getTelefono(): number {
        return this.telefono
    }

    getVisitasTotal(): number {
        return this.visitasTotal
    }

    getPacientes(): paciente[] {
        return this.pacientes
    }

    //Setters

    public setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }

    public setTelefono(nuevoTelefono: number): void {
        this.telefono = nuevoTelefono;
    }
}
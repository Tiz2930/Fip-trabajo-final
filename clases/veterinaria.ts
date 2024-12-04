import { generarId } from "./funcion-id/ids";
import { cliente } from "./cliente";
import { proovedor } from "./proovedor";
import { paciente } from "./paciente";

export class veterinaria {
    private nombre: string;
    private ubicacion: string;
    private id: number;
    private proovedores: proovedor[] = [];
    private paciente: paciente[] = [];
    private cliente: cliente[] = [];

    constructor(nombre: string, ubicacion: string) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.id = generarId()
    }

    //Metodos proovedor

    agregarProovedor(nombre: string, telefono: number): void {
        let nuevoProovedor = new proovedor(nombre, telefono);

        while (this.proovedores.some((proovedor) => proovedor.getId() === nuevoProovedor.getId())) {
            nuevoProovedor = new proovedor(nombre, telefono);
        }
        this.proovedores.push(nuevoProovedor);
        console.log(`Nuevo proovedor agregado: ${nombre} con id ${nuevoProovedor.getId()}`);
    }
    eliminarProovedor(id: number): void {
        const i = this.proovedores.findIndex((proovedor) => proovedor.getId() === id);

        if (i > -1) {
            this.proovedores.splice(i, 1);
            console.log("Proovedor eliminado")
        } else {
            console.log("El ID ingresado no pertenece a ningún proovedor");
        }
    }

    mostrarProovedor(): void {
        if (this.proovedores.length === 0) {
            console.log("No hay proovedores registrados");
            return
        }
        this.proovedores.forEach((proovedor, i) => {
            console.log(`${i + 1} - Nombre: ${proovedor.getNombre()}, Telefono: ${proovedor.getTelefono()}, Id: ${proovedor.getId()}`);
        });
    }

    //Metodo clientes
    agregarCliente(nombre: string, telefono: number): void {
        let nuevoCliente = new cliente(nombre, telefono, this)

        while (this.cliente.some((cliente) => cliente.getId() === nuevoCliente.getId())) {
            nuevoCliente = new cliente(nombre, telefono, this);
        }

        this.cliente.push(nuevoCliente);
        console.log(`Agregado nuevo cliente ${nombre} con id ${nuevoCliente.getId()}`);
    }
    eliminarCliente(id: number): void {
        const i = this.cliente.findIndex((cliente) => cliente.getId() === id);
        if (i > -1) {
            this.cliente.splice(i, 1);
            console.log("Cliente eliminado");

            this.paciente = this.paciente.filter((paciente) => paciente.getidDueño() !== id);
            console.log(`Pacientes del cliente con id ${id} eliminados`);
        } else {
            console.log("El ID ingresado no pertenece a ningún cliente");
        }
    }

    mostrarClientes(): void {
        if (this.cliente.length === 0) {
            console.log("No hay clientes registrados");
            return
        }
        this.cliente.forEach((cliente, i) => {
            console.log(`${i + 1} - Nombre: ${cliente.getNombre()}, telefono: ${cliente.getTelefono()}, id: ${cliente.getId()}`);
        });
    }

    //Metodos paciente
    public agregarPaciente(paciente: paciente): void {
        this.paciente.push(paciente);
        console.log(`Agregado nuevo paciente ${paciente.getNombre()} con id ${paciente.getidDueño()}`);
    }
    eliminarPaciente(paciente: paciente): void {
        const i = this.paciente.findIndex(p => p.getNombre() === paciente.getNombre() && p.getidDueño() === p.getidDueño());

        if (i > -1) {
            this.paciente.splice(i, 1);
            console.log("Paciente eliminado");
        } else {
            console.log("El nombre ingresdo no pertenece a ningun paciente");
        }
    }
    mostrarPacientes(): void {
        if (this.paciente.length === 0) {
            console.log("No hay pacientes registrados");
            return
        }
        this.paciente.forEach((paciente, i) => {
            console.log(`${i + 1} - Nombre: ${paciente.getNombre()}, Edad: ${paciente.getEdad()}, Especie: ${paciente.getEspecie()}, ID del dueño: ${paciente.getidDueño()}`);
        })
    }

    //Getters

    getNombre(): string {
        return this.nombre;
    }

    getUbicacion(): string {
        return this.ubicacion;
    }

    getId(): number {
        return this.id;
    }
    getPacientes(): paciente[] {
        return this.paciente;
    }
    getProovedores(): proovedor[] {
        return this.proovedores;
    }

    getCliente(): cliente[] {
        return this.cliente;
    }

    //Setters

    setUbicacion(ubicacion: string): void {
        this.ubicacion = ubicacion
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
}

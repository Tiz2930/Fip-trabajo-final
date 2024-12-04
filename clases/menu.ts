import * as rls from 'readline-sync';

import { redVeteriniaria } from './redVeterinaria';
import { cliente } from './cliente';
import { veterinaria } from './veterinaria';

class Menu {
    private redVeterinarias = new redVeteriniaria("San Jose");
    private salir: boolean = false;

    // Menú principal
    mostrarMenu(): void {
        let opcion: number;

        do {
            console.clear();
            console.log("╔════════════════════════════════════╗");
            console.log("║       Veterinarias San Jose        ║");
            console.log("╚════════════════════════════════════╝");
            console.log("  1️⃣  📋 Ver lista de veterinarias");
            console.log("  2️⃣  ➕ Registrar una veterinaria");
            console.log("  3️⃣  ❌ Eliminar una veterinaria");
            console.log("  0️⃣  🚪 Salir");
            console.log("══════════════════════════════════════");

            opcion = rls.questionInt("Seleccione una opcion: ");

            switch (opcion) {
                case 1:
                    this.verVeterinarias();
                    break;
                case 2:
                    this.registrarVeterinaria();
                    break;
                case 3:
                    this.eliminarVeterinaria();
                    break;
                case 0:
                    console.log("\n👋 Gracias por usar nuestro sistema. ¡Hasta pronto!");
                    this.salir = true;
                    break;
                default:
                    console.log("❌ Opción no válida. Intente nuevamente.");
            }
        } while (!this.salir);
    }

    // Mostrar lista de veterinarias y gestionar una en detalle
    verVeterinarias(): void {
        let opcionVeterinaria: number;

        do {
            console.clear();
            console.log("╔════════════════════════════════════╗");
            console.log("║       Veterinarias Registradas     ║");
            console.log("╚════════════════════════════════════╝");
            this.redVeterinarias.mostrarVeterinaria();
            console.log("\n  1️⃣  Agregar Nueva Veterinaria");
            console.log("  2️⃣  Eliminar Veterinaria");
            console.log("  3️⃣  Ver Detalles de Veterinaria");
            console.log("  0️⃣  🔙 Volver al Menú Principal");
            console.log("══════════════════════════════════════");

            opcionVeterinaria = rls.questionInt("Seleccione una opcion para gestionar una veterinaria o 0 para volver: ");

            if (opcionVeterinaria === 0) return;
            if (opcionVeterinaria > 0 && opcionVeterinaria <= this.redVeterinarias.getVeterinarias().length) {
                const veterinaria = this.redVeterinarias.getVeterinarias()[opcionVeterinaria - 1];
                this.gestionarVeterinaria(veterinaria);
            } else {
                console.log("❌ Opción no válida. Intente nuevamente.");
            }
        } while (true);
    }

    // Registrar nueva veterinaria
    registrarVeterinaria(): void {
        console.clear();
        console.log("╔════════════════════════════════════╗");
        console.log("║    Registro de Nueva Veterinaria   ║");
        console.log("╚════════════════════════════════════╝");

        const nombre = rls.question("Ingrese el nombre de la veterinaria: ");
        const ubicacion = rls.question("Ingrese la ubicación de la veterinaria: ");
        this.redVeterinarias.agregarVeterinaria(nombre, ubicacion);

        console.log(`✅ Veterinaria '${nombre}' registrada exitosamente.`);
        rls.question("Presione Enter para continuar...");
    }

    // Eliminar una veterinaria
    eliminarVeterinaria(): void {
        console.clear();
        console.log("╔════════════════════════════════════╗");
        console.log("║         Eliminar Veterinaria       ║");
        console.log("╚════════════════════════════════════╝");

        const nombre = rls.question("Ingrese el nombre de la veterinaria a eliminar: ");
        this.redVeterinarias.eliminarVeterinaria(nombre);
    }

    // Gestión de veterinaria
    gestionarVeterinaria(veterinaria: veterinaria): void {
        let opcionGestion: number;

        do {
            console.clear();
            console.log(`╔════════════════════════════════════╗`);
            console.log(`║   Gestión de Veterinaria: ${veterinaria.getNombre()}   ║`);
            console.log(`╚════════════════════════════════════╝`);
            console.log("  1️⃣  👩‍⚕️ Gestionar clientes");
            console.log("  2️⃣  🐱 Gestionar pacientes");
            console.log("  3️⃣  🛠️ Gestionar proveedores");
            console.log("  0️⃣  🔙 Volver");
            console.log("══════════════════════════════════════");

            opcionGestion = rls.questionInt("Seleccione una opcion: ");

            switch (opcionGestion) {
                case 1:
                    this.gestionarClientes(veterinaria);
                    break;
                case 2:
                    this.gestionarPacientes(veterinaria);
                    break;
                case 3:
                    this.gestionarProovedores(veterinaria);
                    break;
                case 0:
                    return;
                default:
                    console.log("❌ Opcion no válida. Intente nuevamente.");
            }
        } while (true);
    }

    gestionarClientes(veterinaria: veterinaria): void {
        let opcion: number;

        do {
            console.clear();
            console.log("\n---- Gestionar Clientes ----");
            console.log("1- ➕ Añadir cliente");
            console.log("2- ❌ Eliminar cliente");
            console.log("3- 📋 Mostrar clientes");
            console.log("4- 🐾 Registrar visita con su mascota");
            console.log("0- 🔙 Volver");

            opcion = rls.questionInt("Seleccione una opcion: ");

            switch (opcion) {
                case 1:
                    this.anadirCliente(veterinaria);
                    break;
                case 2:
                    this.eliminarCliente(veterinaria);
                    break;
                case 3:
                    veterinaria.mostrarClientes();
                    break;
                case 4:
                    this.registrarVisita(veterinaria);
                    break;
                case 0:
                    console.log("Volviendo...");
                    return;
                default:
                    console.log("Opcion no válida. Intente nuevamente.");
            }
        } while (true);
    }

    // Añadir cliente
    anadirCliente(veterinaria: veterinaria): void {
        const nombre = rls.question("Ingrese el nombre del cliente: ");
        const telefono = rls.questionInt("Ingrese el telefono del cliente: ");
        veterinaria.agregarCliente(nombre, telefono);
    }

    // Eliminar cliente
    eliminarCliente(veterinaria: veterinaria): void {
        const id = rls.questionInt("Ingrese el ID del cliente a eliminar: ");
        veterinaria.eliminarCliente(id);
    }

    // Hacer una visita
    registrarVisita(veterinaria: veterinaria): void {
        console.log("\n---- Registrar Visita ----");

        // Mostrar clientes disponibles
        if (veterinaria.getCliente().length === 0) {
            console.log("No hay clientes registrados. Volviendo...");
            return;
        }

        veterinaria.mostrarClientes();
        const clienteId = rls.questionInt("Ingrese el ID del cliente: ");

        const cliente = veterinaria.getCliente().find(cliente => cliente.getId() === clienteId);
        if (!cliente) {
            console.log("Cliente no encontrado.");
            return;
        }

        // Mostrar pacientes del cliente seleccionado
        if (cliente.getPacientes().length === 0) {
            console.log("No hay pacientes registrados a este cliente. Volviendo...");
            return;
        }

        cliente.mostrarPaciente();
        const pacienteNombre = rls.question("Ingrese el nombre del paciente: ");

        const paciente = cliente.getPacientes().find(paciente => paciente.getNombre() === pacienteNombre);
        if (!paciente) {
            console.log("Paciente no encontrado.");
            return;
        }

        // Registrar visita
        cliente.realizarVisita(paciente);
    }


    // Gestión de pacientes
    gestionarPacientes(veterinaria: veterinaria): void {
        let opcion: number;

        do {
            console.log("\n---- Gestionar Pacientes ----");
            console.log("1- ➕ Añadir paciente");
            console.log("2- ❌ Eliminar paciente");
            console.log("3- 📋 Mostrar pacientes");
            console.log("0- 🔙 Volver");

            opcion = rls.questionInt("Seleccione una opcion: ");

            switch (opcion) {
                case 1:
                    this.anadirPaciente(veterinaria);
                    break;
                case 2:
                    this.eliminarPaciente(veterinaria);
                    break;
                case 3:
                    veterinaria.mostrarPacientes();
                    break;
                case 0:
                    console.log("Volviendo...");
                    return;
                default:
                    console.log("Opcion no válida. Intente nuevamente.");
            }
        } while (true);
    }

    // Añadir paciente
    anadirPaciente(veterinaria: veterinaria): void {
        const nombre = rls.question("Ingrese el nombre del paciente: ");
        const especie = rls.question("Ingrese la especie del paciente: ");
        const edad = rls.questionInt("Ingrese la edad del paciente: ");
        const clienteId = rls.questionInt("Ingrese el ID del cliente duenio del paciente: ");
        const cliente = veterinaria.getCliente().find(cliente => cliente.getId() === clienteId);

        if (cliente) {
            cliente.agregarPaciente(nombre, especie, edad);
        } else {
            console.log("Cliente no encontrado.");
        }
    }

    // Eliminar paciente
    eliminarPaciente(veterinaria: veterinaria): void {
        // Mostrar los clientes disponibles
        veterinaria.mostrarClientes();

        // Pedir el ID del cliente
        const idCliente = rls.questionInt("Ingrese el ID del cliente dueño del paciente a eliminar: ");
        const cliente = veterinaria.getCliente().find(cliente => cliente.getId() === idCliente);

        if (!cliente) {
            console.log("Cliente no encontrado.");
            return;
        }

        // Pedir el nombre del paciente a eliminar
        cliente.mostrarPaciente()
        const nombrePaciente = rls.question("Ingrese el nombre del paciente a eliminar: ");
        cliente.eliminarPaciente(nombrePaciente); // Usamos el método del cliente
    }


    // Gestión de proveedores
    gestionarProovedores(veterinaria: veterinaria): void {
        let opcion: number;

        do {
            console.log("\n---- Gestionar Proveedores ----");
            console.log("1- ➕ Añadir proveedor");
            console.log("2- ❌ Eliminar proveedor");
            console.log("3- 📋 Mostrar proveedores");
            console.log("0- 🔙 Volver");

            opcion = rls.questionInt("Seleccione una opcion: ");

            switch (opcion) {
                case 1:
                    this.anadirProovedor(veterinaria);
                    break;
                case 2:
                    this.eliminarProovedor(veterinaria);
                    break;
                case 3:
                    veterinaria.mostrarProovedor();
                    break;
                case 0:
                    console.log("Volviendo... ");
                    return;
                default:
                    console.log("Opcion no valida. Intente nuevamente.");
            }
        } while (true);
    }

    // Añadir proveedor
    anadirProovedor(veterinaria: veterinaria): void {
        const nombre = rls.question("Ingrese el nombre del proveedor: ");
        const telefono = rls.questionInt("Ingrese el telefono del proveedor: ");
        veterinaria.agregarProovedor(nombre, telefono);
    }

    // Eliminar proveedor
    eliminarProovedor(veterinaria: veterinaria): void {
        const id = rls.questionInt("Ingrese el ID del proveedor a eliminar: ");
        veterinaria.eliminarProovedor(id);
    }
}

// Crear instancia del menú e iniciar la interacción
const menu = new Menu();
menu.mostrarMenu();

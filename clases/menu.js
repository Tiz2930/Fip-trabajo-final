"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var redVeterinaria_1 = require("./redVeterinaria");
var Menu = /** @class */ (function () {
    function Menu() {
        this.redVeterinarias = new redVeterinaria_1.redVeteriniaria("San Jose");
        this.salir = false;
    }
    // Menú principal
    Menu.prototype.mostrarMenu = function () {
        var opcion;
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
    };
    // Mostrar lista de veterinarias y gestionar una en detalle
    Menu.prototype.verVeterinarias = function () {
        var opcionVeterinaria;
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
            if (opcionVeterinaria === 0)
                return;
            if (opcionVeterinaria > 0 && opcionVeterinaria <= this.redVeterinarias.getVeterinarias().length) {
                var veterinaria_1 = this.redVeterinarias.getVeterinarias()[opcionVeterinaria - 1];
                this.gestionarVeterinaria(veterinaria_1);
            }
            else {
                console.log("❌ Opción no válida. Intente nuevamente.");
            }
        } while (true);
    };
    // Registrar nueva veterinaria
    Menu.prototype.registrarVeterinaria = function () {
        console.clear();
        console.log("╔════════════════════════════════════╗");
        console.log("║    Registro de Nueva Veterinaria   ║");
        console.log("╚════════════════════════════════════╝");
        var nombre = rls.question("Ingrese el nombre de la veterinaria: ");
        var ubicacion = rls.question("Ingrese la ubicación de la veterinaria: ");
        this.redVeterinarias.agregarVeterinaria(nombre, ubicacion);
        console.log("\u2705 Veterinaria '".concat(nombre, "' registrada exitosamente."));
        rls.question("Presione Enter para continuar...");
    };
    // Eliminar una veterinaria
    Menu.prototype.eliminarVeterinaria = function () {
        console.clear();
        console.log("╔════════════════════════════════════╗");
        console.log("║         Eliminar Veterinaria       ║");
        console.log("╚════════════════════════════════════╝");
        var nombre = rls.question("Ingrese el nombre de la veterinaria a eliminar: ");
        this.redVeterinarias.eliminarVeterinaria(nombre);
    };
    // Gestión de veterinaria
    Menu.prototype.gestionarVeterinaria = function (veterinaria) {
        var opcionGestion;
        do {
            console.clear();
            console.log("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557");
            console.log("\u2551   Gesti\u00F3n de Veterinaria: ".concat(veterinaria.getNombre(), "   \u2551"));
            console.log("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D");
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
    };
    Menu.prototype.gestionarClientes = function (veterinaria) {
        var opcion;
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
    };
    // Añadir cliente
    Menu.prototype.anadirCliente = function (veterinaria) {
        var nombre = rls.question("Ingrese el nombre del cliente: ");
        var telefono = rls.questionInt("Ingrese el telefono del cliente: ");
        veterinaria.agregarCliente(nombre, telefono);
    };
    // Eliminar cliente
    Menu.prototype.eliminarCliente = function (veterinaria) {
        var id = rls.questionInt("Ingrese el ID del cliente a eliminar: ");
        veterinaria.eliminarCliente(id);
    };
    // Hacer una visita
    Menu.prototype.registrarVisita = function (veterinaria) {
        console.log("\n---- Registrar Visita ----");
        // Mostrar clientes disponibles
        if (veterinaria.getCliente().length === 0) {
            console.log("No hay clientes registrados. Volviendo...");
            return;
        }
        veterinaria.mostrarClientes();
        var clienteId = rls.questionInt("Ingrese el ID del cliente: ");
        var cliente = veterinaria.getCliente().find(function (cliente) { return cliente.getId() === clienteId; });
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
        var pacienteNombre = rls.question("Ingrese el nombre del paciente: ");
        var paciente = cliente.getPacientes().find(function (paciente) { return paciente.getNombre() === pacienteNombre; });
        if (!paciente) {
            console.log("Paciente no encontrado.");
            return;
        }
        // Registrar visita
        cliente.realizarVisita(paciente);
    };
    // Gestión de pacientes
    Menu.prototype.gestionarPacientes = function (veterinaria) {
        var opcion;
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
    };
    // Añadir paciente
    Menu.prototype.anadirPaciente = function (veterinaria) {
        var nombre = rls.question("Ingrese el nombre del paciente: ");
        var especie = rls.question("Ingrese la especie del paciente: ");
        var edad = rls.questionInt("Ingrese la edad del paciente: ");
        var clienteId = rls.questionInt("Ingrese el ID del cliente duenio del paciente: ");
        var cliente = veterinaria.getCliente().find(function (cliente) { return cliente.getId() === clienteId; });
        if (cliente) {
            cliente.agregarPaciente(nombre, especie, edad);
        }
        else {
            console.log("Cliente no encontrado.");
        }
    };
    // Eliminar paciente
    Menu.prototype.eliminarPaciente = function (veterinaria) {
        // Mostrar los clientes disponibles
        veterinaria.mostrarClientes();
        // Pedir el ID del cliente
        var idCliente = rls.questionInt("Ingrese el ID del cliente dueño del paciente a eliminar: ");
        var cliente = veterinaria.getCliente().find(function (cliente) { return cliente.getId() === idCliente; });
        if (!cliente) {
            console.log("Cliente no encontrado.");
            return;
        }
        // Pedir el nombre del paciente a eliminar
        cliente.mostrarPaciente();
        var nombrePaciente = rls.question("Ingrese el nombre del paciente a eliminar: ");
        cliente.eliminarPaciente(nombrePaciente); // Usamos el método del cliente
    };
    // Gestión de proveedores
    Menu.prototype.gestionarProovedores = function (veterinaria) {
        var opcion;
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
    };
    // Añadir proveedor
    Menu.prototype.anadirProovedor = function (veterinaria) {
        var nombre = rls.question("Ingrese el nombre del proveedor: ");
        var telefono = rls.questionInt("Ingrese el telefono del proveedor: ");
        veterinaria.agregarProovedor(nombre, telefono);
    };
    // Eliminar proveedor
    Menu.prototype.eliminarProovedor = function (veterinaria) {
        var id = rls.questionInt("Ingrese el ID del proveedor a eliminar: ");
        veterinaria.eliminarProovedor(id);
    };
    return Menu;
}());
// Crear instancia del menú e iniciar la interacción
var menu = new Menu();
menu.mostrarMenu();

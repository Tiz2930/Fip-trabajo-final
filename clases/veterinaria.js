"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.veterinaria = void 0;
var ids_1 = require("./funcion-id/ids");
var cliente_1 = require("./cliente");
var proovedor_1 = require("./proovedor");
var veterinaria = /** @class */ (function () {
    function veterinaria(nombre, ubicacion) {
        this.proovedores = [];
        this.paciente = [];
        this.cliente = [];
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.id = (0, ids_1.generarId)();
    }
    //Metodos proovedor
    veterinaria.prototype.agregarProovedor = function (nombre, telefono) {
        var nuevoProovedor = new proovedor_1.proovedor(nombre, telefono);
        while (this.proovedores.some(function (proovedor) { return proovedor.getId() === nuevoProovedor.getId(); })) {
            nuevoProovedor = new proovedor_1.proovedor(nombre, telefono);
        }
        this.proovedores.push(nuevoProovedor);
        console.log("Nuevo proovedor agregado: ".concat(nombre, " con id ").concat(nuevoProovedor.getId()));
    };
    veterinaria.prototype.eliminarProovedor = function (id) {
        var i = this.proovedores.findIndex(function (proovedor) { return proovedor.getId() === id; });
        if (i > -1) {
            this.proovedores.splice(i, 1);
            console.log("Proovedor eliminado");
        }
        else {
            console.log("El ID ingresado no pertenece a ningún proovedor");
        }
    };
    veterinaria.prototype.mostrarProovedor = function () {
        if (this.proovedores.length === 0) {
            console.log("No hay proovedores registrados");
            return;
        }
        this.proovedores.forEach(function (proovedor, i) {
            console.log("".concat(i + 1, " - Nombre: ").concat(proovedor.getNombre(), ", Telefono: ").concat(proovedor.getTelefono(), ", Id: ").concat(proovedor.getId()));
        });
    };
    //Metodo clientes
    veterinaria.prototype.agregarCliente = function (nombre, telefono) {
        var nuevoCliente = new cliente_1.cliente(nombre, telefono, this);
        while (this.cliente.some(function (cliente) { return cliente.getId() === nuevoCliente.getId(); })) {
            nuevoCliente = new cliente_1.cliente(nombre, telefono, this);
        }
        this.cliente.push(nuevoCliente);
        console.log("Agregado nuevo cliente ".concat(nombre, " con id ").concat(nuevoCliente.getId()));
    };
    veterinaria.prototype.eliminarCliente = function (id) {
        var i = this.cliente.findIndex(function (cliente) { return cliente.getId() === id; });
        if (i > -1) {
            this.cliente.splice(i, 1);
            console.log("Cliente eliminado");
            this.paciente = this.paciente.filter(function (paciente) { return paciente.getidDueño() !== id; });
            console.log("Pacientes del cliente con id ".concat(id, " eliminados"));
        }
        else {
            console.log("El ID ingresado no pertenece a ningún cliente");
        }
    };
    veterinaria.prototype.mostrarClientes = function () {
        if (this.cliente.length === 0) {
            console.log("No hay clientes registrados");
            return;
        }
        this.cliente.forEach(function (cliente, i) {
            console.log("".concat(i + 1, " - Nombre: ").concat(cliente.getNombre(), ", telefono: ").concat(cliente.getTelefono(), ", id: ").concat(cliente.getId()));
        });
    };
    //Metodos paciente
    veterinaria.prototype.agregarPaciente = function (paciente) {
        this.paciente.push(paciente);
        console.log("Agregado nuevo paciente ".concat(paciente.getNombre(), " con id ").concat(paciente.getidDueño()));
    };
    veterinaria.prototype.eliminarPaciente = function (paciente) {
        var i = this.paciente.findIndex(function (p) { return p.getNombre() === paciente.getNombre() && p.getidDueño() === p.getidDueño(); });
        if (i > -1) {
            this.paciente.splice(i, 1);
            console.log("Paciente eliminado");
        }
        else {
            console.log("El nombre ingresdo no pertenece a ningun paciente");
        }
    };
    veterinaria.prototype.mostrarPacientes = function () {
        if (this.paciente.length === 0) {
            console.log("No hay pacientes registrados");
            return;
        }
        this.paciente.forEach(function (paciente, i) {
            console.log("".concat(i + 1, " - Nombre: ").concat(paciente.getNombre(), ", Edad: ").concat(paciente.getEdad(), ", Especie: ").concat(paciente.getEspecie(), ", ID del due\u00F1o: ").concat(paciente.getidDueño()));
        });
    };
    //Getters
    veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    veterinaria.prototype.getUbicacion = function () {
        return this.ubicacion;
    };
    veterinaria.prototype.getId = function () {
        return this.id;
    };
    veterinaria.prototype.getPacientes = function () {
        return this.paciente;
    };
    veterinaria.prototype.getProovedores = function () {
        return this.proovedores;
    };
    veterinaria.prototype.getCliente = function () {
        return this.cliente;
    };
    //Setters
    veterinaria.prototype.setUbicacion = function (ubicacion) {
        this.ubicacion = ubicacion;
    };
    veterinaria.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return veterinaria;
}());
exports.veterinaria = veterinaria;

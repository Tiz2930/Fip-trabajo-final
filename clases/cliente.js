"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliente = void 0;
var paciente_1 = require("./paciente");
var ids_1 = require("./funcion-id/ids");
var cliente = /** @class */ (function () {
    function cliente(nombre, telefono, veterinaria) {
        this.vip = false;
        this.visitasTotal = 0;
        this.pacientes = [];
        this.nombre = nombre;
        this.id = (0, ids_1.generarId)();
        this.telefono = telefono;
        this.veterinaria = veterinaria;
    }
    cliente.prototype.realizarVisita = function (paciente) {
        this.visitasTotal += 1;
        console.log(this.getNombre() + "realizo un visita con" + paciente.getNombre());
        if (this.visitasTotal === 5) {
            this.vip = true;
            console.log("El cliente" + this.nombre + "ahora es VIP");
        }
    };
    cliente.prototype.agregarPaciente = function (nombre, especie, edad) {
        var nuevoPaciente = new paciente_1.paciente(nombre, especie, edad, this.getId());
        this.pacientes.push(nuevoPaciente);
        this.veterinaria.agregarPaciente(nuevoPaciente);
    };
    cliente.prototype.mostrarPaciente = function () {
        this.pacientes.forEach(function (paciente) {
            console.log("Nombre: ".concat(paciente.getNombre(), ", Edad: ").concat(paciente.getEdad(), ", Especie: ").concat(paciente.getEspecie(), ", ID del due\u00F1o: ").concat(paciente.getidDueño()));
        });
    };
    cliente.prototype.eliminarPaciente = function (nombre) {
        var i = this.pacientes.findIndex(function (paciente) { return paciente.getNombre() === nombre; });
        var pacienteAEliminar = this.pacientes[i];
        if (i > -1) {
            this.pacientes.splice(i, 1);
            this.veterinaria.eliminarPaciente(pacienteAEliminar);
            console.log("Paciente eliminado");
        }
        else {
            console.log("El nombre ingresado no pertenece a ningun paciente");
        }
    };
    //Getters
    cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    cliente.prototype.getId = function () {
        return this.id;
    };
    cliente.prototype.getVip = function () {
        return this.vip;
    };
    cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    cliente.prototype.getVisitasTotal = function () {
        return this.visitasTotal;
    };
    cliente.prototype.getPacientes = function () {
        return this.pacientes;
    };
    //Setters
    cliente.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    cliente.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    return cliente;
}());
exports.cliente = cliente;

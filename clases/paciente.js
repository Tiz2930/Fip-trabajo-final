"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paciente = void 0;
var paciente = /** @class */ (function () {
    function paciente(nombre, especie, idDueño, edad) {
        this.nombre = nombre;
        this.especie = especie;
        this.idDueño = idDueño;
        this.edad = edad;
        this.clasificarEspecie();
    }
    //Metodos
    paciente.prototype.clasificarEspecie = function () {
        if (this.especie.toLowerCase() !== "perro" && this.especie.toLowerCase() !== "gato") {
            this.especie = "Exótico";
        }
    };
    paciente.prototype.obtenerInformacion = function () {
        return "Nombre: ".concat(this.nombre, ", Especie: ").concat(this.especie, ", Edad: ").concat(this.edad, " a\u00F1os, ID del Due\u00F1o: ").concat(this.idDueño);
    };
    //Getters
    paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    paciente.prototype.getEdad = function () {
        return this.edad;
    };
    paciente.prototype.getidDueño = function () {
        return this.idDueño;
    };
    //Setters
    paciente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    paciente.prototype.setEspecie = function (especie) {
        this.especie = especie;
    };
    paciente.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    return paciente;
}());
exports.paciente = paciente;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redVeteriniaria = void 0;
var veterinaria_1 = require("./veterinaria");
var redVeteriniaria = /** @class */ (function () {
    function redVeteriniaria(nombre) {
        this.veterinarias = [];
        this.nombre = nombre;
    }
    redVeteriniaria.prototype.agregarVeterinaria = function (nombre, ubicacion) {
        var nuevaVeterinaria = new veterinaria_1.veterinaria(nombre, ubicacion);
        this.veterinarias.push(nuevaVeterinaria);
    };
    redVeteriniaria.prototype.eliminarVeterinaria = function (nombre) {
        var i = this.veterinarias.findIndex(function (veteri) { return veteri.getNombre().toLocaleLowerCase() === nombre.toLocaleLowerCase(); });
        if (i > -1) {
            this.veterinarias.splice(i, 1);
        }
        else {
            console.log("El nombre ingresado no pertenece a ninguna veterinaria");
        }
    };
    redVeteriniaria.prototype.mostrarVeterinaria = function () {
        if (this.veterinarias.length === 0) {
            console.log("No hay veterinarias registradas");
            return;
        }
        this.veterinarias.forEach(function (veterinaria, i) {
            console.log("".concat(i + 1, " - ").concat(veterinaria.getNombre(), " (").concat(veterinaria.getUbicacion(), ")"));
        });
    };
    //Getters
    redVeteriniaria.prototype.getNombre = function () {
        return this.nombre;
    };
    redVeteriniaria.prototype.getVeterinarias = function () {
        return this.veterinarias;
    };
    //Setters
    redVeteriniaria.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return redVeteriniaria;
}());
exports.redVeteriniaria = redVeteriniaria;

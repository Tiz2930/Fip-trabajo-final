"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proovedor = void 0;
var producto_1 = require("./producto");
var ids_1 = require("./funcion-id/ids");
var proovedor = /** @class */ (function () {
    function proovedor(nombre, telefono) {
        this.nombre = nombre;
        this.id = (0, ids_1.generarId)();
        this.telefono = telefono;
        this.inventario = this.crearInventario();
    }
    proovedor.prototype.crearInventario = function () {
        return [
            new producto_1.producto("Alimento para perro 3kg", 3, 3000),
            new producto_1.producto("Alimento para perro 15kg", 15, 10000),
            new producto_1.producto("Alimento para gatos 3kg", 3, 3000),
            new producto_1.producto("Alimento para gatos 7kg", 7, 7000),
            new producto_1.producto("Correa para perro", 1, 3000),
            new producto_1.producto("Correa para gato", 1, 2500)
        ];
    };
    //Getters
    proovedor.prototype.getNombre = function () {
        return this.nombre;
    };
    proovedor.prototype.getId = function () {
        return this.id;
    };
    proovedor.prototype.getTelefono = function () {
        return this.telefono;
    };
    proovedor.prototype.getInventario = function () {
        return this.inventario;
    };
    //Setters
    proovedor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    proovedor.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    return proovedor;
}());
exports.proovedor = proovedor;

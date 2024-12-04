"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.producto = void 0;
var producto = /** @class */ (function () {
    function producto(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    //Getters
    producto.prototype.getNombre = function () {
        return this.nombre;
    };
    producto.prototype.getPrecio = function () {
        return this.precio;
    };
    return producto;
}());
exports.producto = producto;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redVeterinaria_1 = require("./clases/redVeterinaria");
const veterinaria_1 = require("./clases/veterinaria");
const cliente_1 = require("./clases/cliente");
const proovedor_1 = require("./clases/proovedor");
const paciente_1 = require("./clases/paciente");
const red = new redVeterinaria_1.redVeteriniaria("a");
// Crea veterinaria
const Jose = new veterinaria_1.veterinaria("Pelo", "Olavarría");
red.agregarVeterinaria(Jose.getNombre(), Jose.getUbicacion());
// Crea clientes
const cliente1 = new cliente_1.cliente("Roberto", 123, Jose);
const cliente2 = new cliente_1.cliente("Roberta", 123, Jose);
Jose.agregarCliente(cliente1.getNombre(), cliente1.getTelefono());
Jose.agregarCliente(cliente2.getNombre(), cliente2.getTelefono());
// Crea proovedor
const proovedor1 = new proovedor_1.proovedor("Tomás", 123456);
Jose.agregarProovedor(proovedor1.getNombre(), proovedor1.getId());
// Cliente crea pacientes
const paciente1 = new paciente_1.paciente("wachin", "gato", 3, cliente2.getId());
cliente1.agregarPaciente("Pulga", "Perro", 3);
cliente1.agregarPaciente("Pulga", "asd", 3);
cliente2.agregarPaciente(paciente1.getNombre(), paciente1.getEspecie(), paciente1.getEdad());
// Eliminar un cliente
console.log(cliente1.getId());
Jose.eliminarCliente(cliente1.getId());
Jose.mostrarClientes();
cliente1.mostrarPaciente();
Jose.mostrarPacientes();

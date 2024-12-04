import { redVeteriniaria } from "./clases/redVeterinaria";
import { veterinaria } from "./clases/veterinaria";
import { cliente } from "./clases/cliente";
import { proovedor } from "./clases/proovedor";
import { paciente } from "./clases/paciente";

const red = new redVeteriniaria("a")

// Crea veterinaria
const Jose = new veterinaria("Jose", "Olavarría")
red.agregarVeterinaria(Jose.getNombre(), Jose.getUbicacion());

// Crea clientes
const cliente1 = new cliente("Carlos", 123, Jose)
const cliente2 = new cliente("Amelia", 123, Jose)
Jose.agregarCliente(cliente1.getNombre(), cliente1.getTelefono())
Jose.agregarCliente(cliente2.getNombre(), cliente2.getTelefono())

// Crea proovedor
const proovedor1 = new proovedor("Bautista", 123456)
Jose.agregarProovedor(proovedor1.getNombre(), proovedor1.getId())

// Cliente crea pacientes
const paciente1 = new paciente("wachin", "gato", 3, cliente2.getId())
cliente1.agregarPaciente("Pulga", "Perro", 3)
cliente1.agregarPaciente("Pulga", "Gato", 3)
cliente2.agregarPaciente(paciente1.getNombre(), paciente1.getEspecie(), paciente1.getEdad())

// Eliminar un cliente
console.log(cliente1.getId())
Jose.eliminarCliente(cliente1.getId())
Jose.mostrarClientes()
cliente1.mostrarPaciente()
Jose.mostrarPacientes()
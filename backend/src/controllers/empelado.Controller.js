import mongoose from "mongoose";
import empleado from "../models/empleado.js";

// Obtener todos los empleados
export const getEmpleados = async (req, res) => {
  try {
    const empleadosList = await empleado.find(); // Obtiene todos los empleados
    res.status(200).json(empleadosList);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener empleados', error: error.message });
  }
};

// Crear un empleado
export const postCreate = async (req, res) => {
    try {
        // Crear un nuevo empleado con los datos enviados en el cuerpo de la solicitud
        const newEmpleado = await empleado.create(req.body);

        // Enviar respuesta con el empleado creado y el estado 201 (Creado)
        res.status(201).json(newEmpleado);
    } catch (error) {
        // Enviar mensaje de error con el estado 400 (Solicitud incorrecta)
        res.status(400).json({
            message: "Error al crear empleado",
            error: error.message, // Incluye el mensaje de error para facilitar depuración
        });
    }
};
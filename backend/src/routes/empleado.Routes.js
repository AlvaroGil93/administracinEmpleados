import express from 'express';
import { getEmpleados, postCreate } from '../controllers/empelado.Controller.js';

const router = express.Router();

// Definir las rutas para los empleados
router.get('/empleados', getEmpleados); // Obtener todos los empleados
//router.get('/empleados/:codigo', getEmpleadoByCodigo); // Obtener un empleado por código
router.post('/crear', postCreate); // Crear un nuevo empleado
//router.put('/empleados/:codigo', updateEmpleado); // Actualizar un empleado por código
//router.delete('/empleados/:codigo', deleteEmpleado); // Eliminar un empleado por código

export default router;

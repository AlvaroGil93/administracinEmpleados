import express from 'express';
import { getEmpleados, postCreate,getEmpleadoByCodigo,updateEmpleado,deleteEmpleadoByCodigo } from '../controllers/empelado.Controller.js';
//import { getDepartamento,postDepartamento } from '../controllers/departamentos.Controller.js';
const router = express.Router();

// las rutas para los empleados
router.get('/empleados', getEmpleados); 
router.get('/empleados/:codigo', getEmpleadoByCodigo);
router.post('/crear', postCreate); 
router.put('/actualizar/:codigo', updateEmpleado);
router.delete('/eliminar/:codigo', deleteEmpleadoByCodigo); 


// rutas departamento
/*
// Obtener todos los departamentos
router.get('/departamentos', getDepartamento); 
// Crear un nuevo departamento

router.post('/create', postDepartamento); 
*/

export default router;

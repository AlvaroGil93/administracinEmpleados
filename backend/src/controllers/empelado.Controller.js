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

//obtener un empleado por codigo del empleado

export const getEmpleadoByCodigo = async (req, res) => {
  try {
    const { codigo } = req.params;
    const empleadoEncontrado = await empleado.findOne({ codigo: codigo }); // Buscar por el campo `codigo`

    if (!empleadoEncontrado) {
      return res.status(404).json({ message: 'Empleado con ese código no encontrado' });
    }

    res.status(200).json(empleadoEncontrado);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el empleado por código', error: error.message });
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



// Controlador para actualizar un empleado
export const updateEmpleado = async (req, res) => {
  try {
    const { codigo } = req.params;  // Obtiene el código del empleado de la URL
    const updatedEmpleado = await empleado.findOneAndUpdate(
      { codigo: codigo },  // Condición para encontrar al empleado
      req.body,  // Datos nuevos a actualizar
      { new: true }  // Devuelve el documento actualizado
    );

    if (!updatedEmpleado) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    res.status(200).json(updatedEmpleado);  // Retorna el empleado actualizado
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el empleado', error: error.message });
  }
};

// Eliminar un empleado

export const deleteEmpleadoByCodigo = async (req, res) => {
  try {
    const { codigo } = req.params;
    const deletedEmpleado = await empleado.findOneAndDelete({ codigo: codigo }); // Asegúrate de usar un objeto con la condición de búsqueda

    if (!deletedEmpleado) {  // Debes verificar "deletedEmpleado" y no "deleteEmpleadoByCodigo"
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    res.status(200).json({ message: 'Empleado eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el empleado', error: error.message });
  }
};

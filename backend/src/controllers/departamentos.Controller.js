import Departamento from "../models/departamento.js";

// Obtener departamentos
export const getDepartamento = async (req, res) => {
  try {
    const departamentos = await Departamento.find();
    res.status(200).json(departamentos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo departamento
export const postDepartamento = async (req, res) => {
  try {
    const newDepartamento = await Departamento.create(req.body); // Crear departamento
    res.status(201).json(newDepartamento);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el departamento', error: error.message });
  }
};

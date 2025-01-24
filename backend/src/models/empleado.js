import mongoose from 'mongoose'; // Usa 'import' en lugar de 'require'

const EmpleadoSchema = new mongoose.Schema({
  codigo: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  apellido1: { type: String, required: true },
  apellido2: { type: String },
  nombre_departamento: { type: String, required: true },
  codigo_departamento: { type: Number, required: true }
});

// Exportación usando 'export default'
export default mongoose.model('Empleado', EmpleadoSchema);

import mongoose from 'mongoose';

const EmpleadoSchema = new mongoose.Schema({
  codigo: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  apellido1: { type: String, required: true },
  apellido2: { type: String },
});


export default mongoose.model('Empleado', EmpleadoSchema);

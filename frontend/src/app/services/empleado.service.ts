import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../interfaces/empleado'; 

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  constructor() {}

  // Inyección de dependencias
  httpClient = inject(HttpClient);

  // Rutas del backend
  API_URL_GET = 'http://localhost:9000/api/empleados';
  API_URL_POST = 'http://localhost:9000/api/empleados/crear';
  API_URL_PUT = 'http://localhost:9000/api/actualizar';
  API_URL_DELETE = 'http://localhost:9000/api/eliminar';

  // Obtener todos los empleados
  getEmpleados() {
    return this.httpClient.get(this.API_URL_GET);
  }

  // Crear un empleado
  postCreate(_empleado: Empleado) {
    return this.httpClient.post(this.API_URL_POST, _empleado);
  }

  // Modificar un empleado
  updateEmpleado(codigo: string | undefined, _empleado: Empleado) {
    return this.httpClient.put(`${this.API_URL_PUT}/${codigo}`, _empleado);
  }

  // Eliminar un empleado
  deleteEmpleado(codigo: string | undefined) {
    return this.httpClient.delete(`${this.API_URL_DELETE}/${codigo}`);
  }
}

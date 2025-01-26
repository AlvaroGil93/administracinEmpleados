import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empleados',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  // Definición del formulario reactivo
  formEmpleado = new FormGroup({
    codigo: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido1: new FormControl('', [Validators.required]),
    apellido2: new FormControl(''),
    nombre_departamento: new FormControl('',[Validators.required]),
    codigo_departamento : new   FormControl('', [Validators.required]),

  });

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  // Función para manejar el submit del formulario
  handleSubmit() {
    if (this.formEmpleado.valid) {
      const registroEmpleado = this.formEmpleado.value;

      // Enviar datos del empleado a la API
      this.http.post('http://localhost:9000/api/crear', {
        codigo: registroEmpleado.codigo,
        nombre: registroEmpleado.nombre,
        apellido1: registroEmpleado.apellido1,
        apellido2: registroEmpleado.apellido2,
        nombre_departamento: registroEmpleado.nombre_departamento,
        codigo_departamento : registroEmpleado.codigo_departamento,
      }).subscribe({
        next: (response: any) => {
          this.toastr.success('Empleado agregado exitosamente');
          this.router.navigate(['/']);  
        },
        error: (err) => {
          this.toastr.error('Error al agregar empleado');
        }
      });

    } else {
      this.toastr.warning('Por favor, complete el formulario correctamente');
    }
  }
}

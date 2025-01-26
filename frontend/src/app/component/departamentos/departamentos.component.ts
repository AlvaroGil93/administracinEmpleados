import { RouterLink } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { EmpleadosService } from '../../services/empleado.service';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from '../../interfaces/empleado'; 
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';   

@Component({
  selector: 'app-departamentos',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],  
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css'],
})
export class DepartamentosComponent implements OnInit {
  empleadosService = inject(EmpleadosService);
  toastr = inject(ToastrService);

  allEmpleados: Empleado[] = [];
  selectedEmpleado: Empleado | null = null;

  constructor() {}

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.empleadosService.getEmpleados().subscribe(
      (res: any) => {
        this.allEmpleados = res;
        this.toastr.success('Empleados cargados correctamente');
      },
      (err: any) => {
        console.error('Error al cargar empleados:', err);
        this.toastr.error('Error al cargar empleados');
      }
    );
  }

  editarEmpleado(empleado: Empleado) {
    this.selectedEmpleado = { ...empleado };
    console.log('Empleado seleccionado para editar:', this.selectedEmpleado);
  }

  cerrarModal() {
    this.selectedEmpleado = null;
  }

  guardarCambios() {
    if (this.selectedEmpleado) {
      this.empleadosService.updateEmpleado(this.selectedEmpleado.codigo.toString(), this.selectedEmpleado).subscribe(
        () => {
          this.toastr.success('Empleado actualizado correctamente');
          this.obtenerDatos();
          this.cerrarModal();
        },
        (err: any) => {
          console.error('Error al actualizar empleado:', err);
          this.toastr.error('Error al actualizar empleado');
        }
      );
    }
  }

  eliminarEmpleado(codigo: number | undefined) {
    if (!codigo) return;

    this.empleadosService.deleteEmpleado(codigo.toString()).subscribe(
      () => {
        this.toastr.success('Empleado eliminado correctamente');
        this.obtenerDatos();
      },
      (err: any) => {
        console.error('Error al eliminar empleado:', err);
        this.toastr.error('Error al eliminar empleado');
      }
    );
  }
}

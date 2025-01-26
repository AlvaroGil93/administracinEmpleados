import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormEmpleadosComponent } from './pages/form-empleados/form-empleados.component';
import { FormDeparttamentoComponent } from './pages/form-departtamento/form-departtamento.component';
export const routes: Routes = [
    
    { path: '', component: InicioComponent, title: 'Inicio' },  
    { path: 'form-empleados', component: FormEmpleadosComponent, title: 'Registrar Empleado' },
    { path: 'form-departtamento', component: FormDeparttamentoComponent, title: 'Ver Empleados y Departamentos' },

];

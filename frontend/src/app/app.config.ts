import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideToastr({
      timeOut: 3000, // Aumenta el tiempo si no logras verlo bien
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      easeTime: 300, // Tiempo de duración de las animaciones de entrada/salida
      progressBar: true,
      progressAnimation: 'increasing', // Puedes probar 'decreasing' también
    }),
    provideAnimations()
  ]
};

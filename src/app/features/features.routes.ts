import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./landing/components/landing.component')
  }
] as Routes;
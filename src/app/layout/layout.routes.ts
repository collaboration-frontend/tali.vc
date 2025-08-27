import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./components/content.component'),
    children: [
      {
        path: '',
        loadChildren: () => import('../features/features.routes')
      }
    ]
  }
] as Routes;
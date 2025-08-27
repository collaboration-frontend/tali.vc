import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./landing/components/landing.component')
  },
  {
    path: 'news/:id',
    loadComponent: () => import('./news/pages/news-details/news-details.component')
  }
] as Routes;
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },

  {
    path: '',
    loadChildren: () => import('./features/feature.routes').then((m) => m.featureRoutes),
  },
];

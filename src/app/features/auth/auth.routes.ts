import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './data-access/auth.service';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadComponent: () => import('./pages/login.page').then((m) => m.LoginPage),
    canActivate: [
      () => {
        const auth = inject(AuthService);
        const router = inject(Router);

        if (auth.isAuthenticated()) {
          router.navigate(['/dashboard']);
          return false;
        }

        return true;
      },
    ],
  },
];

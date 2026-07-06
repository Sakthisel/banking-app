import { Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth.guard';

export const featureRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },

  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/pages/app-shell.page').then((m) => m.AppShellPage),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/pages/dashboard.page').then((m) => m.DashboardPage),
      },

      {
        path: 'customers',
        loadChildren: () => import('./customers/customers.routes').then((m) => m.customersRoutes),
      },

      {
        path: 'accounts',
        loadChildren: () => import('./accounts/accounts.routes').then((m) => m.accountsRoutes),
      },

      {
        path: 'transactions',
        loadChildren: () =>
          import('./transactions/transactions.routes').then((m) => m.transactionsRoutes),
      },
    ],
  },
];

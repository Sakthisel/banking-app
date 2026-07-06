import { Routes } from '@angular/router';

export const customersRoutes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./pages/customers.page')
        .then(m => m.CustomersPage)
  },

  {
    path: 'new',
    loadComponent: () =>
      import('./pages/customer-form.page')
        .then(m => m.CustomerFormPage)
  },

  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./pages/customer-form.page')
        .then(m => m.CustomerFormPage)
  }

];
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CustomerService } from '../data-access/customer.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage {
  private service = inject(CustomerService);
  private router = inject(Router);

  customers = this.service.customers;

  deleteCustomer(id: string) {
    this.service.delete(id);
  }

  goToAdd() {
    this.router.navigate(['/customers/new']);
  }

  editCustomer(id: string) {
    this.router.navigate(['/customers/edit', id]);
  }
}

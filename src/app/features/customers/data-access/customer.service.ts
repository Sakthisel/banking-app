import { Injectable, signal } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private customersSignal = signal<Customer[]>([
    {
      id: '1',
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@bank.com',
      accountNumber: 'ACC1001',
      balance: 5000,
    },
    {
      id: '2',
      firstName: 'Emma',
      lastName: 'Brown',
      email: 'emma@bank.com',
      accountNumber: 'ACC1002',
      balance: 8200,
    },
  ]);

  customers = this.customersSignal.asReadonly();

  add(customer: Customer) {
    this.customersSignal.update((list) => [...list, { ...customer, id: Date.now().toString() }]);
  }

  update(customer: Customer) {
    this.customersSignal.update((list) => list.map((c) => (c.id === customer.id ? customer : c)));
  }

  delete(id: string) {
    this.customersSignal.update((list) => list.filter((c) => c.id !== id));
  }

  getById(id: string) {
    return this.customersSignal().find((c) => c.id === id);
  }
}

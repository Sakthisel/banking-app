import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../data-access/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-form.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./customer-form.page.scss'],
})
export class CustomerFormPage {
  private fb = new FormBuilder();
  private service = inject(CustomerService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;
  customerId: string | null = null;

  form = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    accountNumber: ['', Validators.required],
    balance: [0],
  });

  constructor() {
    this.customerId = this.route.snapshot.paramMap.get('id');

    if (this.customerId) {
      this.isEdit = true;
      const customer = this.service.getById(this.customerId);

      if (customer) {
        this.form.patchValue(customer);
      }
    }
  }

  save() {
    if (this.form.invalid) return;

    const data = {
      id: this.customerId ?? '',
      ...this.form.getRawValue(),
    };

    if (this.isEdit) {
      this.service.update(data);
    } else {
      this.service.add(data);
    }

    this.router.navigate(['/customers']);
  }
}

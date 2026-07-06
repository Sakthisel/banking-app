import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../data-access/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  private auth = inject(AuthService);
  private router = inject(Router);
  private fb = new FormBuilder();

  error = signal<string | null>(null);
  loading = signal(false);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  login() {
    if (this.form.invalid) {
      this.error.set('Invalid form');
      return;
    }

    this.loading.set(true);

    const { email, password } = this.form.getRawValue();

    const success = this.auth.login(email, password);

    this.loading.set(false);

    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error.set('Invalid credentials');
    }
  }
}

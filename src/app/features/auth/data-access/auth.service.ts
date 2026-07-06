import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private router = new Router();

  isLoggedIn = signal(false);

  login(email: string, password: string): boolean {
    // fake API check (replace later with backend)
    if (email === 'admin@bank.com' && password === '123456') {
      localStorage.setItem('token', 'fake-jwt-token');
      this.isLoggedIn.set(true);

      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn.set(false);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

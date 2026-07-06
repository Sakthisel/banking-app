import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/data-access/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app-shell.page.html',
  styleUrls: ['./app-shell.page.scss'],
})
export class AppShellPage {
  private auth = inject(AuthService);
  private router = inject(Router);

  menu = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Customers', path: '/customers' },
    { label: 'Accounts', path: '/accounts' },
    { label: 'Transactions', path: '/transactions' },
  ];

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}

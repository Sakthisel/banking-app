import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  userName = signal('Admin User');

  stats = signal([
    {
      title: 'Total Balance',
      value: '$128,450',
      color: 'blue',
    },
    {
      title: 'Accounts',
      value: '24',
      color: 'green',
    },
    {
      title: 'Transactions',
      value: '312',
      color: 'purple',
    },
    {
      title: 'Pending Approvals',
      value: '7',
      color: 'red',
    },
  ]);

  activities = signal([
    'Customer John Smith created account',
    'Deposit $5,000 processed',
    'Transfer completed successfully',
    'New loan request submitted',
  ]);
}

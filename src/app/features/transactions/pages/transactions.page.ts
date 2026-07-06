import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <h2>Transactions</h2>
    <p>Transaction history will appear here</p>
  `,
})
export class TransactionsPage {}

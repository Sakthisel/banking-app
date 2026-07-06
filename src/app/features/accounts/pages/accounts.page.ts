import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <h2>Accounts</h2>
    <p>Accounts module ready</p>
  `,
})
export class AccountsPage {}

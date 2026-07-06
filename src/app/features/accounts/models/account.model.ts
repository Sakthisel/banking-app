export interface Account {
  id: string;
  accountNumber: string;
  type: 'SAVINGS' | 'CURRENT';
  balance: number;
  customerId: string;
}

export interface Transaction {
  id: string;
  fromAccount: string;
  toAccount: string;
  amount: number;
  type: 'DEBIT' | 'CREDIT';
  createdAt: string;
}
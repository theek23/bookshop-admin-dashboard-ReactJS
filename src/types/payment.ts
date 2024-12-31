export interface Transaction {
  id: string;
  orderId: string;
  date: string;
  customer: string;
  amount: number;
  status: 'Completed' | 'Processing' | 'Failed' | 'Refunded';
  description?: string;
}
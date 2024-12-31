import { Address } from './address';

export interface OrderItem {
  id: string;
  image: string;
  title: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  customer: string;
  email: string;
  books: string[];
  total: string;
  date: string;
  status: 'Completed' | 'Processing' | 'Pending';
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  shippingAddress: Address;
}
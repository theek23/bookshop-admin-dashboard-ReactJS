import { Order } from './order';
import { Customer } from './customer';
import { InventoryItem } from './inventory';

export type TimeRange = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface SalesReport {
  timeRange: TimeRange;
  data: {
    period: string;
    revenue: number;
    orders: number;
    averageOrderValue: number;
  }[];
  total: {
    revenue: number;
    orders: number;
    averageOrderValue: number;
  };
}

export interface InventoryReport {
  totalItems: number;
  lowStock: number;
  outOfStock: number;
  topSelling: {
    item: InventoryItem;
    sales: number;
  }[];
}

export interface CustomerReport {
  totalCustomers: number;
  newCustomers: number;
  activeCustomers: number;
  topCustomers: {
    customer: Customer;
    orders: number;
    totalSpent: number;
  }[];
}

export interface OrderReport {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
  recentOrders: Order[];
}
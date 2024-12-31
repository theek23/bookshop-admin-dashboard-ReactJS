export interface Address {
  id: number;
  customerId: number;
  type: 'shipping' | 'billing';
  isDefault: boolean;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
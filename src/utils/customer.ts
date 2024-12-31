import { Customer } from '../types/customer';

export const getFullName = (customer: Customer): string => {
  return `${customer.firstName} ${customer.lastName}`.trim();
};
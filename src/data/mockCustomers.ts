import { Customer } from '../types/customer';
import { Address } from '../types/address';

export const mockAddresses: Address[] = [
  {
    id: 1,
    customerId: 1,
    type: 'shipping',
    isDefault: true,
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States'
  },
  {
    id: 2,
    customerId: 1,
    type: 'billing',
    isDefault: false,
    street: '456 Park Ave',
    city: 'New York',
    state: 'NY',
    zipCode: '10002',
    country: 'United States'
  },
  {
    id: 3,
    customerId: 2,
    type: 'shipping',
    isDefault: true,
    street: '789 Elm St',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    country: 'United States'
  },
  {
    id: 4,
    customerId: 2,
    type: 'billing',
    isDefault: false,
    street: '321 Oak St',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94103',
    country: 'United States'
  },
  {
    id: 5,
    customerId: 3,
    type: 'shipping',
    isDefault: true,
    street: '987 Pine St',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60601',
    country: 'United States'
  },
  {
    id: 6,
    customerId: 3,
    type: 'billing',
    isDefault: false,
    street: '654 Cedar St',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60602',
    country: 'United States'
  },
  {
    id: 7,
    customerId: 4,
    type: 'shipping',
    isDefault: true,
    street: '22 Willow Ln',
    city: 'Houston',
    state: 'TX',
    zipCode: '77002',
    country: 'United States'
  },
  {
    id: 8,
    customerId: 4,
    type: 'billing',
    isDefault: false,
    street: '89 Birch Rd',
    city: 'Houston',
    state: 'TX',
    zipCode: '77003',
    country: 'United States'
  },
  {
    id: 9,
    customerId: 5,
    type: 'shipping',
    isDefault: true,
    street: '456 Aspen St',
    city: 'Austin',
    state: 'TX',
    zipCode: '73301',
    country: 'United States'
  },
  {
    id: 10,
    customerId: 5,
    type: 'billing',
    isDefault: false,
    street: '123 Maple Dr',
    city: 'Austin',
    state: 'TX',
    zipCode: '73302',
    country: 'United States'
  },
  {
    id: 11,
    customerId: 6,
    type: 'shipping',
    isDefault: true,
    street: '78 Cherry Ave',
    city: 'Miami',
    state: 'FL',
    zipCode: '33101',
    country: 'United States'
  },
  {
    id: 12,
    customerId: 6,
    type: 'billing',
    isDefault: false,
    street: '90 Walnut Blvd',
    city: 'Miami',
    state: 'FL',
    zipCode: '33102',
    country: 'United States'
  },
  {
    id: 13,
    customerId: 7,
    type: 'shipping',
    isDefault: true,
    street: '567 Spruce St',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98101',
    country: 'United States'
  },
  {
    id: 14,
    customerId: 7,
    type: 'billing',
    isDefault: false,
    street: '123 Cedar Dr',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98102',
    country: 'United States'
  },
  {
    id: 15,
    customerId: 8,
    type: 'shipping',
    isDefault: true,
    street: '789 Fir Ln',
    city: 'Denver',
    state: 'CO',
    zipCode: '80201',
    country: 'United States'
  },
  {
    id: 16,
    customerId: 8,
    type: 'billing',
    isDefault: false,
    street: '345 Redwood Blvd',
    city: 'Denver',
    state: 'CO',
    zipCode: '80202',
    country: 'United States'
  },
  {
    id: 17,
    customerId: 9,
    type: 'shipping',
    isDefault: true,
    street: '12 Cypress Rd',
    city: 'Boston',
    state: 'MA',
    zipCode: '02108',
    country: 'United States'
  },
  {
    id: 18,
    customerId: 9,
    type: 'billing',
    isDefault: false,
    street: '45 Willow Dr',
    city: 'Boston',
    state: 'MA',
    zipCode: '02109',
    country: 'United States'
  },
  {
    id: 19,
    customerId: 10,
    type: 'shipping',
    isDefault: true,
    street: '678 Poplar Ln',
    city: 'Phoenix',
    state: 'AZ',
    zipCode: '85001',
    country: 'United States'
  },
  {
    id: 20,
    customerId: 10,
    type: 'billing',
    isDefault: false,
    street: '789 Elm Dr',
    city: 'Phoenix',
    state: 'AZ',
    zipCode: '85002',
    country: 'United States'
  }
];

export const mockCustomers: Customer[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1 234-567-8900',
    orders: 12,
    totalSpent: 458.99,
    joinDate: '2024-01-15',
    status: 'Active',
    addresses: mockAddresses.filter(addr => addr.customerId === 1)
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    phone: '+1 987-654-3210',
    orders: 8,
    totalSpent: 325.50,
    joinDate: '2023-11-20',
    status: 'Active',
    addresses: mockAddresses.filter(addr => addr.customerId === 2)
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Brown',
    email: 'alice@example.com',
    phone: '+1 567-890-1234',
    orders: 5,
    totalSpent: 150.75,
    joinDate: '2023-10-05',
    status: 'Inactive',
    addresses: mockAddresses.filter(addr => addr.customerId === 3)
  },
  {
    id: 4,
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob@example.com',
    phone: '+1 345-678-9012',
    orders: 20,
    totalSpent: 789.40,
    joinDate: '2024-02-01',
    status: 'Active',
    addresses: mockAddresses.filter(addr => addr.customerId === 4)
  },
  {
    id: 5,
    firstName: 'Charlie',
    lastName: 'Davis',
    email: 'charlie@example.com',
    phone: '+1 456-789-0123',
    orders: 3,
    totalSpent: 95.20,
    joinDate: '2023-09-12',
    status: 'Active',
    addresses: mockAddresses.filter(addr => addr.customerId === 5)
  },
  {
    id: 6,
    firstName: 'Diana',
    lastName: 'Evans',
    email: 'diana@example.com',
    phone: '+1 678-123-4567',
    orders: 7,
    totalSpent: 275.00,
    joinDate: '2024-01-20',
    status: 'Active',
    addresses: mockAddresses.filter(addr => addr.customerId === 6)
  },
  {
    id: 7,
    firstName: 'Frank',
    lastName: 'Green',
    email: 'frank@example.com',
    phone: '+1 321-654-9870',
    orders: 15,
    totalSpent: 499.99,
    joinDate: '2023-08-15',
    status: 'Inactive',
    addresses: mockAddresses.filter(addr => addr.customerId === 7)
  },
  {
    id: 8,
    firstName: 'Grace',
    lastName: 'Harris',
    email: 'grace@example.com',
    phone: '+1 789-012-3456',
    orders: 10,
    totalSpent: 349.95,
    joinDate: '2023-07-01',
    status: 'Active',
    addresses: mockAddresses.filter(addr => addr.customerId === 8)
  },
  {
    id: 9,
    firstName: 'Henry',
    lastName: 'Ivy',
    email: 'henry@example.com',
    phone: '+1 567-890-4321',
    orders: 2,
    totalSpent: 65.50,
    joinDate: '2023-12-10',
    status: 'Active',
    addresses: mockAddresses.filter(addr => addr.customerId === 9)
  },
  {
    id: 10,
    firstName: 'Ivy',
    lastName: 'Jones',
    email: 'ivy@example.com',
    phone: '+1 234-567-8901',
    orders: 18,
    totalSpent: 720.00,
    joinDate: '2023-06-05',
    status: 'Inactive',
    addresses: mockAddresses.filter(addr => addr.customerId === 10)
  },
  {
    id: 11,
    firstName: 'Grace',
    lastName: 'Harris',
    email: 'grace@example.com',
    phone: '+1 789-012-3456',
    orders: 10,
    totalSpent: 349.95,
    joinDate: '2023-07-01',
    status: 'Active',
    addresses: mockAddresses.filter(addr => addr.customerId === 8)
  },
  {
    id: 12,
    firstName: 'Henry',
    lastName: 'Ivy',
    email: 'henry@example.com',
    phone: '+1 567-890-4321',
    orders: 2,
    totalSpent: 65.50,
    joinDate: '2023-12-10',
    status: 'Active',
    addresses: mockAddresses.filter(addr => addr.customerId === 9)
  },
  {
    id: 13,
    firstName: 'Ivy',
    lastName: 'Jones',
    email: 'ivy@example.com',
    phone: '+1 234-567-8901',
    orders: 18,
    totalSpent: 720.00,
    joinDate: '2023-06-05',
    status: 'Inactive',
    addresses: mockAddresses.filter(addr => addr.customerId === 10)
  }
];

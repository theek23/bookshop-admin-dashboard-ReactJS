import { Order } from '../types/order';
import { mockAddresses } from './mockCustomers';

export const mockOrders: Order[] = [
  {
    id: '#ORD-1234',
    customer: 'John Doe',
    email: 'john@example.com',
    books: ['The Great Gatsby', '1984'],
    total: '$45.98',
    date: '2024-02-20',
    status: 'Completed',
    items: [
      {
        id: 'INV-001',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100',
        title: 'The Great Gatsby',
        quantity: 2,
        unitPrice: 14.99,
      },
      {
        id: 'INV-002',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=100',
        title: '1984',
        quantity: 1,
        unitPrice: 12.99,
      }
    ],
    subtotal: 42.97,
    tax: 3.44,
    shipping: 4.99,
    shippingAddress: mockAddresses[0]
  },
  {
    id: '#ORD-1235',
    customer: 'Jane Smith',
    email: 'jane@example.com',
    books: ['Pride and Prejudice'],
    total: '$18.99',
    date: '2024-02-19',
    status: 'Processing',
    items: [
      {
        id: 'INV-003',
        image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=100',
        title: 'Pride and Prejudice',
        quantity: 1,
        unitPrice: 18.99,
      }
    ],
    subtotal: 18.99,
    tax: 1.52,
    shipping: 4.99,
    shippingAddress: mockAddresses[2]
  },
  {
    id: '#ORD-1236',
    customer: 'Mike Johnson',
    email: 'mike@example.com',
    books: ['To Kill a Mockingbird', 'The Catcher in the Rye'],
    total: '$35.98',
    date: '2024-02-18',
    status: 'Pending',
    items: [
      {
        id: 'INV-004',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100',
        title: 'To Kill a Mockingbird',
        quantity: 1,
        unitPrice: 19.99,
      },
      {
        id: 'INV-005',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=100',
        title: 'The Catcher in the Rye',
        quantity: 1,
        unitPrice: 15.99,
      }
    ],
    subtotal: 35.98,
    tax: 2.88,
    shipping: 4.99,
    shippingAddress: mockAddresses[4]
  }
];
import { UserActivity } from '../types/userActivity';

export const mockUserActivities: UserActivity[] = [
  {
    id: '1',
    userId: 1,
    type: 'login',
    description: 'Logged in successfully',
    timestamp: '2024-02-20 14:23:00',
  },
  {
    id: '2',
    userId: 1,
    type: 'update',
    description: 'Updated inventory item',
    timestamp: '2024-02-20 14:45:00',
    metadata: {
      itemId: 'INV-001',
      changes: ['price', 'stock']
    }
  },
  {
    id: '3',
    userId: 1,
    type: 'create',
    description: 'Created new order',
    timestamp: '2024-02-20 15:10:00',
    metadata: {
      orderId: '#ORD-1234'
    }
  },
  {
    id: '4',
    userId: 1,
    type: 'logout',
    description: 'Logged out',
    timestamp: '2024-02-20 17:30:00'
  }
];
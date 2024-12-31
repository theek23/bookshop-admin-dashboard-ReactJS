import { User } from '../types/user';

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'super_admin',
    status: 'active',
    lastLogin: '2024-02-20 14:23',
    createdAt: '2024-01-01',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=32&h=32&q=80'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-02-19 09:45',
    createdAt: '2024-01-05',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=32&h=32&q=80'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'user',
    status: 'inactive',
    lastLogin: '2024-02-15 16:30',
    createdAt: '2024-01-10',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=32&h=32&q=80'
  }
];
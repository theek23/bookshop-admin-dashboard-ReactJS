export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'super_admin' | 'user';
  status: 'active' | 'inactive';
  lastLogin: string;
  createdAt: string;
  avatar: string;
}
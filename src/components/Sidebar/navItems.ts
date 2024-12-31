import { 
  LayoutDashboard, 
  BookOpen, 
  ShoppingCart, 
  Users, 
  Settings,
  BarChart3,
  UserCog,
  FolderOpen,
  CreditCard,
  FileText
} from 'lucide-react';
import { NavItem } from './types';

export const getNavItems = (): NavItem[] => [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: ShoppingCart, label: 'Orders', path: '/orders' },
  { icon: BookOpen, label: 'Inventory', path: '/inventory' },
  { icon: FolderOpen, label: 'Categories', path: '/categories' },
  { icon: Users, label: 'Customers', path: '/customers' },
  { icon: UserCog, label: 'Users', path: '/users' },
  { icon: CreditCard, label: 'Payments', path: '/payments' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];
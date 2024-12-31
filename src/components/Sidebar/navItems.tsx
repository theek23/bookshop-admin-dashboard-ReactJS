import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  ShoppingCart, 
  Users, 
  Settings,
  BarChart3,
  UserCog,
  FolderOpen,
  CreditCard
} from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';

const NavItems = () => {
  const { settings } = useSettings();
  
  return [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: ShoppingCart, label: 'Orders', path: '/orders' },
    { icon: BookOpen, label: settings.inventoryTitle, path: '/inventory' },
    { icon: FolderOpen, label: 'Categories', path: '/categories' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: UserCog, label: 'Users', path: '/users' },
    { icon: CreditCard, label: 'Payments', path: '/payments' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];
};

export default NavItems;
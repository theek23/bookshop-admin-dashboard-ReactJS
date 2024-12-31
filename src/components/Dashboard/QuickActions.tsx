import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, FileText, Users, Package } from 'lucide-react';
import QuickAction from './QuickAction';

const QuickActions: React.FC = () => {
  const navigate = useNavigate();

  const actions = [
    {
      icon: Plus,
      label: 'Add Book',
      onClick: () => navigate('/inventory/add'),
      color: 'bg-blue-500'
    },
    {
      icon: FileText,
      label: 'New Order',
      onClick: () => navigate('/orders'),
      color: 'bg-green-500'
    },
    {
      icon: Users,
      label: 'Add Customer',
      onClick: () => navigate('/customers'),
      color: 'bg-purple-500'
    },
    {
      icon: Package,
      label: 'Manage Stock',
      onClick: () => navigate('/inventory'),
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {actions.map((action) => (
        <QuickAction key={action.label} {...action} />
      ))}
    </div>
  );
};

export default QuickActions;
import React from 'react';

interface StatusConfig {
  [key: string]: {
    background: string;
    text: string;
  };
}

const statusStyles: StatusConfig = {
  Completed: { background: 'bg-green-100', text: 'text-green-800' },
  Processing: { background: 'bg-blue-100', text: 'text-blue-800' },
  Pending: { background: 'bg-yellow-100', text: 'text-yellow-800' },
  'In Stock': { background: 'bg-green-100', text: 'text-green-800' },
  'Low Stock': { background: 'bg-yellow-100', text: 'text-yellow-800' },
  'Out of Stock': { background: 'bg-red-100', text: 'text-red-800' },
  Active: { background: 'bg-green-100', text: 'text-green-800' },
  Inactive: { background: 'bg-gray-100', text: 'text-gray-800' },
};

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const style = statusStyles[status] || { background: 'bg-gray-100', text: 'text-gray-800' };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style.background} ${style.text}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
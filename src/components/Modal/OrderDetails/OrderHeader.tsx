import React from 'react';
import { Calendar, User, Mail } from 'lucide-react';

interface OrderHeaderProps {
  orderId: string;
  date: string;
  customer: string;
  email: string;
}

const OrderHeader: React.FC<OrderHeaderProps> = ({ orderId, date, customer, email }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{orderId}</h3>
          <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-400">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 text-gray-900 dark:text-white">
            <User size={16} />
            <span>{customer}</span>
          </div>
          <div className="flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-400">
            <Mail size={16} />
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;
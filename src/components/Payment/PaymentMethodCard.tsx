import React from 'react';
import { CreditCard, Trash2 } from 'lucide-react';
import { PaymentMethod } from '../../types/payment';

interface PaymentMethodCardProps {
  method: PaymentMethod;
  onDelete: (id: string) => void;
}

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({ method, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
            <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              •••• •••• •••• {method.last4}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Expires {method.expiryMonth}/{method.expiryYear}
            </p>
          </div>
        </div>
        <button
          onClick={() => onDelete(method.id)}
          className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default PaymentMethodCard;
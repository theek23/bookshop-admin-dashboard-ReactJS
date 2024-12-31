import React from 'react';
import { useCurrency } from '../../../utils/currency';

interface OrderSummaryProps {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, tax, shipping, total }) => {
  const { format } = useCurrency();

  return (
    <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
          <span className="text-gray-900 dark:text-white">{format(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Tax</span>
          <span className="text-gray-900 dark:text-white">{format(tax)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Shipping</span>
          <span className="text-gray-900 dark:text-white">{format(shipping)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-gray-900 dark:text-white">Total</span>
          <span className="text-gray-900 dark:text-white">{format(total)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
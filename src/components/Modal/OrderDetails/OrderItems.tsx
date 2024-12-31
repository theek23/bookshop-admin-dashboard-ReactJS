import React from 'react';
import { useCurrency } from '../../../utils/currency';

interface OrderItem {
  id: string;
  image: string;
  title: string;
  quantity: number;
  unitPrice: number;
}

interface OrderItemsProps {
  items: OrderItem[];
}

const OrderItems: React.FC<OrderItemsProps> = ({ items }) => {
  const { format } = useCurrency();

  return (
    <div className="mt-6">
      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Order Items</h4>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-50 dark:bg-gray-900/50">
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">Inventory ID</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">Image</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">Title</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">QTY</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">Unit Price</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.id}</td>
                <td className="px-4 py-3">
                  <img src={item.image} alt={item.title} className="w-12 h-16 object-cover rounded" />
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.title}</td>
                <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.quantity}</td>
                <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{format(item.unitPrice)}</td>
                <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                  {format(item.quantity * item.unitPrice)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderItems;
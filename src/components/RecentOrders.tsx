import React from 'react';
import { useCurrency } from '../utils/currency';

const RecentOrders = () => {
  const { format } = useCurrency();
  const orders = [
    {
      id: '#ORD-1234',
      customer: 'John Doe',
      books: 'The Great Gatsby, 1984',
      total: 45.98,
      status: 'Completed',
    },
    {
      id: '#ORD-1235',
      customer: 'Jane Smith',
      books: 'Pride and Prejudice',
      total: 18.99,
      status: 'Processing',
    },
    {
      id: '#ORD-1236',
      customer: 'Mike Johnson',
      books: 'To Kill a Mockingbird, The Catcher in the Rye',
      total: 35.98,
      status: 'Pending',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Orders</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-50 dark:bg-gray-900/50">
              <th className="px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">Order ID</th>
              <th className="px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">Customer</th>
              <th className="px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">Books</th>
              <th className="px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">Total</th>
              <th className="px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-100 dark:border-gray-700">
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">{order.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">{order.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">{order.books}</td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">{format(order.total)}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${
                        order.status === 'Completed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : order.status === 'Processing'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }
                    `}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
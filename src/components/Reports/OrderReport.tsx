import React from 'react';
import { OrderReport as OrderReportType } from '../../types/report';
import { useCurrency } from '../../utils/currency';
import StatusBadge from '../Table/StatusBadge';

const OrderReport: React.FC = () => {
  const { format } = useCurrency();

  // Mock data - replace with actual API call
  const report: OrderReportType = {
    totalOrders: 845,
    pendingOrders: 32,
    completedOrders: 813,
    recentOrders: [
      {
        id: '#ORD-1234',
        customer: 'John Doe',
        email: 'john@example.com',
        total: '$45.98',
        date: '2024-02-20',
        status: 'Completed',
        // ... other properties
      },
      // Add more orders...
    ]
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Order Summary
      </h3>

      <div className="grid grid-cols-3 gap-8 mb-8">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Orders</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
            {report.totalOrders}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Pending Orders</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
            {report.pendingOrders}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Completed Orders</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
            {report.completedOrders}
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
          Recent Orders
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left bg-gray-50 dark:bg-gray-900/50">
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Order ID
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Customer
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Date
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Total
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {report.recentOrders.map((order) => (
                <tr key={order.id} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                    {order.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 dark:text-gray-100">
                      {order.customer}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {order.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                    {order.total}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderReport;
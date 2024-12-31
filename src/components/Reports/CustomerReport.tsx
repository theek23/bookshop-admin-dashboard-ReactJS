import React from 'react';
import { Users, UserPlus, UserCheck } from 'lucide-react';
import { CustomerReport as CustomerReportType } from '../../types/report';
import { useCurrency } from '../../utils/currency';

const CustomerReport: React.FC = () => {
  const { format } = useCurrency();

  // Mock data - replace with actual API call
  const report: CustomerReportType = {
    totalCustomers: 3456,
    newCustomers: 123,
    activeCustomers: 2890,
    topCustomers: [
      {
        customer: {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          orders: 12,
          totalSpent: 458.99,
          status: 'Active',
          // ... other properties
        },
        orders: 12,
        totalSpent: 458.99
      },
      // Add more customers...
    ]
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Customer Overview
      </h3>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20">
          <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <p className="mt-2 text-2xl font-semibold text-purple-600 dark:text-purple-400">
            {report.totalCustomers}
          </p>
          <p className="text-sm text-purple-600 dark:text-purple-400">Total Customers</p>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
          <UserPlus className="w-6 h-6 text-green-600 dark:text-green-400" />
          <p className="mt-2 text-2xl font-semibold text-green-600 dark:text-green-400">
            {report.newCustomers}
          </p>
          <p className="text-sm text-green-600 dark:text-green-400">New Customers</p>
        </div>
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <UserCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <p className="mt-2 text-2xl font-semibold text-blue-600 dark:text-blue-400">
            {report.activeCustomers}
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400">Active Customers</p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
          Top Customers
        </h4>
        <div className="space-y-4">
          {report.topCustomers.map(({ customer, orders, totalSpent }) => (
            <div
              key={customer.id}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white">
                  {customer.firstName} {customer.lastName}
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {customer.email}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900 dark:text-white">
                  {format(totalSpent)}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {orders} orders
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReport;
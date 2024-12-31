import React from 'react';
import { Package2, AlertTriangle, XCircle } from 'lucide-react';
import { InventoryReport as InventoryReportType } from '../../types/report';
import { useCurrency } from '../../utils/currency';

const InventoryReport: React.FC = () => {
  const { format } = useCurrency();

  // Mock data - replace with actual API call
  const report: InventoryReportType = {
    totalItems: 1234,
    lowStock: 45,
    outOfStock: 12,
    topSelling: [
      {
        item: {
          id: 1,
          title: 'The Great Gatsby',
          image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100',
          sellingPrice: 24.99,
          stock: 45,
          status: 'In Stock',
          // ... other properties
        },
        sales: 150
      },
      // Add more items...
    ]
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Inventory Status
      </h3>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <Package2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <p className="mt-2 text-2xl font-semibold text-blue-600 dark:text-blue-400">
            {report.totalItems}
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400">Total Items</p>
        </div>
        <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
          <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
          <p className="mt-2 text-2xl font-semibold text-yellow-600 dark:text-yellow-400">
            {report.lowStock}
          </p>
          <p className="text-sm text-yellow-600 dark:text-yellow-400">Low Stock</p>
        </div>
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20">
          <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
          <p className="mt-2 text-2xl font-semibold text-red-600 dark:text-red-400">
            {report.outOfStock}
          </p>
          <p className="text-sm text-red-600 dark:text-red-400">Out of Stock</p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
          Top Selling Items
        </h4>
        <div className="space-y-4">
          {report.topSelling.map(({ item, sales }) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h5 className="font-medium text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {format(item.sellingPrice)} · {item.stock} in stock
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900 dark:text-white">{sales}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">units sold</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryReport;
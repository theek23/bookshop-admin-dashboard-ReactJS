import React, { useState } from 'react';
import { FileText, Calendar } from 'lucide-react';
import SalesReport from '../components/Reports/SalesReport';
import InventoryReport from '../components/Reports/InventoryReport';
import CustomerReport from '../components/Reports/CustomerReport';
import OrderReport from '../components/Reports/OrderReport';
import { TimeRange } from '../types/report';

const Reports = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('monthly');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Reports</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          View detailed reports and analytics
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Overview
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as TimeRange)}
            className="border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div className="space-y-8">
        <SalesReport timeRange={timeRange} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InventoryReport />
          <CustomerReport />
        </div>
        <OrderReport />
      </div>
    </div>
  );
};

export default Reports;
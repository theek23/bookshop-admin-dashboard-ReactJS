import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SalesReport as SalesReportType, TimeRange } from '../../types/report';
import { useCurrency } from '../../utils/currency';

interface SalesReportProps {
  timeRange: TimeRange;
}

const SalesReport: React.FC<SalesReportProps> = ({ timeRange }) => {
  const { format } = useCurrency();

  // Mock data - replace with actual API call
  const report: SalesReportType = {
    timeRange,
    data: [
      { period: 'Jan', revenue: 12500, orders: 150, averageOrderValue: 83.33 },
      { period: 'Feb', revenue: 15000, orders: 180, averageOrderValue: 83.33 },
      { period: 'Mar', revenue: 18000, orders: 220, averageOrderValue: 81.82 },
      // Add more data points...
    ],
    total: {
      revenue: 45500,
      orders: 550,
      averageOrderValue: 82.73
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Sales Overview
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {timeRange.charAt(0).toUpperCase() + timeRange.slice(1)} sales performance
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
              {format(report.total.revenue)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Orders</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
              {report.total.orders}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Order Value</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
              {format(report.total.averageOrderValue)}
            </p>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={report.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesReport;
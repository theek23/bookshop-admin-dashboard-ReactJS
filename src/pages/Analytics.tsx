import React from 'react';
import { BarChart3, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Analytics = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Analytics</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">View your store performance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Sales Overview</h2>
            <select className="text-sm border dark:border-gray-700 rounded-lg px-2 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[65, 45, 78, 52, 80, 58, 72].map((height, index) => (
              <div key={index} className="w-full">
                <div 
                  className="bg-blue-100 dark:bg-blue-900/50 rounded-t hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Performance Metrics</h2>
          <div className="space-y-6">
            {[
              { label: 'Conversion Rate', value: '3.8%', trend: 0.5, icon: TrendingUp },
              { label: 'Average Order Value', value: '$54.32', trend: -1.2, icon: BarChart3 },
              { label: 'Customer Retention', value: '84%', trend: 2.1, icon: TrendingUp },
            ].map((metric) => (
              <div key={metric.label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <metric.icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">{metric.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900 dark:text-white">{metric.value}</span>
                  <span className={`flex items-center text-sm ${metric.trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.trend >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    {Math.abs(metric.trend)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
import React from 'react';
import { BookOpen, DollarSign, ShoppingCart, Users } from 'lucide-react';
import StatCard from '../components/StatCard';
import QuickActions from '../components/Dashboard/QuickActions';
import RecentOrders from '../components/RecentOrders';
import TopBooks from '../components/TopBooks';
import { useCurrency } from '../utils/currency';

const Dashboard = () => {
  const { format } = useCurrency();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard Overview</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Welcome back, Admin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value={format(24567)}
          icon={DollarSign}
          trend={12.5}
          color="bg-blue-500"
        />
        <StatCard
          title="Total Orders"
          value="845"
          icon={ShoppingCart}
          trend={8.2}
          color="bg-green-500"
        />
        <StatCard
          title="Total Books"
          value="1,234"
          icon={BookOpen}
          trend={-2.4}
          color="bg-purple-500"
        />
        <StatCard
          title="Total Customers"
          value="3,456"
          icon={Users}
          trend={5.6}
          color="bg-orange-500"
        />
      </div>

      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
        <div>
          <TopBooks />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
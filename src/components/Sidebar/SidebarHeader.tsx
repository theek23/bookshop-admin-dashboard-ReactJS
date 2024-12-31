import React from 'react';
import { BookOpen } from 'lucide-react';

const SidebarHeader: React.FC = () => {
  return (
    <div className="h-16 flex items-center gap-2 px-6 border-b border-gray-200 dark:border-gray-700">
      <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-500 flex-shrink-0" />
      <span className="text-lg font-semibold truncate text-gray-900 dark:text-white">BookShop Admin</span>
    </div>
  );
};

export default SidebarHeader;
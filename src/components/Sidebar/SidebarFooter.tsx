import React from 'react';
import { LogOut } from 'lucide-react';

const SidebarFooter: React.FC = () => {
  return (
    <div className="p-3 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 px-3 py-2 rounded-lg w-full hover:bg-gray-50 dark:hover:bg-gray-800">
        <LogOut size={18} className="flex-shrink-0" />
        <span className="truncate">Logout</span>
      </button>
    </div>
  );
};

export default SidebarFooter;
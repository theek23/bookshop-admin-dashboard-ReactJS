import React from 'react';
import { Search } from 'lucide-react';

interface CategorySearchProps {
  onSearch: (query: string) => void;
}

const CategorySearch: React.FC<CategorySearchProps> = ({ onSearch }) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
      <input
        type="text"
        placeholder="Search categories..."
        onChange={(e) => onSearch(e.target.value)}
        className="pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg w-full sm:w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      />
    </div>
  );
};

export default CategorySearch;
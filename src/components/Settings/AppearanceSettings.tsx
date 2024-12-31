import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const AppearanceSettings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-6">
        <Sun className="w-5 h-5 text-blue-600 dark:text-blue-500" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Appearance</h2>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Dark Mode</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {theme === 'dark' ? 'Dark mode is enabled' : 'Dark mode is disabled'}
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-gray-500 dark:text-gray-400" />
            ) : (
              <Moon size={20} className="text-gray-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppearanceSettings;
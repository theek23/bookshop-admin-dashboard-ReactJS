import React from 'react';
import { Shield } from 'lucide-react';

const SecuritySettings = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-6">
        <Shield className="w-5 h-5 text-blue-600 dark:text-blue-500" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Security</h2>
      </div>
      <div className="space-y-4">
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500">
          Change Password
        </button>
        <button className="w-full border border-blue-600 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/50">
          Enable 2FA
        </button>
      </div>
    </div>
  );
}

export default SecuritySettings;
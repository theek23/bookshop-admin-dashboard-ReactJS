import React from 'react';
import { Bell } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';

interface NotificationSettingsProps {
  onSettingsChange?: () => void;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ onSettingsChange }) => {
  const { settings, updateSettings } = useSettings();

  const handleNotificationChange = (key: string, checked: boolean) => {
    updateSettings({
      notifications: {
        ...settings.notifications,
        [key]: checked,
      },
    });
    onSettingsChange?.();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-5 h-5 text-blue-600 dark:text-blue-500" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
      </div>
      <div className="space-y-4">
        {Object.entries(settings.notifications).map(([key, enabled]) => (
          <label key={key} className="flex items-center justify-between">
            <span className="text-sm text-gray-900 dark:text-white">{key}</span>
            <input 
              type="checkbox" 
              checked={enabled}
              onChange={(e) => handleNotificationChange(key, e.target.checked)}
              className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;
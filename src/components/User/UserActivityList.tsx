import React from 'react';
import { UserActivity } from '../../types/userActivity';
import { Clock, LogIn, LogOut, Plus, Pencil, Trash2 } from 'lucide-react';

interface UserActivityListProps {
  activities: UserActivity[];
}

const UserActivityList: React.FC<UserActivityListProps> = ({ activities }) => {
  const getActivityIcon = (type: UserActivity['type']) => {
    switch (type) {
      case 'login':
        return <LogIn className="text-green-500" size={16} />;
      case 'logout':
        return <LogOut className="text-orange-500" size={16} />;
      case 'create':
        return <Plus className="text-blue-500" size={16} />;
      case 'update':
        return <Pencil className="text-yellow-500" size={16} />;
      case 'delete':
        return <Trash2 className="text-red-500" size={16} />;
    }
  };

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-start gap-4 p-4 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50"
        >
          <div className="p-2 bg-white dark:bg-gray-700 rounded-lg">
            {getActivityIcon(activity.type)}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-900 dark:text-white">
                {activity.description}
              </p>
              <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <Clock size={14} />
                <span>{activity.timestamp}</span>
              </div>
            </div>
            {activity.metadata && (
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {Object.entries(activity.metadata).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2">
                    <span className="font-medium capitalize">{key}:</span>
                    <span>{Array.isArray(value) ? value.join(', ') : value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserActivityList;
import React, { useState } from 'react';
import Modal from './Modal';
import { User } from '../../types/user';
import { mockUserActivities } from '../../data/mockUserActivities';
import UserActivityList from '../User/UserActivityList';
import { Mail, Phone, Calendar, Shield, Activity } from 'lucide-react';

interface ViewUserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  onEdit?: () => void;
}

const ViewUserDetailsModal: React.FC<ViewUserDetailsModalProps> = ({
  isOpen,
  onClose,
  user,
  onEdit,
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'activity'>('details');
  const activities = mockUserActivities.filter(activity => activity.userId === user.id);

  const details = [
    { icon: Mail, label: 'Email', value: user.email },
    { icon: Shield, label: 'Role', value: user.role.replace('_', ' ') },
    { icon: Calendar, label: 'Join Date', value: user.createdAt },
    { icon: Calendar, label: 'Last Login', value: user.lastLogin },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="User Details">
      <div className="space-y-6">
        {/* User Header */}
        <div className="flex items-center gap-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {user.name}
            </h3>
            <div className="mt-1">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                user.status === 'active'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
              }`}>
                {user.status}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'details'
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'activity'
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Activity Log
              <Activity size={16} />
            </button>
          </div>
        </div>

        {activeTab === 'details' ? (
          <div className="grid grid-cols-2 gap-4">
            {details.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-gray-700">
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                    <p className="text-gray-900 dark:text-white mt-0.5 capitalize">
                      {value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <UserActivityList activities={activities} />
        )}
      </div>
    </Modal>
  );
};

export default ViewUserDetailsModal;
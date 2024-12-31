import React from 'react';
import { Save } from 'lucide-react';

interface SaveSettingsButtonProps {
  onSave: () => void;
  isDirty?: boolean;
}

const SaveSettingsButton: React.FC<SaveSettingsButtonProps> = ({ onSave, isDirty = true }) => {
  return (
    <button
      onClick={onSave}
      disabled={!isDirty}
      className={`fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg transition-all ${
        isDirty
          ? 'bg-blue-600 hover:bg-blue-700 text-white'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
      }`}
    >
      <Save size={20} />
      <span>Save Changes</span>
    </button>
  );
};

export default SaveSettingsButton;
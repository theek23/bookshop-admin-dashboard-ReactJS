import React, { useRef } from 'react';
import { Store, Upload } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';

interface GeneralSettingsProps {
  onSettingsChange?: () => void;
}

const GeneralSettings: React.FC<GeneralSettingsProps> = ({ onSettingsChange }) => {
  const { settings, updateSettings } = useSettings();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateSettings({ storeLogo: reader.result as string });
        onSettingsChange?.();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (field: keyof typeof settings, value: string) => {
    updateSettings({ [field]: value });
    onSettingsChange?.();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-6">
        <Store className="w-5 h-5 text-blue-600 dark:text-blue-500" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Store Information</h2>
      </div>
      
      <div className="space-y-6">
        {/* Store Logo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Store Logo
          </label>
          <div className="flex items-center gap-4">
            {settings.storeLogo ? (
              <img 
                src={settings.storeLogo} 
                alt="Store Logo" 
                className="w-16 h-16 rounded-lg object-cover border dark:border-gray-700"
              />
            ) : (
              <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <Store className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              </div>
            )}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
            >
              <Upload size={16} />
              Upload Logo
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Store Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Store Name
          </label>
          <input
            type="text"
            value={settings.storeName}
            onChange={(e) => handleChange('storeName', e.target.value)}
            className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Enter store name"
          />
        </div>

        {/* Store Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Store Description
          </label>
          <textarea
            value={settings.storeDescription}
            onChange={(e) => handleChange('storeDescription', e.target.value)}
            rows={3}
            className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Enter store description"
          />
        </div>

        {/* Inventory Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Inventory Title
          </label>
          <input
            type="text"
            value={settings.inventoryTitle}
            onChange={(e) => handleChange('inventoryTitle', e.target.value)}
            className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Inventory"
          />
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            This title will be displayed in the sidebar and inventory page
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
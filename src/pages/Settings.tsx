import React, { useState } from 'react';
import GeneralSettings from '../components/Settings/GeneralSettings';
import NotificationSettings from '../components/Settings/NotificationSettings';
import SecuritySettings from '../components/Settings/SecuritySettings';
import PaymentSettings from '../components/Settings/PaymentSettings';
import AppearanceSettings from '../components/Settings/AppearanceSettings';
import SaveSettingsButton from '../components/Settings/SaveSettingsButton';
import { useSettings } from '../contexts/SettingsContext';

const Settings = () => {
  const { settings: originalSettings } = useSettings();
  const [isDirty, setIsDirty] = useState(false);

  const handleSave = () => {
    // Here you would typically make an API call to save the settings
    console.log('Saving settings...');
    setIsDirty(false);
  };

  return (
    <div className="relative pb-20">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Manage your store settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <GeneralSettings onSettingsChange={() => setIsDirty(true)} />
          <PaymentSettings onSettingsChange={() => setIsDirty(true)} />
        </div>

        <div className="space-y-8">
          <AppearanceSettings />
          <NotificationSettings onSettingsChange={() => setIsDirty(true)} />
          <SecuritySettings />
        </div>
      </div>

      <SaveSettingsButton onSave={handleSave} isDirty={isDirty} />
    </div>
  );
};

export default Settings;
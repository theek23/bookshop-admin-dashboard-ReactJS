import React, { createContext, useContext, useState } from 'react';

interface Settings {
  storeLogo: string;
  storeName: string;
  storeDescription: string;
  inventoryTitle: string;
  currency: string;
  paymentMethods: string[];
  notifications: {
    [key: string]: boolean;
  };
}

const defaultSettings: Settings = {
  storeLogo: '',
  storeName: 'My Bookshop',
  storeDescription: 'Your favorite online bookstore',
  inventoryTitle: 'Inventory',
  currency: 'USD',
  paymentMethods: ['Credit Card', 'PayPal', 'Apple Pay'],
  notifications: {
    'New Order': true,
    'Low Stock Alert': true,
    'Customer Reviews': true,
    'Newsletter Subscribers': true,
  }
};

const SettingsContext = createContext<{
  settings: Settings;
  updateSettings: (updates: Partial<Settings>) => void;
} | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  const updateSettings = (updates: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...updates }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
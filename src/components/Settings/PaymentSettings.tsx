import React from 'react';
import { CreditCard } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';

interface PaymentSettingsProps {
  onSettingsChange?: () => void;
}

const PaymentSettings: React.FC<PaymentSettingsProps> = ({ onSettingsChange }) => {
  const { settings, updateSettings } = useSettings();

  const handleCurrencyChange = (value: string) => {
    updateSettings({ currency: value });
    onSettingsChange?.();
  };

  const handlePaymentMethodChange = (method: string, checked: boolean) => {
    const updatedMethods = checked
      ? [...settings.paymentMethods, method]
      : settings.paymentMethods.filter(m => m !== method);
    updateSettings({ paymentMethods: updatedMethods });
    onSettingsChange?.();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-6">
        <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-500" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Settings</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Currency
          </label>
          <select 
            value={settings.currency}
            onChange={(e) => handleCurrencyChange(e.target.value)}
            className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="LKR">LKR (Rs)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Payment Methods
          </label>
          <div className="space-y-2">
            {['Credit Card', 'PayPal', 'Apple Pay'].map((method) => (
              <label key={method} className="flex items-center gap-2 text-gray-900 dark:text-white">
                <input 
                  type="checkbox" 
                  checked={settings.paymentMethods.includes(method)}
                  onChange={(e) => handlePaymentMethodChange(method, e.target.checked)}
                  className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSettings;
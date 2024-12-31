import { useSettings } from '../contexts/SettingsContext';

const currencySymbols: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  LKR: 'Rs',
};

export const useCurrency = () => {
  const { settings } = useSettings();
  
  const format = (amount: number | undefined) => {
    if (amount === undefined || isNaN(amount)) {
      return `${currencySymbols[settings.currency] || '$'}0.00`;
    }
    return `${currencySymbols[settings.currency] || '$'}${amount.toFixed(2)}`;
  };

  return { format };
};
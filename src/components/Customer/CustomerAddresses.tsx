import React from 'react';
import { MapPin } from 'lucide-react';
import { Address } from '../../types/address';

interface CustomerAddressesProps {
  addresses: Address[];
}

const CustomerAddresses: React.FC<CustomerAddressesProps> = ({ addresses }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Addresses</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <div 
            key={address.id}
            className="p-4 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="font-medium text-gray-900 dark:text-white">
                  {address.type.charAt(0).toUpperCase() + address.type.slice(1)} Address
                </span>
              </div>
              {address.isDefault && (
                <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full">
                  Default
                </span>
              )}
            </div>
            <div className="mt-3 text-gray-600 dark:text-gray-300 space-y-1">
              <p>{address.street}</p>
              <p>{address.city}, {address.state} {address.zipCode}</p>
              <p>{address.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerAddresses;
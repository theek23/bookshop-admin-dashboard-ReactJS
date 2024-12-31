import React from 'react';
import { MapPin } from 'lucide-react';
import { Address } from '../../../types/address';

interface OrderAddressProps {
  address: Address;
}

const OrderAddress: React.FC<OrderAddressProps> = ({ address }) => {
  return (
    <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Shipping Address
        </h3>
      </div>
      
      <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <div className="space-y-1 text-gray-600 dark:text-gray-300">
          <p>{address.street}</p>
          <p>{address.city}, {address.state} {address.zipCode}</p>
          <p>{address.country}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderAddress;
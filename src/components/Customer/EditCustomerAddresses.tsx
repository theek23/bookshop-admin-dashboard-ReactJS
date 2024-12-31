import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Address } from '../../types/address';

interface EditCustomerAddressesProps {
  addresses: Address[];
  onChange: (addresses: Address[]) => void;
}

const EditCustomerAddresses: React.FC<EditCustomerAddressesProps> = ({
  addresses,
  onChange,
}) => {
  const handleAddAddress = () => {
    const newAddress: Address = {
      id: Math.max(0, ...addresses.map((a) => a.id)) + 1,
      customerId: addresses[0]?.customerId || 0,
      type: 'shipping',
      isDefault: addresses.length === 0,
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    };
    onChange([...addresses, newAddress]);
  };

  const handleRemoveAddress = (id: number) => {
    onChange(addresses.filter((a) => a.id !== id));
  };

  const handleUpdateAddress = (id: number, updates: Partial<Address>) => {
    onChange(
      addresses.map((address) =>
        address.id === id ? { ...address, ...updates } : address
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Customer Addresses
        </h3>
        <button
          type="button"
          onClick={handleAddAddress}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus size={16} />
          Add Address
        </button>
      </div>

      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="p-4 border dark:border-gray-700 rounded-lg space-y-4"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <select
                  value={address.type}
                  onChange={(e) =>
                    handleUpdateAddress(address.id, {
                      type: e.target.value as Address['type'],
                    })
                  }
                  className="border dark:border-gray-700 rounded-lg px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                >
                  <option value="shipping">Shipping</option>
                  <option value="billing">Billing</option>
                </select>
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input
                    type="checkbox"
                    checked={address.isDefault}
                    onChange={(e) =>
                      handleUpdateAddress(address.id, { isDefault: e.target.checked })
                    }
                    className="rounded border-gray-300 dark:border-gray-600 text-blue-600"
                  />
                  Default Address
                </label>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveAddress(address.id)}
                className="p-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  value={address.street}
                  onChange={(e) =>
                    handleUpdateAddress(address.id, { street: e.target.value })
                  }
                  className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) =>
                    handleUpdateAddress(address.id, { city: e.target.value })
                  }
                  className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  State
                </label>
                <input
                  type="text"
                  value={address.state}
                  onChange={(e) =>
                    handleUpdateAddress(address.id, { state: e.target.value })
                  }
                  className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  value={address.zipCode}
                  onChange={(e) =>
                    handleUpdateAddress(address.id, { zipCode: e.target.value })
                  }
                  className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  value={address.country}
                  onChange={(e) =>
                    handleUpdateAddress(address.id, { country: e.target.value })
                  }
                  className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditCustomerAddresses;
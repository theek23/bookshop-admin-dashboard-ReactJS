import React, { useState } from 'react';
import { Customer } from '../../types/customer';
import Modal from '../Modal/Modal';
import EditCustomerForm from './EditCustomerForm';
import EditCustomerAddresses from './EditCustomerAddresses';

interface EditCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
  customer: Customer;
  onSave: (customer: Customer) => void;
}

const EditCustomerModal: React.FC<EditCustomerModalProps> = ({
  isOpen,
  onClose,
  customer,
  onSave,
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'addresses'>('details');
  const [formData, setFormData] = useState<Customer>(customer);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Customer">
      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            className={`px-4 py-2 -mb-px ${
              activeTab === 'details'
                ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => setActiveTab('details')}
          >
            Customer Details
          </button>
          <button
            className={`px-4 py-2 -mb-px ${
              activeTab === 'addresses'
                ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => setActiveTab('addresses')}
          >
            Addresses
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeTab === 'details' ? (
            <EditCustomerForm
              customer={formData}
              onChange={(updates) => setFormData((prev) => ({ ...prev, ...updates }))}
            />
          ) : (
            <EditCustomerAddresses
              addresses={formData.addresses}
              onChange={(addresses) => setFormData((prev) => ({ ...prev, addresses }))}
            />
          )}

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditCustomerModal;
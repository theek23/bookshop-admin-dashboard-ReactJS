import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AddInventoryForm from '../components/Inventory/AddInventoryForm';
import { InventoryItem } from '../types/inventory';

const AddInventoryItem: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (item: Omit<InventoryItem, 'id' | 'status'>) => {
    console.log('New inventory item:', item);
    // Here you would typically make an API call to save the item
    navigate('/inventory');
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <Link
            to="/inventory"
            className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Add New Item
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Add a new item to your inventory
        </p>
      </div>

      <div className="max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <AddInventoryForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddInventoryItem;
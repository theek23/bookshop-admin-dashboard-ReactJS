import React, { useState } from 'react';
import { Plus, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSettings } from '../contexts/SettingsContext';
import ModelList from '../components/Inventory/Models/ModelList';
import AddModelModal from '../components/Inventory/Models/AddModelModal';
import EditModelModal from '../components/Inventory/Models/EditModelModal';
import DeleteConfirmationModal from '../components/Modal/DeleteConfirmationModal';
import { CustomModel } from '../types/models';

const InventoryModels = () => {
  const { settings, updateSettings } = useSettings();
  const [selectedModel, setSelectedModel] = useState<CustomModel | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleAdd = (model: CustomModel) => {
    updateSettings({
      inventoryModels: [...settings.inventoryModels, model]
    });
    setIsAddModalOpen(false);
  };

  const handleEdit = (model: CustomModel) => {
    updateSettings({
      inventoryModels: settings.inventoryModels.map(m => 
        m.id === model.id ? model : m
      )
    });
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    if (selectedModel) {
      updateSettings({
        inventoryModels: settings.inventoryModels.filter(m => m.id !== selectedModel.id)
      });
      setIsDeleteModalOpen(false);
    }
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
            Inventory Models
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Manage custom models for your inventory items
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search models..."
            className="pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg w-full sm:w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={20} />
          Add Model
        </button>
      </div>

      <ModelList
        models={settings.inventoryModels}
        onEdit={(model) => {
          setSelectedModel(model);
          setIsEditModalOpen(true);
        }}
        onDelete={(model) => {
          setSelectedModel(model);
          setIsDeleteModalOpen(true);
        }}
      />

      <AddModelModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAdd}
      />

      {selectedModel && (
        <>
          <EditModelModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            model={selectedModel}
            onSave={handleEdit}
          />
          <DeleteConfirmationModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onConfirm={handleDelete}
            itemName={selectedModel.name}
          />
        </>
      )}
    </div>
  );
};

export default InventoryModels;
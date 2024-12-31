import React, { useState } from 'react';
import { Package2, Plus, Trash2 } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';

interface CustomModel {
  id: string;
  name: string;
  fields: {
    id: string;
    name: string;
    type: 'text' | 'number' | 'date' | 'select';
    required: boolean;
    options?: string[]; // For select type fields
  }[];
}

const InventorySettings = () => {
  const { settings, updateSettings } = useSettings();
  const [models, setModels] = useState<CustomModel[]>(settings.inventoryModels || []);
  const [isAddingModel, setIsAddingModel] = useState(false);
  const [newModel, setNewModel] = useState<CustomModel>({
    id: '',
    name: '',
    fields: []
  });

  const handleAddModel = () => {
    setIsAddingModel(true);
    setNewModel({
      id: crypto.randomUUID(),
      name: '',
      fields: []
    });
  };

  const handleSaveModel = () => {
    if (newModel.name.trim()) {
      setModels(prev => [...prev, newModel]);
      updateSettings({ inventoryModels: [...models, newModel] });
      setIsAddingModel(false);
      setNewModel({ id: '', name: '', fields: [] });
    }
  };

  const handleAddField = () => {
    setNewModel(prev => ({
      ...prev,
      fields: [
        ...prev.fields,
        {
          id: crypto.randomUUID(),
          name: '',
          type: 'text',
          required: false
        }
      ]
    }));
  };

  const handleRemoveField = (fieldId: string) => {
    setNewModel(prev => ({
      ...prev,
      fields: prev.fields.filter(f => f.id !== fieldId)
    }));
  };

  const handleFieldChange = (fieldId: string, updates: Partial<CustomModel['fields'][0]>) => {
    setNewModel(prev => ({
      ...prev,
      fields: prev.fields.map(field =>
        field.id === fieldId ? { ...field, ...updates } : field
      )
    }));
  };

  const handleDeleteModel = (modelId: string) => {
    setModels(prev => prev.filter(m => m.id !== modelId));
    updateSettings({
      inventoryModels: models.filter(m => m.id !== modelId)
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-6">
        <Package2 className="w-5 h-5 text-blue-600 dark:text-blue-500" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Inventory Models</h2>
      </div>

      {/* Existing Models List */}
      <div className="space-y-4 mb-6">
        {models.map(model => (
          <div
            key={model.id}
            className="p-4 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{model.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {model.fields.length} fields
                </p>
              </div>
              <button
                onClick={() => handleDeleteModel(model.id)}
                className="p-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Model Form */}
      {isAddingModel ? (
        <div className="border dark:border-gray-700 rounded-lg p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Model Name
            </label>
            <input
              type="text"
              value={newModel.name}
              onChange={e => setNewModel(prev => ({ ...prev, name: e.target.value }))}
              className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="e.g., Author, Publisher"
            />
          </div>

          {/* Fields */}
          <div className="space-y-4">
            {newModel.fields.map(field => (
              <div key={field.id} className="flex gap-4 items-start">
                <div className="flex-1">
                  <input
                    type="text"
                    value={field.name}
                    onChange={e => handleFieldChange(field.id, { name: e.target.value })}
                    className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Field name"
                  />
                </div>
                <div className="w-32">
                  <select
                    value={field.type}
                    onChange={e => handleFieldChange(field.id, { type: e.target.value as any })}
                    className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="date">Date</option>
                    <option value="select">Select</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <input
                      type="checkbox"
                      checked={field.required}
                      onChange={e => handleFieldChange(field.id, { required: e.target.checked })}
                      className="rounded border-gray-300 dark:border-gray-600 text-blue-600"
                    />
                    Required
                  </label>
                  <button
                    onClick={() => handleRemoveField(field.id)}
                    className="p-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleAddField}
              className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
            >
              <Plus size={16} />
              Add Field
            </button>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={() => setIsAddingModel(false)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveModel}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Model
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleAddModel}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus size={16} />
          Add New Model
        </button>
      )}
    </div>
  );
};

export default InventorySettings;
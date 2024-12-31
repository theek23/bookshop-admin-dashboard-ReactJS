import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import Modal from '../../Modal/Modal';
import { CustomModel, CustomModelField } from '../../../types/models';

interface EditModelModalProps {
  isOpen: boolean;
  onClose: () => void;
  model: CustomModel;
  onSave: (model: CustomModel) => void;
}

const EditModelModal: React.FC<EditModelModalProps> = ({
  isOpen,
  onClose,
  model: initialModel,
  onSave,
}) => {
  const [model, setModel] = useState<CustomModel>(initialModel);

  const handleAddField = () => {
    setModel(prev => ({
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
    setModel(prev => ({
      ...prev,
      fields: prev.fields.filter(f => f.id !== fieldId)
    }));
  };

  const handleFieldChange = (fieldId: string, updates: Partial<CustomModelField>) => {
    setModel(prev => ({
      ...prev,
      fields: prev.fields.map(field =>
        field.id === fieldId ? { ...field, ...updates } : field
      )
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (model.name.trim() && model.fields.length > 0) {
      onSave(model);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Model">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Model Name
          </label>
          <input
            type="text"
            value={model.name}
            onChange={e => setModel(prev => ({ ...prev, name: e.target.value }))}
            className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="e.g., Author, Publisher"
            required
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Fields</h3>
            <button
              type="button"
              onClick={handleAddField}
              className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
            >
              <Plus size={16} />
              Add Field
            </button>
          </div>

          {model.fields.map(field => (
            <div key={field.id} className="flex gap-4 items-start">
              <div className="flex-1">
                <input
                  type="text"
                  value={field.name}
                  onChange={e => handleFieldChange(field.id, { name: e.target.value })}
                  className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Field name"
                  required
                />
              </div>
              <div className="w-32">
                <select
                  value={field.type}
                  onChange={e => handleFieldChange(field.id, { type: e.target.value as CustomModelField['type'] })}
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
                  type="button"
                  onClick={() => handleRemoveField(field.id)}
                  className="p-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4">
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
    </Modal>
  );
};

export default EditModelModal;
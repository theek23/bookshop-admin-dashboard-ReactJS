import React, { useState } from 'react';
import { CustomModel } from '../../../types/models';
import TableActions from '../../Table/TableActions';
import ViewModelModal from './ViewModelModal';

interface ModelListProps {
  models: CustomModel[];
  onEdit: (model: CustomModel) => void;
  onDelete: (model: CustomModel) => void;
}

const ModelList: React.FC<ModelListProps> = ({ models, onEdit, onDelete }) => {
  const [selectedModel, setSelectedModel] = useState<CustomModel | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  if (models.length === 0) {
    return (
      <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">No custom models found</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Model Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Fields
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {models.map((model) => (
                <tr key={model.id} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {model.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {model.fields.map((field) => (
                        <span
                          key={field.id}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300"
                        >
                          {field.name}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <TableActions
                      onView={() => {
                        setSelectedModel(model);
                        setIsViewModalOpen(true);
                      }}
                      onEdit={() => onEdit(model)}
                      onDelete={() => onDelete(model)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedModel && (
        <ViewModelModal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          model={selectedModel}
          onEdit={() => {
            setIsViewModalOpen(false);
            onEdit(selectedModel);
          }}
        />
      )}
    </>
  );
};

export default ModelList;
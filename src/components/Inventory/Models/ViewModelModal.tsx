import React from 'react';
import Modal from '../../Modal/Modal';
import { CustomModel } from '../../../types/models';
import { Eye, Pencil } from 'lucide-react';

interface ViewModelModalProps {
  isOpen: boolean;
  onClose: () => void;
  model: CustomModel;
  onEdit: () => void;
}

const ViewModelModal: React.FC<ViewModelModalProps> = ({
  isOpen,
  onClose,
  model,
  onEdit,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`View ${model.name}`}>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {model.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {model.fields.length} fields
            </p>
          </div>
          <button
            onClick={onEdit}
            className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
          >
            <Pencil size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Fields</h4>
          <div className="grid gap-4">
            {model.fields.map((field) => (
              <div
                key={field.id}
                className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border dark:border-gray-700"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {field.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Type: {field.type}
                    </p>
                  </div>
                  {field.required && (
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full">
                      Required
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewModelModal;
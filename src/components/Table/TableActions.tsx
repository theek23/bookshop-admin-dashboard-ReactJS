import React from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react';

interface TableActionsProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const TableActions: React.FC<TableActionsProps> = ({ onView, onEdit, onDelete }) => {
  return (
    <div className="flex items-center gap-2">
      {onView && (
        <button
          onClick={onView}
          className="p-1 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
          title="View Details"
        >
          <Eye size={18} />
        </button>
      )}
      {onEdit && (
        <button
          onClick={onEdit}
          className="p-1 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
          title="Edit"
        >
          <Pencil size={18} />
        </button>
      )}
      {onDelete && (
        <button
          onClick={onDelete}
          className="p-1 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/50 rounded-lg transition-colors"
          title="Delete"
        >
          <Trash2 size={18} />
        </button>
      )}
    </div>
  );
};

export default TableActions;